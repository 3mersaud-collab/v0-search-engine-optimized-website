import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, ArrowRightLeft, Calculator } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تحويل تابي إلى كاش | تحويل رصيد تابي كاش بطريقة واضحة — مطر",
  description:
    "تحويل تابي إلى كاش مع مطر. إذا كنت تبحث عن تسييل تابي أو تحويل رصيد تابي كاش فستجد هنا الخطوات الواضحة للحصول على الصافي بسرعة.",
  keywords:
    "تحويل تابي إلى كاش, تحويل رصيد تابي كاش, تحويل رصيد تابي الى كاش, تسييل تابي, كاش تابي",
  alternates: {
    canonical: "https://liilsol.com/tahweel-tabby-cash",
  },
  openGraph: {
    title: "تحويل رصيد تابي الى كاش فوري | مطر",
    description: "حوّل رصيدك في تابي إلى كاش يصل حسابك خلال ساعة. نظام شراكة حلال مع مطر.",
    url: "https://liilsol.com/tahweel-tabby-cash",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/tahweel-tabby-cash#service",
      name: "تحويل تابي إلى كاش",
      description: "خدمة تحويل رصيد تابي كاش والحصول على الصافي بسرعة عبر نظام شراكة واضح.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["تحويل تابي إلى كاش", "تحويل رصيد تابي كاش", "تسييل تابي", "كاش تابي"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "تحويل رصيد تابي الى كاش", item: "https://liilsol.com/tahweel-tabby-cash" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "كيف أحول رصيد تابي الى كاش؟",
          acceptedAnswer: { "@type": "Answer", text: "تواصل معنا عبر واتساب، ادخل المتجر واختر جهازاً، اختر تابي كوسيلة دفع، صوّر التأكيد وأرسله لنا. نشتري معك كشركاء ونحول لك الصافي خلال ساعة." },
        },
        {
          "@type": "Question",
          name: "كم يصل الصافي من تحويل تابي كاش؟",
          acceptedAnswer: { "@type": "Answer", text: "يعتمد على المبلغ وعدد الدفعات. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الصافي الدقيق لأي مبلغ." },
        },
      ],
    },
  ],
}

const howItWorks = [
  {
    step: "١",
    title: "تواصل معنا",
    desc: "أرسل لنا على واتساب المبلغ المطلوب. نرشدك للمتجر والجهاز الأنسب لضمان أعلى صافي.",
  },
  {
    step: "٢",
    title: "ادخل المتجر واختر الجهاز",
    desc: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المناسب. لا تشتري — فقط أضفه للسلة.",
  },
  {
    step: "٣",
    title: "اختر تابي وصوّر التأكيد",
    desc: "من صفحة الدفع اختر تابي. بعد ظهور جدول الأقساط صوّره وأرسله لنا على واتساب.",
  },
  {
    step: "٤",
    title: "نشتري معك كشركاء",
    desc: "ندخل كشريك في الشراء ونغطي الدفعة الأولى نيابةً عنك مقابل نسبة شراكة متفق عليها.",
  },
  {
    step: "٥",
    title: "تستلم الكاش في حسابك",
    desc: "نبيع الجهاز ونحول لك الصافي مباشرة لحسابك البنكي. العملية كاملة خلال ساعة.",
  },
]

const importantNotes = [
  "الحد الأدنى للتحويل 1,000 ريال سعودي.",
  "التحويل يصل لأي حساب بنكي سعودي (الراجحي، الأهلي، الإنماء، وغيرها).",
  "لا نحتاج تحويل راتب أو ضامن — حسابك في تابي يكفي.",
  "نسبة الشراكة واضحة من البداية — لا مفاجآت.",
  "الخدمة متاحة 7 أيام في الأسبوع من 9 صباحاً حتى 12 منتصف الليل.",
  "يمكنك تحويل رصيد تابي وتمارا معاً للحصول على أقصى مبلغ.",
]

const faqs = [
  { q: "كيف أحول رصيد تابي كاش أو أحصل على كاش تابي؟", a: "تواصل معنا عبر واتساب، ادخل المتجر واختر جهازاً مناسباً، اختر تابي كوسيلة دفع، ثم أرسل لنا التأكيد. بعد ذلك نكمل الإجراء ونحول لك الصافي خلال ساعة." },
  { q: "هل تحويل رصيد تابي الى كاش حلال؟", a: "نعم، نعمل بنظام الشراكة الحلال. نشتري معك الجهاز كشركاء مقابل نسبة شراكة متفق عليها. لا ربا ولا فائدة." },
  { q: "كم الصافي من تحويل 5,000 ريال تابي؟", a: "يعتمد على عدد الدفعات والمتجر. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الرقم الدقيق." },
  { q: "هل أقدر أحول رصيد تابي وتمارا معاً؟", a: "نعم! كثير من عملائنا يحولون رصيدهم في كلا التطبيقين للحصول على أقصى كاش ممكن." },
  { q: "ما الفرق بين تحويل تابي كاش وسيولة تابي؟", a: "هما نفس الخدمة بمسميات مختلفة. في كلتا الحالتين نحول رصيدك في تابي إلى نقد في حسابك البنكي." },
  { q: "هل يؤثر التحويل على سجلي الائتماني؟", a: "هي عملية شراء عادية عبر تابي. طالما تلتزم بسداد الأقساط في مواعيدها فلن يتأثر سجلك." },
]

export default function TahweelTabbyCashPage() {
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
            <li className="text-foreground font-medium">تحويل رصيد تابي الى كاش</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <ArrowRightLeft className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تحويل فوري</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                تحويل تابي إلى كاش
                <span className="block text-primary mt-2">بخطوات واضحة وسريعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                هذه الصفحة مخصصة لشرح <strong className="text-foreground">تحويل تابي إلى كاش</strong> بشكل واضح، من اختيار الطلب وحتى وصول الصافي إلى حسابك البنكي،
                مع الحفاظ على وجود عبارة <strong className="text-foreground">تحويل رصيد تابي كاش</strong> بصياغة طبيعية غير مبالغ فيها.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966503367637?text=أبي تحويل رصيد تابي كاش" target="_blank" rel="noopener noreferrer">
                    حوّل رصيدك الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <ArrowRightLeft className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">تحويل مباشر</p>
                    <p className="text-sm text-muted-foreground">من تابي لحسابك</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-accent shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة واحدة</p>
                    <p className="text-sm text-muted-foreground">من التأكيد للتحويل</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Shield className="w-8 h-8 text-green-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">شراكة حلال</p>
                    <p className="text-sm text-muted-foreground">لا فائدة ولا ربا</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* كيف يعمل التحويل */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                كيف يتم <span className="text-primary">تحويل تابي إلى كاش</span>؟
              </h2>
              <p className="text-center text-muted-foreground mb-12">5 خطوات بسيطة — كل شيء عن بُعد عبر واتساب</p>
              <div className="space-y-6">
                {howItWorks.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary font-extrabold text-xl flex items-center justify-center shrink-0">
                      {step.step}
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

        {/* حاسبة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                كم يصل <span className="text-primary">الصافي</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                الصافي يعتمد على المبلغ وعدد الدفعات والمتجر. استخدم حاسبة السيولة لمعرفة الرقم الدقيق لأي مبلغ.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/#calculator">
                  افتح حاسبة السيولة
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ملاحظات مهمة */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                معلومات مهمة عن <span className="text-primary">التحويل</span>
              </h2>
              <div className="space-y-4">
                {importantNotes.map((note, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                    <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                    <p className="text-muted-foreground">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة عن <span className="text-primary">تحويل تابي كاش</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-card border border-border rounded-2xl overflow-hidden">
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
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-center mb-6 text-foreground">خدمات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/siyola", label: "سيولة فورية" },
                  { href: "/check-limit", label: "افحص حدك" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="p-4 bg-background rounded-xl border border-border hover:border-primary/30 text-center font-medium text-foreground hover:text-primary transition-colors">
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
                جاهز <span className="text-primary">تحول رصيدك كاش</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وحوّل رصيد تابي إلى كاش. المبلغ يصل حسابك البنكي خلال ساعة.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966503367637?text=أبي تحويل رصيد تابي كاش" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  حوّل رصيدك كاش الآن
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
