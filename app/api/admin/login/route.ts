import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 })
    }

    return NextResponse.json({ success: true, user: data.user })
  } catch {
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 })
  }
}
