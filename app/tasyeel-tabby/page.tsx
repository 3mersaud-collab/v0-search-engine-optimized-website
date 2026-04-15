import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, Star, ChevronDown, RefreshCw, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تسييل تابي | تسييل رصيد تابي كاش فوري خلال ساعة",
  description:
    "تسييل تابي فوري — حوّل رصيدك في تابي إلى كاش يصل حسابك البنكي خلال ساعة. أفضل أسعار تسييل تابي في السعودية بدون كفيل وبدون تحويل راتب مع مطر.",
  keywords:
    "تسييل تابي, تسييل رصيد تابي, تسييل تابي كاش, تسييل حد تابي, تحويل تابي كاش, تسييل تابي فوري, تسييل تابي بدون كفيل, تسييل تابي الرياض, تسييل تابي جدة, تسييل تابي الدمام, طريقة تسييل تابي",
  alternates: {
    canonical: "https://liilsol.com/tasyeel-tabby",
  },
  openGraph: {
    title: "تسييل تابي فوري — حوّل رصيدك إلى كاش خلال ساعة | مطر",
    description: "تسييل تابي يصل حسابك البنكي خلال ساعة. بدون كفيل، بدون تحويل راتب. أفضل الأسعار مع مطر.",
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
      name: "تسييل تابي — تحويل رصيد تابي إلى كاش فوري",
      description: "خدمة تسييل تابي من مطر. نحول رصيدك في تابي إلى كاش فوري يصل حسابك البنكي خلال ساعة بدون كفيل وبدون تحويل راتب.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["تسييل تابي", "تسييل رصيد تابي", "تحويل تابي كاش"],
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
          acceptedAnswer: { "@type": "Answer", text: "تسييل تابي يعني تحويل حدك الائتماني في تطبيق تابي إلى كاش نقدي يصل حسابك البنكي. بدلاً من استخدام الرصيد في شراء منتجات، تحوله إلى سيولة نقدية." },
        },
        {
          "@type": "Question",
          name: "كيف يتم تسييل تابي؟",
          acceptedAnswer: { "@type": "Answer", text: "تدخل متجر اكسترا أو جرير أو نون، تختار جهازاً بالمبلغ المطلوب، تختار تابي كوسيلة دفع، تصور شاشة التأكيد وترسلها لنا عبر واتساب. نكمل الباقي ونحول لك الكاش خلال ساعة." },
        },
        {
          "@type": "Question",
          name: "كم يستغرق تسييل تابي؟",
          acceptedAnswer: { "@type": "Answer", text: "تسييل تابي يستغرق ساعة واحدة فقط من إرسال صورة التأكيد حتى وصول الكاش لحسابك البنكي." },
        },
        {
          "@type": "Question",
          name: "هل تسييل تابي آمن؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، تسييل تابي مع مطر آمن 100%. نعمل بنظام الشراكة الحلال وكل العمليات موثقة. لدينا أكثر من 1000 عميل وتقييم 5 نجوم على Google Maps." },
        },
      ],
    },
  ],
}

const howItWorks = [
  { num: "١", title: "تواصل معنا", desc: "أرسل لنا عبر واتساب المبلغ اللي تبي تسيّله من تابي." },
  { num: "٢", title: "ادخل المتجر", desc: "ادخل اكسترا أو جرير أو نون واختر جهاز بالمبلغ المطلوب." },
  { num: "٣", title: "اختر تابي", desc: "من صفحة الدفع اختر تابي. بعد ظهور جدول الأقساط صوّره وأرسله لنا." },
  { num: "٤", title: "نسيّل لك", desc: "ندخل كشركاء، نشتري الجهاز، نبيعه، ونحول لك الكاش خلال ساعة." },
]

const advantages = [
  { icon: Clock, title: "تسييل خلال ساعة", desc: "أسرع خدمة تسييل تابي في السعودية — الكاش في حسابك خلال 60 دقيقة" },
  { icon: Shield, title: "آمن وموثوق", desc: "عقود شراكة واضحة — أكثر من 1000 عملية تسييل ناجحة" },
  { icon: TrendingUp, title: "أعلى صافي", desc: "نبيع الجهاز بأعلى سعر ممكن لنضمن لك أكبر صافي" },
  { icon: RefreshCw, title: "بدون تعقيدات", desc: "لا كفيل، لا تحويل راتب، لا أوراق — فقط حساب تابي نشط" },
  { icon: Zap, title: "تنفيذ فوري", desc: "نبدأ فوراً بعد استلام صورة التأكيد — بدون انتظار" },
  { icon: Star, title: "5 نجوم", desc: "تقييم 5.0 على Google Maps — ثقة مئات العملاء" },
]

const faqs = [
  { q: "ما الفرق بين تسييل تابي وسيولة تابي؟", a: "تسييل تابي وسيولة تابي وسلفة تابي كلها نفس الخدمة بمسميات مختلفة. في جميع الحالات نحول رصيدك في تابي إلى كاش نقدي في حسابك البنكي." },
  { q: "هل تسييل تابي حلال شرعاً؟", a: "نعم، نعمل بنظام الشراكة الحلال. ندخل معك كشركاء في شراء الجهاز ونتكفل بالدفعة الأولى مقابل نسبة شراكة متفق عليها مسبقاً. لا يوجد ربا أو فائدة." },
  { q: "كم نسبة تسييل تابي؟", a: "النسبة تعتمد على المبلغ وعدد الدفعات. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الصافي الدقيق. كلما زاد المبلغ كلما كانت النسبة أفضل." },
  { q: "هل أقدر أسيّل تابي وتمارا معاً؟", a: "نعم! كثير من عملائنا يسيّلون تابي وتمارا معاً للحصول على أقصى كاش ممكن. تواصل معنا وسنساعدك." },
  { q: "ما هي أفضل متاجر تسييل تابي؟", a: "أفضل المتاجر لتسييل تابي هي اكسترا وجرير ونون. نختار معك المتجر والجهاز الأفضل لضمان أعلى صافي ممكن." },
  { q: "هل تسييل تابي يؤثر على حسابي في تابي؟", a: "تسييل تابي هو عملية شراء عادية عبر تابي. طالما تلتزم بسداد الأقساط في مواعيدها فلن يتأثر حسابك أو تقييمك في تابي." },
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
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <RefreshCw className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تسييل فوري</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                تسييل تابي — حوّل رصيدك إلى كاش
                <span className="block text-primary mt-2">خلال ساعة واحدة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تبي <strong className="text-foreground">تسييل تابي</strong>؟ مطر يحول رصيدك في تابي إلى{" "}
                <strong className="text-foreground">كاش فوري</strong> يصل حسابك البنكي خلال ساعة.
                ندخل معك كشركاء في شراء الجهاز ونتكفل بالدفعة الأولى ثم نبيعه ونحول لك{" "}
                <strong className="text-foreground">الصافي مباشرة</strong>. بدون كفيل وبدون تحويل راتب.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966548613381?text=أبي تسييل تابي" target="_blank" rel="noopener noreferrer">
                    سيّل تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة فقط</p>
                    <p className="text-sm text-muted-foreground">الكاش في حسابك</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Shield className="w-8 h-8 text-accent shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">آمن 100%</p>
                    <p className="text-sm text-muted-foreground">عقود شراكة واضحة</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <TrendingUp className="w-8 h-8 text-green-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">أعلى صافي</p>
                    <p className="text-sm text-muted-foreground">أفضل أسعار تسييل</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ما هو تسييل تابي */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                ما هو <span className="text-primary">تسييل تابي</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">تسييل تابي</strong> هو عملية تحويل حدك الائتماني في تطبيق تابي إلى <strong className="text-foreground">كاش نقدي حقيقي</strong> يصل حسابك البنكي. بدلاً من أن يبقى رصيدك في تابي مخصصاً فقط لشراء المنتجات، يمكنك تسييله والاستفادة منه في أي غرض تحتاجه.
                </p>
                <p>
                  <strong className="text-foreground">مطر</strong> يقدم خدمة <strong className="text-foreground">تسييل تابي</strong> بأفضل الأسعار في السعودية. الآلية بسيطة: تدخل المتجر الإلكتروني (اكسترا أو جرير أو نون)، تختار جهازاً بالمبلغ اللي تبي تسيّله، تختار تابي كوسيلة دفع، وبعد ظهور جدول الأقساط تصوره وترسله لنا عبر واتساب.
                </p>
                <p>
                  بعدها ندخل معك كشركاء في عملية الشراء ونتكفل بالدفعة الأولى نيابةً عنك. ثم نبيع الجهاز بأعلى سعر ممكن في السوق ونحول لك <strong className="text-foreground">صافي التسييل</strong> مباشرة لحسابك البنكي. كل العملية تستغرق <strong className="text-foreground">ساعة واحدة فقط</strong>.
                </p>
                <p>
                  خدمة <strong className="text-foreground">تسييل تابي</strong> متاحة في جميع مدن المملكة العربية السعودية. سواء كنت في الرياض أو جدة أو الدمام أو مكة أو المدينة أو أي مدينة أخرى، التحويل يصل لأي حساب بنكي سعودي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* كيف يعمل */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                كيف يتم <span className="text-primary">تسييل تابي</span>؟
              </h2>
              <div className="space-y-6">
                {howItWorks.map((step, i) => (
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

        {/* المميزات */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                لماذا <span className="text-primary">تسييل تابي مع مطر</span>؟
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((a, i) => (
                  <div key={i} className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <a.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{a.title}</h3>
                    <p className="text-muted-foreground text-sm">{a.desc}</p>
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
                أسئلة شائعة عن <span className="text-primary">تسييل تابي</span>
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
                  { href: "/cash-tamara", label: "كاش تمارا" },
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/tahweel-tabby-cash", label: "تحويل تابي كاش" },
                  { href: "/siyola", label: "سيولة فورية" },
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
                جاهز <span className="text-primary">تسيّل تابي</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وسيّل رصيدك في تابي خلال ساعة واحدة. بدون كفيل وبدون تحويل راتب.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966548613381?text=أبي تسييل تابي" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  سيّل تابي الآن
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
