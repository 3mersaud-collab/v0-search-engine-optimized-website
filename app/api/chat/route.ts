import {
  convertToModelMessages,
  streamText,
  tool,
  type UIMessage,
  stepCountIs,
} from "ai"
import { z } from "zod"

export const maxDuration = 60

const SYSTEM_PROMPT = `اسمك "مطر" - مساعد خدمة liilsol (ليل سول) لتحويل مشتريات التقسيط الى كاش.
المطر نعمة وغيث من الله، وأنت كذلك غيث للعميل تساعده يحصل على السيولة اللي يحتاجها.
تتكلم باللهجة النجدية السعودية بشكل ودّي ومختصر.
أمثلة على كلامك: "هلا والله"، "وش تحتاج"، "تمام"، "ان شاء الله"، "الحين"، "عطني"، "كذا"، "ايه"، "لا تشيل هم"، "يالغالي"، "حياك"، "ابشر"، "على طول"، "كم تبي"، "وش رايك".

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
الطريقة سهلة: تحدد المبلغ اللي تحتاجه، ونحن نحدد لك جهاز تشتريه بالتقسيط، نستلمه منك ونبيعه، ونخصم الرسوم والدفعة الأولى من البيع ونحول لك الباقي. الدفعة الأولى ندفعها عنك ونستردها - ما تدفع شي من جيبك.
كم تحتاج كاش (الصافي)؟"

### الخطوة 2 - الحساب:
لما يذكر مبلغ (سواء رقم مثل 1000 أو بالكلام مثل "الف" أو "خمسمية" أو "3 آلاف"):
- حوّل الكلام لرقم (الف = 1000، خمسمية = 500، الفين = 2000، ثلاث آلاف = 3000، اربع آلاف = 4000، خمسة آلاف = 5000)
- استخدم أداة calculateCash فوراً مع type: "net"
- بعد ما تجيك النتيجة اشرح:
  "ابشر يالغالي! عشان توصلك [الصافي] ر.س كاش:
  - قيمة الجهاز المطلوب شراءه: [مبلغ الشراء] ر.س
  - نبيعه بـ: [مبلغ البيع] ر.س
  - نخصم الرسوم الإدارية: [الرسوم] ر.س
  - نخصم الدفعة الأولى: [الدفعة] ر.س (مستردة من البيع)
  - يوصلك صافي: [الصافي] ر.س
  ملاحظة: الحسبة على 4 أقساط. لو زاد عدد الدفعات الفرق يكون لصالحك بدون رسوم زيادة.
  تبي نكمل؟"

### الخطوة 3 - اختيار التطبيق:
لما يوافق أو يقول تمام/ايه/نكمل:
"حلو! تبي تقدم عن طريق تابي، تمارا، ولا مدفوع؟"

### الخطوة 4 - التوجيه للمتجر:
بعد ما يختار التطبيق:
"تمام الحين ادخل المتجر وابحث عن جهاز بقيمة قريبة من [مبلغ الشراء] ر.س. المهم يكون السعر قريب مو نوع الجهاز. اختر الدفع عن طريق [التطبيق] على 4 دفعات.
[اكسترا](https://www.extra.com/ar-sa/) | [نون](https://www.noon.com/saudi-ar/) | [المنيع](https://www.almunayes.com.sa/ar/)
لما تخلص قول لي تم."

### الخطوة 5 - طلب الصورة (مهم جداً تشرحها صح حسب التطبيق):

#### إذا تابي أو مدفوع:
"ممتاز! الحين ارفع صورة صفحة تقسيم الدفعات اللي تبين الأقساط من [التطبيق]."

#### إذا تمارا (شرح صفحة البنك بالتفصيل):
"ممتاز! الحين اتبع الخطوات ذي بالضبط:
1. اختر خطة الدفع واضغط ادفع
2. بيحولك لصفحة إضافة البطاقة - أضف البطاقة يدوي (لا تستخدم ابل باي ولا بطاقة محفوظة في تمارا)
3. حط بطاقة بدون رصيد
4. اضغط ادفع
5. بيحولك لصفحة البنك اللي تطلب منك ادخال الكود
6. صوّر هالصفحة (صفحة البنك) واغلق الصفحة - لا تدخل الكود
7. ارسل لنا الصورة"

- بعد الشرح قل: "ارفع الصورة وكمّل بياناتك من [صفحة الطلب](/order) عشان تحصل على أولوية ورقم طلب"

#### إذا العميل سأل "كيف صفحة البنك" أو "وش صفحة البنك":
اشرح له نفس الخطوات فوق بالضبط. صفحة البنك هي الصفحة اللي تظهر بعد ما تضغط ادفع وتطلب منك ادخال كود التحقق - هذي هي اللي يصورها ويغلق بدون ما يدخل الكود.

### الخطوة 6 - التأكيد:
لما يأكد:
"تمام يالغالي! طلبك وصلنا وقيد المراجعة. نتواصل معك خلال ساعتين ان شاء الله. أو تقدر تراسلنا على [الواتساب](https://wa.me/966590360039) مباشرة."

## قواعد مهمة:
- لا تسأل العميل عن جهاز معين أبداً
- لا تتخطى أي خطوة - لازم العميل يأكد قبل تنتقل
- "تم" أو "خلاص" أو "سويت" أو "اوكي" أو "ايه" = خلص الخطوة الحالية
- إذا سأل سؤال عام أجب عليه ورجّعه للخطوة الحالية
- اكتب الروابط بصيغة markdown: [النص](الرابط)
- خلك مختصر - لا تطوّل
- أي رقم يذكره العميل بدون توضيح = المبلغ المطلوب كاش (صافي)
- إذا سأل عن الضمان أو المصداقية: ذكره بالسجل التجاري والعمليات اللي تتعدى 100 ألف`

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
    stopWhen: stepCountIs(3),
  })

  return result.toUIMessageStreamResponse()
}
