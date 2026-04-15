import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, RefreshCw, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تسييل تابي | تكييش تابي وتحويل رصيد تابي إلى كاش — مطر",
  description:
    "تسييل تابي وتكييش تابي مع مطر. حوّل رصيدك في تابي إلى كاش يصل حسابك البنكي خلال ساعة عبر نظام شراكة واضح وسريع.",
  keywords:
    "تسييل تابي, تكييش تابي, كاش تابي, تحويل رصيد تابي كاش, تسييل رصيد تابي",
  alternates: {
    canonical: "https://liilsol.com/tasyeel-tabby",
  },
  openGraph: {
    title: "تسييل تابي — حوّل رصيدك إلى كاش | مطر",
    description: "تسييل رصيد تابي فوري. حوّل حدك الائتماني إلى نقد يصل حسابك خلال ساعة.",
    url: "https://liilsol.com/tasyeel-tabby",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/tasyeel-tabby#service",
      name: "تسييل تابي — تكييش تابي وتحويل الرصيد إلى كاش",
      description: "خدمة تسييل رصيد تابي وتكييشه وتحويله إلى كاش فوري عبر نظام شراكة واضح.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["تسييل تابي", "تكييش تابي", "كاش تابي", "تحويل رصيد تابي كاش"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "تسييل تابي", item: "https://liilsol.com/tasyeel-tabby" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما معنى تسييل تابي؟",
          acceptedAnswer: { "@type": "Answer", text: "تسييل تابي يعني تحويل حدك الائتماني في تطبيق تابي من رصيد شرائي إلى نقد حقيقي يصل حسابك البنكي." },
        },
        {
          "@type": "Question",
          name: "هل تسييل تابي قانوني؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، العملية هي شراء جهاز عبر تابي ثم بيعه. لا يوجد ما يمنع ذلك قانونياً. ونحن نعمل بنظام الشراكة الحلال." },
        },
      ],
    },
  ],
}

const whyTasyeel = [
  { icon: Banknote, title: "سيولة فورية", desc: "حوّل رصيدك الشرائي إلى نقد تستخدمه في أي شيء — إيجار، فاتورة، طوارئ." },
  { icon: RefreshCw, title: "استفد من حدك الكامل", desc: "بدلاً من ترك رصيدك في تابي بدون استخدام، حوّله إلى نقد مفيد." },
  { icon: Shield, title: "شراكة حلال", desc: "نشتري معك كشركاء — لا فائدة ولا ربا. نسبة الشراكة واضحة من البداية." },
  { icon: Clock, title: "ساعة واحدة فقط", desc: "من لحظة إرسال التأكيد حتى وصول المبلغ لحسابك البنكي." },
  { icon: CheckCircle, title: "لا أوراق مطلوبة", desc: "لا تعريف راتب، لا كشف حساب، لا ضامن. حسابك في تابي يكفي." },
  { icon: Star, title: "خبرة +1000 عميل", desc: "أكثر من ألف عميل سيّلوا رصيدهم معنا بنجاح." },
]

const useCases = [
  { emoji: "🏠", title: "دفع الإيجار", desc: "موعد الإيجار قرب وما عندك سيولة؟ سيّل رصيد تابي وادفع إيجارك." },
  { emoji: "🚗", title: "إصلاح السيارة", desc: "عطل مفاجئ في السيارة؟ حوّل رصيدك إلى نقد وأصلحها فوراً." },
  { emoji: "💊", title: "مصاريف طبية", desc: "موعد طبي أو علاج عاجل؟ سيّل رصيدك وغطِّ المصاريف." },
  { emoji: "🎓", title: "رسوم دراسية", desc: "قسط جامعة أو دورة تدريبية؟ حوّل رصيد تابي وادفع الرسوم." },
  { emoji: "✈️", title: "سفر طارئ", desc: "تحتاج تسافر بشكل عاجل؟ سيّل رصيدك واحجز تذكرتك." },
  { emoji: "📱", title: "فاتورة مستعجلة", desc: "فاتورة كهرباء أو اتصالات؟ حوّل رصيدك وادفعها فوراً." },
]

const steps = [
  { num: "١", title: "تواصل معنا عبر واتساب", desc: "أرسل لنا طلبك مع المبلغ المطلوب." },
  { num: "٢", title: "ادخل المتجر واختر الجهاز", desc: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المناسب." },
  { num: "٣", title: "اختر تابي كوسيلة دفع", desc: "من صفحة الدفع اختر تابي، وبعد ظهور جدول الأقساط صوّره وأرسله لنا." },
  { num: "٤", title: "نشتري معك كشركاء", desc: "ندخل كشريك في الشراء ونغطي الدفعة الأولى نيابةً عنك." },
  { num: "٥", title: "تستلم المبلغ في حسابك", desc: "نبيع الجهاز ونحول لك الصافي مباشرة لحسابك البنكي." },
]

const faqs = [
  { q: "ما الفرق بين تسييل تابي وتكييش تابي وكاش تابي؟", a: "كلها مسميات شائعة لنفس الفكرة: تحويل رصيدك في تابي إلى نقد. الاختلاف فقط في التعبير المستخدم بين العملاء." },
  { q: "هل تسييل تابي يؤثر على حسابي؟", a: "هي عملية شراء عادية عبر تابي. طالما تلتزم بسداد الأقساط في مواعيدها فلن يتأثر حسابك أو سجلك الائتماني." },
  { q: "كم أقدر أسيّل من تابي؟", a: "يعتمد على حدك في تطبيق تابي. الحد الأدنى 1,000 ريال. استخدم حاسبة السيولة لمعرفة الصافي الدقيق." },
  { q: "هل أقدر أسيّل تابي وتمارا معاً؟", a: "نعم! كثير من عملائنا يسيّلون رصيدهم في كلا التطبيقين للحصول على أقصى مبلغ ممكن." },
  { q: "متى يصل المبلغ بعد التسييل؟", a: "خلال ساعة واحدة من إرسال صورة التأكيد. التحويل يصل لأي حساب بنكي سعودي." },
  { q: "هل التسييل متاح في جميع المدن؟", a: "نعم، الخدمة عن بُعد 100% عبر واتساب. متاحة في الرياض، جدة، الدمام، وجميع مدن المملكة." },
]

export default function TasyeelTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-3" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">الرئيسية</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">تسييل تابي</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <RefreshCw className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تسييل فوري</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                تسييل تابي وتكييش تابي
                <span className="block text-primary mt-2">إلى كاش فوري ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                عندك رصيد في تابي وتحتاج <strong className="text-foreground">كاش تابي</strong> بشكل سريع؟ مطر يسيّل لك رصيدك ويحوّله إلى نقد يصل حسابك البنكي.
                نشتري معك جهازاً كشركاء، نبيعه، ونحوّل لك <strong className="text-foreground">الصافي مباشرة</strong> بطريقة واضحة وسهلة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966503367637?text=أبي تسييل تابي" target="_blank" rel="noopener noreferrer">
                    سيّل رصيد تابي الآن
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

        {/* ما معنى تسييل تابي */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                ما معنى <span className="text-primary">تسييل تابي أو تكييش تابي</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">التسييل</strong> في عالم المال يعني تحويل أصل غير نقدي إلى نقد. وفي حالة تابي، يعني تحويل حدك الائتماني (الذي يمكنك استخدامه فقط للشراء) إلى نقد حقيقي تستطيع استخدامه في أي شيء.
                </p>
                <p>
                  كثير من الناس لديهم حد في تابي لا يستخدمونه لأنهم لا يحتاجون شراء منتجات. لكنهم يحتاجون سيولة نقدية لدفع إيجار، فاتورة، أو مصاريف طارئة. هنا يأتي دور <strong className="text-foreground">تسييل تابي</strong> أو ما يسميه البعض <strong className="text-foreground">تكييش تابي</strong>.
                </p>
                <p>
                  في <strong className="text-foreground">مطر</strong>، نسيّل لك رصيد تابي بنظام الشراكة الحلال: نشتري معك جهازاً عبر تابي كشركاء، نغطي الدفعة الأولى، ثم نبيع الجهاز ونحول لك الصافي. بهذه الطريقة تحصل على <strong className="text-foreground">كاش تابي</strong> بشكل منظم وواضح بالكامل.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* لماذا تسيّل */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                لماذا تختار <span className="text-primary">مطر لتسييل تابي</span>؟
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyTasyeel.map((b, i) => (
                  <div key={i} className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <b.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* حالات الاستخدام */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                متى تحتاج <span className="text-primary">تسييل تابي</span>؟
              </h2>
              <p className="text-center text-muted-foreground mb-10">حالات شائعة يلجأ فيها عملاؤنا لتسييل رصيدهم</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {useCases.map((uc, i) => (
                  <div key={i} className="p-5 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <span className="text-3xl mb-3 block">{uc.emoji}</span>
                    <h3 className="font-bold text-foreground mb-1">{uc.title}</h3>
                    <p className="text-muted-foreground text-sm">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* الخطوات */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                خطوات <span className="text-primary">تسييل تابي</span>
              </h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary font-extrabold text-xl flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة عن <span className="text-primary">تسييل تابي</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-background border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-foreground hover:bg-primary/5 transition-colors list-none">
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

        {/* روابط داخلية */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-center mb-6 text-foreground">خدمات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/tahweel-tabby-cash", label: "تحويل تابي كاش" },
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/siyola", label: "سيولة فورية" },
                  { href: "/check-limit", label: "افحص حدك" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="p-4 bg-card rounded-xl border border-border hover:border-primary/30 text-center font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/15 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
                جاهز <span className="text-primary">تسيّل رصيد تابي</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وسيّل رصيدك. المبلغ يصل حسابك البنكي خلال ساعة واحدة.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966503367637?text=أبي تسييل تابي" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  سيّل رصيد تابي الآن
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
