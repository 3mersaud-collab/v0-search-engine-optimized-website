import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, MapPin, Star, ChevronDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة تابي الدمام | كاش تمارا الدمام — تحويل خلال ساعة",
  description:
    "احصل على سيولة تابي الدمام وكاش تمارا الدمام خلال ساعة فقط. مطر يدخل معك كشريك في الشراء من اكسترا وجرير ونون ثم يحوّل لك الصافي مباشرة لحسابك البنكي.",
  keywords:
    "سيولة تابي الدمام, كاش تمارا الدمام, سيولة في الدمام, سيولة تابي, كاش تمارا, سلفة الدمام, تسييل تابي الدمام, تسييل تمارا الدمام",
  alternates: {
    canonical: "https://liilsol.com/siyola-dammam",
  },
  openGraph: {
    title: "سيولة تابي الدمام | كاش تمارا الدمام — مطر",
    description: "سيولة تابي وكاش تمارا في الدمام — تحويل خلال ساعة لحسابك البنكي",
    url: "https://liilsol.com/siyola-dammam",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://liilsol.com/#dammam",
      name: "مطر — سيولة تابي وكاش تمارا الدمام",
      description:
        "خدمة سيولة تابي الدمام وكاش تمارا الدمام. ندخل معك كشركاء في شراء الأجهزة عبر تابي وتمارا ونحوّل لك الصافي خلال ساعة.",
      url: "https://liilsol.com/siyola-dammam",
      telephone: "+966590360039",
      address: {
        "@type": "PostalAddress",
        streetAddress: "حي المرسلات",
        addressLocality: "الدمام",
        addressRegion: "المنطقة الشرقية",
        addressCountry: "SA",
      },
      areaServed: {
        "@type": "City",
        name: "الدمام",
      },
      serviceType: ["سيولة تابي", "كاش تمارا", "سيولة في الدمام"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "22:00",
      },
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
          name: "سيولة تابي الدمام",
          item: "https://liilsol.com/siyola-dammam",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "كيف أحصل على سيولة تابي في الدمام؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تواصل معنا عبر واتساب، نحدد جهازك من اكسترا أو جرير الدمام، ندخل معك كشركاء عبر تابي، نبيع الجهاز ونحوّل لك الصافي خلال ساعة.",
          },
        },
        {
          "@type": "Question",
          name: "هل خدمة كاش تمارا متاحة في الدمام؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، خدمة كاش تمارا الدمام متاحة يومياً. نتعامل مع جميع أحياء الدمام والخبر والقطيف ونحوّل لحسابك البنكي مباشرة.",
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
    desc: "أرسل لنا اسمك وتفاصيل طلبك من الدمام.",
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
    desc: "يُحوَّل لك الصافي مباشرةً لحسابك البنكي في الدمام خلال ساعة من الطلب.",
  },
]

const examples = [
  { device: "آيفون 15 — اكسترا الدمام", price: "4,500", net: "3,600", time: "45 دقيقة" },
  { device: "سامسونج S24 — جرير الدمام", price: "3,800", net: "3,000", time: "50 دقيقة" },
  { device: "آيباد Pro — نون", price: "5,200", net: "4,100", time: "60 دقيقة" },
  { device: "لابتوب Lenovo — اكسترا الدمام", price: "5,500", net: "4,300", time: "55 دقيقة" },
]

const faqs = [
  {
    q: "ما هي مناطق الدمام التي تخدمونها؟",
    a: "نخدم الدمام بالكامل، ونمتد أيضاً إلى الخبر والقطيف والظهران والجبيل. التحويل يصل لحسابك البنكي مباشرة بغض النظر عن موقعك في المنطقة الشرقية.",
  },
  {
    q: "كيف أتأكد من أن سيولة تابي الدمام آمنة؟",
    a: "عملنا مبني على عقود شراكة واضحة وموثّقة. نحن شركاء في عملية الشراء وليس قرضاً أو ديناً. عشرات العملاء في الدمام والمنطقة الشرقية وثّقوا تجربتهم الإيجابية معنا.",
  },
  {
    q: "هل يمكنني الحصول على كاش تمارا الدمام بدون زيارة مكتبكم؟",
    a: "نعم تماماً. الخدمة كاملة عن بُعد عبر واتساب. لا حاجة لأي زيارة ميدانية رغم بُعد الدمام عن مكتبنا في الرياض — كل شيء يتم إلكترونياً.",
  },
  {
    q: "هل تخدمون الخبر والقطيف أيضاً ضمن خدمة المنطقة الشرقية؟",
    a: "نعم. نخدم الدمام والخبر والقطيف والظهران والجبيل ضمن خدمة المنطقة الشرقية. التحويل البنكي يصل لأي مكان في المملكة خلال ساعة.",
  },
  {
    q: "هل أحتاج إلى ضامن للحصول على سيولة في الدمام؟",
    a: "لا يلزم ضامن على الإطلاق. كل ما تحتاجه هو حساب تابي أو تمارا نشط بحد كافٍ وهوية سعودية.",
  },
]

export default function SiyolaDammamPage() {
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
            <li className="text-foreground font-medium">سيولة تابي الدمام</li>
          </ol>
        </nav>

        {/* ─── Hero ─── */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-10 right-16 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-16 left-16 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">خدمة الدمام والمنطقة الشرقية</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سيولة تابي وكاش تمارا في الدمام
                <span className="block text-primary mt-2">تحويل خلال ساعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                هل تبحث عن <strong className="text-foreground">سيولة تابي الدمام</strong> أو{" "}
                <strong className="text-foreground">كاش تمارا الدمام</strong>؟ مطر يدخل معك
                كشريك في شراء الجهاز من اكسترا أو جرير الدمام، يتكفل بالدفعة الأولى، ثم يبيع
                الجهاز ويحوّل لك <strong className="text-foreground">الصافي مباشرةً</strong> في
                حسابك البنكي خلال ساعة واحدة فقط — مهما كان موقعك في المنطقة الشرقية.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a
                    href="https://wa.me/966590360039?text=أريد سيولة تابي أو كاش تمارا في الدمام"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب سيولة الدمام الآن
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
                    <p className="text-sm text-muted-foreground">تحويل سريع للدمام</p>
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
                    <p className="font-bold text-foreground">+200 عميل</p>
                    <p className="text-sm text-muted-foreground">في المنطقة الشرقية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── لماذا مطر في الدمام ─── */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                لماذا تختار مطر للحصول على{" "}
                <span className="text-primary">سيولة في الدمام</span>؟
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">الدمام</strong> عاصمة المنطقة الشرقية
                  وقلب الاقتصاد النفطي السعودي، وفيها يرتفع الطلب على السيولة السريعة بشكل
                  متميز. سواء كنت في <strong className="text-foreground">حي الشاطئ</strong> أو
                  البادية أو العزيزية أو الفيصلية، نحوّل لك أموالك خلال ساعة.
                </p>
                <p>
                  خدمة <strong className="text-foreground">سيولة تابي الدمام</strong> من مطر
                  تعمل بآلية الشراكة الحلال: ندخل معك كشركاء في شراء جهاز ذكي من اكسترا
                  الدمام أو جرير الدمام عبر تطبيق تابي، نتكفل بالدفعة الأولى نيابةً عنك مقابل
                  نسبة شراكة متفق عليها، ثم نبيع الجهاز ونحوّل لك الصافي فوراً لحسابك البنكي.
                </p>
                <p>
                  أما <strong className="text-foreground">كاش تمارا الدمام</strong>، فيعمل بنفس
                  الطريقة عبر تطبيق تمارا. أبناء{" "}
                  <strong className="text-foreground">الدمام</strong> والخبر والقطيف يستفيدون
                  من الخدمتين معاً، ويختارون التطبيق الذي يوفر لهم حداً أعلى لزيادة الصافي.
                </p>
                <p>
                  ما يجعل مطر الخيار الأول للحصول على{" "}
                  <strong className="text-foreground">سيولة في الدمام</strong> هو السرعة والشفافية
                  الكاملة: لا رسوم مخفية، لا شروط معقدة، والعملية بأكملها تتم عبر واتساب دون
                  أي حاجة للانتقال أو التعقيد.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  "نخدم الدمام والخبر والقطيف والظهران",
                  "تابي وتمارا كلاهما متاح للمنطقة الشرقية",
                  "لا زيارات ميدانية — كل شيء عن بُعد",
                  "تحويل مباشر لأي بنك سعودي",
                  "بيع الجهاز بأعلى سعر لضمان صافٍ أكبر",
                  "أكثر من 200 عملية ناجحة في المنطقة الشرقية",
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
                <span className="text-primary">سيولة تابي الدمام</span>
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
                أمثلة على <span className="text-primary">سيولة في الدمام</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                أرقام تقريبية توضح الصافي الذي تستلمه بعد بيع الجهاز في الدمام
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
                * الأرقام تقديرية وتتوقف على سعر الجهاز وقت البيع في الدمام
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
                <span className="text-primary">سيولة تابي وكاش تمارا في الدمام</span>
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
                <span className="text-primary">سيولة تابي الدمام</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب وسنكون معك خلال دقائق. سيولة تابي وكاش تمارا
                في الدمام والخبر والقطيف والمنطقة الشرقية — تحويل خلال ساعة لحسابك البنكي.
              </p>
              <Button
                size="lg"
                className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl"
                asChild
              >
                <a
                  href="https://wa.me/966590360039?text=أريد سيولة تابي أو كاش تمارا في الدمام"
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
                📍 نخدم الدمام والمنطقة الشرقية كاملاً &nbsp;|&nbsp; ⏱ ردّ خلال دقائق
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
