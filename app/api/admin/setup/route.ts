import { createClient as createServiceClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password, secret } = await request.json()

    if (secret !== "liilsol2024setup") {
      return NextResponse.json({ error: "غير مصرح" }, { status: 403 })
    }

    // Use service role key to create admin user with confirmed email
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // First try to delete existing user with same email
    const { data: users } = await supabase.auth.admin.listUsers()
    const existingUser = users?.users?.find(u => u.email === email)
    if (existingUser) {
      await supabase.auth.admin.deleteUser(existingUser.id)
    }

    // Create user with email_confirm: true to skip email verification
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role: "admin" },
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, user: data.user })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "حدث خطأ"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
