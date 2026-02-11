import { Shield, Clock, Headphones, BadgeCheck, CreditCard, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "سيولة آمنة 100%",
    description: "جميع معاملات السيولة تتم بشكل آمن وموثق. نحن لا نطلب كلمات مرور أو بيانات حساسة"
  },
  {
    icon: Clock,
    title: "كاش خلال ساعتين",
    description: "نحول كاش تابي وسيولة تمارا لحسابك البنكي خلال ساعتين فقط"
  },
  {
    icon: Headphones,
    title: "دعم واتساب متواصل",
    description: "فريق دعم مطر ليل متاح على 0590360039 للإجابة على استفساراتك"
  },
  {
    icon: BadgeCheck,
    title: "موثوقية عالية",
    description: "سنوات من الخبرة في خدمات السيولة والكاش في السوق السعودي"
  },
  {
    icon: CreditCard,
    title: "كاش من 3 تطبيقات",
    description: "ندعم سيولة تابي وكاش تمارا وتحويل مدفوع"
  },
  {
    icon: TrendingUp,
    title: "أفضل أسعار السيولة",
    description: "نقدم أفضل نسبة تحويل وأقل رسوم في سوق السيولة"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            لماذا مطر ليل
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            مميزات خدمة سيولة تابي وكاش تمارا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نلتزم بتقديم أفضل خدمة سيولة وكاش لعملائنا مع الشفافية الكاملة
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
