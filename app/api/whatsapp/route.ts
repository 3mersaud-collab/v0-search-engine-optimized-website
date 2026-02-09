import { generateText, tool } from "ai"
import { z } from "zod"

// WhatsApp Business API Webhook
// GET = verification, POST = incoming messages

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "liilsol-matar-verify-2024"

const SYSTEM_PROMPT = `أنت مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش عبر واتساب.
تتكلم بالعامي السعودي بشكل ودّي ومختصر جداً.

## شرح الخدمة:
العميل يحدد المبلغ اللي يحتاجه كاش (الصافي).
نحن نحدد له قيمة الجهاز المطلوب شراءه بالتقسيط من متجر مثل اكسترا.
العميل يشتري الجهاز بالتقسيط عن طريق تابي أو تمارا أو مدفوع.
نحن نشتري الجهاز ونبيعه ونحول له الكاش خلال ساعتين.
الدفعة الأولى نحن ندفعها ونستردها بعد البيع - بدون فوائد.

## قاعدة ذهبية:
العميل لا يختار الجهاز - العميل يحدد المبلغ ونحن نحدد له الجهاز.
لا تقول "تختار جهاز" أبداً.

## التدفق:
1. رحب واسأل عن المبلغ المطلوب كاش
2. لما يذكر مبلغ استخدم calculateCash واشرح التفاصيل
3. اسأله يبي يقدم عن طريق تابي أو تمارا أو مدفوع
4. وجهه للمتجر (اكسترا/نون/المنيع) ليشتري جهاز بقيمة مبلغ الشراء
5. اطلب منه يرسل صورة صفحة التقسيط
6. أكد له إن الطلب قيد المراجعة

## تحويل الأرقام: الف=1000، خمسمية=500، الفين=2000، ثلاث آلاف=3000
## خلك مختصر جداً - واتساب مو شات طويل`

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

    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const value = changes?.value
    const message = value?.messages?.[0]

    if (!message) {
      return new Response("OK", { status: 200 })
    }

    const from = message.from // phone number
    const msgBody = message.text?.body || ""

    if (!msgBody) {
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
      model: "openai/gpt-4.1-mini",
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

    if (phoneId && token) {
      await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
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
    }

    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("[v0] WhatsApp webhook error:", error)
    return new Response("OK", { status: 200 })
  }
}
