import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const WHATSAPP_API = "https://graph.facebook.com/v22.0"

function getToken() { return process.env.WHATSAPP_ACCESS_TOKEN || "" }
function getPhoneId() { return process.env.WHATSAPP_PHONE_NUMBER_ID || "960119450521773" }

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// Pre-defined message templates
const TEMPLATES: Record<string, (data?: Record<string, string>) => string> = {
  order_ready: (data) =>
    `هلا ${data?.name || "يالغالي"}!\n\nطلبك رقم ${data?.orderNumber || ""} جاهز والمبلغ بيتحول لحسابك خلال ساعة ان شاء الله.\n\nشكراً لثقتك بليل سول!`,

  order_completed: (data) =>
    `تم تحويل ${data?.amount || ""} ريال لحسابك يالغالي!\n\nرقم الطلب: ${data?.orderNumber || ""}\n\nنتمنى نكون عند حسن ظنك. لو تحب تقيّم الخدمة:\nhttps://liilsol.com/add-review\n\nنشوفك على خير!`,

  order_cancelled: (data) =>
    `مرحبا ${data?.name || ""}\n\nللأسف طلبك رقم ${data?.orderNumber || ""} تم إلغاؤه.\n\nلو تحتاج مساعدة تواصل معنا:\nhttps://wa.me/966567130112`,

  follow_up: (data) =>
    `هلا ${data?.name || "يالغالي"}!\n\nكيف الحال؟ شفت انك تواصلت معنا قبل. لو محتاج سيولة نحن جاهزين نساعدك.\n\nكم تحتاج كاش؟`,

  welcome: () =>
    `هلا والله! معك مطر سحابة غيث ماحسبت حسابها\n\nنحول لك مشتريات التقسيط من تابي وتمارا ومدفوع لكاش بحسابك.\n\nالطريقة بسيطة: تحدد المبلغ > نحدد لك جهاز > تشتريه بالتقسيط > نستلمه أو نبيعه ونحول لك الكاش خلال ساعة.\n\nالدفعة الأولى ندفعها عنك - ما تدفع شي من جيبك!\n\nكم تحتاج كاش؟`,
}

async function sendWhatsApp(to: string, text: string) {
  const res = await fetch(`${WHATSAPP_API}/${getPhoneId()}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", to, type: "text", text: { body: text } }),
  })
  return res.json()
}

export async function POST(req: Request) {
  try {
    const { template, phone, data, customMessage } = await req.json()

    if (!phone) {
      return NextResponse.json({ error: "Phone number required" }, { status: 400 })
    }

    let message = ""

    if (customMessage) {
      message = customMessage
    } else if (template && TEMPLATES[template]) {
      message = TEMPLATES[template](data)
    } else {
      return NextResponse.json({ error: "Template or custom message required" }, { status: 400 })
    }

    // Send via WhatsApp
    const result = await sendWhatsApp(phone, message)

    // Save to conversation
    const supabase = getSupabase()
    const { data: conv } = await supabase
      .from("conversations")
      .select("id, messages")
      .eq("phone", phone)
      .eq("source", "whatsapp")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    if (conv) {
      const msgs = [...((conv.messages as unknown[]) || []), {
        role: "assistant",
        content: message,
        from_admin: true,
        template: template || "custom",
        timestamp: new Date().toISOString(),
      }].slice(-50)

      await supabase.from("conversations").update({
        messages: msgs,
        last_message: message,
        updated_at: new Date().toISOString(),
        mode: "manual",
      }).eq("id", conv.id)
    }

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("[v0] Template send error:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}

// GET available templates
export async function GET() {
  return NextResponse.json({
    templates: [
      { id: "welcome", name: "ترحيب", description: "رسالة ترحيبية مع شرح الخدمة" },
      { id: "order_ready", name: "الطلب جاهز", description: "إبلاغ العميل ان طلبه جاهز" },
      { id: "order_completed", name: "تم التحويل", description: "تأكيد التحويل وطلب تقييم" },
      { id: "order_cancelled", name: "طلب ملغي", description: "إبلاغ العميل بإلغاء الطلب" },
      { id: "follow_up", name: "متابعة", description: "متابعة عميل سابق" },
    ],
  })
}
