import { createClient } from "@supabase/supabase-js"
import { NextResponse, type NextRequest } from "next/server"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET(req: NextRequest) {
  const supabase = getSupabase()
  const visitorId = req.nextUrl.searchParams.get("visitorId")
  if (!visitorId) {
    return NextResponse.json({ messages: [] })
  }

  try {
    const { data: conv } = await supabase
      .from("conversations")
      .select("messages, updated_at")
      .eq("phone", `web-${visitorId}`)
      .single()

    if (!conv || !conv.messages) {
      return NextResponse.json({ messages: [] })
    }

    // Return last 20 messages
    const messages = Array.isArray(conv.messages) ? conv.messages.slice(-20) : []

    return NextResponse.json({
      messages,
      updatedAt: conv.updated_at,
    })
  } catch {
    return NextResponse.json({ messages: [] })
  }
}
