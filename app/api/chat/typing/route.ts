import { NextResponse, type NextRequest } from "next/server"

// In-memory store for typing status (resets on server restart - good enough for this use case)
const typingStatus = new Map<string, { isTyping: boolean; timestamp: number }>()

// Clean up stale entries every 30 seconds
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of typingStatus.entries()) {
    if (now - value.timestamp > 10000) {
      typingStatus.delete(key)
    }
  }
}, 30000)

// POST: Update typing status from client
export async function POST(req: NextRequest) {
  try {
    const { visitorId, isTyping } = await req.json()
    if (!visitorId) return NextResponse.json({ error: "Missing visitorId" }, { status: 400 })

    typingStatus.set(visitorId, { isTyping: !!isTyping, timestamp: Date.now() })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

// GET: Admin checks who's typing
export async function GET() {
  const now = Date.now()
  const active: string[] = []

  for (const [key, value] of typingStatus.entries()) {
    // Consider typing status valid for 5 seconds
    if (value.isTyping && now - value.timestamp < 5000) {
      active.push(key)
    }
  }

  return NextResponse.json({ typing: active })
}
