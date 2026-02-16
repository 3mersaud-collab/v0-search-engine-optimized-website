import { ShoppingCart, Smartphone, Camera, Banknote, ExternalLink, AlertTriangle, CheckCircle2, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabbyLogo, TamaraLogo, MadfuLogo } from "@/components/app-logos"
import Link from "next/link"

const steps = [
  {
    icon: Smartphone,
    title: "احسب السيولة واختر المبلغ",
    description: "استخدم حاسبة السيولة لمعرفة المبلغ الذي ستحصل عليه، ثم افحص حدك الائتماني في تابي أو تمارا أو مدفوع",
    number: "01"
  },
  {
    icon: ShoppingCart,
    title: "ادخل المتجر وأضف المنتجات",
    description: "ادخل نون أو اكسترا (تابي/تمارا) أو المنيع (مدفوع) وأضف أي منتجات بنفس مبلغ الشراء من الحاسبة",
    number: "02"
  },
  {
    icon: Camera,
    title: "اختر طريقة الدفع وصور الشاشة",
    description: "اختر تابي أو تمارا أو مدفوع كوسيلة دفع. بعد ظهور تقسيم الدفعات صور الشاشة وأرسلها لنا",
    number: "03"
  },
  {
    icon: Banknote,
    title: "استلم السيولة خلال ساعتين",
    description: "ندخل معك كشركاء ونتكفل بالدفعة الأولى (25%) مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لك مبلغ السيولة أو السلفة المطلوب لحسابك البنكي خلال ساعتين",
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
    apps: ["مدفوع"],
    url: "https://www.almanea.sa/mobiles-tablets-c-7423/mobiles-c-7424",
    description: "سيولة مدفوع من المنيع"
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
            خطوات الحصول على سيولة تابي وكاش تمارا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            عملية سهلة وشفافة للحصول على كاش تابي أو سيولة تمارا أو سلفة مدفوع بأسرع وقت
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

        {/* Stores Section */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">المتاجر المعتمدة للحصول على سيولة</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {stores.map((store, index) => (
              <a
                key={index}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground flex items-center gap-2">
                    {store.name}
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {store.apps.join(" - ")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* App Logos */}
        <div className="flex justify-center items-center gap-8 mb-8 p-6 bg-card rounded-2xl border border-border">
          <div className="text-center">
            <TabbyLogo className="w-24 h-10 mx-auto mb-2" />
            <span className="text-xs text-muted-foreground">سيولة تابي</span>
          </div>
          <div className="text-center">
            <TamaraLogo className="w-24 h-10 mx-auto mb-2" />
            <span className="text-xs text-muted-foreground">كاش تمارا</span>
          </div>
          <div className="text-center">
            <MadfuLogo className="w-24 h-10 mx-auto mb-2" />
            <span className="text-xs text-muted-foreground">سيولة مدفوع</span>
          </div>
        </div>

        {/* Instructions for Tamara */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-3">تعل��مات مهمة لسيولة تمارا</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>بعد اختيار تمارا كوسيلة دفع، أكمل الطلب واضغط على &quot;ادفع&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>أضف بطاقة بنكية بدون رصيد</strong> - لا تستخدم بطاقة فيها رصيد أو البطاقة المضافة مسبقاً في تمارا</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>لا تستخدم Apple Pay نهائياً</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>اضغط على &quot;ادفع&quot; وصور الشاشة وارسلها لنا على واتساب</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instructions for Tabby & Madfu */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-3">تعليمات سيولة تابي ومدفوع</h4>
              <p className="text-muted-foreground text-sm mb-3">
                بعد اختيار تابي أو مدفوع كوسيلة دفع وظهور تقسيم الدفعات:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>فقط صور الشاشة التي تظهر تقسيم الدفعات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>أرسل الصورة لنا على واتساب</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>لا تحتاج إكمال عملية الدفع - ندخل كشركاء معك ونتولى الباقي</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Request */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-foreground mb-1">اطلب تعاملاتنا السابقة وآراء العملاء</h4>
              <p className="text-sm text-muted-foreground">تواصل معنا على واتساب لرؤية تقييمات وتجارب عملائنا السابقين</p>
            </div>
            <Button className="gap-2" asChild>
              <a href="https://wa.me/966590360039">
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
              <a href="https://wa.me/966590360039" className="gap-2">
                تواصل معنا الآن على واتساب
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/check-limit" className="gap-2">
                افحص حدك واطلب السيولة
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            التنفيذ خلال <strong>ساعتين فقط</strong> والتحويل مباشرة لحسابك البنكي
          </p>
        </div>
      </div>
    </section>
  )
}
