"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowLeft, Info, MessageCircle } from "lucide-react"

export function CalculatorSection() {
  const [amount, setAmount] = useState(5000)
  const [selectedApp, setSelectedApp] = useState<"tabby" | "tamara" | "madfu">("tabby")
  const [installmentMonths, setInstallmentMonths] = useState(4)

  // New calculation logic based on requirements
  const calculations = useMemo(() => {
    // مبلغ البيع: يبدأ من 14% في 5500 وينقص 1% كل 1000 حتى يصل 10% ويثبت
    let sellingLossRate: number
    if (amount <= 5500) {
      sellingLossRate = 0.15 // 15% للمبالغ الأقل من 5500
    } else if (amount >= 9500) {
      sellingLossRate = 0.10 // 10% ثابت بعد 9500
    } else {
      // تدريجي من 14% عند 5500 إلى 10% عند 9500
      const stepsAbove5500 = Math.floor((amount - 5500) / 1000)
      sellingLossRate = 0.14 - (stepsAbove5500 * 0.01)
    }

    const purchaseAmount = amount // مبلغ الشراء
    const sellingLoss = amount * sellingLossRate // فرق البيع
    const saleAmount = amount - sellingLoss // مبلغ البيع
    
    // الرسوم الإدارية: 10% + 100 ريال للمبالغ أقل من 4000، و 10% فقط بعد 4000
    const adminFeeRate = 0.10
    const adminFeeBase = amount * adminFeeRate
    const adminFeeExtra = amount < 4000 ? 100 : 0 // 100 ريال إضافية للمبالغ أقل من 4000
    const adminFee = adminFeeBase + adminFeeExtra
    
    const downPaymentRate = 0.25 // الدفعة الأولى 25%
    const downPayment = amount * downPaymentRate
    
    const totalDeductions = downPayment + adminFee + sellingLoss
    const netAmount = Math.max(0, amount - totalDeductions)
    
    // الدفعة الشهرية للدفعة الأولى
    const monthlyDownPayment = downPayment / installmentMonths

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
      monthlyDownPayment
    }
  }, [amount, installmentMonths])

  const apps = [
    { id: "tabby" as const, name: "تابي", label: "tabby", color: "text-[#3CBED8]" },
    { id: "tamara" as const, name: "تمارا", label: "tamara", color: "text-[#FF6B35]" },
    { id: "madfu" as const, name: "مدفوع", label: "مدفوع", color: "text-[#4361EE]" }
  ]

  const appColors = {
    tabby: "border-[#3CBED8] bg-[#3CBED8]/5",
    tamara: "border-[#FF6B35] bg-[#FF6B35]/5",
    madfu: "border-[#4361EE] bg-[#4361EE]/5"
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
                  اختر التطبيق (سيولة تابي، سيولة تمارا، أو مدفوع)
                </label>
                <div className="grid grid-cols-3 gap-3">
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
                    <span className="text-muted-foreground">الدفعة الأولى - نتكفل بها كشركاء (25%)</span>
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
                <a href="https://wa.me/966590360039">
                  اطلب سيولة الآن
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
                  <strong>هذه الحسبة مبنية على تقسيم الدفعات على 4 أقساط.</strong> بعد تقديم الطلب قد تتغير الحسبة إذا تم زيادة عدد الدفعات، والفرق يكون <span className="text-accent font-bold">لصالح العميل</span> ولا تُحسب أي رسوم إضافية.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-secondary/30 px-6 py-4 text-center border-t border-border">
              <p className="text-sm text-muted-foreground">
                * الأرقام تقريبية وقد تختلف حسب المنتج والمتجر. التنفيذ خلال ساعتين والتحويل مباشرة لحسابك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
