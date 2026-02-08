import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 })
    }

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: "خطأ في جلب الطلبات" }, { status: 500 })
    }

    return NextResponse.json({ orders: data })
  } catch {
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 })
    }

    const { id, status, notes } = await request.json()

    const updateData: Record<string, string> = {}
    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    const { data, error } = await supabase
      .from("orders")
      .update(updateData)
      .eq("id", id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "خطأ في تحديث الطلب" }, { status: 500 })
    }

    return NextResponse.json({ success: true, order: data })
  } catch {
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 })
    }

    const { id } = await request.json()

    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("id", id)

    if (error) {
      return NextResponse.json({ error: "خطأ في حذف الطلب" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 })
  }
}
