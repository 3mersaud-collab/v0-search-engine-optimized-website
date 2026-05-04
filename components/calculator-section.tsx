"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowLeft, Info, MessageCircle } from "lucide-react"

export function CalculatorSection() {
  const [amount, setAmount] = useState(5000)
  const [inputValue, setInputValue] = useState("5000")
  const [selectedApp, setSelectedApp] = useState<"tabby" | "tamara">("tabby")
  const [installmentMonths, setInstallmentMonths] = useState(4)

  const calculations = useMemo(() => {
    let sellingLossRate: number
    if (amount <= 5500) {
      sellingLossRate = 0.15
    } else if (amount >= 9500) {
      sellingLossRate = 0.10
    } else {
      const stepsAbove5500 = Math.floor((amount - 5500) / 1000)
      sellingLossRate = 0.14 - (stepsAbove5500 * 0.01)
    }

    const purchaseAmount = amount
    const sellingLoss = amount * sellingLossRate
    const saleAmount = amount - sellingLoss

    const adminFeeRate = 0.10
    const adminFeeBase = amount * adminFeeRate
    const adminFeeExtra = amount < 4000 ? 100 : 0
    const adminFee = adminFeeBase + adminFeeExtra

    const downPaymentRate = 1 / installmentMonths
    const downPayment = amount * downPaymentRate

    const totalDeductions = downPayment + adminFee + sellingLoss
    const netAmount = Math.max(0, amount - totalDeductions)

    return {
      purchaseAmount,
      saleAmount,
      sellingLoss,
      sellingLossRate,
      downPayment,
      downPaymentRate,
      adminFee,
      adminFeeRate,
      totalDeductions,
      netAmount,
    }
  }, [amount, installmentMonths])

  const handleAmountChange = (val: number) => {
    const clamped = Math.min(20000, Math.max(1000, val))
    setAmount(clamped)
    setInputValue(String(clamped))
  }

  const apps = [
    { id: "tabby" as const, name: "تابي", label: "tabby", color: "text-[#3CBED8]" },
    { id: "tamara" as const, name: "تمارا", label: "tamara", color: "text-[#FF6B35]" }
  ]

  const appColors = {
    tabby: "border-[#3CBED8] bg-[#3CBED8]/5",
    tamara: "border-[#FF6B35] bg-[#FF6B35]/5"
  }

  return (
    <section id="calculator" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 inline ml-2" />
              حاسبة السيولة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              احسب كاش تابي وتمارا الذي ستستلمه
            </h2>
            <p className="text-muted-foreground text-lg">
              أدخل المبلغ واختر التطبيق لمعرفة السيولة النهائية
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="p-6 md:p-10">

              {/* App Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  اختر التطبيق (سيولة تابي أو سيولة تمارا)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {apps.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setSelectedApp(app.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedApp === app.id
                          ? `${appColors[app.id]} shadow-lg scale-[1.02]`
                          : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      <div className={`text-lg font-bold mb-1 ${app.color}`}>{app.label}</div>
                      <span className="text-foreground font-medium text-sm">{app.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Installment Months */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  عدد الدفعات — مختار الآن: <span className="text-primary font-bold">{installmentMonths} دفعات</span>
                </label>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                  {Array.from({ length: 21 }, (_, i) => i + 4).map((months) => (
                    <button
                      key={months}
                      onClick={() => setInstallmentMonths(months)}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        installmentMonths === months
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      <span className={`font-bold ${installmentMonths === months ? "text-primary" : "text-foreground"}`}>
                        {months}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  مبلغ الشراء (ريال سعودي)
                </label>

                {/* حقل الكتابة المباشر */}
                <div className="relative mb-4">
                  <input
                    type="number"
                    min="1000"
                    max="20000"
                    value={inputValue}
                    onChange={(e) => {
                      const raw = e.target.value
                      setInputValue(raw)
                      const parsed = Number(raw)
                      if (!isNaN(parsed) && parsed >= 1000 && parsed <= 20000) {
                        setAmount(parsed)
                      }
                    }}
                    onBlur={() => {
                      const parsed = Number(inputValue)
                      if (isNaN(parsed) || parsed < 1000) {
                        handleAmountChange(1000)
                      } else if (parsed > 20000) {
                        handleAmountChange(20000)
                      } else {
                        handleAmountChange(parsed)
                      }
                    }}
                    placeholder="اكتب المبلغ هنا..."
                    className="w-full text-2xl font-bold text-center border-2 border-primary/40 focus:border-primary rounded-2xl px-6 py-4 bg-background text-foreground outline-none transition-all"
                    dir="ltr"
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-lg pointer-events-none">ر.س</span>
                </div>

                {/* أزرار مبالغ سريعة */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[2000, 5000, 10000, 15000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handleAmountChange(preset)}
                      className={`py-2 rounded-xl border-2 text-sm font-semibold transition-all ${
                        amount === preset
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 text-muted-foreground"
                      }`}
                    >
                      {preset.toLocaleString("ar-SA")}
                    </button>
                  ))}
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={amount}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    setAmount(val)
                    setInputValue(String(val))
                  }}
                  className="w-full h-3 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>1,000 ر.س</span>
                  <span>20,000 ر.س</span>
                </div>
              </div>

              {/* Calculation Breakdown */}
              <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="font-bold text-foreground">تفاصيل السيولة</h4>
                  <div className="group relative">
                    <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      فرق البيع يتناقص كلما زاد المبلغ: 14% عند 5500 وينقص 1% كل 1000 ريال حتى يصل 10%
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">مبلغ الشراء</span>
                    <span className="font-semibold text-foreground">{calculations.purchaseAmount.toLocaleString("ar-SA")} ر.س</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border/50">
                    <span className="text-muted-foreground">مبلغ البيع</span>
                    <span className="font-medium text-foreground">{Math.round(calculations.saleAmount).toLocaleString("ar-SA")} ر.س</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border/50">
                    <span className="text-muted-foreground">
                      الرسوم الإدارية {amount < 4000 ? "(10% + 100 ر.س)" : "(10%)"}
                    </span>
                    <span className="text-destructive font-medium">- {Math.round(calculations.adminFee).toLocaleString("ar-SA")} ر.س</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border/50">
                    <span className="text-muted-foreground">
                      الدفعة الأولى - نتكفل بها كشركاء ({Math.round(100 / installmentMonths)}% — {installmentMonths} دفعات)
                    </span>
                    <span className="text-destructive font-medium">- {Math.round(calculations.downPayment).toLocaleString("ar-SA")} ر.س</span>
                  </div>

                  {/* النتيجة النهائية */}
                  <div className="border-t-2 border-primary/30 pt-4 mt-4">
                    <div className="mb-3">
                      <span className="font-bold text-foreground text-lg">مجموع ما يتم تحويله إلى حسابك البنكي</span>
                    </div>
                    <div className="space-y-3 bg-card/50 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">إذا الدفعة عليك</span>
                        <span className="text-2xl font-bold text-primary">
                          {Math.round(calculations.netAmount + calculations.downPayment).toLocaleString("ar-SA")} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-border/50">
                        <span className="text-muted-foreground font-medium">إذا الدفعة علينا</span>
                        <span className="text-2xl font-bold text-accent">
                          {Math.round(calculations.netAmount).toLocaleString("ar-SA")} ر.س
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 mt-3 border-t border-border/50">
                    <span className="text-muted-foreground">المبلغ المتبقي للتقسيط</span>
                    <span className="font-semibold text-primary">
                      {Math.round(calculations.purchaseAmount - calculations.downPayment).toLocaleString("ar-SA")} ر.س
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button size="lg" className="w-full gap-2 text-lg py-6 shadow-lg shadow-primary/20" asChild>
                <a href="#verify">
                  اطلب السيولة الآن
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Reviews CTA */}
            <div className="bg-accent/5 px-6 py-4 border-t border-border">
              <div className="flex items-center justify-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">اطلب تعاملاتنا السابقة وآراء العملاء عبر واتساب</span>
              </div>
            </div>

            {/* Installment Note */}
            <div className="bg-primary/5 px-6 py-4 border-t border-border">
              <div className="flex gap-3 items-start justify-center text-sm">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed text-right">
                  <strong>الحسبة مبنية على {installmentMonths} دفعة.</strong> بعد تقديم الطلب قد تتغير الحسبة إذا تم تغيير عدد الدفعات، والفرق يكون <span className="text-accent font-bold">لصالح العميل</span> ولا تُحسب أي رسوم إضافية.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-secondary/30 px-6 py-4 text-center border-t border-border">
              <p className="text-sm text-muted-foreground">
                * الأرقام تقريبية وقد تختلف حسب المنتج والمتجر. التنفيذ خلال ساعة والتحويل مباشرة لحسابك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
