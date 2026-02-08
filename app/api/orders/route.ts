import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

function generateOrderNumber() {
  const date = new Date()
  const y = date.getFullYear().toString().slice(-2)
  const m = (date.getMonth() + 1).toString().padStart(2, "0")
  const d = date.getDate().toString().padStart(2, "0")
  const rand = Math.floor(Math.random() * 9000 + 1000)
  return `LS-${y}${m}${d}-${rand}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      customer_name,
      customer_phone,
      app_type,
      purchase_amount,
      sale_amount,
      admin_fee,
      first_payment,
      final_amount,
      remaining_installment,
      bank_name,
      iban,
      notes,
      net_requested,
      store_name,
      screenshot_url,
    } = body

    if (!customer_name || !customer_phone || !app_type || !purchase_amount) {
      return NextResponse.json({ error: "جميع الحقول مطلوبة" }, { status: 400 })
    }

    const supabase = await createClient()
    const orderNumber = generateOrderNumber()

    const insertData: Record<string, unknown> = {
      order_number: orderNumber,
      customer_name,
      customer_phone,
      app_type,
      purchase_amount,
      sale_amount,
      admin_fee,
      first_payment,
      final_amount,
      remaining_installment,
      notes: notes ? `${bank_name ? `البنك: ${bank_name}\n` : ""}${iban ? `IBAN: ${iban}\n` : ""}${notes}` : `${bank_name ? `البنك: ${bank_name}\n` : ""}${iban ? `IBAN: ${iban}` : ""}`,
      status: "pending",
    }

    // Add optional fields if they exist
    if (net_requested) insertData.net_requested = net_requested
    if (store_name) insertData.store_name = store_name
    if (screenshot_url) insertData.screenshot_url = screenshot_url

    const { data, error } = await supabase
      .from("orders")
      .insert(insertData)
      .select()
      .single()

    if (error) {
      console.error("Order insert error:", error)
      return NextResponse.json({ error: "حدث خطأ في حفظ الطلب" }, { status: 500 })
    }

    return NextResponse.json({ success: true, order: data })
  } catch (err) {
    console.error("Order API error:", err)
    return NextResponse.json({ error: "حدث خطأ غير متوقع" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const phone = searchParams.get("phone")
    const orderNumber = searchParams.get("order_number")

    const supabase = await createClient()

    let query = supabase.from("orders").select("*").order("created_at", { ascending: false })

    if (phone) {
      query = query.eq("customer_phone", phone)
    }
    if (orderNumber) {
      query = query.eq("order_number", orderNumber)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: "حدث خطأ في جلب الطلبات" }, { status: 500 })
    }

    return NextResponse.json({ orders: data })
  } catch (err) {
    console.error("Orders GET error:", err)
    return NextResponse.json({ error: "حدث خطأ غير متوقع" }, { status: 500 })
  }
}
