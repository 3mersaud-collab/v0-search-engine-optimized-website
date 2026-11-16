import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  BadgePercent,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Gift,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "انضم إلى فريق مطر | برنامج المسوقين بالعمولة",
  description:
    "تعرّف على برنامج المسوقين في مطر: 50 ريالاً لكل عميل مقبول من الأول إلى العاشر، و100 ريال من العميل 11 حتى العميل 50، ثم الانتقال إلى عضوية فريق مطر ومزاياها.",
  keywords: [
    "الانضمام إلى فريق مطر",
    "برنامج المسوقين بالعمولة",
    "فرص تسويق بالعمولة",
    "عمل مرن",
    "مطر",
  ],
  alternates: {
    canonical: "https://liilsol.com/affiliate",
  },
  openGraph: {
    title: "انضم إلى فريق مطر",
    description:
      "مسار واضح للمسوّقين يبدأ بمكافأة عن كل عميل مقبول وينتهي بفرصة الانضمام إلى فريق مطر بعد إكمال 50 عميلاً مقبولاً.",
    url: "https://liilsol.com/affiliate",
    locale: "ar_SA",
    type: "website",
  },
}

const whatsappHref =
  "https://wa.me/966590360039?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D8%A5%D9%84%D9%89%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%85%D8%B7%D8%B1%20%D9%83%D9%85%D8%B3%D9%88%D9%91%D9%82."

const commissionStages = [
  {
    stage: "المرحلة الأولى",
    range: "العملاء 1–10",
    amount: "50 ريالاً",
    amountLabel: "عن كل عميل مقبول",
    detail: "عند إكمال أول 10 عملاء مقبولين، يكون إجمالي هذه المرحلة 500 ريال.",
    icon: Wallet,
  },
  {
    stage: "المرحلة الثانية",
    range: "العملاء 11–50",
    amount: "100 ريال",
    amountLabel: "عن كل عميل مقبول",
    detail:
      "يبدأ احتساب 100 ريال من العميل الحادي عشر ويستمر حتى العميل الخمسين.",
    icon: TrendingUp,
  },
  {
    stage: "المرحلة الثالثة",
    range: "بعد إكمال 50 عميلاً",
    amount: "عضوية فريق مطر",
    amountLabel: "مسار مهني بمزايا أوسع",
    detail:
      "تنتقل إلى عضوية الفريق للاستفادة من البونصات والعمل المرن وفرص الدخل الأعلى.",
    icon: Users,
  },
]

const teamBenefits = [
  {
    title: "بونصات إضافية",
    description: "مكافآت مرتبطة بالأداء والنتائج وفق سياسة الفريق.",
    icon: Gift,
  },
  {
    title: "عمل مرن",
    description: "مرونة في تنظيم الوقت وآلية العمل بما يناسب طبيعة الدور.",
    icon: Clock3,
  },
  {
    title: "فرص دخل أعلى",
    description: "مسار نمو يوسّع فرص الدخل كلما ارتفع الأداء.",
    icon: TrendingUp,
  },
  {
    title: "نسبة من الرسوم الإدارية",
    description: "استحقاق نسبة من الرسوم الإدارية وفق آلية العضوية ونوع الطلب.",
    icon: BadgePercent,
  },
]

const joiningSteps = [
  {
    number: "01",
    title: "قدّم طلب الانضمام",
    description: "أرسل بياناتك الأساسية عبر واتساب ليتم التواصل معك.",
  },
  {
    number: "02",
    title: "فعّل حسابك التسويقي",
    description: "بعد القبول، تستلم آلية العمل والتعريف المخصص لتتبع عملائك.",
  },
  {
    number: "03",
    title: "ابدأ بإحالة العملاء",
    description: "تُحتسب مكافأتك على كل عميل مكتمل ومعتمد وفق المراحل الموضحة.",
  },
]

const requirements = [
  "الالتزام بالمصداقية والوضوح عند تقديم الخدمة.",
  "استخدام المعلومات والمواد التسويقية المعتمدة فقط.",
  "القدرة على التواصل المهني ومتابعة العملاء.",
  "وجود حساب واتساب نشط؛ ولا تُشترط خبرة سابقة.",
]

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden border-b border-border/70 py-14 md:py-20 lg:py-24">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.08] via-background to-background"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div className="max-w-3xl">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  فرص الانضمام إلى فريق مطر
                </span>
                <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  يمكنك الآن الانضمام إلى فريقنا
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  برنامج تسويقي بمراحل واضحة ومكافآت محددة لكل عميل مقبول،
                  مع فرصة الانتقال إلى عضوية فريق مطر بعد تحقيق 50 عميلاً.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
                    aria-label="تقديم طلب الانضمام إلى فريق مطر عبر واتساب"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    قدّم طلبك عبر واتساب
                  </a>
                  <Link
                    href="#commission-plan"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-bold text-foreground transition hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
                  >
                    اطّلع على آلية المكافآت
                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <aside
                className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_70px_-45px_rgba(8,145,178,0.55)] md:p-8"
                aria-label="ملخص مسار الانضمام"
              >
                <p className="text-sm font-bold text-primary">النظام باختصار</p>
                <div className="mt-5 divide-y divide-border">
                  <div className="flex items-center justify-between gap-5 py-4 first:pt-0">
                    <div>
                      <p className="font-bold text-foreground">أول 10 عملاء</p>
                      <p className="mt-1 text-sm text-muted-foreground">مرحلة البداية</p>
                    </div>
                    <p className="shrink-0 text-xl font-bold text-primary">50 ريالاً</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 py-4">
                    <div>
                      <p className="font-bold text-foreground">من 11 إلى 50</p>
                      <p className="mt-1 text-sm text-muted-foreground">مرحلة النمو</p>
                    </div>
                    <p className="shrink-0 text-xl font-bold text-primary">100 ريال</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 py-4 last:pb-0">
                    <div>
                      <p className="font-bold text-foreground">بعد إكمال 50</p>
                      <p className="mt-1 text-sm text-muted-foreground">المرحلة المهنية</p>
                    </div>
                    <p className="shrink-0 text-lg font-bold text-accent">عضوية الفريق</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="commission-plan" className="scroll-mt-24 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold text-primary">آلية المكافآت</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                ثلاث مراحل واضحة للنمو معنا
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                ترتفع المكافأة مع تقدمك، ثم تنتقل إلى مسار عضوية الفريق بعد إكمال
                العدد المطلوب من العملاء المقبولين.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {commissionStages.map((item, index) => (
                <article
                  key={item.stage}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-primary to-accent" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-primary">{item.stage}</p>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{item.range}</h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <p className={`mt-8 font-bold text-foreground ${index === 2 ? "text-2xl" : "text-3xl"}`}>
                    {item.amount}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.amountLabel}</p>
                  <p className="mt-5 border-t border-border pt-5 leading-7 text-muted-foreground">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 md:flex md:items-center md:justify-between md:gap-8 md:p-6">
              <div>
                <p className="font-bold text-foreground">مثال واضح عند إكمال 50 عميلاً مقبولاً</p>
                <p className="mt-2 leading-7 text-muted-foreground">
                  أول 10 عملاء = 500 ريال، والعملاء من 11 إلى 50 = 4,000 ريال.
                </p>
              </div>
              <div className="mt-4 shrink-0 border-t border-primary/15 pt-4 md:mt-0 md:border-r md:border-t-0 md:pr-8 md:pt-0">
                <p className="text-sm text-muted-foreground">الإجمالي حتى العميل 50</p>
                <p className="mt-1 text-3xl font-bold text-primary">4,500 ريال</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-secondary/40 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="max-w-xl">
                <span className="text-sm font-bold text-primary">بعد إكمال 50 عميلاً مقبولاً</span>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  تنتقل من مسوّق إلى عضو في فريق مطر
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  تفتح عضوية الفريق مساراً أوسع للعمل والنمو، مع مزايا ترتبط
                  بالأداء وطبيعة الطلبات.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {teamBenefits.map((benefit) => (
                  <article key={benefit.title} className="rounded-2xl border border-border bg-card p-5">
                    <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{benefit.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold text-primary">خطوات الانضمام</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                ابدأ بخطوات بسيطة ومنظمة
              </h2>
            </div>

            <ol className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
              {joiningSteps.map((step) => (
                <li key={step.number} className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-3xl font-bold text-primary" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-border/70 bg-secondary/40 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-foreground">متطلبات أساسية</h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3 leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-foreground">متى يُحتسب العميل؟</h2>
                </div>
                <p className="mt-6 leading-8 text-muted-foreground">
                  العميل المقبول هو العميل المسجّل من خلالك، الذي يكتمل طلبه ويتم
                  اعتماده من فريق مطر. الطلبات الملغاة أو المكررة أو غير المكتملة
                  لا تدخل ضمن العدد.
                </p>
                <p className="mt-4 rounded-xl bg-primary/[0.07] p-4 text-sm leading-7 text-foreground">
                  يبدأ الاحتساب بعد تفعيل تسجيلك في البرنامج. وتُراجع الاستحقاقات
                  قبل الصرف وفق السجل المعتمد لدى الفريق.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <span className="text-sm font-bold text-primary">أسئلة مهمة</span>
                <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                  التفاصيل قبل البدء
                </h2>
              </div>

              <div className="mt-8 space-y-3">
                <details className="group rounded-2xl border border-border bg-card p-5 open:border-primary/30">
                  <summary className="cursor-pointer list-none font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    هل تُحسب مكافأة 100 ريال على أول 10 عملاء بأثر رجعي؟
                  </summary>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    لا. أول 10 عملاء مقبولين يُحتسب كل واحد منهم بـ50 ريالاً، وتبدأ
                    مكافأة 100 ريال من العميل الحادي عشر.
                  </p>
                </details>
                <details className="group rounded-2xl border border-border bg-card p-5 open:border-primary/30">
                  <summary className="cursor-pointer list-none font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    ماذا يحدث عند إكمال العميل رقم 50؟
                  </summary>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    تصبح مؤهلاً للانتقال إلى عضوية فريق مطر والاستفادة من البونصات
                    والعمل المرن وفرص الدخل الأعلى ونسبة من الرسوم الإدارية وفق آلية الفريق.
                  </p>
                </details>
                <details className="group rounded-2xl border border-border bg-card p-5 open:border-primary/30">
                  <summary className="cursor-pointer list-none font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    هل البرنامج راتب ثابت؟
                  </summary>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    البرنامج قائم على النتائج والعملاء المقبولين، والمبالغ الموضحة
                    مكافآت تسويقية وليست راتباً ثابتاً. تُشرح تفاصيل عضوية الفريق عند التأهل.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-lg md:px-12 md:py-14">
              <h2 className="text-3xl font-bold md:text-4xl">هل أنت جاهز للانضمام؟</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/85">
                أرسل طلبك عبر واتساب، وسيتواصل معك الفريق لشرح آلية التسجيل وبدء العمل.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-card px-7 py-3 font-bold text-foreground transition hover:bg-card/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                تواصل معنا للانضمام
              </a>
              <p className="mt-5 text-sm text-primary-foreground/70">
                إرسال الطلب لا يعني القبول التلقائي؛ يبدأ احتساب العملاء بعد تفعيل تسجيلك.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
