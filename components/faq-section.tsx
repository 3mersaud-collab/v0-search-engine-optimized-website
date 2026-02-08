"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "ما هي خدمة سيولة تابي وتمارا من liilsol؟",
    answer: "نقدم خدمة تحويل رصيدك من تابي وتمارا ومدفوع إلى كاش نقدي في حسابك البنكي. تختار المبلغ من حاسبة السيولة، تدخل المتجر (نون أو اكسترا لتابي وتمارا، المنيع لمدفوع)، تضيف منتجات بالمبلغ المطلوب، تصور الشاشة بعد اختيار طريقة الدفع، وترسلها لنا. نحول لك الكاش خلال ساعتين."
  },
  {
    question: "كيف أحصل على كاش تابي أو كاش تمارا؟",
    answer: "لتابي: ادخل نون أو اكسترا، اختر منتجات بالمبلغ المطلوب، اختر تابي كوسيلة دفع، بعد ظهور تقسيم الدفعات صور الشاشة وأرسلها لنا على واتساب 0590360039. لتمارا: نفس الخطوات لكن بعد اختيار تمارا، أضف بطاقة بنكية بدون رصيد واضغط ادفع، ثم صور الشاشة سواء ظهرت صفحة البنك أو رسالة خطأ."
  },
  {
    question: "ما هي المتاجر المتاحة لخدمة السيولة؟",
    answer: "تابي وتمارا متاحين في متجر نون ومتجر اكسترا. مدفوع متاح في متجر المنيع فقط. نوفر روابط مباشرة للمتاجر في صفحة فحص الحد الائتماني."
  },
  {
    question: "كم تستغرق عملية التحويل للحصول على السيولة؟",
    answer: "نقوم بتحويل الكاش لحسابك البنكي خلال ساعتين فقط من وقت استلام صورة الشاشة منك. نعمل على مدار الساعة لضمان سرعة الخدمة."
  },
  {
    question: "ما هي نسبة الرسوم على سيولة تابي وتمارا؟",
    answer: "الرسوم الإدارية 10% من مبلغ البيع. الدفعة الأولى 25%. فرق البيع يتراوح من 10% إلى 15% حسب المبلغ (يقل كلما زاد المبلغ). استخدم حاسبة السيولة للحصول على تقدير دقيق للمبلغ الذي ستستلمه."
  },
  {
    question: "هل خدمة السيولة والكاش آمنة؟",
    answer: "نعم، خدمة السيولة آمنة 100%. liilsol تعمل بشفافية كاملة. عملية الشراء تتم من خلالك مباشرة عبر التطبيق الرسمي، ونحن لا نطلب كلمات مرور أو بيانات حساسة."
  },
  {
    question: "ما هو الحد الأدنى والأقصى للسيولة؟",
    answer: "الحد الأدنى للسيولة هو 1,000 ريال والحد الأقصى يعتمد على الرصيد المتاح لديك في تابي أو تمارا أو مدفوع. للمبالغ الكبيرة، تواصل معنا على 0590360039."
  },
  {
    question: "من يدفع الدفعة الأولى في كاش تابي وتمارا؟",
    answer: "نحن نقوم بدفع الدفعة الأولى (25%) نيابة عنك، ثم نخصمها من قيمة البيع النهائية. بهذه الطريقة لا تحتاج لدفع أي مبلغ مقدماً للحصول على السيولة."
  },
  {
    question: "ما الفرق بين تعليمات تابي وتمارا؟",
    answer: "تابي ومدفوع: بعد اختيارهم كوسيلة دفع وظهور تقسيم الدفعات، فقط صور الشاشة وأرسلها. تمارا: يجب إكمال الخطوات وإضافة بطاقة بنكية بدون رصيد والضغط على ادفع، ثم تصوير الشاشة. مهم: لا تستخدم Apple Pay أو بطاقة فيها رصيد مع تمارا."
  },
  {
    question: "كيف أتواصل مع liilsol للحصول على سيولة؟",
    answer: "واتساب: 0590360039 | هاتف: 0590360039 | بريد: liilsol.support@liilsa.com | انستقرام: @liilsa.sol | الموقع: الرياض - حي المرسلات. نرد على جميع الاستفسارات خلال دقائق."
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
              الأسئلة الشائعة عن السيولة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              كل ما تحتاج معرفته عن سيولة تابي وكاش تمارا
            </h2>
            <p className="text-muted-foreground text-lg">
              إجابات على الأسئلة الأكثر شيوعاً حول خدمات السيولة والسلفة والكاش من تابي وتمارا ومدفوع
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
