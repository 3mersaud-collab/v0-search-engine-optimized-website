import {
  consumeStream,
  convertToModelMessages,
  streamText,
  tool,
  type UIMessage,
} from "ai"
import { z } from "zod"

export const maxDuration = 30

const SYSTEM_PROMPT = `أنت مساعد ذكي لموقع liilsol (ليل سول) - خدمة سيولة فورية من تابي وتمارا ومدفوع في السعودية.

## معلومات الخدمة:
- نقوم بشراء جوال أو بيعه للعميل عبر تابي أو تمارا أو مدفوع
- نحول الكاش مباشرة لحساب العميل البنكي خلال ساعتين
- خدمة مرخصة بسجل تجاري في الرياض

## كيف تعمل الخدمة:
1. العميل يختار التطبيق (تابي/تمارا/مدفوع)
2. يحدد المبلغ المطلوب
3. يذهب لمتجر (اكسترا أو نون أو المنيع) ويشتري جوال بالتقسيط
4. نستلم الجوال ونبيعه ونحول الكاش لحسابه

## طريقة الحساب (على 4 أقساط):
- الدفعة الأولى: 25% من مبلغ الشراء (يدفعها العميل)
- فرق البيع: يعتمد على المبلغ:
  - أقل من 5500: 15%
  - من 5500: تبدأ 14% وتنقص 1% كل 1000 ريال
  - من 9500 وأكثر: 10% ثابت
- الرسوم الإدارية: 10% من مبلغ الشراء + 100 ريال إضافية إذا المبلغ أقل من 4000
- الصافي = مبلغ البيع - الرسوم - الدفعة الأولى

مثال: شراء بـ 5000 ريال:
- مبلغ البيع = 5000 - 15% = 4250 ريال
- الرسوم = 500 ريال (10%)
- الدفعة الأولى = 1250 ريال (25%)
- الصافي المستلم = 4250 - 500 - 1250 = 2500 ريال

ملاحظة مهمة: هذه الحسبة مبنية على 4 أقساط. بعد التقديم قد تتغير إذا زاد عدد الدفعات والفرق يكون لصالح العميل بدون رسوم إضافية.

## المتاجر المتاحة:
- اكسترا: https://www.extra.com
- نون: https://www.noon.com
- المنيع: https://www.almunayes.com.sa

## التواصل:
- واتساب: https://wa.me/966590360039
- الموقع: https://liilsol.com

## صفحات الموقع المهمة:
- صفحة الطلب: [اطلب سيولة](/order)
- حاسبة السيولة: [احسب الكاش](/calculator) أو قسم الحاسبة في الصفحة الرئيسية
- تتبع الطلب: [تتبع طلبك](/track)
- التقييمات: [آراء العملاء](/reviews)

## البحث في اكسترا:
- لديك أداة searchExtra تمكنك من البحث في متجر اكسترا عن المنتجات والأسعار
- عندما يسأل العميل عن سعر جهاز معين أو يريد يعرف وش يقدر يشتري بمبلغ معين، استخدم الأداة
- اعرض النتائج بشكل واضح مع الأسعار والروابط المباشرة
- بعد عرض المنتج، احسب له الصافي اللي يستلمه لو اشترى هذا المنتج

## تعليمات:
- كن ودوداً ومهنياً واستخدم عربي سعودي
- أجب بشكل مختصر ومفيد
- عند ذكر الروابط اكتبها بصيغة markdown: [النص](الرابط)
- إذا سأل العميل عن حساب مبلغ معين، احسب له بالتفصيل
- إذا أراد التقديم، وجهه لـ [صفحة الطلب](/order) أو [الواتساب](https://wa.me/966590360039)
- إذا سأل عن جهاز أو سعر، استخدم أداة البحث في اكسترا
- شجع العميل على التقديم عبر الموقع لأنه يمنح أولوية
- استخدم أرقام عربية عادية وليس هندية`

async function searchExtra(query: string) {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/extra-search?q=${encodeURIComponent(query)}`, {
      signal: AbortSignal.timeout(10000),
    })
    return await res.json()
  } catch {
    return {
      products: [],
      searchUrl: `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`,
      query,
    }
  }
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-4o-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
    tools: {
      searchExtra: tool({
        description: "البحث عن منتجات وأجهزة في متجر اكسترا مع الأسعار. استخدمها عندما يسأل العميل عن سعر جهاز أو يريد معرفة المنتجات المتوفرة.",
        inputSchema: z.object({
          query: z.string().describe("كلمة البحث مثل iPhone 15 أو Samsung Galaxy S24"),
        }),
        execute: async ({ query }) => {
          const data = await searchExtra(query)
          return {
            products: data.products,
            searchUrl: data.searchUrl,
            message: data.products.length > 0
              ? `وجدت ${data.products.length} منتج في اكسترا`
              : `لم أجد نتائج محددة، لكن يمكنك البحث مباشرة في اكسترا`,
          }
        },
      }),
    },
    maxSteps: 3,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    onFinish: async ({ isAborted }) => {
      if (isAborted) return
    },
    consumeSseStream: consumeStream,
  })
}
