"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "ما هي خدمة سلفة تابي من مطر؟",
    answer: "نقوم بالدخول كشركاء معكم في شراء الجهاز عبر تابي، ونتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ السيولة أو السلفة المطلوب مباشرة لحسابكم البنكي خلال ساعتين. تختار المبلغ من حاسبة سلفة تابي، تدخل المتجر (نون أو اكسترا)، تضيف منتجات بالمبلغ المطلوب، تصور الشاشة بعد اختيار تابي كطريقة دفع، وترسلها لنا."
  },
  {
    question: "كيف أحصل على سلفة تابي وتحويلها الى كاش؟",
    answer: "ادخل نون أو اكسترا، اختر منتجات بالمبلغ المطلوب، اختر تابي كوسيلة دفع، وبعد ظهور تقسيم الدفعات صور الشاشة وأرسلها لنا على واتساب 0590360039. نحول الكاش لحسابك خلال ساعتين. تابي أسهل وأسرع من تمارا - لا تحتاج لإضافة بطاقة بنكية."
  },
  {
    question: "ما هي المتاجر المتاحة لسلفة تابي؟",
    answer: "تابي متاح في متجر نون ومتجر اكسترا. نوفر روابط مباشرة للمتاجر في صفحة فحص الحد الائتماني. خدمتنا مع تابي أفضل وأسرع مقارنة بتمارا."
  },
  {
    question: "كم تستغرق عملية التحويل للحصول على سلفة تابي؟",
    answer: "نقوم بتحويل الكاش لحسابك البنكي خلال ساعتين فقط من وقت استلام صورة الشاشة منك. نعمل على مدار الساعة لضمان سرعة الخدمة."
  },
  {
    question: "ما هي نسبة الرسوم على سلفة تابي؟",
    answer: "الرسوم الإدارية 10% من مبلغ البيع. الدفعة الأولى 25%. فرق البيع يتراوح من 10% إلى 15% حسب المبلغ (يقل كلما زاد المبلغ). استخدم حاسبة سلفة تابي للحصول على تقدير دقيق للمبلغ الذي ستستلمه."
  },
  {
    question: "هل خدمة سلفة تابي آمنة وشرعية؟",
    answer: "نعم، خدمتنا آمنة 100% وشفافة. ندخل معكم كشركاء في شراء الجهاز عبر تابي ونتكفل بالدفعة الأولى مقابل نسبة الشراكة. عملية الشراء تتم من خلالك مباشرة عبر التطبيق الرسمي، ولا نطلب كلمات مرور أو بيانات حساسة. لمزيد من التفاصيل عن الأساس الذي نعمل عليه، يرجى زيارة صفحة الامتثال الشرعي."
  },
  {
    question: "ما هو الحد الأدنى والأقصى لسلفة تابي؟",
    answer: "الحد الأدنى للسلفة هو 1,000 ريال والحد الأقصى يعتمد على الرصيد المتاح لديك في تابي. للمبالغ الكبيرة، تواصل معنا على 0590360039."
  },
  {
    question: "من يدفع الدفعة الأولى في سلفة تابي؟",
    answer: "نحن ندخل كشركاء معكم ونتكفل بدفع الدفعة الأولى مقابل نسبة الشراكة. بهذه الطريقة لا تحتاج لدفع أي مبلغ مقدماً، ثم نبيع الجهاز ونحول لك سلفة تابي المطلوبة."
  },
  {
    question: "لماذا تابي أفضل من تمارا؟",
    answer: "تابي أسهل وأسرع من تمارا في الاستخدام. مع تابي لا تحتاج لإضافة بطاقة بنكية أو إكمال الدفع - فقط صور الشاشة وأرسلها لنا. بينما تمارا تتطلب خطوات إضافية مثل إضافة بطاقة بدون رصيد والضغط على ادفع."
  },
  {
    question: "كيف أتواصل مع مطر للحصول على سلفة تابي؟",
    answer: "واتساب: 0590360039 | هاتف: 0590360039 | بريد: matar@liilsa.com | انستقرام: @liilsa.sol | الموقع: الرياض - حي المرسلات. نرد على جميع الاستفسارات خلال دقائق."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              الأسئلة الشائعة عن سلفة تابي
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              كل ما تحتاج معرفته عن سلفة تابي وتحويلها الى كاش
            </h2>
            <p className="text-muted-foreground text-lg">
              إجابات على الأسئلة الأكثر شيوعاً حول سلفة تابي - خدمة أفضل وأسرع من تمارا
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-right text-foreground hover:no-underline py-5 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
