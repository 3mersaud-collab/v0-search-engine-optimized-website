import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, Zap, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سلفة تمارا | سلفة من تمارا فورية خلال ساعة — بدون كفيل",
  description:
    "احصل على سلفة تمارا فورية بدون كفيل وبدون تحويل راتب. سلفة من رصيدك في تمارا تصل حسابك البنكي خلال ساعة. أفضل أسعار سلفة تمارا في السعودية مع مطر.",
  keywords:
    "سلفة تمارا, سلفة من تمارا, سلفة تمارا فورية, سلفة تمارا بدون كفيل, سلفة تمارا بدون تحويل راتب, سلفة نقدية تمارا, سلفة سريعة تمارا, tamara سلفة, سلفة من تطبيق تمارا, كاش تمارا, سلفة تمارا الرياض",
  alternates: {
    canonical: "https://liilsol.com/salfa-tamara",
  },
  openGraph: {
    title: "سلفة تمارا فورية — بدون كفيل وبدون تحويل راتب | مطر",
    description: "سلفة تمارا تصل حسابك البنكي خلال ساعة. بدون كفيل، بدون تحويل راتب. أفضل الأسعار مع مطر.",
    url: "https://liilsol.com/salfa-tamara",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/salfa-tamara#service",
      name: "سلفة تمارا — سلفة فورية من رصيد تمارا",
      description: "خدمة سلفة تمارا الفورية من مطر. نحول رصيدك في تمارا إلى سلفة نقدية تصل حسابك البنكي خلال ساعة بدون كفيل وبدون تحويل راتب.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سلفة تمارا", "سلفة من تمارا", "كاش تمارا فوري"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "سلفة تمارا", item: "https://liilsol.com/salfa-tamara" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هي سلفة تمارا؟",
          acceptedAnswer: { "@type": "Answer", text: "سلفة تمارا هي خدمة تحويل حدك الائتماني في تطبيق تمارا إلى سلفة نقدية تصل حسابك البنكي خلال ساعة. ندخل معك كشركاء في شراء جهاز عبر تمارا ونتكفل بالدفعة الأولى ثم نبيعه ونحول لك الصافي." },
        },
        {
          "@type": "Question",
          name: "هل سلفة تمارا تحتاج كفيل؟",
          acceptedAnswer: { "@type": "Answer", text: "لا، سلفة تمارا من مطر لا تحتاج كفيل ولا تحويل راتب. كل ما تحتاجه هو حساب تمارا نشط بحد كافٍ." },
        },
        {
          "@type": "Question",
          name: "ما الفرق بين سلفة تمارا وسلفة تابي؟",
          acceptedAnswer: { "@type": "Answer", text: "الآلية نفسها لكن عبر تطبيق مختلف. تمارا أحياناً توفر حدوداً أعلى من تابي، مما يتيح سلفة أكبر. يمكنك استخدام كلا التطبيقين للحصول على أقصى سلفة ممكنة." },
        },
        {
          "@type": "Question",
          name: "كم الحد الأقصى لسلفة تمارا؟",
          acceptedAnswer: { "@type": "Answer", text: "الحد الأقصى يعتمد على حدك في تطبيق تمارا. بعض العملاء لديهم حدود تصل إلى 15,000 ريال أو أكثر في تمارا." },
        },
      ],
    },
  ],
}

const benefits = [
  { icon: Clock, title: "سلفة خلال ساعة", desc: "تصل السلفة لحسابك البنكي خلال ساعة واحدة فقط" },
  { icon: Shield, title: "بدون كفيل", desc: "لا تحتاج كفيل أو ضامن — حسابك في تمارا يكفي" },
  { icon: Banknote, title: "حدود أعلى", desc: "تمارا توفر حدوداً أعلى أحياناً — سلفة أكبر لك" },
  { icon: Zap, title: "تنفيذ فوري", desc: "نبدأ فوراً بعد استلام صورة التأكيد عبر واتساب" },
  { icon: Users, title: "+1000 عميل", desc: "أكثر من ألف عميل حصلوا على سلفة تمارا معنا" },
  { icon: Star, title: "تقييم 5 نجوم", desc: "تقييم 5.0 على Google Maps من عملائنا" },
]

const steps = [
  { num: "١", title: "تواصل معنا عبر واتساب", desc: "أرسل لنا طلب سلفة تمارا مع المبلغ المطلوب." },
  { num: "٢", title: "ادخل المتجر واختر الجهاز", desc: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المطلوب." },
  { num: "٣", title: "اختر تمارا كوسيلة دفع", desc: "من صفحة الدفع اختر تمارا. أضف بطاقة بنكية بدون رصيد واضغط ادفع، ثم صوّر الشاشة وأرسلها لنا." },
  { num: "٤", title: "نشتري معك كشركاء", desc: "ندخل معك كشريك في الشراء ونتكفل بالدفعة الأولى نيابةً عنك." },
  { num: "٥", title: "تستلم السلفة في حسابك", desc: "نبيع الجهاز ونحول لك صافي السلفة مباشرة لحسابك البنكي خلال ساعة." },
]

const faqs = [
  { q: "ما الفرق بين سلفة تمارا وكاش تمارا؟", a: "سلفة تمارا وكاش تمارا هما نفس الخدمة بمسميات مختلفة. في كلتا الحالتين نحول رصيدك في تمارا إلى نقد في حسابك البنكي خلال ساعة." },
  { q: "هل سلفة تمارا حلال؟", a: "نعم، نعمل بنظام الشراكة الحلال. ندخل معك كشركاء في شراء الجهاز ونتكفل بالدفعة الأولى مقابل نسبة شراكة متفق عليها مسبقاً." },
  { q: "كم عمولة سلفة تمارا؟", a: "العمولة تعتمد على المبلغ وعدد الدفعات. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الصافي الدقيق الذي ستستلمه." },
  { q: "هل أقدر آخذ سلفة تمارا وسلفة تابي معاً؟", a: "نعم بالتأكيد! كثير من عملائنا يستخدمون كلا التطبيقين للحصول على أقصى سلفة ممكنة. تواصل معنا وسنساعدك في تحقيق أعلى مبلغ." },
  { q: "هل سلفة تمارا تؤثر على سجلي الائتماني؟", a: "سلفة تمارا هي عملية شراء عادية عبر تمارا. طالما تلتزم بسداد أقساط تمارا في مواعيدها فلن يتأثر سجلك الائتماني." },
  { q: "ما هي خطوات سلفة تمارا بالتفصيل؟", a: "ادخل المتجر (اكسترا/جرير/نون)، اختر جهازاً بالمبلغ المطلوب، اختر تمارا كوسيلة دفع، أضف بطاقة بنكية بدون رصيد واضغط ادفع، صوّر الشاشة وأرسلها لنا على واتساب. نكمل الباقي ونحول لك السلفة خلال ساعة." },
]

export default function SalfaTamaraPage() {
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
            <li className="text-foreground font-medium">سلفة تمارا</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Banknote className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">سلفة فورية</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سلفة تمارا فورية
                <span className="block text-primary mt-2">بدون كفيل — خلال ساعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تحتاج <strong className="text-foreground">سلفة من تمارا</strong>؟ مطر يوفر لك{" "}
                <strong className="text-foreground">سلفة تمارا فورية</strong> تصل حسابك البنكي خلال ساعة واحدة.
                بدون كفيل، بدون تحويل راتب. تمارا توفر حدوداً أعلى أحياناً مما يعني{" "}
                <strong className="text-foreground">سلفة أكبر لك</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966548613381?text=أبي سلفة تمارا" target="_blank" rel="noopener noreferrer">
                    اطلب سلفة تمارا الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب السلفة</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة فقط</p>
                    <p className="text-sm text-muted-foreground">السلفة في حسابك</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Shield className="w-8 h-8 text-accent shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">بدون كفيل</p>
                    <p className="text-sm text-muted-foreground">ولا تحويل راتب</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Banknote className="w-8 h-8 text-green-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">حدود أعلى</p>
                    <p className="text-sm text-muted-foreground">سلفة أكبر مع تمارا</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ما هي سلفة تمارا */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                ما هي <span className="text-primary">سلفة تمارا</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">سلفة تمارا</strong> هي خدمة تتيح لك تحويل حدك الائتماني في تطبيق تمارا إلى <strong className="text-foreground">سلفة نقدية فورية</strong> تصل حسابك البنكي. تمارا من أشهر تطبيقات الشراء الآن والدفع لاحقاً في السعودية، وحدودها أحياناً تكون أعلى من تابي.
                </p>
                <p>
                  في <strong className="text-foreground">مطر</strong>، نقدم خدمة <strong className="text-foreground">سلفة تمارا</strong> بطريقة الشراكة الحلال: ندخل معك كشركاء في شراء جهاز ذكي من اكسترا أو جرير أو نون عبر تمارا، نتكفل بالدفعة الأولى نيابةً عنك، ثم نبيع الجهاز ونحول لك <strong className="text-foreground">صافي السلفة</strong> مباشرة لحسابك البنكي.
                </p>
                <p>
                  ما يميز <strong className="text-foreground">سلفة تمارا</strong> عن غيرها هو أن تمارا توفر حدوداً ائتمانية أعلى لبعض المستخدمين، مما يعني إمكانية الحصول على <strong className="text-foreground">سلفة أكبر</strong>. كثير من عملائنا يجمعون بين سلفة تابي وسلفة تمارا للحصول على أقصى مبلغ ممكن.
                </p>
                <p>
                  الخدمة متاحة في جميع مدن المملكة — <strong className="text-foreground">الرياض، جدة، الدمام، مكة، المدينة</strong> وغيرها. كل شيء يتم عن بُعد عبر واتساب والسلفة تصلك خلال ساعة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* المميزات */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                لماذا تختار <span className="text-primary">سلفة تمارا من مطر</span>؟
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
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

        {/* الخطوات */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                خطوات الحصول على <span className="text-primary">سلفة تمارا</span>
              </h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة عن <span className="text-primary">سلفة تمارا</span>
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
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/cash-tamara", label: "كاش تمارا" },
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
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
                جاهز تحصل على <span className="text-primary">سلفة تمارا</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب واحصل على سلفة تمارا فورية تصل حسابك البنكي خلال ساعة واحدة. بدون كفيل وبدون تحويل راتب.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966548613381?text=أبي سلفة تمارا" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  اطلب سلفة تمارا الآن
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
