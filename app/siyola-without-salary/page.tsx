import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, UserCheck, Building2, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة بدون تحويل راتب | احصل على نقد فوري بدون شروط — مطر",
  description:
    "سيولة فورية بدون تحويل راتب مع مطر. لا نحتاج ضامن أو كشف حساب. نحول رصيدك في تابي أو تمارا إلى نقد يصل حسابك خلال ساعة.",
  keywords:
    "سيولة بدون تحويل راتب, سيولة بدون كفيل, سيولة فورية بدون شروط, تمويل بدون تحويل راتب",
  alternates: {
    canonical: "https://liilsol.com/siyola-without-salary",
  },
  openGraph: {
    title: "سيولة فورية بدون تحويل راتب | مطر",
    description: "احصل على سيولة فورية بدون تحويل راتب أو ضامن. نحول رصيدك في تابي أو تمارا إلى نقد خلال ساعة.",
    url: "https://liilsol.com/siyola-without-salary",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/siyola-without-salary#service",
      name: "سيولة بدون تحويل راتب",
      description: "خدمة سيولة فورية لا تتطلب تحويل راتب أو ضامن. نحول رصيدك في تابي أو تمارا إلى نقد يصل حسابك البنكي خلال ساعة.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سيولة بدون تحويل راتب", "سيولة بدون كفيل", "تمويل بدون شروط"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "سيولة بدون تحويل راتب", item: "https://liilsol.com/siyola-without-salary" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "كيف أحصل على سيولة بدون تحويل راتب؟",
          acceptedAnswer: { "@type": "Answer", text: "عبر تحويل رصيدك في تابي أو تمارا إلى نقد. لا نحتاج تحويل راتب أو ضامن — حسابك في التطبيق يكفي." },
        },
        {
          "@type": "Question",
          name: "هل الخدمة متاحة لأصحاب الأعمال الحرة؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، الخدمة متاحة لجميع الفئات: موظفين حكوميين، قطاع خاص، أصحاب أعمال حرة، وحتى الطلاب. المهم أن يكون لديك حساب نشط في تابي أو تمارا." },
        },
      ],
    },
  ],
}

const whyNoSalary = [
  {
    icon: UserCheck,
    title: "لا نحتاج تحويل راتب",
    desc: "على عكس البنوك وشركات التمويل، لا نطلب تحويل راتبك لحسابنا. حسابك في تابي أو تمارا هو كل ما نحتاجه.",
  },
  {
    icon: Shield,
    title: "لا نحتاج ضامن",
    desc: "لا كفيل ولا ضامن. العملية تتم بينك وبيننا مباشرة عبر واتساب.",
  },
  {
    icon: Banknote,
    title: "لا أوراق أو مستندات",
    desc: "لا تعريف راتب، لا كشف حساب، لا خطاب من جهة العمل. كل شيء إلكتروني.",
  },
  {
    icon: Clock,
    title: "تحويل خلال ساعة",
    desc: "من لحظة إرسال التأكيد حتى وصول المبلغ لحسابك البنكي — ساعة واحدة فقط.",
  },
]

const whoCanBenefit = [
  {
    icon: Building2,
    title: "موظفو القطاع الحكومي",
    desc: "راتبك محول لبنك معين ولا تقدر تحوله؟ لا مشكلة — نحول رصيدك في تابي أو تمارا بدون أي تأثير على راتبك.",
  },
  {
    icon: Briefcase,
    title: "موظفو القطاع الخاص",
    desc: "عقدك يمنعك من تحويل الراتب؟ أو ما تبي تعقد نفسك مع بنك؟ خدمتنا لا تتطلب أي تحويل.",
  },
  {
    icon: UserCheck,
    title: "أصحاب الأعمال الحرة",
    desc: "ما عندك راتب ثابت؟ لا مشكلة. طالما عندك حساب نشط في تابي أو تمارا بحد كافٍ، نقدر نساعدك.",
  },
]

const comparisonData = [
  { feature: "تحويل الراتب", bank: "مطلوب", matar: "غير مطلوب" },
  { feature: "الضامن / الكفيل", bank: "مطلوب أحياناً", matar: "غير مطلوب" },
  { feature: "الأوراق المطلوبة", bank: "تعريف راتب + كشف حساب", matar: "لا شيء" },
  { feature: "مدة الموافقة", bank: "3-7 أيام عمل", matar: "ساعة واحدة" },
  { feature: "زيارة الفرع", bank: "مطلوبة", matar: "عن بُعد 100%" },
  { feature: "الفائدة", bank: "فائدة سنوية مركبة", matar: "نسبة شراكة ثابتة" },
  { feature: "التأثير على سمة", bank: "يظهر كقرض", matar: "عملية شراء عادية" },
]

const faqs = [
  { q: "كيف أحصل على سيولة بدون تحويل راتب؟", a: "تواصل معنا عبر واتساب. نحول رصيدك في تابي أو تمارا إلى نقد يصل حسابك البنكي. لا نحتاج تحويل راتب أو أي مستندات." },
  { q: "هل الخدمة حلال؟", a: "نعم، نعمل بنظام الشراكة الحلال. نشتري معك جهازاً كشركاء مقابل نسبة شراكة متفق عليها. لا ربا ولا فائدة." },
  { q: "لماذا لا تحتاجون تحويل راتب؟", a: "لأن خدمتنا تعتمد على رصيدك في تابي أو تمارا وليس على راتبك. حدك الائتماني في التطبيق هو ضمانك." },
  { q: "هل الخدمة متاحة للمتقاعدين؟", a: "نعم، طالما لديك حساب نشط في تابي أو تمارا بحد كافٍ. لا نشترط عمراً معيناً أو وظيفة محددة." },
  { q: "كم المبلغ الأقصى الذي أقدر أحصل عليه؟", a: "يعتمد على حدك في تابي وتمارا. يمكنك استخدام كلا التطبيقين معاً للحصول على أقصى مبلغ. استخدم حاسبة السيولة لمعرفة الصافي." },
  { q: "هل تؤثر الخدمة على سجلي في سمة؟", a: "هي عملية شراء عادية عبر تابي أو تمارا. لا تظهر كقرض في سمة. طالما تلتزم بسداد الأقساط في مواعيدها فلن يتأثر سجلك." },
]

export default function SiyolaWithoutSalaryPage() {
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
            <li className="text-foreground font-medium">سيولة بدون تحويل راتب</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <UserCheck className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">بدون شروط معقدة</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سيولة فورية
                <span className="block text-primary mt-2">بدون تحويل راتب ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تحتاج <strong className="text-foreground">سيولة نقدية</strong> لكن ما تبي تحول راتبك أو تجيب ضامن؟
                مطر يحول رصيدك في تابي أو تمارا إلى نقد يصل حسابك البنكي — بدون أي شروط معقدة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966503367637?text=أبي سيولة بدون تحويل راتب" target="_blank" rel="noopener noreferrer">
                    اطلب سيولة الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <UserCheck className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">بدون تحويل راتب</p>
                    <p className="text-sm text-muted-foreground">ولا ضامن ولا أوراق</p>
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
                  <Star className="w-8 h-8 text-yellow-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">+1000 عميل</p>
                    <p className="text-sm text-muted-foreground">تقييم 5 نجوم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* لماذا بدون تحويل راتب */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                لماذا <span className="text-primary">لا نحتاج تحويل راتب</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  البنوك وشركات التمويل تطلب تحويل الراتب كضمان للسداد. لكن خدمتنا مختلفة تماماً — نحن لا نقرضك مالاً.
                </p>
                <p>
                  ما نفعله هو <strong className="text-foreground">تحويل رصيدك الموجود فعلاً</strong> في تابي أو تمارا إلى نقد. حدك الائتماني في التطبيق هو ضمانك، وليس راتبك. لذلك لا نحتاج تحويل راتب أو ضامن أو أي مستندات.
                </p>
                <p>
                  هذا يجعل الخدمة مناسبة لجميع الفئات: الموظف الحكومي الذي لا يستطيع تحويل راتبه، موظف القطاع الخاص الذي لا يريد الارتباط ببنك، صاحب العمل الحر الذي ليس لديه راتب ثابت، وحتى المتقاعد.
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
                مميزات <span className="text-primary">السيولة مع مطر</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyNoSalary.map((b, i) => (
                  <div key={i} className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <b.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{b.title}</h3>
                    <p className="text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* من يستفيد */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                من يستفيد من <span className="text-primary">هذه الخدمة</span>؟
              </h2>
              <p className="text-center text-muted-foreground mb-10">الخدمة مصممة لمن يحتاج سيولة سريعة بدون تعقيدات البنوك</p>
              <div className="grid md:grid-cols-3 gap-6">
                {whoCanBenefit.map((item, i) => (
                  <div key={i} className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors text-center">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground text-lg mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* مقارنة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                مطر مقابل <span className="text-primary">التمويل البنكي</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10">لماذا يفضل كثير من العملاء خدمتنا على القروض التقليدية؟</p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-start font-bold text-foreground">المعيار</th>
                      <th className="p-4 text-center font-bold text-foreground">التمويل البنكي</th>
                      <th className="p-4 text-center font-bold text-primary">مطر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-red-400">{row.bank}</td>
                        <td className="p-4 text-center text-green-400 font-bold">{row.matar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة
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
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
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
                جاهز تحصل على <span className="text-primary">سيولة فورية</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب. لا تحويل راتب، لا ضامن، لا أوراق. المبلغ يصل حسابك خلال ساعة.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966503367637?text=أبي سيولة بدون تحويل راتب" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  اطلب سيولة الآن
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
