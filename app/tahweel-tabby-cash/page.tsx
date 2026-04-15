import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, Zap, ArrowRightLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تحويل رصيد تابي الى كاش | تحويل تابي كاش فوري خلال ساعة",
  description:
    "تحويل رصيد تابي الى كاش فوري يصل حسابك البنكي خلال ساعة. أفضل طريقة لتحويل حد تابي إلى نقد بدون كفيل وبدون تحويل راتب. مطر — الأسرع والأوثق في السعودية.",
  keywords:
    "تحويل رصيد تابي الى كاش, تحويل تابي كاش, تحويل حد تابي, تحويل تابي الى نقد, تحويل رصيد تابي, كيف احول رصيد تابي الى كاش, طريقة تحويل تابي كاش, تحويل تابي فلوس, تحويل تابي سيولة, تحويل رصيد تابي الى فلوس",
  alternates: {
    canonical: "https://liilsol.com/tahweel-tabby-cash",
  },
  openGraph: {
    title: "تحويل رصيد تابي الى كاش — فوري خلال ساعة | مطر",
    description: "حوّل رصيدك في تابي إلى كاش يصل حسابك البنكي خلال ساعة. بدون كفيل، بدون تحويل راتب.",
    url: "https://liilsol.com/tahweel-tabby-cash",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": "https://liilsol.com/tahweel-tabby-cash#howto",
      name: "كيف تحول رصيد تابي الى كاش",
      description: "خطوات تحويل رصيد تابي إلى كاش فوري مع مطر خلال ساعة واحدة",
      totalTime: "PT1H",
      step: [
        { "@type": "HowToStep", position: 1, name: "تواصل معنا", text: "أرسل لنا عبر واتساب المبلغ اللي تبي تحوله من تابي إلى كاش." },
        { "@type": "HowToStep", position: 2, name: "ادخل المتجر", text: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المطلوب." },
        { "@type": "HowToStep", position: 3, name: "اختر تابي", text: "اختر تابي كوسيلة دفع وبعد ظهور جدول الأقساط صوّره وأرسله لنا." },
        { "@type": "HowToStep", position: 4, name: "استلم الكاش", text: "نشتري الجهاز كشركاء ونبيعه ونحول لك الكاش خلال ساعة." },
      ],
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
          name: "كيف احول رصيد تابي الى كاش؟",
          acceptedAnswer: { "@type": "Answer", text: "تواصل مع مطر عبر واتساب، ادخل متجر اكسترا أو جرير أو نون، اختر جهازاً بالمبلغ المطلوب، اختر تابي كوسيلة دفع، صوّر شاشة التأكيد وأرسلها لنا. نكمل الباقي ونحول لك الكاش خلال ساعة." },
        },
        {
          "@type": "Question",
          name: "كم يستغرق تحويل رصيد تابي الى كاش؟",
          acceptedAnswer: { "@type": "Answer", text: "تحويل رصيد تابي إلى كاش مع مطر يستغرق ساعة واحدة فقط من إرسال صورة التأكيد حتى وصول الكاش لحسابك البنكي." },
        },
        {
          "@type": "Question",
          name: "هل تحويل رصيد تابي الى كاش آمن؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، تحويل رصيد تابي إلى كاش مع مطر آمن 100%. نعمل بنظام الشراكة الحلال وكل العمليات موثقة. لدينا أكثر من 1000 عميل وتقييم 5 نجوم." },
        },
      ],
    },
  ],
}

const steps = [
  { num: "١", title: "تواصل معنا عبر واتساب", desc: "أرسل لنا المبلغ اللي تبي تحوله من رصيد تابي إلى كاش." },
  { num: "٢", title: "ادخل المتجر الإلكتروني", desc: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المطلوب." },
  { num: "٣", title: "اختر تابي كوسيلة دفع", desc: "من صفحة الدفع اختر تابي. بعد ظهور جدول الأقساط صوّره وأرسله لنا عبر واتساب." },
  { num: "٤", title: "نشتري معك كشركاء", desc: "ندخل معك كشريك في الشراء ونتكفل بالدفعة الأولى نيابةً عنك." },
  { num: "٥", title: "الكاش في حسابك خلال ساعة", desc: "نبيع الجهاز بأعلى سعر ونحول لك الكاش مباشرة لحسابك البنكي." },
]

const faqs = [
  { q: "كيف احول رصيد تابي الى كاش بأفضل سعر؟", a: "للحصول على أفضل سعر عند تحويل رصيد تابي إلى كاش، تواصل مع مطر عبر واتساب. نختار معك الجهاز والمتجر الأفضل لضمان أعلى صافي ممكن. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الصافي الدقيق." },
  { q: "هل تحويل رصيد تابي الى كاش يحتاج كفيل؟", a: "لا، تحويل رصيد تابي إلى كاش مع مطر لا يحتاج كفيل ولا تحويل راتب. كل ما تحتاجه هو حساب تابي نشط بحد كافٍ." },
  { q: "ما هو الحد الأدنى لتحويل رصيد تابي الى كاش؟", a: "الحد الأدنى لتحويل رصيد تابي إلى كاش هو 1,000 ريال. والحد الأقصى يعتمد على حدك في تطبيق تابي." },
  { q: "هل أقدر أحول رصيد تابي وتمارا معاً إلى كاش؟", a: "نعم! كثير من عملائنا يحولون رصيد تابي وتمارا معاً للحصول على أقصى كاش ممكن. تواصل معنا وسنساعدك في تحقيق أعلى مبلغ." },
  { q: "هل تحويل رصيد تابي الى كاش حلال؟", a: "نعم، نعمل بنظام الشراكة الحلال. ندخل معك كشركاء في شراء الجهاز ونتكفل بالدفعة الأولى مقابل نسبة شراكة متفق عليها. لا ربا ولا فائدة." },
  { q: "ما أفضل متجر لتحويل رصيد تابي الى كاش؟", a: "أفضل المتاجر هي اكسترا وجرير ونون. نختار معك المتجر والجهاز الأنسب بناءً على أسعار إعادة البيع الحالية لضمان أعلى صافي كاش لك." },
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
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <ArrowRightLeft className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تحويل فوري</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                تحويل رصيد تابي الى كاش
                <span className="block text-primary mt-2">فوري — خلال ساعة واحدة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تبي <strong className="text-foreground">تحول رصيد تابي الى كاش</strong>؟ مطر يحول حدك في تابي إلى{" "}
                <strong className="text-foreground">كاش فوري</strong> يصل حسابك البنكي خلال ساعة.
                أسهل وأسرع طريقة لـ<strong className="text-foreground">تحويل تابي كاش</strong> في السعودية.
                بدون كفيل وبدون تحويل راتب.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966548613381?text=أبي تحويل رصيد تابي الى كاش" target="_blank" rel="noopener noreferrer">
                    حوّل تابي كاش الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الكاش</Link>
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
                    <p className="font-bold text-foreground">بدون كفيل</p>
                    <p className="text-sm text-muted-foreground">ولا تحويل راتب</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Banknote className="w-8 h-8 text-green-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">أعلى كاش</p>
                    <p className="text-sm text-muted-foreground">أفضل أسعار تحويل</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* شرح مفصل */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                كيف يتم <span className="text-primary">تحويل رصيد تابي الى كاش</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">تحويل رصيد تابي الى كاش</strong> هو عملية بسيطة وسريعة مع مطر. الفكرة أنك تستخدم حدك الائتماني في تطبيق تابي لشراء جهاز ذكي، ثم نبيع هذا الجهاز ونحول لك <strong className="text-foreground">الكاش مباشرة</strong> لحسابك البنكي.
                </p>
                <p>
                  الخطوة الأولى هي التواصل معنا عبر واتساب وإخبارنا بالمبلغ اللي تبي تحوله. بعدها تدخل متجر اكسترا أو جرير أو نون وتختار جهازاً بالمبلغ المطلوب. من صفحة الدفع تختار <strong className="text-foreground">تابي</strong> كوسيلة دفع.
                </p>
                <p>
                  بعد ظهور جدول الأقساط، تصوره وترسله لنا. ندخل معك كشركاء في عملية الشراء ونتكفل بالدفعة الأولى نيابةً عنك. ثم نبيع الجهاز بأعلى سعر ممكن ونحول لك <strong className="text-foreground">صافي الكاش</strong> خلال ساعة واحدة.
                </p>
                <p>
                  ما يميز <strong className="text-foreground">تحويل رصيد تابي الى كاش مع مطر</strong> هو الشفافية والسرعة. نخبرك بالصافي الدقيق قبل البدء، ونحول لك الكاش خلال ساعة. لا مفاجآت ولا رسوم مخفية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الخطوات */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                5 خطوات لـ<span className="text-primary">تحويل تابي كاش</span>
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
                أسئلة شائعة عن <span className="text-primary">تحويل رصيد تابي الى كاش</span>
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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-center mb-6 text-foreground">خدمات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/cash-tamara", label: "كاش تمارا" },
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/siyola", label: "سيولة فورية" },
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
                جاهز <span className="text-primary">تحول تابي كاش</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وحوّل رصيدك في تابي إلى كاش خلال ساعة واحدة. بدون كفيل وبدون تحويل راتب.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966548613381?text=أبي تحويل رصيد تابي الى كاش" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  حوّل تابي كاش الآن
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
