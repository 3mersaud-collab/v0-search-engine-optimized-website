import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, MapPin, Star, ChevronDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة تابي الرياض | كاش تمارا الرياض — تحويل خلال ساعة",
  description:
    "احصل على سيولة تابي الرياض وكاش تمارا الرياض خلال ساعة فقط. مطر يدخل معك كشريك في الشراء من اكسترا وجرير ونون ثم يحوّل لك الصافي مباشرة لحسابك البنكي.",
  keywords:
    "سيولة تابي الرياض, كاش تمارا الرياض, سيولة في الرياض, سيولة تابي, كاش تمارا, سلفة الرياض, تسييل تابي الرياض, تسييل تمارا الرياض",
  alternates: {
    canonical: "https://liilsol.com/siyola-riyadh",
  },
  openGraph: {
    title: "سيولة تابي الرياض | كاش تمارا الرياض — مطر",
    description: "سيولة تابي وكاش تمارا في الرياض — تحويل خلال ساعة لحسابك البنكي",
    url: "https://liilsol.com/siyola-riyadh",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://liilsol.com/#riyadh",
      name: "مطر — سيولة تابي وكاش تمارا الرياض",
      description:
        "خدمة سيولة تابي الرياض وكاش تمارا الرياض. ندخل معك كشركاء في شراء الأجهزة عبر تابي وتمارا ونحوّل لك الصافي خلال ساعة.",
      url: "https://liilsol.com/siyola-riyadh",
      telephone: "+966567130112",
      address: {
        "@type": "PostalAddress",
        streetAddress: "حي المرسلات",
        addressLocality: "الرياض",
        addressRegion: "منطقة الرياض",
        addressCountry: "SA",
      },
      areaServed: {
        "@type": "City",
        name: "الرياض",
      },
      serviceType: ["سيولة تابي", "كاش تمارا", "سيولة في الرياض"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "22:00",
      },
      hasMap: "https://maps.google.com/?q=حي+المرسلات+الرياض",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://liilsol.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "سيولة تابي الرياض",
          item: "https://liilsol.com/siyola-riyadh",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "كيف أحصل على سيولة تابي في الرياض؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تواصل معنا عبر واتساب، نحدد جهازك من اكسترا أو جرير الرياض، ندخل معك كشركاء عبر تابي، نبيع الجهاز ونحوّل لك الصافي خلال ساعة.",
          },
        },
        {
          "@type": "Question",
          name: "هل خدمة كاش تمارا متاحة في الرياض؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، خدمة كاش تمارا الرياض متاحة يومياً. نتعامل مع جميع أحياء الرياض ونحوّل لحسابك البنكي مباشرة.",
          },
        },
      ],
    },
  ],
}

const steps = [
  {
    num: "١",
    title: "تواصل معنا عبر واتساب",
    desc: "أرسل لنا اسمك وتفاصيل طلبك من الرياض.",
  },
  {
    num: "٢",
    title: "اختر الجهاز والمتجر",
    desc: "نختار معك جهازاً من اكسترا أو جرير أو نون بأفضل سعر إعادة بيع.",
  },
  {
    num: "٣",
    title: "نشتري معك كشركاء عبر تابي أو تمارا",
    desc: "ندخل معك كشريك في عملية الشراء ونتكفل بالدفعة الأولى.",
  },
  {
    num: "٤",
    title: "نبيع الجهاز فوراً",
    desc: "نبيع الجهاز في السوق ونحصّل قيمته نقداً.",
  },
  {
    num: "٥",
    title: "تستلم الصافي خلال ساعة",
    desc: "يُحوَّل لك الصافي مباشرةً لحسابك البنكي في الرياض خلال ساعة من الطلب.",
  },
]

const examples = [
  { device: "آيفون 15 — اكسترا الرياض", price: "4,500", net: "3,600", time: "45 دقيقة" },
  { device: "سامسونج S24 — جرير الرياض", price: "3,800", net: "3,000", time: "50 دقيقة" },
  { device: "آيباد Pro — نون", price: "5,200", net: "4,100", time: "60 دقيقة" },
  { device: "لابتوب Dell — اكسترا الرياض", price: "6,000", net: "4,700", time: "55 دقيقة" },
]

const faqs = [
  {
    q: "ما هي مناطق الرياض التي تخدمونها؟",
    a: "نخدم جميع أحياء الرياض بلا استثناء — من العليا والملز والسليمانية حتى حي المرسلات وغيرها. لا فرق بينها لأن التحويل يصل لحسابك البنكي مباشرة.",
  },
  {
    q: "كيف أتأكد من أن سيولة تابي الرياض آمنة؟",
    a: "عملنا مرخّص ومبني على عقود شراكة واضحة. نحن شركاء في عملية الشراء وليس قرضاً أو ديناً. مئات العملاء في الرياض وثّقوا تجربتهم معنا.",
  },
  {
    q: "هل يمكنني الحصول على كاش تمارا الرياض بدون زيارة المكتب؟",
    a: "نعم تماماً. الخدمة كاملة عن بُعد عبر واتساب. لا حاجة لزيارة مكتبنا في حي المرسلات الرياض إلا إذا أردت ذلك.",
  },
  {
    q: "ما الحد الأقصى لمبلغ السيولة في الرياض؟",
    a: "يعتمد الحد على حد تابي أو تمارا المعتمد لديك. يمكنك الحصول على سيولة تتراوح بين 500 ريال وأكثر من 15,000 ريال حسب حدك.",
  },
  {
    q: "هل أحتاج إلى ضامن للحصول على سيولة في الرياض؟",
    a: "لا يلزم ضامن على الإطلاق. كل ما تحتاجه هو حساب تابي أو تمارا نشط بحد كافٍ وهوية سعودية.",
  },
]

export default function SiyolaRiyadhPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumb ─── */}
        <nav className="container mx-auto px-4 py-3" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">سيولة تابي الرياض</li>
          </ol>
        </nav>

        {/* ─── Hero ─── */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">خدمة الرياض</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سيولة تابي وكاش تمارا في الرياض
                <span className="block text-primary mt-2">تحويل خلال ساعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                هل تبحث عن <strong className="text-foreground">سيولة تابي الرياض</strong> أو{" "}
                <strong className="text-foreground">كاش تمارا الرياض</strong>؟ مطر يدخل معك
                كشريك في شراء الجهاز من اكسترا أو جرير الرياض، يتكفل بالدفعة الأولى، ثم يبيع
                الجهاز ويحوّل لك <strong className="text-foreground">الصافي مباشرةً</strong> في
                حسابك البنكي خلال ساعة واحدة فقط.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a
                    href="https://wa.me/966567130112?text=أريد سيولة تابي أو كاش تمارا في الرياض"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب سيولة الرياض الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <a href="#examples">شاهد أمثلة</a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة فقط</p>
                    <p className="text-sm text-muted-foreground">تحويل سريع للرياض</p>
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
                  <Star className="w-8 h-8 text-yellow-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">+500 عميل</p>
                    <p className="text-sm text-muted-foreground">في الرياض وحدها</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── لماذا مطر في الرياض ─── */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                لماذا تختار مطر للحصول على{" "}
                <span className="text-primary">سيولة في الرياض</span>؟
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">الرياض</strong> هي العاصمة السعودية والمركز
                  المالي الأول في المملكة، ومعها ترتفع احتياجات السيولة العاجلة يومياً. سواء كنت
                  في <strong className="text-foreground">حي العليا</strong> أو المرسلات أو
                  الملز أو النزهة، نصلك بسرعة ونحوّل لك أموالك خلال ساعة من الإرسال.
                </p>
                <p>
                  خدمة <strong className="text-foreground">سيولة تابي الرياض</strong> من مطر تعمل
                  بآلية الشراكة الحلال: ندخل معك كشركاء في شراء جهاز ذكي من اكسترا
                  الرياض أو جرير الرياض عبر تطبيق تابي، نتكفل بالدفعة الأولى نيابةً عنك مقابل
                  نسبة شراكة متفق عليها مسبقاً، ثم نبيع الجهاز ونحوّل لك الصافي فوراً.
                </p>
                <p>
                  أما <strong className="text-foreground">كاش تمارا الرياض</strong>، فيعمل بنفس
                  الطريقة عبر تطبيق تمارا. كثير من أبناء{" "}
                  <strong className="text-foreground">الرياض</strong> يفضّلون تمارا لأن حدودها
                  أعلى في بعض الأحيان، مما يتيح الحصول على سيولة أكبر في نفس الوقت.
                </p>
                <p>
                  ما يميّز مطر في <strong className="text-foreground">الرياض</strong> تحديداً هو
                  سرعة التنفيذ: لدينا شبكة متجار راسخة في العاصمة، مما يعني بيع الجهاز بأعلى
                  سعر ممكن وتحويل أكبر صافٍ لك. كل العمليات موثّقة وشفافة من أول لحظة.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  "نخدم جميع أحياء الرياض بلا استثناء",
                  "تابي وتمارا كلاهما متاح للرياض",
                  "لا نزيارات ميدانية — كل شيء عن بُعد",
                  "مكتبنا في حي المرسلات الرياض",
                  "بيع الجهاز بأعلى سعر لضمان صافٍ أكبر",
                  "أكثر من 500 عملية ناجحة في الرياض",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── الخطوات ─── */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                5 خطوات للحصول على{" "}
                <span className="text-primary">سيولة تابي الرياض</span>
              </h2>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
                  >
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

        {/* ─── جدول الأمثلة ─── */}
        <section id="examples" className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                أمثلة على <span className="text-primary">سيولة في الرياض</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                أرقام تقريبية توضح الصافي الذي تستلمه بعد بيع الجهاز في الرياض
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-start font-bold text-foreground">الجهاز والمتجر</th>
                      <th className="p-4 text-center font-bold text-foreground">سعر الشراء</th>
                      <th className="p-4 text-center font-bold text-foreground">الصافي لك</th>
                      <th className="p-4 text-center font-bold text-foreground">وقت التحويل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examples.map((ex, i) => (
                      <tr
                        key={i}
                        className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
                      >
                        <td className="p-4 font-medium text-foreground">{ex.device}</td>
                        <td className="p-4 text-center text-muted-foreground">{ex.price} ر.س</td>
                        <td className="p-4 text-center font-bold text-primary">{ex.net} ر.س</td>
                        <td className="p-4 text-center text-muted-foreground">{ex.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                * الأرقام تقديرية وتتوقف على سعر الجهاز وقت البيع في الرياض
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة عن{" "}
                <span className="text-primary">سيولة تابي وكاش تمارا في الرياض</span>
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

        {/* ─── CTA واتساب ─── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/15 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
                جاهز تحصل على{" "}
                <span className="text-primary">سيولة تابي الرياض</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وسنكون معك خلال دقائق. سيولة تابي وكاش تمارا
                في الرياض — من حي المرسلات إلى حسابك البنكي خلال ساعة واحدة.
              </p>
              <Button
                size="lg"
                className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl"
                asChild
              >
                <a
                  href="https://wa.me/966567130112?text=أريد سيولة تابي أو كاش تمارا في الرياض"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  ابدأ الآن عبر واتساب
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                📍 مكتبنا: حي المرسلات، الرياض &nbsp;|&nbsp; ⏱ ردّ خلال دقائق
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
