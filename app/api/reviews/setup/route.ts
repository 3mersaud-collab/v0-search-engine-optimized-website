import { createClient as createServiceClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { secret } = await request.json()
    if (secret !== "liilsol2024setup") {
      return NextResponse.json({ error: "غير مصرح" }, { status: 403 })
    }

    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // إنشاء جدول التقييمات
    const { error } = await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS customer_reviews (
          id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
          name text NOT NULL,
          rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
          comment text DEFAULT '',
          app_type text NOT NULL,
          created_at timestamptz DEFAULT now()
        );
        ALTER TABLE customer_reviews ENABLE ROW LEVEL SECURITY;
        CREATE POLICY IF NOT EXISTS "allow_insert" ON customer_reviews FOR INSERT WITH CHECK (true);
        CREATE POLICY IF NOT EXISTS "allow_select" ON customer_reviews FOR SELECT USING (true);
      `,
    })

    if (error) {
      // جرب بطريقة ثانية — مباشر
      const { error: err2 } = await supabase
        .from("customer_reviews")
        .insert([{ name: "__test__", rating: 5, comment: "", app_type: "تابي" }])
        
      if (!err2) {
        // الجدول موجود — احذف التجربة
        await supabase.from("customer_reviews").delete().eq("name", "__test__")
        return NextResponse.json({ success: true, message: "الجدول موجود مسبقاً" })
      }

      return NextResponse.json({ error: error.message, hint: "قد تحتاج إنشاء الجدول يدوياً من Supabase dashboard" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "تم إنشاء الجدول بنجاح" })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "خطأ"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
