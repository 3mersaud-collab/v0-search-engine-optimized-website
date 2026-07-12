import { NextResponse } from "next/server"

// Test endpoint to verify WhatsApp configuration and send test message
export async function GET() {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID || "960119450521773"
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "liilsol-matar-verify-2024"

  // Step 1: Check phone number info
  let phoneInfo = null
  if (token) {
    try {
      const res = await fetch(`https://graph.facebook.com/v22.0/${phoneId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      phoneInfo = await res.json()
    } catch (e) {
      phoneInfo = { error: String(e) }
    }
  }

  // Step 2: Send a test message
  let sendTest = null
  if (token) {
    try {
      const res = await fetch(`https://graph.facebook.com/v22.0/${phoneId}/messages`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "966503367637",
          type: "text",
          text: { body: "هلا والله! مطر شغال الحين على الواتساب" },
        }),
      })
      sendTest = await res.json()
    } catch (e) {
      sendTest = { error: String(e) }
    }
  }

  return NextResponse.json({
    status: "ok",
    config: {
      hasAccessToken: !!token,
      tokenPrefix: token ? token.slice(0, 8) + "..." : "MISSING",
      phoneNumberId: phoneId,
      verifyToken: verifyToken ? "SET" : "MISSING",
    },
    phoneInfo,
    sendTest,
    timestamp: new Date().toISOString(),
  })
}
