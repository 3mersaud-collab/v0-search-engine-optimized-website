import { Shield, Clock, Headphones, BadgeCheck, CreditCard, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "شراكة حقيقية في الشراء",
    description: "ندخل كشركاء معكم في شراء الجهاز عبر تابي ونبيعه لطرف ثالث مستقل. لمزيد من التفاصيل عن الاساس الذي نعمل عليه، يرجى زيارة صفحة الامتثال الشرعي.",
  },
  {
    icon: Clock,
    title: "سلفة تابي فورية خلال ساعتين",
    description: "نحول لك السيولة النقدية عادة خلال ساعتين. سلفة تابي فورية لحسابك البنكي مباشرة بعد اتمام عملية الشراكة - أسرع من تمارا.",
    footnote: "المدة تقريبية وقد تختلف حسب اوقات معالجة البنوك"
  },
  {
    icon: Headphones,
    title: "دعم واتساب متواصل",
    description: "فريق دعم مطر متاح على 0590360039 للاجابة على جميع استفساراتك حول سلفة تابي وتحويل تابي الى كاش."
  },
  {
    icon: BadgeCheck,
    title: "معاملات آمنة وموثوقة",
    description: "معاملات آمنة بمعايير عالية. لا نطلب كلمات مرور او بيانات حساسة - انت تتحكم بالكامل في جميع خطوات الحصول على سلفة تابي."
  },
  {
    icon: CreditCard,
    title: "متخصصون في تابي",
    description: "نحن متخصصون في سلفة تابي وتحويل تابي الى كاش. خدمتنا أفضل وأسرع مقارنة بتمارا - اختر الأفضل للحصول على سلفة فورية."
  },
  {
    icon: TrendingUp,
    title: "افضل نسبة سلفة تابي",
    description: "رسوم شفافة 10-14% بدون اي رسوم مخفية. نقدم افضل خدمة سلفة تابي وكاش تابي بدخولنا معكم كشركاء باقل نسبة.",
    footnote: "الرسوم محسوبة مسبقا في حاسبة السيولة"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            لماذا مطر
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            لماذا مطر لسلفة تابي؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم افضل خدمة سلفة تابي وتحويل تابي الى كاش في السعودية بدخولنا معكم كشركاء في شراء الجهاز - أفضل وأسرع من تمارا
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              {feature.footnote && (
                <p className="text-xs text-muted-foreground/60 mt-3 pt-3 border-t border-border">
                  {feature.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
