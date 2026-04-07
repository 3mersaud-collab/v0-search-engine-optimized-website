export const maxDuration = 60
export const dynamic = "force-dynamic"

const WHATSAPP_NUMBER = "966590360039"
const GEMINI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? ""
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=${GEMINI_API_KEY}`

const SYSTEM_PROMPT = `اسمك "مطر" - سحابة غيث ماحسبت حسابها. مساعد خدمة مطر لتحويل مشتريات التقسيط الى كاش.

## شخصيتك:
- تتكلم باللهجة النجدية كأنك شخص حقيقي مو بوت
- تختصر - تكتب مثل ما الناس تكتب بالواتساب
- ما تكرر نفسك أبداً
- تستخدم: "هلا والله"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"

## شرح الخدمة:
1. العميل يحدد المبلغ اللي يحتاجه كاش
2. نحن نحدد له الجهاز المطلوب شراؤه بالتقسيط
3. العميل يشتري الجهاز عن طريق تابي أو تمارا أو مدفوع من جرير/اكسترا/نون
4. نحن نستلم الجهاز ونبيعه ونحول الصافي لحسابه خلال أقل من ساعة
- الدفعة الأولى (25%) نحن ندفعها عن العميل - ما يدفع شي من جيبه

## حساب المبالغ:
لما يذكر مبلغ صافي مطلوب، احسب تقريباً:
- قيمة الجهاز = المبلغ × 2.5 (تقريب لأقرب 100)
- قيمة البيع = قيمة الجهاز × 85%
- الدفعة الأولى = قيمة الجهاز × 25%
- الرسوم الإدارية = قيمة الجهاز × 10%
- الصافي = قيمة البيع - الدفعة الأولى - الرسوم

## تدفق المحادثة:

### الترحيب:
"هلا والله! معك مطر سحابة غيث ماحسبت حسابها 🌧️
نحول لك مشتريات التقسيط من تابي وتمارا ومدفوع لكاش.
كم تحتاج كاش (الصافي)؟"

### عند ذكر مبلغ - احسب وقول:
"ابشر يالغالي! عشان توصلك [الصافي] ر.س:
• قيمة الجهاز: [مبلغ الشراء] ر.س
• الرسوم الإدارية: [الرسوم] ر.س
• الدفعة الأولى (نتكفل فيها ✅): [الدفعة] ر.س
**الصافي لك: [الصافي] ر.س**

تبي نكمل؟"

### عند الموافقة:
"ممتاز! تواصل معنا على الواتساب وذكر:
1️⃣ المبلغ اللي تبيه: [الصافي] ر.س
2️⃣ التطبيق: تابي، تمارا، أو مدفوع

👇 اضغط هنا:
https://wa.me/${WHATSAPP_NUMBER}?text=السلام+عليكم+أبي+كاش+الصافي+[الصافي]+ريال"

## قواعد:
- لا تطلب بيانات بنكية - الواتساب يتكفل
- أي رقم = المبلغ المطلوب كاش
- خلك مختصر ومباشر`

function calculateAmount(net: number) {
  let purchase = Math.round((net * 2.5) / 100) * 100
  const sale = Math.round(purchase * 0.85)
  const downPayment = Math.round(purchase * 0.25)
  const adminFee = Math.round(purchase * 0.10)
  const actualNet = sale - downPayment - adminFee
  // تعديل بسيط لتقريب النتيجة
  const diff = net - actualNet
  purchase = Math.round((purchase + diff * 1.5) / 100) * 100
  return { purchase, sale: Math.round(purchase * 0.85), downPayment: Math.round(purchase * 0.25), adminFee: Math.round(purchase * 0.10), net: Math.round(purchase * 0.85) - Math.round(purchase * 0.25) - Math.round(purchase * 0.10) }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function checkRateLimit(id: string): boolean {
  const now = Date.now()
  const l = rateLimitMap.get(id)
  if (!l || now > l.resetAt) { rateLimitMap.set(id, { count: 1, resetAt: now + 60_000 }); return true }
  if (l.count >= 15) return false
  l.count++; return true
}

interface GeminiMessage { role: "user" | "model"; parts: Array<{ text: string }> }

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: Array<{ role: string; content: string }> }
    const visitorId = req.headers.get("x-visitor-id") || "anonymous"

    if (!checkRateLimit(visitorId)) {
      return Response.json({ error: "كثرت الرسائل، انتظر شوي" }, { status: 429 })
    }

    if (!GEMINI_API_KEY) {
      return Response.json({ error: "تواصل معنا على الواتساب: wa.me/" + WHATSAPP_NUMBER }, { status: 500 })
    }

    // تحويل الرسائل لصيغة Gemini
    const geminiMessages: GeminiMessage[] = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content || "" }],
      }))

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: geminiMessages,
      generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
    }

    const geminiRes = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: req.signal,
    })

    if (!geminiRes.ok) {
      const err = await geminiRes.text()
      console.error("Gemini error:", err)
      return Response.json({ error: "تواصل معنا على الواتساب: wa.me/" + WHATSAPP_NUMBER }, { status: 500 })
    }

    const data = await geminiRes.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "هلا! كيف أقدر أساعدك؟"

    // رد بصيغة بسيطة يفهمها الفرونت
    return Response.json({ role: "assistant", content: text })

  } catch (error) {
    console.error("Chat error:", error)
    return Response.json({ error: "حصل خطأ، تواصل معنا: wa.me/" + WHATSAPP_NUMBER }, { status: 500 })
  }
}
