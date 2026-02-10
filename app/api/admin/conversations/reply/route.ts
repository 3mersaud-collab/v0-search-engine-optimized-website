import { createClient } from "@/lib/supabase/server"
import { createClient as createServiceClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

function getServiceSupabase() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

async function sendWhatsAppMessage(phoneId: string, to: string, text: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  if (!token) return { error: "No access token" }
  const res = await fetch(`https://graph.facebook.com/v22.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", to, type: "text", text: { body: text } }),
  })
  return res.json()
}

// POST: Send a reply from admin via WhatsApp
export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { conversationId, message } = await req.json()
  if (!conversationId || !message) {
    return NextResponse.json({ error: "Missing conversationId or message" }, { status: 400 })
  }

  const serviceSupabase = getServiceSupabase()

  // Get conversation
  const { data: conv } = await serviceSupabase
    .from("conversations")
    .select("*")
    .eq("id", conversationId)
    .single()

  if (!conv) return NextResponse.json({ error: "Conversation not found" }, { status: 404 })

  // Send via WhatsApp if source is whatsapp
  let sendResult = null
  if (conv.source === "whatsapp" && conv.phone) {
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID || "960119450521773"
    sendResult = await sendWhatsAppMessage(phoneId, conv.phone, message)
  }

  // Save message to conversation
  const existing = (conv.messages as unknown[]) || []
  const updatedMessages = [
    ...existing,
    { role: "assistant", content: message, timestamp: new Date().toISOString(), from_admin: true }
  ].slice(-50)

  await serviceSupabase
    .from("conversations")
    .update({
      messages: updatedMessages,
      last_message: message,
      mode: "manual",
      updated_at: new Date().toISOString(),
    })
    .eq("id", conversationId)

  return NextResponse.json({ success: true, sendResult })
}

// PATCH: Toggle conversation mode (bot/manual)
export async function PATCH(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { conversationId, mode } = await req.json()
  if (!conversationId || !["bot", "manual"].includes(mode)) {
    return NextResponse.json({ error: "Invalid mode" }, { status: 400 })
  }

  const serviceSupabase = getServiceSupabase()
  await serviceSupabase
    .from("conversations")
    .update({ mode, updated_at: new Date().toISOString() })
    .eq("id", conversationId)

  return NextResponse.json({ success: true, mode })
}
