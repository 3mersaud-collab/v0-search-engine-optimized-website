import { NextResponse } from "next/server"

const WHATSAPP_API = "https://graph.facebook.com/v22.0"
const ADMIN_PHONE = "966503367637"

async function sendAdminWhatsApp(message: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID || "960119450521773"
  if (!token) return null

  try {
    const res = await fetch(`${WHATSAPP_API}/${phoneId}/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: ADMIN_PHONE,
        type: "text",
        text: { body: message },
      }),
    })
    return res.json()
  } catch {
    return null
  }
}

// Notify admin about important events
export async function POST(req: Request) {
  try {
    const { type, title, body, data } = await req.json()

    let message = ""

    switch (type) {
      case "new_customer":
        message = `عميل جديد تواصل عبر واتساب\nالرقم: ${data?.phone || "غير معروف"}\n\nافتح لوحة الإدارة:\nhttps://liilsol.com/admin/conversations`
        break
      case "new_order":
        message = `طلب جديد!\n${title}\n${body}\n\nافتح الطلبات:\nhttps://liilsol.com/admin/orders`
        break
      case "manual_message":
        message = `رسالة في وضع يدوي\n${body}\n\nافتح المحادثات:\nhttps://liilsol.com/admin/conversations`
        break
      case "image_received":
        message = `العميل أرسل صورة (سكرين شوت)\n${body}\n\nافتح المحادثات:\nhttps://liilsol.com/admin/conversations`
        break
      default:
        message = `${title}\n${body}`
    }

    const result = await sendAdminWhatsApp(message)

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("[v0] Admin notify error:", error)
    return NextResponse.json({ error: "Failed to notify" }, { status: 500 })
  }
}
