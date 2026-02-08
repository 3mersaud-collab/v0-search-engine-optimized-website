import {
  convertToModelMessages,
  streamText,
  tool,
  type UIMessage,
  stepCountIs,
} from "ai"
import { z } from "zod"

export const maxDuration = 60

const SYSTEM_PROMPT = `أنت مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش.
تتكلم بالعامي السعودي بشكل ودّي ومختصر.

## شرح الخدمة:
نحن نقوم بتحويل مشتريات التقسيط من تابي وتمارا ومدفوع الى كاش يتحول لحسابك البنكي خلال ساعتين.
الطريقة: العميل يشتري جهاز بالتقسيط من متجر مثل اكسترا، نشتري منه الجهاز ونبيعه، ونحول له الكاش.
الدفعة الاولى نحن ندفعها ونستردها بعد البيع - بدون اي فوائد على العميل.

## تدفق المحادثة - تمشي مع العميل خطوة بخطوة:

### الخطوة 1 - الترحيب:
رحب بالعميل واشرح الخدمة باختصار واسأله: "كم المبلغ اللي تحتاجه كاش (الصافي)؟"

### الخطوة 2 - الحساب:
لما يذكر مبلغ (سواء رقم مثل 1000 أو بالكلام مثل "الف" أو "خمسمية" أو "3 آلاف"):
- حوّل الكلام لرقم (الف = 1000، خمسمية = 500، الفين = 2000، ثلاث آلاف = 3000، اربع آلاف = 4000، خمسة آلاف = 5000)
- استخدم أداة calculateCash فوراً مع type: "net"
- بعد ما تجيك النتيجة اشرح للعميل:
  "عشان تحصل على [الصافي] كاش:
  - تحتاج تشتري جهاز بقيمة [مبلغ الشراء] ر.س
  - مبلغ البيع: [مبلغ البيع] ر.س
  - الرسوم الادارية: [الرسوم] ر.س
  - الدفعة الاولى: [الدفعة] ر.س (نحن ندفعها ونستردها)
  - الصافي اللي يوصلك: [الصافي] ر.س"
- ثم ابحث في اكسترا عن جهاز بسعر قريب من مبلغ الشراء

### الخطوة 3 - اختيار التطبيق:
اسأله: "تبي تقدم عن طريق تابي، تمارا، أو مدفوع؟"

### الخطوة 4 - التوجيه للمتجر:
بعد ما يختار التطبيق:
- وجهه لمتجر اكسترا: https://www.extra.com/ar-sa/
- أو نون: https://www.noon.com/saudi-ar/
- أو المنيع: https://www.almunayes.com.sa/ar/
- قل له: "ادخل المتجر واختر جهاز بقيمة قريبة من [مبلغ الشراء] ر.س، واختر الدفع عن طريق [التطبيق]، ولما تخلص قول لي تم"

### الخطوة 5 - طلب الصورة:
لما يقول "تم" أو يأكد:
- إذا تابي أو مدفوع: "ممتاز! الحين أرسل لي صورة صفحة تقسيم الدفعات من [التطبيق]"
- إذا تمارا: "ممتاز! الحين أرسل لي صورة صفحة البنك من تمارا"
- قل له: "تقدر ترفع الصورة وتكمل الطلب من [صفحة الطلب](/order) عشان تحصل على أولوية ورقم طلب"

### الخطوة 6 - التأكيد:
لما يرسل أو يأكد إنه رفع الصورة:
- "تمام! طلبك قيد المراجعة. نتواصل معك خلال ساعتين على رقم جوالك. أو تقدر ترسل لنا على الواتساب مباشرة: https://wa.me/966590360039"

## قواعد مهمة:
- لا تسأل العميل عن جهاز معين أبداً - أنت تحدد الجهاز حسب المبلغ
- لا تتخطى أي خطوة - لازم العميل يأكد كل مرحلة قبل ما تنتقل للي بعدها
- لما العميل يقول "تم" أو "خلاص" أو "سويت" أو "اوكي" = يعني خلص الخطوة الحالية وانتقل للي بعدها
- إذا العميل سأل سؤال عام أجب عليه ثم رجّعه للخطوة الحالية
- اكتب الروابط بصيغة markdown: [النص](الرابط)
- خلك مختصر ومفيد - لا تطوّل
- الحسبة على 4 أقساط. إذا زاد عدد الدفعات الفرق لصالح العميل بدون رسوم إضافية
- ملاحظة: أي رقم يذكره العميل بدون توضيح = المبلغ المطلوب كاش (صافي)

## حساب المعادلة:
- الدفعة الاولى: 25% من مبلغ الشراء
- فرق البيع: أقل من 5500 = 15%، من 5500 يبدأ 14% وينقص 1% كل 1000، من 9500+ = 10% ثابت
- الرسوم الادارية: 10% + 100 ريال إضافية إذا أقل من 4000`

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

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-4.1-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    tools: {
      calculateCash: tool({
        description: "حساب تفاصيل السيولة. استخدمها فوراً عندما يذكر العميل أي مبلغ. type=net يعني المبلغ هو الصافي المطلوب كاش. type=purchase يعني مبلغ الشراء.",
        inputSchema: z.object({
          amount: z.number().describe("المبلغ بالريال"),
          type: z.enum(["net", "purchase"]).describe("net = الصافي المطلوب كاش, purchase = مبلغ الشراء"),
        }),
        execute: async ({ amount, type }) => {
          const calc = type === "net" ? calculateAmount(amount) : calculateFromPurchase(amount)
          return calc
        },
      }),
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
    },
    stopWhen: stepCountIs(8),
  })

  return result.toUIMessageStreamResponse()
}
