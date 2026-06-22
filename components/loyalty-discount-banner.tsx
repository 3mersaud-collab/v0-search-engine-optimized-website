"use client"

import { MessageCircle, Star, Crown, Sparkles, Infinity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LoyaltyDiscountBanner() {
  const whatsappMsg = encodeURIComponent("السلام عليكم، أبي أستفسر عن خصم العملاء الدائمين 🎉")
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=966560903335&text=${whatsappMsg}&type=phone_number&app_absent=0`

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* خلفية */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-green-500/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-green-400" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-green-400" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* شارة العرض */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 rounded-full font-bold text-sm shadow-lg shadow-amber-200/50 animate-pulse">
            <Sparkles className="w-4 h-4" />
            عرض حصري مدى الحياة — لعملائنا الدائمين
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-foreground mb-2">
          كل ما زاد ولاؤك، زاد خصمك! 🎁
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-base">
          خصومات دائمة على الرسوم الإدارية — تنطبق على كل طلباتك القادمة للأبد
        </p>

        {/* بطاقات الخصم */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">

          {/* الطلب الأول */}
          <div className="relative bg-card rounded-2xl border-2 border-border p-6 text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-7 h-7 text-muted-foreground" />
            </div>
            <div className="text-4xl font-black text-muted-foreground mb-1">0%</div>
            <div className="text-sm text-muted-foreground mb-3">خصم على الرسوم</div>
            <div className="bg-secondary rounded-xl px-3 py-2">
              <p className="font-bold text-foreground text-sm">الطلب الأول</p>
              <p className="text-xs text-muted-foreground mt-1">السعر العادي — ابدأ رحلتك معنا</p>
            </div>
          </div>

          {/* الطلب الثاني والثالث */}
          <div className="relative bg-gradient-to-b from-amber-500/10 to-yellow-400/5 rounded-2xl border-2 border-amber-400/60 p-6 text-center shadow-lg shadow-amber-200/20">
            <div className="w-14 h-14 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-7 h-7 text-amber-500 fill-amber-400" />
            </div>
            <div className="text-5xl font-black bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent mb-1">
              25%
            </div>
            <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-3">خصم على الرسوم الإدارية</div>
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl px-3 py-2">
              <p className="font-bold text-foreground text-sm">الطلب الثاني والثالث</p>
              <p className="text-xs text-muted-foreground mt-1">ينطبق تلقائياً على كل طلب ثانٍ وثالث</p>
            </div>
          </div>

          {/* الرابع وما بعد */}
          <div className="relative bg-gradient-to-b from-green-500/10 to-emerald-400/5 rounded-2xl border-2 border-green-400/60 p-6 text-center shadow-lg shadow-green-200/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow whitespace-nowrap">
                🥈 عميل فوق هام السحب
              </span>
            </div>
            <div className="w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
              <Crown className="w-7 h-7 text-green-500" />
            </div>
            <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent mb-1">
              50%
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">خصم على الرسوم الإدارية</div>
            <div className="bg-green-400/10 border border-green-400/30 rounded-xl px-3 py-2">
              <p className="font-bold text-foreground text-sm">الطلب الرابع وما بعده</p>
              <p className="text-xs text-muted-foreground mt-1">للأبد — كل طلباتك القادمة بنص الرسوم</p>
            </div>
          </div>

        </div>

        {/* شريط مدى الحياة */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400/10 via-green-400/10 to-amber-400/10 border border-amber-400/20 rounded-2xl px-6 py-4">
            <Infinity className="w-6 h-6 text-amber-500 shrink-0" />
            <p className="text-center text-sm md:text-base font-semibold text-foreground">
              الخصم <span className="text-amber-500 font-bold">مدى الحياة</span> — مو سنة ولا سنتين، كل طلباتك القادمة معنا للأبد بنفس الخصم
            </p>
            <Infinity className="w-6 h-6 text-green-500 shrink-0" />
          </div>
        </div>

        {/* زر واتساب */}
        <div className="text-center">
          <Button
            size="lg"
            className="gap-3 bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white shadow-xl text-base px-8 py-6 rounded-2xl font-bold"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              ابدأ الآن واستفد من الخصم
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            * الخصم يُطبق تلقائياً على الرسوم الإدارية فقط عند تأكيد طلبك معنا
          </p>
        </div>

      </div>
    </section>
  )
}
