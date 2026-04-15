import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Coins, Clock, Shield, Wallet, CheckCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تكييش تابي | حوّل حدك في تابي إلى كاش بسرعة — مطر",
  description:
    "تكييش تابي مع مطر بطريقة واضحة وسريعة. إذا كان لديك رصيد في تابي وتحتاج نقداً، نساعدك على تحويله إلى كاش يصل حسابك البنكي خلال وقت قصير.",
  keywords:
    "تكييش تابي, تسييل تابي, كاش تابي, تحويل رصيد تابي كاش, تحويل تابي إلى كاش",
  alternates: {
    canonical: "https://liilsol.com/takyeesh-tabby",
  },
  openGraph: {
    title: "تكييش تابي | كاش تابي بسرعة مع مطر",
    description: "صفحة مخصصة لشرح تكييش تابي وتحويل الرصيد إلى كاش بطريقة واضحة وسريعة.",
    url: "https://liilsol.com/takyeesh-tabby",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/takyeesh-tabby#service",
      name: "تكييش تابي",
      description: "خدمة تكييش تابي وتحويل الرصيد المتاح في التطبيق إلى كاش عبر آلية شراكة واضحة.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["تكييش تابي", "تسييل تابي", "كاش تابي"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "تكييش تابي", item: "https://liilsol.com/takyeesh-tabby" },
      ],
    },
  ],
}

const benefits = [
  {
    icon: Coins,
    title: "تحويل الرصيد إلى نقد",
    desc: "إذا كان لديك حد شرائي في تابي وتحتاج سيولة فعلية، فهذه الصفحة تشرح لك المسار المناسب بوضوح.",
  },
  {
    icon: Clock,
    title: "إجراء سريع",
    desc: "الخطوات تتم بشكل مختصر وواضح عبر واتساب مع متابعة مباشرة حتى اكتمال العملية.",
  },
  {
    icon: Shield,
    title: "آلية واضحة",
    desc: "يتم شرح تفاصيل الإجراء ونسبة الشراكة من البداية حتى تكون الصورة كاملة قبل البدء.",
  },
  {
    icon: Wallet,
    title: "مفيد عند الحاجة للسيولة",
    desc: "كثير من العملاء يستخدمون تكييش تابي لتغطية التزامات عاجلة مثل الإيجار أو المصروفات الضرورية.",
  },
]

const steps = [
  "تواصل معنا عبر واتساب وحدد أنك تبحث عن تكييش تابي.",
  "نرشدك للمتجر والجهاز المناسب حسب الحد المتاح لديك.",
  "تختار تابي في الدفع وترسل لنا صورة التأكيد.",
  "يتم استكمال الإجراء وتحويل الصافي إلى حسابك البنكي.",
]

const faqs = [
  {
    q: "ما المقصود بتكييش تابي؟",
    a: "المقصود هو تحويل الحد الشرائي المتاح لك في تابي إلى كاش يمكنك الاستفادة منه في احتياجاتك المختلفة.",
  },
  {
    q: "هل تكييش تابي يختلف عن تسييل تابي؟",
    a: "غالباً لا، فالعملاء يستخدمون المصطلحين للتعبير عن نفس الفكرة تقريباً، وهي تحويل الرصيد في تابي إلى نقد.",
  },
  {
    q: "كيف أعرف الصافي المتوقع؟",
    a: "للحصول على رقم أدق، استخدم حاسبة السيولة في الصفحة الرئيسية أو تواصل معنا عبر واتساب.",
  },
]

export default function TakyeeshTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Coins className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تكييش تابي</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                تكييش تابي
                <span className="block text-primary mt-2">وحوّل رصيدك إلى كاش</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                إذا كنت تبحث عن <strong className="text-foreground">تكييش تابي</strong> أو <strong className="text-foreground">كاش تابي</strong>،
                فمطر يساعدك على فهم الطريقة المناسبة لتحويل الرصيد إلى نقد بشكل سريع وواضح.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966503367637?text=أبي تكييش تابي" target="_blank" rel="noopener noreferrer">
                    اطلب تكييش تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="p-6 bg-background rounded-2xl border border-border">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="font-bold text-xl text-foreground mb-2">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                خطوات <span className="text-primary">تكييش تابي</span>
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                أسئلة شائعة عن <span className="text-primary">تكييش تابي</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-background border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-foreground list-none">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180 shrink-0" />
                    </summary>
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto p-8 bg-card rounded-3xl border border-border">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">ابدأ الآن</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                إذا كان لديك حد متاح في تابي وتريد الاستفادة منه بشكل نقدي، تواصل معنا الآن وسنوضح لك الخطوات المناسبة حسب حالتك.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966503367637?text=أبي كاش تابي" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
