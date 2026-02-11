import {
  convertToModelMessages,
  streamText,
  tool,
  type UIMessage,
  stepCountIs,
} from "ai"
import { z } from "zod"
import { createClient } from "@supabase/supabase-js"

export const maxDuration = 60

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const ADMIN_PHONE = "966590360039"
const WHATSAPP_API = "https://graph.facebook.com/v22.0"

const SYSTEM_PROMPT = `اسمك "مطر" - مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش.
المطر نعمة وغيث من الله، وأنت كذلك غيث للعميل تساعده يحصل على السيولة اللي يحتاجها.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي مو بوت
- تختصر - ما تكتب مقالات، تكتب مثل ما الناس تكتب بالواتساب
- ما تكرر نفسك أبداً - لو شرحت شي مرة ما تعيده
- تستخدم تعابير طبيعية مثل: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"، "كم تبي"، "وش رايك"، "ان شاء الله"، "على طول"
- لو العميل سأل سؤال ما له علاقة بالخدمة ترد بشكل لطيف وترجعه للموضوع
- ما تستخدم كلمات رسمية مثل "بالتأكيد" أو "سعدت بخدمتك" - كلامك عادي وبسيط
- لو العميل متردد أو خايف طمّنه بطريقة طبيعية مو بنسخ كلام تسويقي.

## شرح الخدمة (مهم جداً تفهمها صح وتشرحها صح):
1. العميل يحدد المبلغ اللي يحتاجه كاش (الصافي)
2. نحن نحدد له قيمة الجهاز المطلوب شراءه بالتقسيط
3. العميل يروح المتجر (اكسترا/نون/المنيع) ويشتري الجهاز عن طريق تابي أو تمارا أو مدفوع
4. نحن نستلم الجهاز من العميل ونبيعه
5. من قيمة البيع نخصم الرسوم الإدارية والعمولة وقيمة الدفعة الأولى
6. الباقي (الصافي) نحوله لحساب العميل البنكي خلال ساعتين
- الدفعة الأولى نحن ندفعها عن العميل ونستردها من قيمة البيع - ما يدفع شي من جيبه
- بدون أي فوائد على العميل

## قاعدة ذهبية:
العميل ما يختار الجهاز - العميل يحدد المبلغ ونحن نحدد له الجهاز المناسب بالقيمة المطلوبة.
لا تقول أبداً "تختار جهاز" - دايم قول "نحدد لك جهاز بالقيمة المطلوبة".

## الضمان والمصداقية:
- خدمة مرخصة بسجل تجاري موجود في الموقع تقدر تتطلع عليه من [صفحة من نحن](/about)
- عندنا عمليات تتعدى 100 ألف ريال بكل شفافية تقدر تشوفها من [آراء العملاء](/reviews)
- التحويل خلال ساعتين مباشرة لحسابك البنكي
- نتابع معك خطوة بخطوة لين يوصلك المبلغ

## تدفق المحادثة - تمشي مع العميل خطوة بخطوة:

### الخطوة 1 - الترحيب:
"هلا والله! أنا مطر، مساعدك في ليل سول.
نحول لك مشتريات التقسيط من تابي وتمارا ومدفوع لكاش بحسابك.
كم تحتاج كاش (الصافي)؟"

### الخطوة 2 - الحساب:
لما يذكر مبلغ:
- حوّل الكلام لرقم (الف = 1000، خمسمية = 500، الفين = 2000، ثلاث آلاف = 3000، اربع آلاف = 4000، خمسة آلاف = 5000)
- استخدم أداة calculateCash فوراً مع type: "net"
- بعد النتيجة قول:
  "ابشر يالغالي! عشان توصلك [الصافي] ر.س كاش:
  قيمة الجهاز: [مبلغ الشراء] ر.س - نبيعه بـ [مبلغ البيع] ر.س
  الرسوم: [الرسوم] ر.س | الدفعة الاولى (مستردة): [الدفعة] ر.س
  الصافي لك: [الصافي] ر.س
  
  **نبيع لك الجهاز بالقيمة المطلوبة ونشتريه منك** - ما تحتاج تسوي شي غير انك تشتريه بالتقسيط.
  
  تبي نكمل؟"

### الخطوة 3 - اختيار التطبيق:
"حلو! تبي تقدم عن طريق تابي، تمارا، ولا مدفوع؟"

### الخطوة 4 - طلب البيانات ورفع الطلب:
"تمام! عشان أرفع لك الطلب الحين، احتاج:
1. اسمك الكامل
2. رقم جوالك
3. اسم البنك
4. رقم الآيبان (IBAN)"

لما يعطيك البيانات، استخدم أداة submitOrder فوراً لرفع الطلب تلقائياً.
بعد رفع الطلب بنجاح قول:
"تمام رفعت طلبك! رقم طلبك: [رقم الطلب]
الحين ادخل المتجر وابحث عن جهاز بقيمة قريبة من [مبلغ الشراء] ر.س واختر الدفع عن طريق [التطبيق] على 4 دفعات.
اكسترا: https://www.extra.com/ar-sa/ | نون: https://www.noon.com/saudi-ar/ | المنيع: https://www.almunayes.com.sa/ar/
لما تخلص قول لي تم."

### الخطوة 5 - طلب الصورة:
#### إذا تابي أو مدفوع:
"ممتاز! ارفع صورة صفحة تقسيم الدفعات."

#### إذا تمارا:
"ممتاز! اتبع الخطوات:
1. اختر خطة الدفع واضغط ادفع
2. أضف بطاقة يدوي (لا تستخدم ابل باي)
3. حط بطاقة بدون رصيد واضغط ادفع
4. بيحولك لصفحة البنك - صوّرها واغلق بدون ادخال الكود
5. ارسل لنا الصورة"

### الخطوة 6 - التأكيد:
"تمام يالغالي! طلبك وصلنا وقيد المراجعة. نتواصل معك خلال ساعتين ان شاء الله."

## الأدوات المتاحة لك:
1. **calculateCash** - حساب تفاصيل السيولة (استخدمها فوراً عند ذكر مبلغ)
2. **submitOrder** - رفع طلب جديد للعميل (استخدمها لما تجمع بيانات العميل)
3. **trackOrder** - تتبع حالة طلب (استخدمها لما يسأل عن طلبه)
4. **searchExtra** - البحث في اكسترا
5. **notifyAdmin** - ارسال تنبيه للادارة (استخدمها لأي حالة طارئة أو مشكلة)
6. **suggestImprovement** - اقتراح تحسين (استخدمها لما تلاحظ خلل أو ميزة مطلوبة من العملاء)

## متى تستخدم notifyAdmin:
- عميل يشتكي من مشكلة
- عميل ينتظر أكثر من ساعتين ولم يتم التواصل معه
- عميل يطلب مبلغ كبير (أكثر من 5000)
- أي حالة طارئة

## متى تستخدم suggestImprovement:
- عميل يسأل عن ميزة غير موجودة
- تلاحظ ان العملاء يكررون نفس السؤال
- تلاحظ خلل في النظام أو الأسعار
- أي اقتراح يحسن الخدمة

## قواعد مهمة:
- لا تسأل العميل عن جهاز معين أبداً
- لا تتخطى أي خطوة - لازم العميل يأكد قبل تنتقل
- "تم" أو "خلاص" أو "سويت" أو "اوكي" أو "ايه" = خلص الخطوة الحالية
- إذا سأل سؤال عام أجب عليه ورجّعه للخطوة الحالية
- اكتب الروابط بصيغة markdown: [النص](الرابط)
- خلك مختصر - لا تطوّل
- أي رقم يذكره العميل بدون توضيح = المبلغ المطلوب كاش (صافي)
- دايم قول "نبيع لك الجهاز ونشتريه منك" عند الحساب
- إذا سأل عن الضمان أو المصداقية: ذكره بالسجل التجاري والعمليات اللي تتعدى 100 ألف`

// ═══════════════════════════════════════════════
// CALCULATION FUNCTIONS
// ═══════════════════════════════════════════════

function calculateAmount(netRequested: number) {
  let purchaseAmount = netRequested * 2
  for (let i = 0; i < 30; i++) {
    let sellingLossRate: number
    if (purchaseAmount <= 5500) sellingLossRate = 0.15
    else if (purchaseAmount >= 9500) sellingLossRate = 0.10
    else {
      const steps = Math.floor((purchaseAmount - 5500) / 1000)
      sellingLossRate = 0.14 - steps * 0.01
    }
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

  let sellingLossRate: number
  if (purchaseAmount <= 5500) sellingLossRate = 0.15
  else if (purchaseAmount >= 9500) sellingLossRate = 0.10
  else {
    const steps = Math.floor((purchaseAmount - 5500) / 1000)
    sellingLossRate = 0.14 - steps * 0.01
  }
  const saleAmount = Math.round(purchaseAmount * (1 - sellingLossRate))
  const adminFee = Math.round(purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0))
  const downPayment = Math.round(purchaseAmount * 0.25)
  const netAmount = saleAmount - adminFee - downPayment
  const remainingInstallment = purchaseAmount - downPayment

  return { purchaseAmount, saleAmount, adminFee, downPayment, netAmount, remainingInstallment }
}

function calculateFromPurchase(purchaseAmount: number) {
  let sellingLossRate: number
  if (purchaseAmount <= 5500) sellingLossRate = 0.15
  else if (purchaseAmount >= 9500) sellingLossRate = 0.10
  else {
    const steps = Math.floor((purchaseAmount - 5500) / 1000)
    sellingLossRate = 0.14 - steps * 0.01
  }
  const saleAmount = Math.round(purchaseAmount * (1 - sellingLossRate))
  const adminFee = Math.round(purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0))
  const downPayment = Math.round(purchaseAmount * 0.25)
  const netAmount = saleAmount - adminFee - downPayment
  const remainingInstallment = purchaseAmount - downPayment

  return { purchaseAmount, saleAmount, adminFee, downPayment, netAmount, remainingInstallment }
}

function generateOrderNumber() {
  const date = new Date()
  const y = date.getFullYear().toString().slice(-2)
  const m = (date.getMonth() + 1).toString().padStart(2, "0")
  const d = date.getDate().toString().padStart(2, "0")
  const rand = Math.floor(Math.random() * 9000 + 1000)
  return `LS-${y}${m}${d}-${rand}`
}

// ═══════════════════════════════════════════════
// WHATSAPP NOTIFICATION
// ═══════════════════════════════════════════════

async function sendWhatsAppNotification(message: string) {
  const token = process.env.WHATSAPP_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID
  if (!token || !phoneId) return { success: false, reason: "WhatsApp not configured" }
  
  try {
    const res = await fetch(`${WHATSAPP_API}/${phoneId}/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: ADMIN_PHONE,
        type: "text",
        text: { body: message },
      }),
    })
    return { success: res.ok }
  } catch {
    return { success: false, reason: "send failed" }
  }
}

// ═══════════════════════════════════════════════
// RATE LIMITER
// ═══════════════════════════════════════════════

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function checkRateLimit(visitorId: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(visitorId)
  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(visitorId, { count: 1, resetAt: now + 60_000 })
    return true
  }
  if (limit.count >= 15) return false
  limit.count++
  return true
}

// ═══════════════════════════════════════════════
// POST HANDLER
// ═══════════════════════════════════════════════

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json()
    const visitorId = req.headers.get("x-visitor-id") || "anonymous"

    if (!checkRateLimit(visitorId)) {
      return new Response(JSON.stringify({ error: "كثرت الرسائل، انتظر شوي وحاول مرة ثانية" }), {
        status: 429, headers: { "Content-Type": "application/json" }
      })
    }

    // Extract and save user message
    const lastUserMsg = messages[messages.length - 1]
    let userText = ""
    if (lastUserMsg?.role === "user") {
      userText = lastUserMsg.parts
        ?.filter((p: { type: string }) => p.type === "text")
        .map((p: { type: string; text?: string }) => p.text)
        .join("") || ""
    }
    if (userText) saveMessage(visitorId, "user", userText).catch(() => {})

    const result = streamText({
      model: "openai/gpt-4o",
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
      abortSignal: req.signal,
      tools: {
        // Tool 1: Calculator
        calculateCash: tool({
          description: "حساب تفاصيل السيولة. استخدمها فوراً عندما يذكر العميل أي مبلغ. type=net يعني المبلغ هو الصافي المطلوب كاش. type=purchase يعني مبلغ الشراء.",
          inputSchema: z.object({
            amount: z.number().describe("المبلغ بالريال"),
            type: z.enum(["net", "purchase"]).describe("net = الصافي المطلوب كاش, purchase = مبلغ الشراء"),
          }),
          execute: async ({ amount, type }) => {
            return type === "net" ? calculateAmount(amount) : calculateFromPurchase(amount)
          },
        }),

        // Tool 2: Submit Order
        submitOrder: tool({
          description: "رفع طلب جديد للعميل. استخدمها لما تجمع بيانات العميل (الاسم، الرقم، البنك، الآيبان، التطبيق، المبلغ).",
          inputSchema: z.object({
            customerName: z.string().describe("اسم العميل"),
            customerPhone: z.string().describe("رقم جوال العميل"),
            appType: z.enum(["tabby", "tamara", "madfu"]).describe("تطبيق الدفع"),
            netRequested: z.number().describe("المبلغ المطلوب كاش (صافي)"),
            bankName: z.string().optional().describe("اسم البنك"),
            iban: z.string().optional().describe("رقم الآيبان"),
          }),
          execute: async ({ customerName, customerPhone, appType, netRequested, bankName, iban }) => {
            const calc = calculateAmount(netRequested)
            const orderNumber = generateOrderNumber()
            const appNames: Record<string, string> = { tabby: "تابي", tamara: "تمارا", madfu: "مدفوع" }

            const { data, error } = await supabase.from("orders").insert({
              order_number: orderNumber,
              customer_name: customerName,
              customer_phone: customerPhone,
              app_type: appNames[appType] || appType,
              purchase_amount: calc.purchaseAmount,
              sale_amount: calc.saleAmount,
              admin_fee: calc.adminFee,
              first_payment: calc.downPayment,
              final_amount: calc.netAmount,
              remaining_installment: calc.remainingInstallment,
              net_requested: netRequested,
              notes: `${bankName ? `البنك: ${bankName}\n` : ""}${iban ? `IBAN: ${iban}\n` : ""}طلب من الشات`,
              status: "pending",
            }).select("id, order_number").single()

            if (error) return { success: false, error: "فشل رفع الطلب" }

            // Notify admin via WhatsApp
            sendWhatsAppNotification(
              `طلب جديد من الشات!\nرقم الطلب: ${orderNumber}\nالعميل: ${customerName}\nالجوال: ${customerPhone}\nالصافي: ${netRequested} ر.س\nالتطبيق: ${appNames[appType] || appType}`
            ).catch(() => {})

            // Notify in database
            supabase.from("notifications").insert({
              type: "new_order",
              title: "طلب جديد من الشات",
              body: `${customerName} - ${netRequested} ر.س (${appNames[appType] || appType})`,
              reference_type: "order",
              reference_id: data.id,
            }).then(() => {})

            return {
              success: true,
              orderNumber,
              purchaseAmount: calc.purchaseAmount,
              netAmount: calc.netAmount,
              appType: appNames[appType] || appType,
            }
          },
        }),

        // Tool 3: Track Order
        trackOrder: tool({
          description: "تتبع حالة طلب العميل. استخدمها لما العميل يسأل عن طلبه أو يعطيك رقم الطلب أو رقم جواله.",
          inputSchema: z.object({
            orderNumber: z.string().optional().describe("رقم الطلب مثل LS-250101-1234"),
            phone: z.string().optional().describe("رقم جوال العميل"),
          }),
          execute: async ({ orderNumber, phone }) => {
            let query = supabase.from("orders").select("order_number, status, customer_name, purchase_amount, final_amount, app_type, created_at").order("created_at", { ascending: false })
            if (orderNumber) query = query.eq("order_number", orderNumber)
            else if (phone) query = query.eq("customer_phone", phone)
            else return { found: false, message: "احتاج رقم الطلب أو رقم جوالك" }

            const { data } = await query.limit(3)
            if (!data || data.length === 0) return { found: false, message: "ما لقيت طلب بهالبيانات" }

            const statusMap: Record<string, string> = {
              pending: "قيد المراجعة",
              processing: "جاري التنفيذ",
              completed: "مكتمل - تم التحويل",
              cancelled: "ملغي",
            }

            return {
              found: true,
              orders: data.map(o => ({
                orderNumber: o.order_number,
                status: statusMap[o.status] || o.status,
                amount: o.final_amount,
                appType: o.app_type,
                date: new Date(o.created_at).toLocaleDateString("ar-SA"),
              })),
            }
          },
        }),

        // Tool 4: Search Extra
        searchExtra: tool({
          description: "البحث عن منتج في متجر اكسترا بسعر معين أو باسم المنتج",
          inputSchema: z.object({
            query: z.string().describe("اسم المنتج أو وصفه بالانجليزي مثل iPhone 16 أو laptop"),
          }),
          execute: async ({ query }) => {
            const searchUrl = `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`
            return { searchUrl, message: `رابط البحث في اكسترا: ${searchUrl}` }
          },
        }),

        // Tool 5: Notify Admin
        notifyAdmin: tool({
          description: "ارسال تنبيه للادارة عبر واتساب. استخدمها عند: شكوى عميل، عميل ينتظر اكثر من ساعتين، طلب مبلغ كبير اكثر من 5000، او اي حالة طارئة.",
          inputSchema: z.object({
            reason: z.string().describe("سبب التنبيه"),
            customerInfo: z.string().optional().describe("معلومات العميل ان وجدت"),
            urgency: z.enum(["low", "medium", "high"]).describe("مستوى الاهمية"),
          }),
          execute: async ({ reason, customerInfo, urgency }) => {
            const urgencyEmoji = urgency === "high" ? "🔴" : urgency === "medium" ? "🟡" : "🟢"
            const message = `${urgencyEmoji} تنبيه من مطر:\n${reason}${customerInfo ? `\nالعميل: ${customerInfo}` : ""}`

            await sendWhatsAppNotification(message)
            await supabase.from("notifications").insert({
              type: "matar_alert",
              title: `تنبيه مطر (${urgency})`,
              body: reason + (customerInfo ? ` | ${customerInfo}` : ""),
            })

            return { sent: true, message: "تم ارسال التنبيه للادارة" }
          },
        }),

        // Tool 6: Suggest Improvement
        suggestImprovement: tool({
          description: "اقتراح تحسين للنظام. استخدمها لما تلاحظ: سؤال متكرر من العملاء غير موجود بالنظام، خلل بالاسعار، ميزة مطلوبة، او اي ملاحظة لتطوير الخدمة.",
          inputSchema: z.object({
            category: z.enum(["bug", "feature", "pricing", "faq", "other"]).describe("نوع الاقتراح"),
            description: z.string().describe("وصف الاقتراح او المشكلة"),
            priority: z.enum(["low", "medium", "high"]).describe("اولوية الاقتراح"),
          }),
          execute: async ({ category, description, priority }) => {
            const catNames: Record<string, string> = { bug: "خلل", feature: "ميزة جديدة", pricing: "اسعار", faq: "سؤال متكرر", other: "اخرى" }
            await supabase.from("notifications").insert({
              type: "improvement_suggestion",
              title: `اقتراح تطوير: ${catNames[category]} (${priority})`,
              body: description,
            })

            const priorityEmoji = priority === "high" ? "🔴" : priority === "medium" ? "🟡" : "🟢"
            sendWhatsAppNotification(
              `${priorityEmoji} اقتراح تطوير من مطر:\nالنوع: ${catNames[category]}\n${description}`
            ).catch(() => {})

            return { saved: true, message: "تم حفظ الاقتراح وارساله للادارة" }
          },
        }),
      },
      maxSteps: 5,
      onFinish: async ({ text }) => {
        if (text?.trim()) {
          saveMessage(visitorId, "assistant", text).catch(() => {})
        }
      },
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    const errorMessage = error instanceof Error ? error.message : "unknown"
    const status = errorMessage.includes("Insufficient funds") ? 402
      : errorMessage.includes("rate") ? 429 : 500
    const userMessage = status === 402
      ? "الخدمة متوقفة مؤقتاً، تواصل معنا على الواتساب: wa.me/966590360039"
      : status === 429 ? "كثرت الرسائل، انتظر شوي وحاول مرة ثانية"
      : "حصل خطأ، حاول مرة ثانية"
    return new Response(JSON.stringify({ error: userMessage }), {
      status, headers: { "Content-Type": "application/json" }
    })
  }
}

// ═══════════════════════════════════════════════
// SAVE MESSAGE TO SUPABASE
// ═══════════════════════════════════════════════

async function saveMessage(visitorId: string, role: "user" | "assistant", content: string) {
  try {
    const phone = `web-${visitorId}`
    const { data: existing } = await supabase
      .from("conversations")
      .select("id, messages")
      .eq("phone", phone)
      .eq("source", "website")
      .in("status", ["active", "pending"])
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    const timestamp = new Date().toISOString()
    const newMsg = { role, content, timestamp }

    if (existing) {
      const msgs = Array.isArray(existing.messages) ? existing.messages : []
      msgs.push(newMsg)
      await supabase.from("conversations").update({
        messages: msgs.slice(-50),
        last_message: content.slice(0, 200),
        updated_at: timestamp,
      }).eq("id", existing.id)
    } else {
      const { data: newConv } = await supabase.from("conversations").insert({
        phone,
        customer_name: "زائر الموقع",
        messages: [newMsg],
        last_message: content.slice(0, 200),
        source: "website",
        status: "active",
      }).select("id").single()

      if (newConv) {
        await supabase.from("notifications").insert({
          type: "new_customer",
          title: "محادثة جديدة",
          body: "زائر جديد بدأ محادثة عبر الموقع",
          reference_type: "conversation",
          reference_id: newConv.id,
        })
      }
    }
  } catch { /* silent */ }
}
