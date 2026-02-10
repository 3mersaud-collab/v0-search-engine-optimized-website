import { NextResponse } from "next/server"

// Test endpoint to verify WhatsApp configuration
export async function GET() {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN

  // Test sending a message to verify the token works
  let sendTest = null
  if (token && phoneId) {
    try {
      // Just verify the token by checking phone number info
      const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}`, {
        headers: { Authorization: `Bearer ${token}` },
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
      tokenLength: token?.length || 0,
      phoneNumberId: phoneId || "NOT SET",
      verifyToken: verifyToken ? "SET" : "NOT SET (using fallback)",
    },
    phoneInfo: sendTest,
    timestamp: new Date().toISOString(),
  })
}
