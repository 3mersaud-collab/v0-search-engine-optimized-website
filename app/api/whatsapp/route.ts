import { generateText, tool } from "ai"
import { z } from "zod"
import { createClient } from "@supabase/supabase-js"

export const maxDuration = 60

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "liilsol-matar-verify-2024"
const WHATSAPP_API = "https://graph.facebook.com/v22.0"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// ═══════════════════════════════════════════════════════════
// SYSTEM PROMPT - شخصية مطر الكاملة
// ═══════════════════════════════════════════════════════════
const SYSTEM_PROMPT = `اسمك "مطر" - سحابة غيث ماحسبت حسابها. مساعد خدمة مطر لتحويل مشتريات التقسيط الى كاش عبر واتساب.
لما تعرف عن نفسك قول: "معك مطر سحابة غيث ماحسبت حسابها"
المطر نعمة وغيث من الله، وأنت كذلك غيث للعميل تساعده يحصل على السيولة اللي يحتاجها.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي مو بوت
- رسائلك قصيرة جداً - سطر أو سطرين بالكثير. الواتساب مو مكان مقالات
- ما تكرر نفسك أبداً - لو شرحت شي ما تعيده
- تعابيرك: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"، "كم تبي"، "تمام"، "وش رايك"، "خلاص"، "اوكي"، "ان شاء الله"، "على طول"
- ما تقول "بالتأكيد" أو "سعدت بخدمتك" أو "هل هناك" - كلامك عادي وبسيط
- لو العميل متردد أو خايف طمّنه بطريقة طبيعية مو تسويقية
- لو العميل سأل عن شي ما له علاقة بالخدمة، رد بلطف ورجّعه للموضوع
- استخدم "ههه" أو "هه" أحياناً لو الموقف مناسب

## شرح الخدمة:
1. العميل يحدد المبلغ اللي يحتاجه كاش (الصافي)
2. نحن نحدد له قيمة الجهاز المطلوب شراءه بالتقسيط
3. العميل يروح المتجر (اكسترا/نون/المنيع) ويشتري الجهاز عن طريق تابي أو تمارا أو مدفوع
4. نحن نستلم الجهاز ونبيعه
5. من قيمة البيع نخصم الرسوم الإدارية والدفعة الأولى
6. الباقي (الصافي) نحوله لحساب العميل خلال ساعتين
- الدفعة الأولى ندفعها عن العميل - ما يدفع شي من جيبه - بدون فوائد

## قاعدة ذهبية:
العميل ما يختار الجهاز - نحن نحدد له الجهاز المناسب بالقيمة المطلوبة.

## الضمان:
خدمة مرخصة بسجل تجاري وعمليات تتعدى 100 ألف بكل شفافية. موقعنا: https://liilsol.com

## تدفق المحادثة:

### الخطوة 1 - الترحيب:
رحب واسأل كم يبي كاش

### الخطوة 2 - الحساب:
لما يذكر مبلغ > استخدم calculateCash فوراً > اعطه التفاصيل باختصار:
- قيمة الجهاز، مبلغ البيع، الرسوم، الدفعة الأولى، الصافي
- ملاحظة: الحسبة على 4 أقساط

### الخطوة 3 - اختيار التطبيق:
"تبي تابي، تمارا، ولا مدفوع؟"

### الخطوة 4 - التوجيه للمتجر:
وجهه للمتجر يشتري جهاز بالقيمة المطلوبة

### الخطوة 5 - طلب الصورة:
تابي/مدفوع: صورة صفحة تقسيم الدفعات
تمارا: صورة الشاشة بعد الضغط على ادفع - بدون ادخال الكود

### الخطوة 6 - التأكيد:
لما يرسل صورة أو يقول تم > استخدم createOrder > أكد له

## استقبال الصور:
- لما العميل يرسل صورة، اعتبرها سكرين شوت للدفعات
- أكد استلامها وكمّل الخطوة التالية (اسأل اسمه لو ما عندك)

## تحويل الأرقام:
الف=1000، خمسمية=500، الفين=2000، ثلاث آلاف=3000، اربع=4000، خمسة=5000، سته=6000، سبعه=7000، ثمانية=8000، تسعة=9000، عشرة=10000`

// ═══════════════════════════════════════════════════════════
// الحسابات المالية
// ═══════════════════════════════════════════════════════════
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
  const remainingInstallment = purchaseAmount - downPayment
  return { purchaseAmount, saleAmount, adminFee, downPayment, netAmount, remainingInstallment }
}

function calculateAmount(netRequested: number) {
  let purchaseAmount = netRequested * 2
  for (let i = 0; i < 30; i++) {
    const b = getBreakdown(purchaseAmount)
    const diff = netRequested - b.netAmount
    if (Math.abs(diff) < 10) break
    purchaseAmount += diff * 1.5
    purchaseAmount = Math.max(1000, Math.round(purchaseAmount / 100) * 100)
  }
  return getBreakdown(Math.round(purchaseAmount / 100) * 100)
}

// ═══════════════════════════════════════════════════════════
// WhatsApp API Functions
// ═══════════════════════════════════════════════════════════
function getToken() { return process.env.WHATSAPP_ACCESS_TOKEN || "" }
function getPhoneId() { return process.env.WHATSAPP_PHONE_NUMBER_ID || "960119450521773" }

async function sendText(to: string, text: string) {
  const res = await fetch(`${WHATSAPP_API}/${getPhoneId()}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", to, type: "text", text: { body: text } }),
  })
  return res.json()
}

async function sendButtons(to: string, body: string, buttons: { id: string; title: string }[]) {
  const res = await fetch(`${WHATSAPP_API}/${getPhoneId()}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" },
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

async function downloadMedia(mediaId: string): Promise<string | null> {
  try {
    // Step 1: Get media URL
    const urlRes = await fetch(`${WHATSAPP_API}/${mediaId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    const urlData = await urlRes.json()
    if (!urlData.url) return null

    // Step 2: Download media
    const mediaRes = await fetch(urlData.url, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    const buffer = await mediaRes.arrayBuffer()
    const base64 = Buffer.from(buffer).toString("base64")
    const mimeType = urlData.mime_type || "image/jpeg"

    // Step 3: Upload to Supabase Storage
    const supabase = getSupabase()
    const fileName = `whatsapp/${Date.now()}-${mediaId}.jpg`
    const { data } = await supabase.storage
      .from("uploads")
      .upload(fileName, Buffer.from(buffer), { contentType: mimeType })

    if (data) {
      const { data: urlResult } = supabase.storage.from("uploads").getPublicUrl(fileName)
      return urlResult.publicUrl
    }
    return `data:${mimeType};base64,${base64.slice(0, 100)}...`
  } catch (e) {
    console.error("[v0] Media download error:", e)
    return null
  }
}

async function markAsRead(messageId: string) {
  try {
    await fetch(`${WHATSAPP_API}/${getPhoneId()}/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" },
      body: JSON.stringify({ messaging_product: "whatsapp", status: "read", message_id: messageId }),
    })
  } catch { /* silent */ }
}

// ═══════════════════════════════════════════════════════════
// Database Functions
// ═══════════════════════════════════════════════════════════
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

  if (existing) {
    // Check if there's a website conversation with the same phone number
    // and merge the context so the bot knows the history
    const { data: websiteConv } = await supabase
      .from("conversations")
      .select("messages, customer_name")
      .eq("phone", phone)
      .eq("source", "website")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    if (websiteConv && websiteConv.messages && !existing.metadata?.website_merged) {
      // Add website context to metadata so AI can reference it
      const websiteMsgs = Array.isArray(websiteConv.messages) ? websiteConv.messages.slice(-10) : []
      const websiteContext = websiteMsgs
        .map((m: { role: string; content: string }) => `${m.role === "user" ? "العميل" : "مطر"}: ${m.content}`)
        .join("\n")

      await supabase
        .from("conversations")
        .update({
          metadata: {
            ...((existing.metadata as Record<string, unknown>) || {}),
            website_merged: true,
            website_context: websiteContext,
          },
          customer_name: existing.customer_name || websiteConv.customer_name,
        })
        .eq("id", existing.id)

      existing.metadata = {
        ...((existing.metadata as Record<string, unknown>) || {}),
        website_merged: true,
        website_context: websiteContext,
      }
    }
    return existing
  }

  // Before creating new, check if there's website context for this phone
  let initialMessages: unknown[] = []
  let customerName = ""
  const { data: websiteConv } = await supabase
    .from("conversations")
    .select("messages, customer_name")
    .eq("phone", phone)
    .eq("source", "website")
    .order("updated_at", { ascending: false })
    .limit(1)
    .single()

  if (websiteConv) {
    customerName = websiteConv.customer_name || ""
    // Transfer last few messages as context
    const websiteMsgs = Array.isArray(websiteConv.messages) ? websiteConv.messages.slice(-5) : []
    initialMessages = websiteMsgs.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
      timestamp: new Date().toISOString(),
      from_website: true,
    }))
  }

  const { data: newConv } = await supabase
    .from("conversations")
    .insert({
      phone,
      source: "whatsapp",
      status: "active",
      messages: initialMessages,
      metadata: websiteConv ? { website_merged: true } : {},
      mode: "bot",
      customer_name: customerName || null,
    })
    .select()
    .single()

  if (newConv) {
    await supabase.from("notifications").insert({
      type: "new_customer",
      title: "عميل جديد",
      body: `عميل جديد تواصل عبر واتساب: ${phone}${customerName ? ` (${customerName})` : ""}`,
      reference_type: "conversation",
      reference_id: newConv.id,
    })
  }
  return newConv
}

async function saveMessage(
  convId: string,
  role: "user" | "assistant",
  content: string,
  existing: unknown[],
  extra?: { from_admin?: boolean; image_url?: string }
) {
  const supabase = getSupabase()
  const msg: Record<string, unknown> = { role, content, timestamp: new Date().toISOString() }
  if (extra?.from_admin) msg.from_admin = true
  if (extra?.image_url) msg.image_url = extra.image_url
  const msgs = [...existing, msg].slice(-50)
  await supabase
    .from("conversations")
    .update({ messages: msgs, last_message: content, updated_at: new Date().toISOString() })
    .eq("id", convId)
  return msgs
}

const ADMIN_PHONE = "966590360039"

async function notifyAdmin(type: string, title: string, body: string, refType: string, refId: string) {
  const supabase = getSupabase()
  // Save to notifications table
  await supabase.from("notifications").insert({
    type, title, body: body.slice(0, 200),
    reference_type: refType, reference_id: refId,
  })

  // Send WhatsApp alert to admin for important events
  if (type === "new_customer" || type === "new_order" || type === "manual_message" || type === "image_received") {
    const alertMessages: Record<string, string> = {
      new_customer: `[عميل جديد]\n${body}\n\nliilsol.com/admin/conversations`,
      new_order: `[طلب جديد]\n${body}\n\nliilsol.com/admin/orders`,
      manual_message: `[رسالة يدوية]\n${body}\n\nliilsol.com/admin/conversations`,
      image_received: `[صورة واردة]\n${body}\n\nliilsol.com/admin/conversations`,
    }
    try {
      await sendText(ADMIN_PHONE, alertMessages[type] || `${title}\n${body}`)
    } catch { /* silent - don't break flow */ }
  }
}

function generateOrderNumber() {
  const d = new Date()
  const y = d.getFullYear().toString().slice(-2)
  const m = (d.getMonth() + 1).toString().padStart(2, "0")
  const day = d.getDate().toString().padStart(2, "0")
  return `LS-${y}${m}${day}-${Math.floor(Math.random() * 9000 + 1000)}`
}

// ═══════════════════════════════════════════════════════════
// Webhook Verification (GET)
// ═══════════════════════════════════════════════════════════
export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")
  if (mode === "subscribe" && token === VERIFY_TOKEN) return new Response(challenge, { status: 200 })
  return new Response("Forbidden", { status: 403 })
}

// ════════════════��══════��═══════════════════════════════════
// Incoming Messages (POST)
// ═══════════════════════════════════════════════════════════
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const value = changes?.value
    const message = value?.messages?.[0]

    // Handle status updates
    if (!message && value?.statuses) return new Response("OK", { status: 200 })
    if (!message) return new Response("OK", { status: 200 })

    const from = message.from
    const messageId = message.id

    // Mark as read
    await markAsRead(messageId)

    // Extract message content
    let msgBody = ""
    let imageUrl: string | null = null

    if (message.type === "interactive" && message.interactive?.button_reply) {
      msgBody = message.interactive.button_reply.title
    } else if (message.type === "text") {
      msgBody = message.text?.body || ""
    } else if (message.type === "image") {
      // Download and save image
      const mediaId = message.image?.id
      if (mediaId) {
        imageUrl = await downloadMedia(mediaId)
      }
      msgBody = message.image?.caption || "[العميل أرسل صورة - سكرين شوت الدفعات]"
    } else if (message.type === "document") {
      msgBody = "[العميل أرسل ملف]"
    } else if (message.type === "audio") {
      msgBody = "[العميل أرسل رسالة صوتية]"
    } else if (message.type === "location") {
      msgBody = "[العميل أرسل موقع]"
    }

    if (!msgBody && !imageUrl) return new Response("OK", { status: 200 })

    // Get or create conversation
    const conversation = await getOrCreateConversation(from)
    if (!conversation) return new Response("OK", { status: 200 })

    const existing = (conversation.messages as unknown[]) || []
    const updated = await saveMessage(conversation.id, "user", msgBody, existing, { image_url: imageUrl || undefined })

    // Notify admin when image is received
    if (imageUrl) {
      await notifyAdmin(
        "image_received",
        "صورة واردة من عميل",
        `${conversation.customer_name || from} أرسل صورة${imageUrl ? ` - ${imageUrl}` : ""}`,
        "conversation",
        conversation.id
      )
    }

    // If manual mode, notify admin only
    if (conversation.mode === "manual") {
      await notifyAdmin(
        "manual_message",
        "رسالة جديدة - وضع يدوي",
        `${conversation.customer_name || from}: ${msgBody.slice(0, 100)}`,
        "conversation",
        conversation.id
      )
      return new Response("OK", { status: 200 })
    }

    // Build AI context - include website context if available
    const websiteContext = (conversation.metadata as Record<string, unknown>)?.website_context as string | undefined
    const aiHistory: { role: "user" | "assistant" | "system"; content: string }[] = []

    // Add website context as system hint if available
    if (websiteContext) {
      aiHistory.push({
        role: "user",
        content: `[ملاحظة: العميل سبق تواصل معنا عبر الموقع وذكر التالي:\n${websiteContext}\nكمّل معه من حيث وقف بدون ما تكرر اللي قاله]`,
      })
      aiHistory.push({
        role: "assistant",
        content: "تمام فهمت السياق السابق، بكمل معه",
      })
    }

    const chatHistory = (updated as { role: string; content: string }[])
      .slice(-20)
      .map(m => ({ role: m.role as "user" | "assistant", content: m.content }))
    aiHistory.push(...chatHistory)

    const supabase = getSupabase()

    // Generate AI response
    const { text } = await generateText({
      model: "anthropic/claude-sonnet-4",
      system: SYSTEM_PROMPT,
      messages: aiHistory,
      tools: {
        calculateCash: tool({
          description: "حساب تفاصيل السيولة. استخدمها فوراً عندما يذكر العميل أي مبلغ.",
          inputSchema: z.object({
            amount: z.number().describe("المبلغ بالريال"),
            type: z.enum(["net", "purchase"]).describe("net = صافي مطلوب كاش, purchase = مبلغ شراء"),
          }),
          execute: async ({ amount, type }) => type === "net" ? calculateAmount(amount) : getBreakdown(amount),
        }),
        createOrder: tool({
          description: "إنشاء طلب جديد لما العميل يوافق ويكمل الخطوات أو يرسل صورة",
          inputSchema: z.object({
            customerName: z.string().describe("اسم العميل"),
            netRequested: z.number().describe("المبلغ المطلوب كاش"),
            appType: z.string().describe("تابي/تمارا/مدفوع"),
            storeName: z.string().nullable().describe("اسم المتجر ان وجد"),
          }),
          execute: async ({ customerName, netRequested, appType, storeName }) => {
            const calc = calculateAmount(netRequested)
            const orderNumber = generateOrderNumber()
            const { data: order } = await supabase.from("orders").insert({
              order_number: orderNumber,
              customer_name: customerName,
              customer_phone: from,
              net_requested: netRequested,
              purchase_amount: calc.purchaseAmount,
              sale_amount: calc.saleAmount,
              admin_fee: calc.adminFee,
              first_payment: calc.downPayment,
              final_amount: calc.netAmount,
              remaining_installment: calc.remainingInstallment,
              app_type: appType,
              store_name: storeName || null,
              screenshot_url: imageUrl || null,
              status: "pending",
            }).select().single()

            if (order) {
              await supabase.from("conversations")
                .update({ order_id: order.id, status: "pending", customer_name: customerName })
                .eq("id", conversation.id)

              await notifyAdmin(
                "new_order",
                "طلب جديد من واتساب",
                `${customerName} - ${netRequested} ريال كاش عبر ${appType} | رقم الطلب: ${orderNumber}`,
                "order",
                order.id
              )
            }
            return { success: true, orderNumber, orderId: order?.id }
          },
        }),
        updateConversation: tool({
          description: "حفظ اسم العميل أو معلومات جديدة عنه",
          inputSchema: z.object({
            customerName: z.string().nullable().describe("اسم العميل"),
          }),
          execute: async ({ customerName }) => {
            if (customerName) {
              await supabase.from("conversations")
                .update({ customer_name: customerName })
                .eq("id", conversation.id)
            }
            return { updated: true }
          },
        }),
        checkOrderStatus: tool({
          description: "تحقق من حالة طلب سابق للعميل",
          inputSchema: z.object({ phone: z.string().describe("رقم العميل") }),
          execute: async ({ phone }) => {
            const { data: orders } = await supabase.from("orders")
              .select("id, order_number, status, net_requested, app_type, created_at")
              .eq("customer_phone", phone)
              .order("created_at", { ascending: false }).limit(3)
            if (!orders?.length) return { found: false }
            const statusMap: Record<string, string> = {
              pending: "قيد المراجعة", approved: "تمت الموافقة",
              processing: "جاري المعالجة", completed: "مكتمل", cancelled: "ملغي"
            }
            return {
              found: true,
              orders: orders.map(o => ({
                orderNumber: o.order_number,
                amount: o.net_requested,
                status: statusMap[o.status] || o.status,
                app: o.app_type,
              }))
            }
          },
        }),
      },
      maxSteps: 5,
    })

    // Save AI response
    await saveMessage(conversation.id, "assistant", text, updated)

    // Send response via WhatsApp
    const isAskingPayment = text.includes("تابي") && text.includes("تمارا") && (text.includes("؟") || text.includes("ولا"))

    if (isAskingPayment) {
      await sendButtons(from, text, [
        { id: "tabby", title: "تابي" },
        { id: "tamara", title: "تمارا" },
        { id: "madfoo3", title: "مدفوع" },
      ])
    } else {
      await sendText(from, text)
    }

    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("[v0] WhatsApp error:", error)
    return new Response("OK", { status: 200 })
  }
}
