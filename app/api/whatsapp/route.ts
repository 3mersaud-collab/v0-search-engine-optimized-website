import { generateText, tool } from "ai"
import { z } from "zod"

export const maxDuration = 60

// WhatsApp Business API Webhook
// GET = verification, POST = incoming messages

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "liilsol-matar-verify-2024"

const SYSTEM_PROMPT = `اسمك "مطر" - مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش عبر واتساب.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي - مو بوت ومو خدمة عملاء رسمية
- رسائلك قصيرة جداً - سطر أو سطرين بالكثير. الواتساب مو مكان مقالات
- ما تكرر نفسك أبداً
- تعابيرك: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"، "كم تبي"
- ما تقول "بالتأكيد" أو "سعدت بخدمتك" - كلامك عادي وبسيط
- لو العميل متردد طمّنه بطريقة طبيعية

## الخدمة باختصار:
العميل يحدد المبلغ > نحدد له جهاز يشتريه بالتقسيط (تابي/تمارا/مدفوع) > نستلمه ونبيعه > نحول له الكاش خلال ساعتين
- الدفعة الأولى ندفعها عنه - ما يدفع شي من جيبه - بدون فوائد
- العميل ما يختار الجهاز أبداً - نحن نحدده

## الضمان:
خدمة مرخصة بسجل تجاري وعمليات تتعدى 100 ألف. موقعنا: https://liilsol.com

## التدفق:
1. رحب واسأل كم يبي كاش
2. لما يذكر مبلغ > استخدم calculateCash > اعطه التفاصيل باختصار
3. اسأل: تابي ولا تمارا ولا مدفوع؟
4. وجهه للمتجر (اكسترا/نون/المنيع) يشتري جهاز بقيمة مبلغ الشراء
5. تمارا: بطاقة يدوي بدون رصيد > ادفع > صور صفحة البنك (اللي تطلب الكود) > اغلق بدون كود > ارسل الصورة
   تابي/مدفوع: ارسل صورة صفحة تقسيم الدفعات
6. أكد الطلب - نتواصل خلال ساعتين

## تحويل: الف=1000، خمسمية=500، الفين=2000، ثلاث آلاف=3000، اربع=4000، خمسة=5000`

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
  return { purchaseAmount, saleAmount, adminFee, downPayment, netAmount }
}

// Simple in-memory conversation store (per phone number)
const conversations = new Map<string, { role: "user" | "assistant"; content: string }[]>()

// GET - WhatsApp webhook verification
export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 })
  }
  return new Response("Forbidden", { status: 403 })
}

// POST - Incoming WhatsApp messages
export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("[v0] WhatsApp webhook received:", JSON.stringify(body).slice(0, 500))

    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const value = changes?.value
    const message = value?.messages?.[0]

    if (!message) {
      console.log("[v0] No message in webhook payload - likely a status update")
      return new Response("OK", { status: 200 })
    }

    const from = message.from // phone number
    const msgBody = message.text?.body || ""
    console.log("[v0] Message from:", from, "Body:", msgBody)

    if (!msgBody) {
      console.log("[v0] Empty message body, skipping")
      return new Response("OK", { status: 200 })
    }

    // Get or create conversation history
    if (!conversations.has(from)) {
      conversations.set(from, [])
    }
    const history = conversations.get(from)!
    history.push({ role: "user", content: msgBody })

    // Keep only last 20 messages
    if (history.length > 20) {
      history.splice(0, history.length - 20)
    }

    // Generate AI response
    const { text } = await generateText({
      model: "anthropic/claude-sonnet-4",
      system: SYSTEM_PROMPT,
      messages: history,
      tools: {
        calculateCash: tool({
          description: "حساب تفاصيل السيولة",
          inputSchema: z.object({
            amount: z.number().describe("المبلغ بالريال"),
            type: z.enum(["net", "purchase"]).describe("net = الصافي, purchase = مبلغ الشراء"),
          }),
          execute: async ({ amount, type }) => {
            if (type === "net") return calculateAmount(amount)
            // calculate from purchase
            let sellingLossRate: number
            if (amount <= 5500) sellingLossRate = 0.15
            else if (amount >= 9500) sellingLossRate = 0.10
            else {
              const steps = Math.floor((amount - 5500) / 1000)
              sellingLossRate = 0.14 - steps * 0.01
            }
            const saleAmount = Math.round(amount * (1 - sellingLossRate))
            const adminFee = Math.round(amount * 0.10 + (amount < 4000 ? 100 : 0))
            const downPayment = Math.round(amount * 0.25)
            const netAmount = saleAmount - adminFee - downPayment
            return { purchaseAmount: amount, saleAmount, adminFee, downPayment, netAmount }
          },
        }),
      },
      maxSteps: 5,
    })

    // Save assistant response to history
    history.push({ role: "assistant", content: text })

    // Send reply via WhatsApp Business API
    const phoneId = value?.metadata?.phone_number_id
    const token = process.env.WHATSAPP_ACCESS_TOKEN
    console.log("[v0] AI response:", text?.slice(0, 200))
    console.log("[v0] Phone ID:", phoneId, "Token exists:", !!token)

    if (phoneId && token) {
      const waResponse = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: from,
          type: "text",
          text: { body: text },
        }),
      })
      const waResult = await waResponse.json()
      console.log("[v0] WhatsApp API response:", JSON.stringify(waResult).slice(0, 300))
    } else {
      console.log("[v0] Missing phoneId or token - cannot send reply")
    }

    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("[v0] WhatsApp webhook error:", error)
    return new Response("OK", { status: 200 })
  }
}
