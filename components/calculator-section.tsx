"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowLeft, Info, MessageCircle } from "lucide-react"

export function CalculatorSection() {
  const [amount, setAmount] = useState(5000)
  const [selectedApp, setSelectedApp] = useState<"tabby" | "tamara">("tabby")
  const [installmentMonths, setInstallmentMonths] = useState(4)

  // جدول الأسعار الثابتة: قيمة الشراء -> الصافي للعميل
  const priceTable = [
    { purchase: 1000, net: 300 },
    { purchase: 1500, net: 500 },
    { purchase: 2000, net: 750 },
    { purchase: 2500, net: 1000 },
    { purchase: 3099, net: 1350 },
  ]

  // حساب الصافي بناءً على الجدول الثابت مع interpolation بين النقاط
  function getNetFromTable(purchaseAmount: number): number {
    if (purchaseAmount <= priceTable[0].purchase) {
      // أقل من أول نقطة: نحسب بنفس نسبة أول نقطة
      const ratio = priceTable[0].net / priceTable[0].purchase
      return purchaseAmount * ratio
    }
    if (purchaseAmount >= priceTable[priceTable.length - 1].purchase) {
      // أكبر من آخر نقطة: نحسب بنفس نسبة آخر نقطتين
      const last = priceTable[priceTable.length - 1]
      const prev = priceTable[priceTable.length - 2]
      const slope = (last.net - prev.net) / (last.purchase - prev.purchase)
      return last.net + slope * (purchaseAmount - last.purchase)
    }
    // بين نقطتين: interpolation خطي
    for (let i = 0; i < priceTable.length - 1; i++) {
      const curr = priceTable[i]
      const next = priceTable[i + 1]
      if (purchaseAmount >= curr.purchase && purchaseAmount <= next.purchase) {
        const ratio = (purchaseAmount - curr.purchase) / (next.purchase - curr.purchase)
        return curr.net + ratio * (next.net - curr.net)
      }
    }
    return 0
  }

  const calculations = useMemo(() => {
    const purchaseAmount = amount
    const netAmount = Math.round(getNetFromTable(amount))

    // الخصومات الإجمالية = مبلغ الشراء - الصافي
    const totalDeductions = purchaseAmount - netAmount

    // مبلغ البيع وفرق البيع (للعرض فقط - لا تتغير)
    let sellingLossRate: number
    if (amount <= 5500) {
      sellingLossRate = 0.15
    } else if (amount >= 9500) {
      sellingLossRate = 0.10
    } else {
      const stepsAbove5500 = Math.floor((amount - 5500) / 1000)
      sellingLossRate = 0.14 - (stepsAbove5500 * 0.01)
    }
    const sellingLoss = amount * sellingLossRate
    const saleAmount = amount - sellingLoss

    // الرسوم الإدارية (للعرض فقط - لا تتغير)
    const adminFeeRate = 0.10
    const adminFeeBase = amount * adminFeeRate
    const adminFeeExtra = amount < 4000 ? 100 : 0
    const adminFee = adminFeeBase + adminFeeExtra

    // الدفعة الأولى (للعرض فقط - لا تتغير)
    const downPaymentRate = 1 / installmentMonths
    const downPayment = amount * downPaymentRate

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
      {/* Background with gradient */}
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
              {/* App Selection with SVG Logos */}
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
                      <div className={`text-lg font-bold mb-1 ${app.color}`}>
                        {app.label}
                      </div>
                      <span className="text-foreground font-medium text-sm">{app.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Installment Months Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  عدد الدفعات
                </label>
                <div className="relative px-2">
                  <input
                    type="range"
                    min="4"
                    max="24"
                    step="1"
                    value={installmentMonths}
                    onChange={(e) => setInstallmentMonths(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>4 دفعات</span>
                    <span>24 دفعة</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl px-8 py-4">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {installmentMonths}
                    </span>
                    <span className="text-muted-foreground text-lg">دفعة</span>
                  </div>
                </div>
              </div>

              {/* Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  مبلغ الشراء (ريال سعودي)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>1,000 ر.س</span>
                    <span>20,000 ر.س</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl px-8 py-5">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {amount.toLocaleString("ar-SA")}
                    </span>
                    <span className="text-muted-foreground text-lg">ر.س</span>
                  </div>
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
                    <span className="text-muted-foreground">الدفعة الأولى - نتكفل بها كشركاء ({Math.round(100 / installmentMonths)}%)</span>
                    <span className="text-destructive font-medium">- {Math.round(calculations.downPayment).toLocaleString("ar-SA")} ر.س</span>
                  </div>
                  <div className="border-t-2 border-primary/30 pt-4 mt-4">
                    <div className="mb-3">
                      <span className="font-bold text-foreground text-lg">مجموع ما يتم تحويله إلى حسابك البنكي</span>
                    </div>
                    <div className="space-y-3 bg-card/50 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">إذا الدفعة عليك</span>
                        <span className="text-2xl font-bold text-primary">{Math.round(calculations.netAmount + calculations.downPayment).toLocaleString("ar-SA")} ر.س</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-border/50">
                        <span className="text-muted-foreground font-medium">إذا الدفعة علينا</span>
                        <span className="text-2xl font-bold text-accent">{Math.round(calculations.netAmount).toLocaleString("ar-SA")} ر.س</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 mt-3 border-t border-border/50">
                    <span className="text-muted-foreground">المبلغ المتبقي للتقسيط</span>
                    <span className="font-semibold text-primary">{Math.round(calculations.purchaseAmount - calculations.downPayment).toLocaleString("ar-SA")} ر.س</span>
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
