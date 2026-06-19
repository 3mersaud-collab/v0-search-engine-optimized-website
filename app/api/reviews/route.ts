import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// GET: جلب كل التقييمات المعتمدة
export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("customer_reviews")
      .select("id, name, rating, comment, app_type, created_at")
      .order("created_at", { ascending: false })

    if (error) {
      // إذا الجدول ما موجود بعد، ارجع array فاضي
      if (error.code === "42P01") {
        return NextResponse.json([])
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data ?? [])
  } catch (err) {
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 })
  }
}

// POST: حفظ تقييم جديد
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, rating, comment, app_type } = body

    if (!name || !rating || !app_type) {
      return NextResponse.json(
        { error: "الاسم والتقييم والتطبيق مطلوبين" },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "التقييم يجب أن يكون بين 1 و5" }, { status: 400 })
    }

    const supabase = await createClient()
    const { data, error } = await supabase
      .from("customer_reviews")
      .insert([
        {
          name: name.trim(),
          rating: Number(rating),
          comment: (comment ?? "").trim(),
          app_type,
        },
      ])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, review: data }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 })
  }
}
