import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { streamText, tool, type CoreMessage } from "ai"
import { z } from "zod"

export const maxDuration = 60

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? "",
})

const WHATSAPP_NUMBER = "966590360039"

const SYSTEM_PROMPT = `اسمك "مطر" - سحابة غيث ماحسبت حسابها. مساعد خدمة مطر لتحويل مشتريات التقسيط الى كاش.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي مو بوت
- تختصر - تكتب مثل ما الناس تكتب بالواتساب
- ما تكرر نفسك أبداً
- تستخدم: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"، "ان شاء الله"، "على طول"
- ما تستخدم كلمات رسمية

## شرح الخدمة:
1. العميل يحدد المبلغ اللي يحتاجه كاش (الصافي)
2. نحن نحدد له قيمة الجهاز المطلوب شراءه بالتقسيط
3. العميل يروح المتجر (اكسترا/نون/المنيع) ويشتري الجهاز عن طريق تابي أو تمارا أو مدفوع
4. نحن نستلم الجهاز ونبيعه ونحول الصافي لحساب العميل البنكي خلال أقل من ساعة
- الدفعة الأولى نحن ندفعها عن العميل ونستردها من قيمة البيع
- بدون أي فوائد على العميل

## قاعدة ذهبية:
العميل ما يختار الجهاز - نحن نحدد له الجهاز المناسب.

## تدفق المحادثة:

### الخطوة 1 - الترحيب:
"هلا والله! معك مطر سحابة غيث ماحسبت حسابها 🌧️
نحول لك مشتريات التقسيط من تابي وتمارا ومدفوع لكاش بحسابك.
كم تحتاج كاش (الصافي)؟"

### الخطوة 2 - الحساب:
لما يذكر مبلغ، استخدم أداة calculateCash فوراً.
بعد النتيجة قول:
"ابشر يالغالي! عشان توصلك [الصافي] ر.س كاش:
قيمة الجهاز: [مبلغ الشراء] ر.س
الرسوم الإدارية: [الرسوم] ر.س
الدفعة الأولى (نتكفل فيها): [الدفعة] ر.س
**الصافي لك: [الصافي] ر.س** ✅

تبي نكمل؟"

### الخطوة 3 - التحويل للواتساب:
لما يوافق، استخدم أداة getWhatsAppLink وقول:
"ممتاز! عشان نكمل الطلب، تواصل معنا على الواتساب الحين وذكر لنا:
1. المبلغ اللي تبيه: [الصافي] ر.س
2. التطبيق اللي تبيه: تابي، تمارا، أو مدفوع

👇 اضغط هنا للتواصل المباشر:"

ثم استخدم أداة getWhatsAppLink لإنشاء الرابط.

## الأدوات المتاحة:
1. **calculateCash** - حساب تفاصيل السيولة عند ذكر مبلغ
2. **getWhatsAppLink** - إنشاء رابط واتساب مع رسالة جاهزة

## قواعد مهمة:
- لا تطلب بيانات بنكية أبداً - الواتساب يتكفل بذلك
- لا تقول "سأرفع طلبك" - كل التقديم عبر الواتساب
- أي رقم يذكره العميل بدون توضيح = المبلغ المطلوب كاش
- خلك مختصر`

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

export async function POST(req: Request) {
  try {
    const { messages }: { messages: CoreMessage[] } = await req.json()
    const visitorId = req.headers.get("x-visitor-id") || "anonymous"

    if (!checkRateLimit(visitorId)) {
      return new Response(JSON.stringify({ error: "كثرت الرسائل، انتظر شوي وحاول مرة ثانية" }), {
        status: 429, headers: { "Content-Type": "application/json" }
      })
    }

    const result = streamText({
      model: google("gemini-2.0-flash"),
      system: SYSTEM_PROMPT,
      messages,
      abortSignal: req.signal,
      tools: {
        calculateCash: tool({
          description: "حساب تفاصيل السيولة. استخدمها فوراً عندما يذكر العميل أي مبلغ.",
          parameters: z.object({
            amount: z.number().describe("المبلغ الصافي المطلوب بالريال"),
          }),
          execute: async ({ amount }) => {
            return calculateAmount(amount)
          },
        }),

        getWhatsAppLink: tool({
          description: "إنشاء رابط واتساب مع رسالة جاهزة للعميل للتواصل وإكمال الطلب.",
          parameters: z.object({
            netAmount: z.number().describe("المبلغ الصافي المطلوب"),
            purchaseAmount: z.number().describe("قيمة الجهاز المطلوب"),
          }),
          execute: async ({ netAmount, purchaseAmount }) => {
            const msg = encodeURIComponent(
              `السلام عليكم، أبي كاش من تابي/تمارا\nالمبلغ الصافي: ${netAmount} ر.س\nقيمة الجهاز: ${purchaseAmount} ر.س`
            )
            const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
            return { link, whatsappNumber: WHATSAPP_NUMBER }
          },
        }),
      },
      maxSteps: 5,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    const errorMessage = error instanceof Error ? error.message : "unknown"
    const status = errorMessage.includes("rate") ? 429 : 500
    const userMessage = status === 429
      ? "كثرت الرسائل، انتظر شوي وحاول مرة ثانية"
      : "حصل خطأ، تواصل معنا على الواتساب: wa.me/966590360039"
    return new Response(JSON.stringify({ error: userMessage }), {
      status, headers: { "Content-Type": "application/json" }
    })
  }
}
