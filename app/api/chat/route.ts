export const maxDuration = 60
export const dynamic = "force-dynamic"

const WHATSAPP_NUMBER = "966548613381"
const GEMINI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? ""
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

const SYSTEM_PROMPT = `أنت "مطر" - خدمة سيولة نقدية من تابي وتمارا.

## شخصيتك:
- تكلّم بلهجة نجدية طبيعية، مختصر، مثل الواتساب
- لا تكرر نفسك، لا تستخدم كلمات رسمية
- تستخدم: "هلا"، "ابشر"، "لا تشيل هم"، "يالغالي"، "حياك"، "الحين"

## الخدمة:
العميل يحدد الصافي المطلوب → نحن نحدد الجهاز → يشتريه بالتقسيط من اكسترا/جرير → نبيعه ونحول الصافي لحسابه خلال ساعة.
- الدفعة الأولى (25%) نتكفل بها ونستردها من البيع
- التحويل خلال أقل من ساعة
- **مدفوع: موقف مؤقت — غير متاحة حالياً**

## حساب المبالغ (مهم جداً):
عند ذكر مبلغ احسب:
- قيمة الجهاز = الصافي ÷ 0.50 (تقريب لأقرب 100)
- مبلغ البيع = قيمة الجهاز × 85%
- الدفعة الأولى = قيمة الجهاز × 25%
- الرسوم الإدارية = قيمة الجهاز × 10%
- الصافي الفعلي = مبلغ البيع - الدفعة الأولى - الرسوم

## تدفق الردود الكامل:

**الترحيب:**
هلا والله! معك مطر 🌧️
نحول لك مشتريات التقسيط من تابي وتمارا لكاش في حسابك خلال أقل من ساعة.
**كم تحتاج كاش (الصافي)؟**

**عند ذكر مبلغ:**
احسب ثم قل:
ابشر يالغالي! التفاصيل:
• قيمة الجهاز: [X] ر.س
• مبلغ البيع: [X] ر.س  
• الرسوم الإدارية: [X] ر.س
• الدفعة الأولى (نتكفل فيها ✅): [X] ر.س
**الصافي لك: [X] ر.س**

تبي نكمل؟ وعندك تابي أو تمارا؟

**عند الموافقة أو ذكر تابي:**
ممتاز! خطوة بسيطة قبل نرسل لك رابط الدفع 👇

**خطوات تابي:**
١. افتح اكسترا أو جرير واختر جهاز بقيمة [قيمة الجهاز] ر.س
٢. تابع حتى صفحة الدفع (لا تكمل)
٣. اختر **tabby** — سينقلك لصفحة تابي تلقائياً
٤. بعد ظهور جدول الأقساط → **صوّره وأرسله لنا** ثم أقفل الصفحة

بعد ما نستلم الصورة، نرسل لك رابط الدفع الفعلي ✅
[أرسل الصورة على الواتساب 📲](https://wa.me/WHATSAPP_NUMBER?text=السلام+عليكم+أبي+أرسل+صورة+تأكيد+تابي)

**عند ذكر تمارا:**
ممتاز! خطوة بسيطة قبل نرسل لك رابط الدفع 👇

**خطوات تمارا:**
١. افتح اكسترا أو جرير واختر جهاز بقيمة [قيمة الجهاز] ر.س
٢. من صفحة الدفع اختر **tamara** ثم "ادفع بعد"
٣. بعد ظهور جدول الأقساط اختر **"إضافة بطاقة جديدة"** (ممنوع Apple Pay أو بطاقة محفوظة)
٤. بعد الانتقال لصفحة البنك (OTP) → **صوّرها وأرسلها لنا** ثم أقفل الصفحة

⚠️ هذي الطريقة الوحيدة للتأكد أن تمارا قبلت طلبك
[أرسل الصورة على الواتساب 📲](https://wa.me/WHATSAPP_NUMBER?text=السلام+عليكم+أبي+أرسل+صورة+تأكيد+تمارا)

**لماذا هذي الطريقة؟**
تابي وتمارا يرفعون الحد الائتماني ونسبة القبول للمتاجر الكبرى مثل اكسترا وجرير — وتوفر عروض أفضل (تمارا حتى 24 قسطاً، تابي حتى 10 أشهر)

**قواعد:**
- لا تطلب بيانات بنكية أبداً
- أي رقم = المبلغ المطلوب كاش
- مدفوع: إذا سأل قل "متوقفة مؤقتاً، نعمل على تابي وتمارا"
- إذا سأل عن الأمان: خدمة موثوقة وعمليات تتعدى 100 ألف ريال
- إذا سأل عن الوقت: أقل من ساعة بعد استلام الصورة`

function calc(net: number): { purchase: number; sale: number; down: number; admin: number; actual: number } {
  let purchase = Math.round((net / 0.50) / 100) * 100
  for (let i = 0; i < 10; i++) {
    const sale = Math.round(purchase * 0.85)
    const down = Math.round(purchase * 0.25)
    const admin = Math.round(purchase * 0.10)
    const actual = sale - down - admin
    const diff = net - actual
    if (Math.abs(diff) < 30) break
    purchase = Math.round((purchase + diff * 1.8) / 100) * 100
    purchase = Math.max(500, purchase)
  }
  const sale = Math.round(purchase * 0.85)
  const down = Math.round(purchase * 0.25)
  const admin = Math.round(purchase * 0.10)
  const actual = sale - down - admin
  return { purchase, sale, down, admin, actual }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function checkRateLimit(id: string): boolean {
  const now = Date.now()
  const l = rateLimitMap.get(id)
  if (!l || now > l.resetAt) { rateLimitMap.set(id, { count: 1, resetAt: now + 60_000 }); return true }
  if (l.count >= 20) return false
  l.count++
  return true
}

interface InMessage {
  role: string
  content?: string
  parts?: Array<{ type: string; text?: string }>
}

function extractText(m: InMessage): string {
  if (m.content) return m.content
  if (Array.isArray(m.parts)) return m.parts.filter(p => p.type === "text").map(p => p.text || "").join("\n")
  return ""
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: InMessage[] }
    const visitorId = req.headers.get("x-visitor-id") || "anonymous"

    if (!checkRateLimit(visitorId)) {
      return Response.json({ messages: [{ role: "assistant", content: "كثرت الرسائل، انتظر شوي وحاول مرة ثانية 🙏" }] }, { status: 429 })
    }

    const normalized = (messages || [])
      .map((m) => ({ role: m.role === "assistant" ? "model" : "user", text: extractText(m) }))
      .filter((m) => m.text.trim())

    const lastUserText = [...normalized].reverse().find((m) => m.role === "user")?.text || ""

    // استخرج أي مبلغ من الرسالة الأخيرة وأضف الحساب للـ system
    let calcContext = ""
    const numMatch = lastUserText.replace(/الف|ألف/gi, "000").replace(/ألفين|الفين/gi, "2000").match(/\d{3,6}/)
    if (numMatch) {
      const net = Number(numMatch[0])
      if (net >= 200 && net <= 50000) {
        const r = calc(net)
        const waMsg = encodeURIComponent(`السلام عليكم، أبي كاش ${r.actual} ريال`)
        const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`
        calcContext = `\n\n## الحساب الجاهز للمبلغ المطلوب (${net} ر.س):
• قيمة الجهاز: ${r.purchase.toLocaleString()} ر.س
• مبلغ البيع: ${r.sale.toLocaleString()} ر.س
• الرسوم الإدارية: ${r.admin.toLocaleString()} ر.س
• الدفعة الأولى (نتكفل فيها ✅): ${r.down.toLocaleString()} ر.س
**الصافي الفعلي لك: ${r.actual.toLocaleString()} ر.س**

رابط الواتساب الجاهز للإرسال: [تواصل على الواتساب 📲](${waLink})

استخدم هذه الأرقام بالضبط في ردك ولا تغيّرها. وأضف رابط الواتساب عند الموافقة.`
      }
    }

    if (!GEMINI_API_KEY) {
      return Response.json({ messages: [{ role: "assistant", content: `هلا! تواصل معنا على الواتساب مباشرة 👇\n[تواصل على الواتساب 📲](https://wa.me/${WHATSAPP_NUMBER})` }] })
    }

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT.replaceAll("WHATSAPP_NUMBER", WHATSAPP_NUMBER) + calcContext }] },
      contents: normalized.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
      generationConfig: { temperature: 0.65, maxOutputTokens: 450 },
    }

    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: req.signal,
    })

    if (!res.ok) {
      const waLink = `https://wa.me/${WHATSAPP_NUMBER}`
      return Response.json({ messages: [{ role: "assistant", content: `هلا! تواصل معنا مباشرة:\n[واتساب 📲](${waLink})` }] })
    }

    const data = await res.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("\n").trim()
      || `هلا! كيف أقدر أساعدك؟ كم تحتاج كاش؟`

    return Response.json({ messages: [{ role: "assistant", content: text }] })
  } catch {
    return Response.json({ messages: [{ role: "assistant", content: `هلا! تواصل معنا على الواتساب:\n[واتساب 📲](https://wa.me/${WHATSAPP_NUMBER})` }] })
  }
}
