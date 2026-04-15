import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, Zap, UserX } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة بدون تحويل راتب | سيولة فورية بدون كفيل — خلال ساعة",
  description:
    "سيولة بدون تحويل راتب وبدون كفيل تصل حسابك البنكي خلال ساعة. سيولة فورية من تابي وتمارا بدون شروط معقدة. مطر — أسرع خدمة سيولة في السعودية.",
  keywords:
    "سيولة بدون تحويل راتب, سيولة بدون كفيل, سيولة فورية بدون شروط, سيولة بدون ضامن, سلفة بدون تحويل راتب, سلفة بدون كفيل, تمويل بدون تحويل راتب, تمويل بدون كفيل, سيولة سريعة بدون شروط, قرض بدون كفيل, سيولة تابي بدون كفيل, سيولة تمارا بدون كفيل",
  alternates: {
    canonical: "https://liilsol.com/siyola-without-salary",
  },
  openGraph: {
    title: "سيولة بدون تحويل راتب وبدون كفيل — خلال ساعة | مطر",
    description: "سيولة فورية بدون تحويل راتب وبدون كفيل. من تابي وتمارا تصل حسابك البنكي خلال ساعة.",
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
      name: "سيولة بدون تحويل راتب — سيولة فورية بدون كفيل",
      description: "خدمة سيولة فورية بدون تحويل راتب وبدون كفيل من مطر. نحول رصيدك في تابي أو تمارا إلى سيولة نقدية تصل حسابك البنكي خلال ساعة بدون أي شروط معقدة.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سيولة بدون تحويل راتب", "سيولة بدون كفيل", "سيولة فورية"],
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
          name: "هل يمكن الحصول على سيولة بدون تحويل راتب؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، مع مطر تحصل على سيولة فورية بدون تحويل راتب. كل ما تحتاجه هو حساب تابي أو تمارا نشط بحد كافٍ. لا نشترط تحويل الراتب أو أي ضمانات." },
        },
        {
          "@type": "Question",
          name: "هل السيولة بدون كفيل متاحة لجميع الفئات؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، سيولة بدون كفيل متاحة لجميع الفئات — موظفين حكوميين، قطاع خاص، أصحاب أعمال حرة، وحتى الطلاب. المهم أن يكون لديك حساب تابي أو تمارا نشط." },
        },
        {
          "@type": "Question",
          name: "ما الفرق بين سيولة مطر والتمويل البنكي؟",
          acceptedAnswer: { "@type": "Answer", text: "التمويل البنكي يتطلب تحويل راتب وكفيل وأوراق كثيرة ويستغرق أيام. سيولة مطر بدون تحويل راتب وبدون كفيل وتصل خلال ساعة فقط عبر واتساب." },
        },
      ],
    },
  ],
}

const comparison = [
  { feature: "تحويل راتب", bank: "مطلوب ✗", matar: "غير مطلوب ✓" },
  { feature: "كفيل / ضامن", bank: "مطلوب ✗", matar: "غير مطلوب ✓" },
  { feature: "أوراق ومستندات", bank: "كثيرة ✗", matar: "لا شيء ✓" },
  { feature: "مدة الموافقة", bank: "3-7 أيام ✗", matar: "ساعة واحدة ✓" },
  { feature: "زيارة فرع", bank: "مطلوبة ✗", matar: "عن بُعد 100% ✓" },
  { feature: "سجل ائتماني", bank: "مطلوب ✗", matar: "غير مطلوب ✓" },
]

const whoCanBenefit = [
  { title: "موظفو القطاع الخاص", desc: "لا تحتاج تحويل راتبك — سيولة فورية من رصيدك في تابي أو تمارا" },
  { title: "موظفو القطاع الحكومي", desc: "بدون كفيل وبدون إجراءات معقدة — سيولة خلال ساعة" },
  { title: "أصحاب الأعمال الحرة", desc: "حتى لو ما عندك راتب ثابت — حسابك في تابي أو تمارا يكفي" },
  { title: "الطلاب والمتدربون", desc: "سيولة بدون شروط — فقط حساب تابي أو تمارا نشط" },
  { title: "ربات البيوت", desc: "سيولة فورية بدون أي متطلبات — كل شيء عبر واتساب" },
  { title: "المتقاعدون", desc: "بدون تحويل راتب تقاعدي — سيولة سريعة وآمنة" },
]

const faqs = [
  { q: "كيف أحصل على سيولة بدون تحويل راتب؟", a: "تواصل معنا عبر واتساب، ادخل متجر اكسترا أو جرير أو نون، اختر جهازاً بالمبلغ المطلوب، اختر تابي أو تمارا كوسيلة دفع، صوّر شاشة التأكيد وأرسلها لنا. نكمل الباقي ونحول لك السيولة خلال ساعة. لا نحتاج تحويل راتب." },
  { q: "هل السيولة بدون كفيل آمنة؟", a: "نعم، سيولة بدون كفيل مع مطر آمنة 100%. نعمل بنظام الشراكة الحلال وكل العمليات موثقة. لدينا أكثر من 1000 عميل وتقييم 5 نجوم على Google Maps." },
  { q: "ما هي الشروط المطلوبة؟", a: "الشرط الوحيد هو أن يكون لديك حساب تابي أو تمارا نشط بحد كافٍ. لا نحتاج تحويل راتب، لا كفيل، لا أوراق، لا زيارة مكتب." },
  { q: "كم المبلغ الأقصى للسيولة بدون تحويل راتب؟", a: "المبلغ يعتمد على حدك في تابي أو تمارا. بعض العملاء لديهم حدود تصل إلى 15,000 ريال أو أكثر. يمكنك استخدام كلا التطبيقين للحصول على أقصى سيولة." },
  { q: "هل أقدر آخذ سيولة بدون كفيل وأنا عليّ التزامات بنكية؟", a: "نعم، لأن سيولة مطر لا تعتمد على سجلك الائتماني أو التزاماتك البنكية. المهم فقط أن يكون حسابك في تابي أو تمارا نشطاً بحد كافٍ." },
  { q: "ما الفرق بين سيولة بدون تحويل راتب وقرض بدون كفيل؟", a: "سيولة مطر ليست قرضاً. نحن شركاء في عملية شراء وبيع جهاز. لا فائدة ولا ربا. أما القروض البنكية فتتطلب عادةً تحويل راتب وكفيل وفائدة." },
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <UserX className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">بدون شروط معقدة</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سيولة بدون تحويل راتب
                <span className="block text-primary mt-2">وبدون كفيل — خلال ساعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تبي <strong className="text-foreground">سيولة بدون تحويل راتب</strong>؟ مطر يوفر لك{" "}
                <strong className="text-foreground">سيولة فورية بدون كفيل</strong> تصل حسابك البنكي خلال ساعة.
                لا أوراق، لا إجراءات معقدة، لا زيارة فرع. فقط حسابك في تابي أو تمارا وواتساب.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966548613381?text=أبي سيولة بدون تحويل راتب" target="_blank" rel="noopener noreferrer">
                    اطلب سيولة الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب السيولة</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة فقط</p>
                    <p className="text-sm text-muted-foreground">السيولة في حسابك</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <UserX className="w-8 h-8 text-accent shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">بدون كفيل</p>
                    <p className="text-sm text-muted-foreground">ولا تحويل راتب</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Star className="w-8 h-8 text-yellow-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">+1000 عميل</p>
                    <p className="text-sm text-muted-foreground">ثقة مئات العملاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* لماذا سيولة بدون تحويل راتب */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                لماذا <span className="text-primary">سيولة بدون تحويل راتب</span> من مطر؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  كثير من الناس يحتاجون <strong className="text-foreground">سيولة عاجلة</strong> لكن البنوك تشترط تحويل الراتب وكفيل وأوراق كثيرة وتستغرق أيام. مع <strong className="text-foreground">مطر</strong>، تحصل على سيولة فورية بدون أي من هذه الشروط.
                </p>
                <p>
                  خدمة <strong className="text-foreground">سيولة بدون تحويل راتب</strong> من مطر تعمل عبر تطبيقات تابي وتمارا. كل ما تحتاجه هو حساب نشط في أحد التطبيقين بحد كافٍ. لا نسأل عن راتبك، لا نحتاج كفيل، لا نطلب أوراق.
                </p>
                <p>
                  الآلية بسيطة: تدخل المتجر الإلكتروني، تختار جهازاً بالمبلغ المطلوب، تختار تابي أو تمارا كوسيلة دفع، وترسل لنا صورة التأكيد. ندخل معك كشركاء ونحول لك <strong className="text-foreground">السيولة خلال ساعة</strong>.
                </p>
                <p>
                  سواء كنت موظفاً في القطاع الخاص أو الحكومي، صاحب عمل حر، طالباً، أو حتى متقاعداً — خدمة <strong className="text-foreground">سيولة بدون كفيل</strong> متاحة لك بنفس الشروط البسيطة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* مقارنة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                مقارنة: <span className="text-primary">مطر</span> vs التمويل البنكي
              </h2>
              <p className="text-center text-muted-foreground mb-10">لماذا سيولة مطر أفضل من القروض البنكية؟</p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-start font-bold text-foreground">المعيار</th>
                      <th className="p-4 text-center font-bold text-foreground">البنوك</th>
                      <th className="p-4 text-center font-bold text-primary">مطر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
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

        {/* من يستفيد */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                من يستفيد من <span className="text-primary">سيولة بدون تحويل راتب</span>؟
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whoCanBenefit.map((item, i) => (
                  <div key={i} className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
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
                أسئلة شائعة عن <span className="text-primary">سيولة بدون تحويل راتب</span>
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
                  { href: "/siyola", label: "سيولة فورية" },
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/cash-tamara", label: "كاش تمارا" },
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/salfa-tamara", label: "سلفة تمارا" },
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
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
                جاهز تحصل على <span className="text-primary">سيولة بدون شروط</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب واحصل على سيولة فورية بدون تحويل راتب وبدون كفيل. السيولة تصل حسابك خلال ساعة واحدة.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966548613381?text=أبي سيولة بدون تحويل راتب" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  اطلب سيولة بدون شروط
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
