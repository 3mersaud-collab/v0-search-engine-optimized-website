import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "لم يتم تحميل ملف" }, { status: 400 })
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "يجب أن يكون الملف صورة" }, { status: 400 })
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "حجم الصورة كبير جداً (الحد 10MB)" }, { status: 400 })
    }

    const blob = await put(`chat/${Date.now()}-${file.name}`, file, {
      access: "public",
    })

    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error("Chat upload error:", error)
    return NextResponse.json(
      { error: `فشل رفع الصورة: ${error instanceof Error ? error.message : "خطأ غير معروف"}` },
      { status: 500 }
    )
  }
}
