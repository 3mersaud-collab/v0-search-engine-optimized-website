import { Shield, Clock, Headphones, BadgeCheck, CreditCard, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "تجنب شبهات الربا",
    description: "بدخولنا معكم كشركاء في شراء الجهاز نتجنب شبهات الربا، وبإذن الله نحقق لكم التورق المباح شرعاً. لا نفتيكم لكن هذا ما توصلنا له باجتهادنا وبحثنا في الأحكام الشرعية فيما يتعلق بالتعاملات المالية"
  },
  {
    icon: Clock,
    title: "كاش خلال ساعتين",
    description: "نحول لك السيولة لحسابك البنكي خلال ساعتين فقط من إتمام الشراكة في شراء الجهاز"
  },
  {
    icon: Headphones,
    title: "دعم واتساب متواصل",
    description: "فريق دعم مطر متاح على 0590360039 للإجابة على استفساراتك"
  },
  {
    icon: BadgeCheck,
    title: "شراكة موثوقة وشفافة",
    description: "ندخل معكم كشركاء حقيقيين في شراء الجهاز ونتكفل بالدفعة الأولى مقابل نسبة الشراكة بكل شفافية"
  },
  {
    icon: CreditCard,
    title: "شراكة عبر 3 تطبيقات",
    description: "ندخل كشركاء معكم عبر تابي وتمارا ومدفوع لتحقيق أفضل سيولة لكم"
  },
  {
    icon: TrendingUp,
    title: "أفضل خدمة سيولة وسلفة",
    description: "نقدم أفضل خدمة سيولة وسلفة بدخولنا معكم كشركاء، بأفضل نسبة وأقل رسوم"
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
            لماذا مطر لخدمات السيولة والسلفة؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم أفضل خدمة سيولة وسلفة بدخولنا معكم كشركاء في شراء الجهاز، وبهذا نتجنب شبهات الربا ونحقق بإذن الله التورق المباح شرعاً
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
