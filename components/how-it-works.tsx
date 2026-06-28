import { ShoppingCart, Smartphone, Camera, Banknote, ExternalLink, AlertTriangle, CheckCircle2, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabbyLogo, TamaraLogo } from "@/components/app-logos"
import Link from "next/link"

const steps = [
  {
    icon: Smartphone,
    title: "احسب السيولة واختر المبلغ",
    description: "استخدم حاسبة السيولة لمعرفة المبلغ الذي ستحصل عليه، ثم افحص حدك الائتماني في تابي أو تمارا",
    number: "01"
  },
  {
    icon: ShoppingCart,
    title: "ادخل المتجر وأضف المنتجات",
    description: "ادخل نون أو اكسترا وأضف جهاز بنفس قيمة الشراء من الحاسبة",
    number: "02"
  },
  {
    icon: Camera,
    title: "اختر طريقة الدفع وصور الشاشة",
    description: "اختر تابي أو تمارا كوسيلة دفع. اتبع خطوات التحقق وأرسل لنا صورة التأكيد",
    number: "03"
  },
  {
    icon: Banknote,
    title: "استلم السيولة خلال ساعة",
    description: "ندخل معك كشركاء ونتكفل بالدفعة الأولى (25%) مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لك مبلغ السيولة أو السلفة المطلوب لحسابك البنكي خلال ساعة",
    number: "04"
  }
]

const stores = [
  {
    name: "متجر نون",
    apps: ["تابي", "تمارا"],
    url: "https://www.noon.com/saudi-ar/electronics/",
    description: "سيولة تابي وكاش تمارا من نون"
  },
  {
    name: "متجر اكسترا",
    apps: ["تابي", "تمارا"],
    url: "https://www.extra.com/ar-sa/mobiles-tablets/mobiles/c/2-212/facet/?q=%3Arelevance%3AinStock%3Atrue%3Atype%3APRODUCT&text=&pg=1&pageSize=24&sort=relevance",
    description: "سيولة تابي وكاش تمارا من اكسترا"
  },
  {
    name: "متجر المنيع",
    apps: ["مدفوع", "تابي", "تمارا"],
    url: "https://www.almaneea.com/",
    description: "سيولة مدفوع وتابي وتمارا من المنيع"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            كيف تحصل على سيولة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            خطوات الحصول على سيولتك من جميع تطبيقات التقسيط
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            عملية سهلة وشفافة للحصول على كاش من تابي وتمارا ومدفوع وإمكان وكوارا ومورا بأسرع وقت
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                {/* Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
