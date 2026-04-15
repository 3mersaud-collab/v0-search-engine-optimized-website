import { Banknote, ArrowDown, Smartphone, Receipt, HandCoins, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Smartphone,
    label: "مبلغ شراء الجهاز",
    value: "2,400",
    unit: "ر.س",
    description: "تختار جهاز من المتجر بقيمة 2,400 ريال وتدفع عبر تمارا",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Banknote,
    label: "الدفعة الأولى (25%) - نتكفل بها",
    value: "600",
    unit: "ر.س",
    description: "ندخل كشركاء معك وندفع الدفعة الأولى 600 ريال بدلاً عنك",
    color: "bg-destructive/10 text-destructive",
    isDeduction: true,
  },
  {
    icon: Receipt,
    label: "فرق البيع + الرسوم الإدارية",
    value: "700",
    unit: "ر.س",
    description: "فرق بيع الجهاز (360 ر.س) + رسوم إدارية (340 ر.س)",
    color: "bg-destructive/10 text-destructive",
    isDeduction: true,
  },
  {
    icon: HandCoins,
    label: "المبلغ اللي تستلمه (كاش)",
    value: "~1,100",
    unit: "ر.س",
    description: "يتحول لحسابك البنكي خلال ساعة فقط",
    color: "bg-accent/10 text-accent",
    isResult: true,
  },
]

export function TamaraExampleSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-medium mb-4">
            مثال عملي
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            كيفية الحصول على سلفة تمارا عبر تحويل جوالات الى كاش
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مثال توضيحي: جهاز بقيمة 2,400 ريال عبر تمارا وكيف تحصل على سيولة نقدية فورية
          </p>
        </div>

        {/* Example Breakdown */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            {/* Steps */}
            <div className="p-6 md:p-8 space-y-1">
              {steps.map((step, index) => (
                <div key={index}>
                  {/* Arrow between steps */}
                  {index > 0 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl border p-5 transition-all ${
                      step.isResult
                        ? "border-accent/40 bg-accent/5 shadow-lg shadow-accent/10"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color}`}
                      >
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-medium text-muted-foreground">
                            {step.label}
                          </span>
                          <div className="flex items-baseline gap-1 flex-shrink-0">
                            {step.isDeduction && (
                              <span className="text-destructive text-sm">-</span>
                            )}
                            <span
                              className={`text-xl font-bold ${
                                step.isResult
                                  ? "text-accent"
                                  : step.isDeduction
                                    ? "text-destructive"
                                    : "text-foreground"
                              }`}
                            >
                              {step.value}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {step.unit}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Installment Info */}
            <div className="bg-secondary/50 px-6 md:px-8 py-5 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  المبلغ المتبقي عليك بالأقساط
                </span>
                <span className="text-lg font-bold text-primary">
                  1,800 ر.س
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                مقسمة على 3 دفعات بعد خصم الدفعة الأولى (600 ر.س تكفلنا بها)
              </p>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 px-6 md:px-8 py-5 border-t border-border">
              <p className="text-sm text-foreground text-center leading-relaxed">
                <strong>الخلاصة:</strong> جهاز بـ 2,400 ريال عبر سلفة تمارا = تحصل على
                <span className="text-accent font-bold"> ~1,100 ريال كاش </span>
                فوري لحسابك البنكي خلال ساعة
              </p>
            </div>

            {/* CTA */}
            <div className="p-6 md:px-8 border-t border-border">
              <Button size="lg" className="w-full gap-2 shadow-lg shadow-primary/20" asChild>
                <a href="https://wa.me/966548613381">
                  <MessageCircle className="w-5 h-5" />
                  اطلب سلفة تمارا الآن عبر واتساب
                </a>
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            * الأرقام تقريبية وقد تختلف حسب المنتج والمتجر. استخدم حاسبة السيولة للحساب الدقيق.
          </p>
        </div>
      </div>
    </section>
  )
}
