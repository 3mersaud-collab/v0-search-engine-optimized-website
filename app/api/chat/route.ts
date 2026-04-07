export const maxDuration = 60
export const dynamic = "force-dynamic"

const WHATSAPP_NUMBER = "966590360039"
const GEMINI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? ""
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

const SYSTEM_PROMPT = `اسمك "مطر" - سحابة غيث ماحسبت حسابها. مساعد مختصر ولطيف لخدمة تحويل مشتريات التقسيط الى كاش.
- تكلّم باللهجة النجدية وباختصار.
- لا تطلب بيانات بنكية ولا ترفع طلب داخل الموقع.
- إذا طلب العميل مبلغ، احسب له بشكل تقريبي ثم وجّهه للواتساب فقط.
- إذا وافق العميل، أعطه رابط واتساب مباشر.
- لا تستخدم أدوات داخلية ولا تذكر submitOrder أو trackOrder.

الترحيب المناسب:
هلا والله! معك مطر سحابة غيث ماحسبت حسابها 🌧️
نحسب لك المبلغ ونكمل معك على الواتساب مباشرة.
كم تحتاج كاش؟`

function calc(net: number) {
  let purchase = Math.round((net * 2.5) / 100) * 100
  for (let i = 0; i < 8; i++) {
    const sale = Math.round(purchase * 0.85)
    const down = Math.round(purchase * 0.25)
    const admin = Math.round(purchase * 0.10)
    const actual = sale - down - admin
    const diff = net - actual
    if (Math.abs(diff) < 50) break
    purchase = Math.round((purchase + diff * 1.5) / 100) * 100
  }
  const sale = Math.round(purchase * 0.85)
  const down = Math.round(purchase * 0.25)
  const admin = Math.round(purchase * 0.10)
  const actual = sale - down - admin
  return { purchase, sale, down, admin, actual }
}

function fallbackReply(lastUserText: string) {
  const txt = lastUserText || ""
  const match = txt.match(/\d{3,5}/)
  if (match) {
    const amount = Number(match[0])
    const r = calc(amount)
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`السلام عليكم، أبي كاش ${amount} ريال`)}`
    return `ابشر يالغالي!\n\nعشان توصلك تقريباً ${r.actual.toLocaleString()} ر.س:\n• قيمة الجهاز: ${r.purchase.toLocaleString()} ر.س\n• قيمة البيع: ${r.sale.toLocaleString()} ر.س\n• الرسوم الإدارية: ${r.admin.toLocaleString()} ر.س\n• الدفعة الأولى (نتكفل فيها): ${r.down.toLocaleString()} ر.س\n\nإذا مناسب لك، كمل معنا على الواتساب مباشرة:\n${wa}`
  }
  return `هلا والله! معك مطر 🌧️\nنحسب لك المبلغ ونكمل معك على الواتساب مباشرة.\n\nارسل لي كم تحتاج كاش بالأرقام مثل: 2000 أو 3500.`
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function checkRateLimit(id: string): boolean {
  const now = Date.now()
  const l = rateLimitMap.get(id)
  if (!l || now > l.resetAt) { rateLimitMap.set(id, { count: 1, resetAt: now + 60_000 }); return true }
  if (l.count >= 15) return false
  l.count++
  return true
}

interface InMessage {
  role: string
  content?: string
  parts?: Array<{ type: string; text?: string }>
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: InMessage[] }
    const visitorId = req.headers.get("x-visitor-id") || "anonymous"

    if (!checkRateLimit(visitorId)) {
      return Response.json({ messages: [{ role: "assistant", content: "كثرت الرسائل، انتظر شوي وحاول مرة ثانية" }] }, { status: 429 })
    }

    const normalized = (messages || []).map((m) => {
      const textFromParts = Array.isArray(m.parts)
        ? m.parts.filter((p) => p.type === "text").map((p) => p.text || "").join("\n")
        : ""
      return {
        role: m.role === "assistant" ? "model" : "user",
        text: m.content || textFromParts || "",
      }
    }).filter((m) => m.text.trim())

    const lastUserText = [...normalized].reverse().find((m) => m.role === "user")?.text || ""

    if (!GEMINI_API_KEY) {
      const text = fallbackReply(lastUserText)
      return Response.json({ messages: [{ role: "assistant", content: text }] })
    }

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: normalized.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
      generationConfig: { temperature: 0.7, maxOutputTokens: 400 },
    }

    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: req.signal,
    })

    if (!res.ok) {
      const text = fallbackReply(lastUserText)
      return Response.json({ messages: [{ role: "assistant", content: text }] })
    }

    const data = await res.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("\n").trim() || fallbackReply(lastUserText)

    return Response.json({ messages: [{ role: "assistant", content: text }] })
  } catch {
    return Response.json({ messages: [{ role: "assistant", content: "هلا! تواصل معنا على الواتساب مباشرة: https://wa.me/966590360039" }] })
  }
}
