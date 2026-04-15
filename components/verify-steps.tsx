"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Camera,
  ShoppingCart,
  CreditCard,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ArrowLeft,
  Smartphone,
  XCircle,
} from "lucide-react"

const WHATSAPP_NUMBER = "966503367637"

type Tab = "tabby" | "tamara"

const tabbySteps = [
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "اختر جهاز بنفس قيمة الشراء",
    desc: "افتح موقع اكسترا أو جرير، وأضف جهاز بنفس المبلغ اللي اتفقنا عليه للسلّة",
    color: "bg-[#3BFFC1]/10 border-[#3BFFC1]/30 text-[#1a9e77]",
    note: "",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "اضغط 'إتمام الشراء' حتى تصل لصفحة الدفع",
    desc: "تابع خطوات الدفع حتى تظهر لك خيارات الدفع — لا تكمل الدفع",
    color: "bg-[#3BFFC1]/10 border-[#3BFFC1]/30 text-[#1a9e77]",
    note: "",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "اختر تابي",
    desc: "من قائمة الدفع اختر tabby، سيحوّلك الموقع تلقائياً لصفحة تابي",
    color: "bg-[#3BFFC1]/10 border-[#3BFFC1]/30 text-[#1a9e77]",
    note: "",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "صوّر جدول التقسيط وأرسله لنا",
    desc: "بعد ما يظهر جدول الدفعات (الدفعة الأولى + باقي الأقساط)، صوّره وأرسله لنا على الواتساب",
    color: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
    note: "⚠️ صوّر الصفحة قبل ما تضغط أي شيء",
  },
  {
    icon: <XCircle className="w-5 h-5" />,
    title: "أقفل الصفحة",
    desc: "بعد إرسال الصورة، أقفل الصفحة فوراً — لا تكمل عملية الدفع",
    color: "bg-red-500/10 border-red-500/30 text-red-600",
    note: "",
  },
]

const tamaraSteps = [
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "اختر جهاز بنفس قيمة الشراء",
    desc: "افتح موقع اكسترا أو جرير، وأضف جهاز بنفس المبلغ اللي اتفقنا عليه للسلّة",
    color: "bg-[#FFD700]/10 border-[#FFD700]/30 text-[#b8960c]",
    note: "",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "اختر تمارا واضغط 'ادفع بعد'",
    desc: "من صفحة الدفع اختر tamara ثم اختر خيار 'ادفع بعد'",
    color: "bg-[#FFD700]/10 border-[#FFD700]/30 text-[#b8960c]",
    note: "",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "اختر 'إضافة بطاقة جديدة'",
    desc: "بعد ظهور جدول التقسيط، اختر خيار 'إضافة بطاقة جديدة' — لا تستخدم Apple Pay أو أي بطاقة محفوظة",
    color: "bg-[#FFD700]/10 border-[#FFD700]/30 text-[#b8960c]",
    note: "",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "بعد الانتقال لصفحة البنك — صوّرها وأرسلها لنا",
    desc: "بعد إدخال بيانات البطاقة ستنتقل لصفحة تأكيد من البنك (OTP / 3D Secure)، صوّرها وأرسل الصورة للواتساب فوراً",
    color: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
    note: "⚠️ هذي الطريقة الوحيدة للتأكد أن تمارا قبلت طلبك",
  },
  {
    icon: <XCircle className="w-5 h-5" />,
    title: "أقفل الصفحة أو ألغِ الطلب",
    desc: "بعد إرسال الصورة، أقفل الصفحة أو ألغِ الطلب — لا تكمل الدفع",
    color: "bg-red-500/10 border-red-500/30 text-red-600",
    note: "",
  },
]

export function VerifySteps() {
  const [activeTab, setActiveTab] = useState<Tab>("tabby")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const steps = activeTab === "tabby" ? tabbySteps : tamaraSteps
  const waMsg = encodeURIComponent("السلام عليكم، أبي أرسل صورة التأكيد")
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`

  return (
    <section id="verify" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" />
              خطوات التحقق من قبول الطلب
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              كيف نتأكد من قبول طلبك؟
            </h2>
            <p className="text-muted-foreground">
              بعد تحديد مبلغ السيولة، نحتاج خطوة واحدة للتحقق أن الحد الائتماني يغطي قيمة الجهاز
              — ثم نرسل لك رابط الدفع من أحد كبار المتاجر
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-primary/8 border border-primary/20 rounded-2xl p-4 mb-8 flex flex-wrap gap-4 justify-center text-sm text-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>نسبة قبول أعلى عبر المتاجر الكبرى</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>تمارا حتى 24 قسطاً</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>تابي حتى 10 أشهر</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>رفع الحد الائتماني أسرع</span>
            </div>
          </div>

          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-5 mb-8 flex items-start gap-3 text-sm shadow-sm">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground mb-1">تنبيه مهم — مدفوع موقف مؤقتاً</p>
              <p className="text-muted-foreground leading-relaxed">حالياً التقديم متاح عبر <strong className="text-foreground">تابي</strong> و<strong className="text-foreground">تمارا</strong> فقط. خدمة <strong className="text-foreground">مدفوع</strong> متوقفة مؤقتاً حتى إشعار آخر.</p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-3 mb-8 bg-card border border-border rounded-2xl p-2">
            <button
              onClick={() => setActiveTab("tabby")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === "tabby"
                  ? "bg-[#3BFFC1]/20 border border-[#3BFFC1]/50 text-[#1a9e77] shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              tabby — تابي
            </button>
            <button
              onClick={() => setActiveTab("tamara")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === "tamara"
                  ? "bg-[#FFD700]/20 border border-[#FFD700]/50 text-[#b8960c] shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              tamara — تمارا
            </button>
          </div>

          {/* Warning for Tamara */}
          {activeTab === "tamara" && (
            <div className="flex items-start gap-3 bg-red-500/8 border border-red-500/20 rounded-xl p-4 mb-6 text-sm">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">ممنوع استخدام Apple Pay أو أي بطاقة محفوظة في تمارا</p>
                <p className="text-muted-foreground">لا يظهر OTP البنك مع الخيارات المحفوظة — الطريقة الوحيدة للتأكد هي إضافة بطاقة جديدة يدوياً</p>
              </div>
            </div>
          )}

          {/* Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex gap-4 p-4 rounded-xl border ${step.color} transition-all`}
              >
                {/* Number + Icon */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white/60 dark:bg-black/20 flex items-center justify-center font-bold text-sm border border-current/20">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-4 bg-current opacity-20" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {step.icon}
                    <p className="font-semibold text-sm">{step.title}</p>
                  </div>
                  <p className="text-xs opacity-75 leading-relaxed">{step.desc}</p>
                  {step.note && (
                    <p className="text-xs font-medium mt-1.5 opacity-90">{step.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* After verification box */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">بعد استلامنا الصور</p>
                <p className="text-xs text-muted-foreground">نرسل لك رابط الدفع الفعلي مباشرة</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              بعد ما نتحقق من القبول، نرسل لك رابط الدفع الرسمي من{" "}
              <strong className="text-foreground">اكسترا أو جرير أو أحد المتاجر الكبرى</strong>.
              تدفع عبر التطبيق، ونحوّل لك السيولة في حسابك خلال أقل من ساعة.
            </p>
          </div>


          {/* CTA */}
          <Button
            size="lg"
            className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg text-base py-6"
            asChild
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              ابدأ الطلب — واتساب
              <ArrowLeft className="w-5 h-5" />
            </a>
          </Button>

          {/* FAQ */}
          <div className="mt-10 space-y-3">
            <p className="font-bold text-foreground mb-4">أسئلة شائعة</p>
            {[
              {
                q: "لماذا نستخدم المتاجر الكبرى (اكسترا / جرير)؟",
                a: "تابي وتمارا يرفعون نسبة القبول والحد الائتماني للطلبات القادمة من متاجر موثوقة كاكسترا وجرير، مما يزيد فرص موافقتهم على طلبك وتوفير عروض أفضل (حتى 24 قسطاً لتمارا و10 أشهر لتابي).",
              },
              {
                q: "هل أنا بأمان؟ ألا أدفع شيء؟",
                a: "بالضبط — أنت فقط تتحقق من قبول الطلب. لا تكمل الدفع. بعد إرسال الصورة تُقفل الصفحة، ونحن من يرسل لك رابط الدفع الفعلي.",
              },
              {
                q: "ماذا لو رفضت تابي أو تمارا طلبي؟",
                a: "لا مشكلة، نبحث عن حل بديل معك، وقد نقترح قيمة جهاز مختلفة أو طريقة أخرى تناسب وضعك.",
              },
              {
                q: "لماذا ممنوع Apple Pay في تمارا؟",
                a: "Apple Pay والبطاقات المحفوظة لا تُظهر صفحة OTP البنكية، وهي الدليل الوحيد الذي يثبت لنا أن تمارا وافقت فعلياً على الطلب.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 p-4 text-right hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-sm text-foreground">{q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
