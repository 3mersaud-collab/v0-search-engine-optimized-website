"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LoyaltyDiscountBanner() {
  return (
    <section className="py-16 px-4" dir="rtl">
      <div className="container mx-auto max-w-5xl">

        {/* شارة العنوان */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-5 py-2 text-sm font-medium">
            ✨ عرض حصري مدى الحياة — لعملائنا الدائمين
          </span>
        </div>

        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            كل ما زاد ولاؤك، زاد خصمك! 🎁
          </h2>
          <p className="text-muted-foreground text-lg">
            خصومات دائمة على الرسوم الإدارية — تنطبق على كل طلباتك القادمة للأبد
          </p>
        </div>

        {/* البطاقات الثلاث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* الطلب الرابع وما بعده - ذهبي */}
          <div className="relative rounded-3xl border-2 border-green-300 bg-green-50 p-7 text-center">
            <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
              👑 عميل ذهبي
            </span>
            <div className="flex justify-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl">👑</span>
              </div>
            </div>
            <div className="text-6xl font-black text-green-500 mb-1">50%</div>
            <div className="text-green-600 font-bold text-lg mb-4">خصم على الرسوم الإدارية</div>
            <div className="bg-green-100 rounded-2xl px-4 py-3">
              <p className="font-bold text-foreground text-base">الطلب الرابع وما بعده</p>
              <p className="text-muted-foreground text-sm mt-1">للأبد — كل طلباتك القادمة بنص الرسوم</p>
            </div>
          </div>

          {/* الطلب الثاني والثالث - في */}
          <div className="relative rounded-3xl border-2 border-amber-300 bg-amber-50 p-7 text-center">
            <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-4 py-1 rounded-full">
              🎖️ عميل في
            </span>
            <div className="flex justify-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
            </div>
            <div className="text-6xl font-black text-amber-500 mb-1">25%</div>
            <div className="text-amber-600 font-bold text-lg mb-4">خصم على الرسوم الإدارية</div>
            <div className="bg-amber-100 rounded-2xl px-4 py-3">
              <p className="font-bold text-foreground text-base">الطلب الثاني والثالث</p>
              <p className="text-muted-foreground text-sm mt-1">ينطبق تلقائياً على كل طلب ثاني وثالث</p>
            </div>
          </div>

          {/* الطلب الأول */}
          <div className="relative rounded-3xl border-2 border-gray-200 bg-gray-50 p-7 text-center">
            <div className="flex justify-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-3xl text-gray-400">☆</span>
              </div>
            </div>
            <div className="text-6xl font-black text-gray-400 mb-1">0%</div>
            <div className="text-gray-500 font-bold text-lg mb-4">خصم على الرسوم</div>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <p className="font-bold text-foreground text-base">الطلب الأول</p>
              <p className="text-muted-foreground text-sm mt-1">السعر العادي — ابدأ رحلتك معنا</p>
            </div>
          </div>

        </div>

        {/* شريط مدى الحياة */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-8 text-center">
          <p className="text-foreground text-lg font-medium">
            ∞ &nbsp; الخصم <strong className="text-amber-600">مدى الحياة</strong> — مو سنة ولا سنتين، كل طلباتك القادمة معنا للأبد بنفس الخصم &nbsp; ∞
          </p>
        </div>

        {/* زر */}
        <div className="text-center mb-4">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-6 text-xl rounded-2xl shadow-lg gap-3"
            asChild
          >
            <a href="https://wa.me/966590360039?text=أريد الاستفادة من عرض الولاء والخصم على الرسوم الإدارية" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              ابدأ الآن واستفد من الخصم
            </a>
          </Button>
        </div>

        {/* ملاحظة */}
        <p className="text-center text-muted-foreground text-sm">
          * الخصم يُطبَّق تلقائياً على الرسوم الإدارية فقط عند تأكيد طلبك معنا
        </p>

      </div>
    </section>
  )
}
