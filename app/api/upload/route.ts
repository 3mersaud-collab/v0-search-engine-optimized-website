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

    console.log("[v0] Uploading file:", file.name, "size:", file.size, "type:", file.type)
    console.log("[v0] BLOB_READ_WRITE_TOKEN exists:", !!process.env.BLOB_READ_WRITE_TOKEN)

    const blob = await put(`orders/${Date.now()}-${file.name}`, file, {
      access: "public",
    })

    console.log("[v0] Upload success, URL:", blob.url)
    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json({ error: `فشل رفع الصورة: ${error instanceof Error ? error.message : "خطأ غير معروف"}` }, { status: 500 })
  }
}
