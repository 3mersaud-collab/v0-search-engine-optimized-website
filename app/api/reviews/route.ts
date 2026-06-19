import { put, list } from "@vercel/blob"
import { NextResponse } from "next/server"

const REVIEWS_PATH = "reviews/customer-reviews.json"

type Review = {
  id: string
  name: string
  rating: number
  comment: string
  app_type: string
  created_at: string
}

async function readReviews(): Promise<Review[]> {
  try {
    const { blobs } = await list({ prefix: REVIEWS_PATH })
    const match = blobs.find((b) => b.pathname === REVIEWS_PATH)
    if (!match) return []
    const res = await fetch(match.url, { cache: "no-store" })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

// GET: جلب كل التقييمات
export async function GET() {
  const reviews = await readReviews()
  // الأحدث أولاً
  reviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  return NextResponse.json(reviews)
}

// DELETE: حذف تقييم بالـ id (محمي بسر) — لإدارة المحتوى
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const secret = searchParams.get("secret")
    if (secret !== "liilsol2024setup") {
      return NextResponse.json({ error: "غير مصرح" }, { status: 403 })
    }
    if (!id) {
      return NextResponse.json({ error: "id مطلوب" }, { status: 400 })
    }

    const existing = await readReviews()
    const updated = existing.filter((r) => r.id !== id)

    await put(REVIEWS_PATH, JSON.stringify(updated), {
      access: "public",
      contentType: "application/json",
      allowOverwrite: true,
    })

    return NextResponse.json({ success: true, remaining: updated.length })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "خطأ في الخادم"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, rating, comment, app_type } = body

    if (!name || !rating || !app_type) {
      return NextResponse.json({ error: "الاسم والتقييم والتطبيق مطلوبين" }, { status: 400 })
    }
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "التقييم يجب أن يكون بين 1 و5" }, { status: 400 })
    }

    const newReview: Review = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: String(name).trim().slice(0, 60),
      rating: Number(rating),
      comment: String(comment ?? "").trim().slice(0, 600),
      app_type: String(app_type),
      created_at: new Date().toISOString(),
    }

    const existing = await readReviews()
    const updated = [newReview, ...existing]

    await put(REVIEWS_PATH, JSON.stringify(updated), {
      access: "public",
      contentType: "application/json",
      allowOverwrite: true,
    })

    return NextResponse.json({ success: true, review: newReview }, { status: 201 })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "خطأ في الخادم"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
