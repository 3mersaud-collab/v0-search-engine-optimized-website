import { createClient } from "@supabase/supabase-js"
import { NextResponse, type NextRequest } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// POST: Link a visitor to a phone number
export async function POST(req: NextRequest) {
  try {
    const { visitorId, phone, name } = await req.json()
    if (!visitorId || !phone) {
      return NextResponse.json({ error: "Missing visitorId or phone" }, { status: 400 })
    }

    // Clean phone number - keep only digits
    const cleanPhone = phone.replace(/\D/g, "")
    if (cleanPhone.length < 9) {
      return NextResponse.json({ error: "رقم الجوال غير صحيح" }, { status: 400 })
    }

    // Check if there's an existing conversation with this visitor ID
    const { data: existingByVisitor } = await supabase
      .from("conversations")
      .select("id, messages, phone")
      .eq("phone", `web-${visitorId}`)
      .single()

    // Check if there's an existing conversation with this phone number from website
    const { data: existingByPhone } = await supabase
      .from("conversations")
      .select("id, messages")
      .eq("phone", cleanPhone)
      .eq("source", "website")
      .single()

    if (existingByVisitor && existingByPhone && existingByVisitor.id !== existingByPhone.id) {
      // Merge: combine messages from both conversations
      const mergedMessages = [
        ...(Array.isArray(existingByPhone.messages) ? existingByPhone.messages : []),
        ...(Array.isArray(existingByVisitor.messages) ? existingByVisitor.messages : []),
      ].slice(-50)

      await supabase
        .from("conversations")
        .update({
          messages: mergedMessages,
          customer_name: name || "عميل الموقع",
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingByPhone.id)

      // Delete the visitor-based conversation
      await supabase
        .from("conversations")
        .delete()
        .eq("id", existingByVisitor.id)

      return NextResponse.json({ success: true, merged: true, phone: cleanPhone })
    }

    if (existingByVisitor) {
      // Update the visitor conversation with the real phone number
      await supabase
        .from("conversations")
        .update({
          phone: cleanPhone,
          customer_name: name || "عميل الموقع",
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingByVisitor.id)

      return NextResponse.json({ success: true, phone: cleanPhone })
    }

    return NextResponse.json({ success: true, phone: cleanPhone })
  } catch (error) {
    console.error("Identify error:", error)
    return NextResponse.json({ error: "حصل خطأ" }, { status: 500 })
  }
}
