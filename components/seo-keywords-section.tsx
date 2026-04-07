import Link from "next/link"
import { ArrowLeft, TrendingUp, Clock, Shield, Banknote } from "lucide-react"

const keywords = [
  { term: "سيولة", description: "احصل على سيولة نقدية فورية من رصيدك خلال ساعة", popular: true },
  { term: "سلفة", description: "سلفة سريعة بدون تعقيدات لحسابك البنكي", popular: true },
  { term: "كاش تمارا", description: "حول رصيد تمارا إلى كاش نقدي فوري", popular: true },
  { term: "كاش تابي", description: "تحويل رصيد تابي لنقد في ساعة", popular: true },
  { term: "سيولة تابي", description: "سيولة فورية من تطبيق تابي بأفضل سعر", popular: true },
  { term: "سيولة تمارا", description: "سيولة سريعة من تمارا للحساب البنكي", popular: true },
  { term: "سلفة تابي", description: "سلفة من رصيدك في تابي خلال ساعة", popular: false },
  { term: "سلفة تمارا", description: "سلفة نقدية من تمارا بأقل رسوم", popular: false },
  { term: "تسييل تابي", description: "تسييل رصيدك بأفضل سعر في السوق", popular: false },
  { term: "تسييل تمارا", description: "خدمة تسييل موثوقة وسريعة", popular: false },
  { term: "تحويل رصيد", description: "تحويل الرصيد لحسابك البنكي بضمان", popular: false },
  { term: "كاش فوري", description: "كاش يصلك خلال ساعة فقط", popular: false },
]

const stats = [
  { icon: Clock, value: "ساعتين", label: "وقت التحويل" },
  { icon: Shield, value: "5.0", label: "تقييم Google" },
  { icon: Banknote, value: "100K+", label: "ريال تم تحويلها" },
]

export function SeoKeywordsSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 inline ml-2" />
            خدماتنا الأكثر طلباً
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            كل ما تبحث عنه من سيولة وكاش تابي وتمارا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم جميع خدمات السيولة والتسييل من تابي وتمارا ومدفوع. اختر الخدمة المناسبة لك واحصل على الكاش خلال ساعة.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Keywords Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {keywords.map((keyword, index) => (
            <Link
              key={index}
              href="#contact"
              className={`group bg-card rounded-xl p-5 border transition-all hover:shadow-lg ${
                keyword.popular 
                  ? "border-primary/30 hover:border-primary" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {keyword.popular && (
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded mb-2">
                  الأكثر طلباً
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {keyword.term}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {keyword.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                اطلب الآن
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              لماذا مطر لخدمات السيولة والسلفة؟
            </h3>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                نحن في <strong className="text-foreground">مطر</strong> نقدم أفضل خدمة 
                <strong className="text-foreground"> سيولة وسلفة</strong> في السعودية بدخولنا معكم كشركاء في شراء الجهاز عبر 
                <strong className="text-foreground"> تابي وتمارا ومدفوع</strong>. نتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نقوم ببيع الجهاز وتحويل مبلغ السيولة أو السلفة المطلوب مباشرة لحسابكم البنكي.
              </p>
              <p>
                لمزيد من التفاصيل عن الاساس الذي نعمل عليه، يرجى زيارة صفحة{" "}
                <a href="/shariah" className="text-primary underline">الامتثال الشرعي</a>.
              </p>
              <p>
                موقعنا في <strong className="text-foreground">الرياض - حي المرسلات</strong>، ونخدم جميع مناطق المملكة.
                تواصل معنا على <strong className="text-foreground">0590360039</strong> للحصول على أفضل خدمة سيولة وسلفة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
