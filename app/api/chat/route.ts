import {
  convertToModelMessages,
  streamText,
  tool,
  type UIMessage,
} from "ai"
import { z } from "zod"

export const maxDuration = 30

const SYSTEM_PROMPT = `أنت مساعد ذكي لموقع liilsol (ليل سول) - خدمة سيولة فورية من تابي وتمارا ومدفوع في السعودية.
تتكلم بعامي سعودي ودّي ومختصر.

## أول رسالة لك دائما تكون ترحيب:
- رحب بالعميل
- اشرح بإختصار: "نحول لك مشترياتك بالتقسيط من تابي وتمارا ومدفوع إلى كاش في حسابك البنكي خلال ساعتين. نشتري الجهاز اللي تبيه بالتقسيط، ونبيعه ونحول لك المبلغ. الدفعة الأولى نقوم بدفعها واستردادها بعد البيع بدون أي فوائد عليك."
- بعدين اسأله: "كم المبلغ اللي تحتاجه كاش (الصافي)؟"

## عندما يذكر العميل مبلغ:
- استخدم أداة calculateCash لحساب التفاصيل
- اعرض النتيجة بشكل واضح ومنظم
- اسأله يبي يكمل ويقدم الطلب

## طريقة الحساب (على 4 أقساط):
- الدفعة الأولى: 25% من مبلغ الشراء
- فرق البيع: أقل من 5500 = 15%، من 5500 = يبدأ 14% وينقص 1% كل 1000 ريال، من 9500+ = 10% ثابت
- الرسوم الإدارية: 10% + 100 ريال إضافية إذا المبلغ أقل من 4000
- الصافي = مبلغ البيع - الرسوم - الدفعة الأولى
- ملاحظة: الحسبة على 4 أقساط، إذا زاد عدد الدفعات الفرق لصالح العميل بدون رسوم إضافية

## المتاجر:
- اكسترا: https://www.extra.com/en-sa
- نون: https://www.noon.com/en-sa
- المنيع: https://www.almunayes.com.sa

## روابط الموقع:
- [اطلب سيولة](/order) | [حاسبة السيولة](/#calculator) | [تتبع طلبك](/track) | [آراء العملاء](/reviews)
- واتساب: https://wa.me/966590360039

## تعليمات مهمة:
- اكتب الروابط بصيغة markdown: [النص](الرابط)
- لا تطوّل، خلّك مختصر ومفيد
- إذا سأل عن جهاز معين استخدم أداة searchExtra
- بعد ما تعرض المنتج من اكسترا، احسب له الصافي تلقائي
- شجع التقديم عبر الموقع لأنه يمنح أولوية`

function calculateAmount(netRequested: number) {
  // عكس المعادلة: من الصافي المطلوب إلى مبلغ الشراء
  // نبدأ بتقريب ونعدّل
  let purchaseAmount = netRequested * 2
  for (let i = 0; i < 20; i++) {
    let sellingLossRate: number
    if (purchaseAmount <= 5500) sellingLossRate = 0.15
    else if (purchaseAmount >= 9500) sellingLossRate = 0.10
    else {
      const steps = Math.floor((purchaseAmount - 5500) / 1000)
      sellingLossRate = 0.14 - (steps * 0.01)
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
    sellingLossRate = 0.14 - (steps * 0.01)
  }
  const saleAmount = Math.round(purchaseAmount * (1 - sellingLossRate))
  const adminFee = Math.round(purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0))
  const downPayment = Math.round(purchaseAmount * 0.25)
  const netAmount = saleAmount - adminFee - downPayment
  const remainingInstallment = purchaseAmount - downPayment

  return {
    purchaseAmount,
    saleAmount,
    adminFee,
    downPayment,
    netAmount,
    remainingInstallment,
    sellingLossPercent: Math.round(sellingLossRate * 100),
  }
}

function calculateFromPurchase(purchaseAmount: number) {
  let sellingLossRate: number
  if (purchaseAmount <= 5500) sellingLossRate = 0.15
  else if (purchaseAmount >= 9500) sellingLossRate = 0.10
  else {
    const steps = Math.floor((purchaseAmount - 5500) / 1000)
    sellingLossRate = 0.14 - (steps * 0.01)
  }
  const saleAmount = Math.round(purchaseAmount * (1 - sellingLossRate))
  const adminFee = Math.round(purchaseAmount * 0.10 + (purchaseAmount < 4000 ? 100 : 0))
  const downPayment = Math.round(purchaseAmount * 0.25)
  const netAmount = saleAmount - adminFee - downPayment
  const remainingInstallment = purchaseAmount - downPayment

  return {
    purchaseAmount,
    saleAmount,
    adminFee,
    downPayment,
    netAmount,
    remainingInstallment,
    sellingLossPercent: Math.round(sellingLossRate * 100),
  }
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-4.1-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    tools: {
      calculateCash: tool({
        description: "حساب تفاصيل السيولة. استخدمها عندما يذكر العميل مبلغ معين سواء الصافي المطلوب أو مبلغ الشراء.",
        inputSchema: z.object({
          amount: z.number().describe("المبلغ بالريال"),
          type: z.enum(["net", "purchase"]).describe("net = الصافي المطلوب (كاش)، purchase = مبلغ الشراء"),
        }),
        execute: async ({ amount, type }) => {
          const calc = type === "net" ? calculateAmount(amount) : calculateFromPurchase(amount)
          return {
            ...calc,
            note: "الحسبة على 4 أقساط. إذا زاد عدد الدفعات الفرق لصالحك بدون رسوم إضافية.",
          }
        },
      }),
      searchExtra: tool({
        description: "البحث عن منتجات في متجر اكسترا. استخدمها فقط عندما يسأل العميل عن سعر جهاز محدد.",
        inputSchema: z.object({
          query: z.string().describe("اسم المنتج بالانجليزي مثل iPhone 16 أو Samsung Galaxy S24"),
        }),
        execute: async ({ query }) => {
          try {
            const searchUrl = `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`
            const res = await fetch(searchUrl, {
              headers: { "User-Agent": "Mozilla/5.0 (compatible; bot)" },
              signal: AbortSignal.timeout(8000),
            })
            const html = await res.text()

            const products: { name: string; price: string; url: string }[] = []
            const productPattern = /"name"\s*:\s*"([^"]+)"[^}]*"price"\s*:\s*"?(\d+[\d.]*)"?/g
            let match: RegExpExecArray | null
            while ((match = productPattern.exec(html)) !== null && products.length < 5) {
              if (match[1].length > 10 && !match[1].includes("extra.com")) {
                products.push({
                  name: match[1].substring(0, 80),
                  price: Math.round(Number(match[2])).toString(),
                  url: searchUrl,
                })
              }
            }

            if (products.length === 0) {
              return {
                products: [],
                searchUrl,
                message: `ما لقيت نتائج محددة، لكن تقدر تبحث مباشرة في اكسترا: ${searchUrl}`,
              }
            }
            return { products, searchUrl, message: `لقيت ${products.length} منتج` }
          } catch {
            const searchUrl = `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`
            return {
              products: [],
              searchUrl,
              message: `تقدر تبحث مباشرة في اكسترا: ${searchUrl}`,
            }
          }
        },
      }),
    },
    maxSteps: 5,
  })

  return result.toUIMessageStreamResponse()
}
