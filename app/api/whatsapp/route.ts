import { generateText, tool } from "ai"
import { z } from "zod"
import { createClient } from "@supabase/supabase-js"

export const maxDuration = 60

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "liilsol-matar-verify-2024"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

const SYSTEM_PROMPT = `اسمك "مطر" - مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش عبر واتساب.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي - مو بوت ومو خدمة عملاء رسمية
- رسائلك قصيرة جداً - سطر أو سطرين بالكثير. الواتساب مو مكان مقالات
- ما تكرر نفسك أبداً - لو شرحت شي ما تعيده
- تعابيرك: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"، "كم تبي"، "تمام"، "وش رايك"، "خلاص"، "اوكي"
- ما تقول "بالتأكيد" أو "سعدت بخدمتك" أو "هل هناك" - كلامك عادي وبسيط
- لو العميل متردد أو خايف طمّنه بطريقة طبيعية مو تسويقية
- لو العميل سأل عن شي ما له علاقة بالخدمة، رد بلطف ورجّعه للموضوع
- استخدم "ههه" أو "هه" أحياناً لو الموقف مناسب

## الخدمة باختصار:
العميل يحدد المبلغ > نحدد له جهاز يشتريه بالتقسيط (تابي/تمارا/مدفوع) > نستلمه ونبيعه > نحول له الكاش خلال ساعتين
- الدفعة الأولى ندفعها عنه - ما يدفع شي من جيبه - بدون فوائد
- العميل ما يختار الجهاز أبداً - نحن نحدده حسب المبلغ

## الضمان:
خدمة مرخصة بسجل تجاري وعمليات تتعدى 100 ألف بكل شفافية. موقعنا: https://liilsol.com

## التدفق:
1. رحب واسأل كم يبي كاش
2. لما يذكر مبلغ > استخدم calculateCash > اعطه التفاصيل باختصار شديد
3. اسأل: تابي ولا تمارا ولا مدفوع؟
4. وجهه للمتجر (اكسترا/نون/المنيع) يشتري جهاز بقيمة مبلغ الشراء
5. تمارا: بطاقة يدوي بدون رصيد > ادفع > صور صفحة البنك (اللي تطلب الكود) > اغلق بدون كود > ارسل الصورة
   تابي/مدفوع: ارسل صورة صفحة تقسيم الدفعات
6. لما يقول خلص أو يرسل الصورة > استخدم createOrder لإنشاء الطلب > أكد له نتواصل خلال ساعتين

## مهم:
- لما العميل يقول اسمه أو يعطيك معلومة جديدة، استخدم updateConversation لحفظها
- لو سأل عن حالة طلب سابق، استخدم checkOrderStatus
- تحويل: الف=1000، خمسمية=500، الفين=2000، ثلاث آلاف=3000، اربع=4000، خمسة=5000`

function calculateAmount(netRequested: number) {
  let purchaseAmount = netRequested * 2
  for (let i = 0; i < 30; i++) {
    const sellingLossRate = getSellingLossRate(purchaseAmount)
    const saleAmount = purchaseAmount * (1 - sellingLossRate)
    const adminFee = purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0)
    const downPayment = purchaseAmount * 0.25
    const net = saleAmount - adminFee - downPayment
    const diff = netRequested - net
    if (Math.abs(diff) < 10) break
    purchaseAmount += diff * 1.5
    purchaseAmount = Math.max(1000, Math.round(purchaseAmount / 100) * 100)
  }
  purchaseAmount = Math.round(purchaseAmount / 100) * 100
  return getBreakdown(purchaseAmount)
}

function getSellingLossRate(amount: number) {
  if (amount <= 5500) return 0.15
  if (amount >= 9500) return 0.10
  const steps = Math.floor((amount - 5500) / 1000)
  return 0.14 - steps * 0.01
}

function getBreakdown(purchaseAmount: number) {
  const sellingLossRate = getSellingLossRate(purchaseAmount)
  const saleAmount = Math.round(purchaseAmount * (1 - sellingLossRate))
  const adminFee = Math.round(purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0))
  const downPayment = Math.round(purchaseAmount * 0.25)
  const netAmount = saleAmount - adminFee - downPayment
  return { purchaseAmount, saleAmount, adminFee, downPayment, netAmount }
}

async function getOrCreateConversation(phone: string) {
  const supabase = getSupabase()
  const { data: existing } = await supabase
    .from("conversations")
    .select("*")
    .eq("phone", phone)
    .eq("source", "whatsapp")
    .in("status", ["active", "pending"])
    .order("updated_at", { ascending: false })
    .limit(1)
    .single()

  if (existing) return existing

  const { data: newConv } = await supabase
    .from("conversations")
    .insert({ phone, source: "whatsapp", status: "active", messages: [], metadata: {} })
    .select()
    .single()

  if (newConv) {
    await supabase.from("notifications").insert({
      type: "new_customer",
      title: "عميل جديد",
      body: `عميل جديد تواصل عبر واتساب: ${phone}`,
      reference_type: "conversation",
      reference_id: newConv.id,
    })
  }
  return newConv
}

async function saveMessage(convId: string, role: "user" | "assistant", content: string, existing: unknown[]) {
  const supabase = getSupabase()
  const msgs = [...existing, { role, content, timestamp: new Date().toISOString() }].slice(-50)
  await supabase
    .from("conversations")
    .update({ messages: msgs, last_message: content, updated_at: new Date().toISOString() })
    .eq("id", convId)
  return msgs
}

async function sendText(phoneId: string, to: string, text: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  if (!phoneId || !token) return null
  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", to, type: "text", text: { body: text } }),
  })
  return res.json()
}

async function sendButtons(phoneId: string, to: string, body: string, buttons: { id: string; title: string }[]) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  if (!phoneId || !token) return null
  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp", to, type: "interactive",
      interactive: {
        type: "button", body: { text: body },
        action: { buttons: buttons.map(b => ({ type: "reply", reply: { id: b.id, title: b.title } })) },
      },
    }),
  })
  return res.json()
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")
  if (mode === "subscribe" && token === VERIFY_TOKEN) return new Response(challenge, { status: 200 })
  return new Response("Forbidden", { status: 403 })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const value = changes?.value
    const message = value?.messages?.[0]
    if (!message) return new Response("OK", { status: 200 })

    const from = message.from
    const phoneId = value?.metadata?.phone_number_id

    let msgBody = ""
    if (message.type === "interactive" && message.interactive?.button_reply) {
      msgBody = message.interactive.button_reply.title
    } else if (message.type === "text") {
      msgBody = message.text?.body || ""
    } else if (message.type === "image") {
      msgBody = "[العميل أرسل صورة]"
    }
    if (!msgBody) return new Response("OK", { status: 200 })

    const conversation = await getOrCreateConversation(from)
    if (!conversation) return new Response("OK", { status: 200 })

    const existing = (conversation.messages as unknown[]) || []
    const updated = await saveMessage(conversation.id, "user", msgBody, existing)

    const aiHistory = (updated as { role: string; content: string }[])
      .slice(-20)
      .map(m => ({ role: m.role as "user" | "assistant", content: m.content }))

    const supabase = getSupabase()

    const { text } = await generateText({
      model: "anthropic/claude-sonnet-4",
      system: SYSTEM_PROMPT,
      messages: aiHistory,
      tools: {
        calculateCash: tool({
          description: "حساب تفاصيل السيولة",
          inputSchema: z.object({
            amount: z.number().describe("المبلغ بالريال"),
            type: z.enum(["net", "purchase"]).describe("net = صافي, purchase = مبلغ شراء"),
          }),
          execute: async ({ amount, type }) => type === "net" ? calculateAmount(amount) : getBreakdown(amount),
        }),
        createOrder: tool({
          description: "إنشاء طلب جديد لما العميل يوافق ويكمل",
          inputSchema: z.object({
            customerName: z.string().describe("اسم العميل"),
            netRequested: z.number().describe("المبلغ المطلوب كاش"),
            appType: z.string().describe("تابي/تمارا/مدفوع"),
            storeName: z.string().nullable().describe("اسم المتجر"),
          }),
          execute: async ({ customerName, netRequested, appType, storeName }) => {
            const calc = calculateAmount(netRequested)
            const { data: order } = await supabase.from("orders").insert({
              customer_name: customerName, customer_phone: from,
              net_requested: netRequested, purchase_amount: calc.purchaseAmount,
              sale_amount: calc.saleAmount, admin_fee: calc.adminFee,
              first_payment: calc.downPayment, final_amount: calc.netAmount,
              app_type: appType, store_name: storeName || null, status: "pending",
            }).select().single()

            if (order) {
              await supabase.from("conversations").update({ order_id: order.id, status: "pending" }).eq("id", conversation.id)
              await supabase.from("notifications").insert({
                type: "new_order", title: "طلب جديد",
                body: `${customerName} - ${netRequested} ريال كاش عبر ${appType}`,
                reference_type: "order", reference_id: order.id,
              })
            }
            return { success: true, orderId: order?.id }
          },
        }),
        updateConversation: tool({
          description: "حفظ اسم العميل أو معلومات جديدة",
          inputSchema: z.object({ customerName: z.string().nullable().describe("اسم العميل") }),
          execute: async ({ customerName }) => {
            if (customerName) await supabase.from("conversations").update({ customer_name: customerName }).eq("id", conversation.id)
            return { updated: true }
          },
        }),
        checkOrderStatus: tool({
          description: "تحقق من حالة طلب سابق",
          inputSchema: z.object({ phone: z.string().describe("رقم العميل") }),
          execute: async ({ phone }) => {
            const { data: orders } = await supabase.from("orders")
              .select("id, status, net_requested, app_type, created_at")
              .eq("customer_phone", phone)
              .order("created_at", { ascending: false }).limit(3)
            if (!orders?.length) return { found: false }
            const map: Record<string, string> = { pending: "قيد المراجعة", approved: "تمت الموافقة", processing: "جاري المعالجة", completed: "مكتمل", cancelled: "ملغي" }
            return { found: true, orders: orders.map(o => ({ amount: o.net_requested, status: map[o.status] || o.status, app: o.app_type })) }
          },
        }),
      },
      maxSteps: 5,
    })

    await saveMessage(conversation.id, "assistant", text, updated)

    const lower = text.toLowerCase()
    const isAskingPayment = lower.includes("تابي") && lower.includes("تمارا") && (lower.includes("؟") || lower.includes("ولا"))

    if (isAskingPayment && phoneId) {
      await sendButtons(phoneId, from, text, [
        { id: "tabby", title: "تابي" },
        { id: "tamara", title: "تمارا" },
        { id: "madfoo3", title: "مدفوع" },
      ])
    } else if (phoneId) {
      await sendText(phoneId, from, text)
    }

    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("[v0] WhatsApp error:", error)
    return new Response("OK", { status: 200 })
  }
}
