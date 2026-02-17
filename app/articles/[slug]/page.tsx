import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

const articlesData: Record<string, {
  title: string
  description: string
  content: string
  category: string
  readTime: string
  date: string
  keywords: string[]
}> = {
  "siyola-tabby-guide": {
    title: "سيولة تابي: دليل شامل للحصول على كاش من تابي خلال ساعتين",
    description: "تعرف على خطوات الحصول على سيولة تابي وكيفية تحويل رصيدك إلى كاش نقدي في حسابك البنكي خلال ساعتين فقط مع مطر.",
    category: "سيولة تابي",
    readTime: "5 دقائق",
    date: "2026-01-15",
    keywords: ["سيولة تابي", "كاش تابي", "تحويل رصيد تابي", "سلفة تابي", "تسييل تابي"],
    content: `
## ما هي سيولة تابي؟

سيولة تابي هي عملية تحويل الرصيد المتاح لك في تطبيق تابي (Tabby) إلى كاش نقدي يُحول مباشرة إلى حسابك البنكي خلال ساعتين فقط. هذه الخدمة تساعدك على الاستفادة من حد الائتمان المتاح لديك في تابي للحصول على سيولة نقدية عند الحاجة.

## خطوات الحصول على سيولة تابي مع مطر

### الخطوة 1: احسب المبلغ في حاسبة السيولة
ادخل موقع مطر واستخدم حاسبة السيولة لتحديد مبلغ الشراء ومعرفة المبلغ النهائي الذي ستستلمه بعد الخصومات.

### الخطوة 2: ادخل متجر نون أو اكسترا
تابي متواجد في متجر نون ومتجر اكسترا. ادخل أحد المتجرين وأضف منتجات في السلة بنفس مبلغ الشراء من الحاسبة.

### الخطوة 3: اختر تابي كوسيلة دفع
عند الدفع، اختر تابي كوسيلة دفع. بعد ظهور صفحة تقسيم الدفعات فقط، صور الشاشة وأرسلها لنا على واتساب 0590360039. لا تحتاج إكمال العملية.

### الخطوة 4: استلم الكاش خلال ساعتين
نقوم نحن بإتمام كل شيء ونحول لك المبلغ خلال ساعتين فقط.

## حساب الخصومات على سيولة تابي

- **مبلغ البيع**: أقل من مبلغ الشراء بنسبة 10-15% حسب المبلغ
- **الرسوم الإدارية**: 10% من مبلغ الشراء
- **الدفعة الأولى**: 25% من مبلغ الشراء (نخصمها من مبلغ البيع)

### جدول فرق البيع:
| المبلغ | فرق البيع |
|--------|-----------|
| 12,000+ ريال | 10% |
| 5,500 - 12,000 ريال | 10-14% (يقل 1% كل 1000 ريال) |
| أقل من 5,500 ريال | 15% |

## مثال عملي على سيولة تابي

لنفترض مبلغ الشراء 10,000 ريال:
- فرق البيع (12%): 1,200 ريال ← مبلغ البيع = 8,800 ريال
- الدفعة الأولى (25%): 2,500 ريال
- الرسوم الإدارية (10%): 1,000 ريال
- **المبلغ المستلم**: 8,800 - 2,500 - 1,000 = **5,300 ريال**

## لماذا مطر لسيولة تابي؟

- تنفيذ خلال ساعتين فقط
- لا نطلب كلمات مرور أو بيانات حساسة
- أسعار شفافة وحاسبة دقيقة
- دعم واتساب متواصل على 0590360039

## تواصل معنا

- **واتساب**: 0590360039
- **البريد**: matar@liilsa.com
- **انستقرام**: @liilsa.sol
    `
  },
  "cash-tamara-steps": {
    title: "كاش تمارا: خطوات فحص الحد وتحويل الرصيد بالتفصيل",
    description: "دليل شامل لكاش تمارا وخطوات التحويل المختلفة عن تابي. تعرف على طريقة فحص حدك الائتماني.",
    category: "كاش تمارا",
    readTime: "6 دقائق",
    date: "2026-01-10",
    keywords: ["كاش تمارا", "سيولة تمارا", "تحويل تمارا", "سلفة تمارا", "تسييل تمارا"],
    content: `
## ما هو كاش تمارا؟

كاش تمارا هو تحويل رصيدك المتاح في تطبيق تمارا (Tamara) إلى نقد مباشر في حسابك البنكي. تمارا من أشهر تطبيقات الدفع الآجل في السعودية.

## خطوات كاش تمارا (مختلفة عن تابي!)

### الخطوة 1: احسب المبلغ في حاسبة السيولة
ادخل موقع مطر واستخدم الحاسبة لتحديد مبلغ الشراء.

### الخطوة 2: ادخل متجر نون أو اكسترا
تمارا متواجد في نون واكسترا. أضف منتجات بنفس مبلغ الشراء من الحاسبة.

### الخطوة 3: اختر تمارا كوسيلة دفع واستمر بالدفع
هنا الفرق عن تابي - مع تمارا تحتاج تكمل خطوات أكثر:
- اختر تمارا كوسيلة دفع
- اختر "ادفع" واستمر
- أضف بطاقة بنكية **بدون رصيد** (مهم جداً!)
- اضغط على "ادفع"

### الخطوة 4: صور الشاشة وأرسلها
بعد الضغط على ادفع، سيحصل أحد أمرين:
- صور الشاشة بعد الضغط على ادفع وأرسلها لنا على واتساب

### تنبيهات مهمة لتمارا:
- لا تستخدم Apple Pay
- لا تستخدم بطاقة فيها رصيد
- لا تستخدم البطاقة المضافة مسبقاً في تمارا

### الخطوة 5: استلم الكاش خلال ساعتين
نقوم بإتمام العملية ونحول لك المبلغ.

## لماذا خطوات تمارا مختلفة؟

تمارا يتطلب التأكد من صلاحية الحد الائتماني بشكل مختلف عن تابي، لذلك نحتاج صورة الشاشة بعد الضغط على ادفع للتأكد من نجاح العملية.

## حساب الخصومات (نفس تابي)

- **فرق البيع**: 10-15% حسب المبلغ
- **الرسوم الإدارية**: 10%
- **الدفعة الأولى**: 25%

## تواصل معنا لكاش تمارا

- **واتساب**: 0590360039
- **البريد**: matar@liilsa.com
- **انستقرام**: @liilsa.sol
    `
  },
  "salfa-tabby-tamara": {
    title: "سلفة تابي وتمارا: الفرق بين التطبيقين وأيهما أفضل لك",
    description: "مقارنة شاملة بين سلفة تابي وسلفة تمارا ومدفوع. تعرف على الفرق في الخطوات والمتاجر.",
    category: "مقارنة",
    readTime: "7 دقائق",
    date: "2026-01-05",
    keywords: ["سلفة تابي", "سلفة تمارا", "مقارنة تابي تمارا", "سيولة", "كاش"],
    content: `
## مقارنة بين سلفة تابي وسلفة تمارا ومدفوع

عند البحث عن سيولة أو سلفة، يتساءل الكثيرون: أيهما أفضل؟ في هذا المقال نقارن بين التطبيقات الثلاثة.

## تابي (Tabby)

### المتاجر المتاحة:
- نون (noon.com)
- اكسترا (extra.com)

### خطوات الفحص:
1. أضف منتجات في السلة
2. اختر تابي كوسيلة دفع
3. انتظر ظهور تقسيم الدفعات
4. صور الشاشة فقط - لا تكمل!

### المميزات:
- خطوات بسيطة وسريعة
- لا تحتاج إضافة بطاقة
- حد ائتماني يصل لـ 5000 ريال وأكثر

## تمارا (Tamara)

### المتاجر المتاحة:
- نون (noon.com)
- اكسترا (extra.com)

### خطوات الفحص (مختلفة!):
1. أضف منتجات في السلة
2. اختر تمارا كوسيلة دفع
3. اختر "ادفع" واستمر
4. أضف بطاقة بدون رصيد
5. اضغط "ادفع"
6. صور الشاشة وأرسلها لنا

### تنبيهات:
- لا تستخدم Apple Pay
- لا تستخدم بطاقة فيها رصيد
- لا تستخدم البطاقة المضافة مسبقاً

### المميزات:
- انتشار واسع في السعودية
- حدود ائتمانية جيدة

## مدفوع (Madfu)

### المتاجر المتاحة:
- المنيع (almanea.sa) فقط

### خطوات الفحص:
1. ادخل متجر المنيع
2. أضف منتجات في السلة
3. اختر مدفوع كوسيلة دفع
4. انتظر ظهور تقسيم الدفعات
5. صور الشاشة فقط - لا تكمل!

### المميزات:
- نفس خطوات تابي البسيطة
- متوفر في المنيع

## جدول المقارنة السريعة

| التطبيق | المتاجر | صعوبة الخطوات |
|---------|---------|---------------|
| تابي | نون، اكسترا | سهلة |
| تمارا | نون، اكسترا | متوسطة |
| مدفوع | المنيع | سهلة |

## نصيحة مطر

استخدم التطبيق الذي لديك فيه رصيد أعلى. يمكنك استخدام أكثر من تطبيق للحصول على سيولة أكبر.

## تواصل معنا

- **واتساب**: 0590360039
    `
  },
  "siyola-guide-beginners": {
    title: "دليل المبتدئين: ما هي السيولة وكيف تحصل على كاش من رصيدك؟",
    description: "شرح مبسط لمفهوم السيولة من تطبيقات الدفع الآجل للمبتدئين. تعرف على الخطوات والرسوم.",
    category: "سيولة",
    readTime: "8 دقائق",
    date: "2025-12-28",
    keywords: ["سيولة", "سلفة", "دفع آجل", "كاش", "تسييل"],
    content: `
## ما هي السيولة؟

السيولة (أو تسييل الرصيد) هي عملية تحويل الرصيد الائتماني المتاح لك في تطبيقات الدفع الآجل (مثل تابي وتمارا ومدفوع) إلى كاش نقدي يُحول لحسابك البنكي.

## كيف تعمل السيولة؟

### المبدأ الأساسي:
1. لديك رصيد متاح في تابي أو تمارا أو مدفوع
2. ندخل كشركاء معك في شراء جهاز بهذا الرصيد من متاجر مثل نون واكسترا والمنيع ونتكفل بالدفعة الأولى
3. نبيع الجهاز بسعر السوق
4. نخصم نسبة الشراكة والرسوم الإدارية
5. نحول لك مبلغ السيولة أو السلفة المطلوب في حسابك

## الخصومات التي تُخصم من السيولة

### 1. فرق البيع (10-15%)
المنتج يُباع بسعر أقل من سعر الشراء. الفرق يعتمد على المبلغ:
- 12,000+ ريال: 10% فقط
- 5,500 - 12,000: 10-14%
- أقل من 5,500: 15%

### 2. الرسوم الإدارية (10%)
رسوم الخدمة والتنفيذ.

### 3. الدفعة الأولى (25%)
الدفعة الأولى التي ندفعها عنك ونخصمها من مبلغ البيع.

## مثال عملي للمبتدئين

لنفترض رصيدك 8,000 ريال:
- مبلغ الشراء: 8,000 ريال
- فرق البيع (13%): 1,040 ريال
- مبلغ البيع: 6,960 ريال
- الدفعة الأولى (25%): 2,000 ريال
- الرسوم الإدارية (10%): 800 ريال
- **المبلغ المستلم**: 6,960 - 2,000 - 800 = **4,160 ريال**

## متى تحتاج السيولة؟

- طوارئ مالية مستعجلة
- فاتورة لازم تدفعها اليوم
- فرصة ما تقدر تفوتها
- مصاريف غير متوقعة

## نصائح للمبتدئين

1. **احسب قبل الطلب**: استخدم حاسبة مطر
2. **تأكد من قدرتك على السداد**: الأقساط ستأتي لاحقاً
3. **اختر مبالغ أكبر**: الرسوم أقل نسبياً
4. **تواصل معنا**: نشرح لك كل شيء

## تواصل معنا

- **واتساب**: 0590360039
- **انستقرام**: @liilsa.sol
    `
  },
  "best-stores-siyola": {
    title: "المتاجر المتاحة لسيولة تابي وتمارا ومدفوع",
    description: "تعرف على المتاجر المتاحة لكل تطبيق وروابط الدخول المباشرة. نون واكسترا والمنيع.",
    category: "المتاجر",
    readTime: "4 دقائق",
    date: "2025-12-20",
    keywords: ["نون", "اكسترا", "المنيع", "متاجر سيولة", "تابي نون", "تمارا اكسترا"],
    content: `
## المتاجر المتاحة لكل تطبيق

### تابي (Tabby)
متوفر في:
- **نون** - noon.com/saudi-ar
- **اكسترا** - extra.com

### تمارا (Tamara)
متوفر في:
- **نون** - noon.com/saudi-ar
- **اكسترا** - extra.com

### مدفوع (Madfu)
متوفر في:
- **المنيع** - almanea.sa

## روابط المتاجر

### متجر نون (تابي + تمارا)
قسم الإلكترونيات والجوالات - أفضل المنتجات للسيولة

### متجر اكسترا (تابي + تمارا)
قسم الجوالات وال��لكترونيات

### متجر المنيع (مدفوع فقط)
قسم الجوالات والأجهزة اللوحية

## أفضل المنتجات للسيولة

المنتجات التي تحافظ على قيمتها:
- iPhone (أحدث إصدار)
- iPad Pro / iPad Air
- MacBook
- Samsung Galaxy S series
- PlayStation 5
- AirPods Pro

## نصائح اختيار المنتج

1. **اختر منتجات معروفة**: Apple و Samsung الأفضل
2. **تجنب المنتجات الرخيصة**: فرق البيع يكون أكبر
3. **اسأل مطر**: نختار لك المنتج المناسب

## تواصل معنا

لا تحتاج تختار المنتج بنفسك - نحن نرشدك للمنتج المناسب لمبلغك.

- **واتساب**: 0590360039
    `
  },
  "avoid-scams-siyola": {
    title: "كيف تحمي نفسك من النصب في خدمات السيولة",
    description: "نصائح مهمة لتجنب الاحتيال عند طلب سيولة تابي أو تمارا. تعرف على علامات المزود الموثوق.",
    category: "أمان",
    readTime: "5 دقائق",
    date: "2025-12-15",
    keywords: ["حماية", "نصب", "احتيال", "سيولة آمنة", "مطر"],
    content: `
## كيف تتجنب النصب في السيولة؟

مع انتشار خدمات السيولة، ظهر للأسف بعض المحتالين. إليك كيف تحمي نفسك:

## علامات النصب - احذر منها!

### 1. طلب معلومات حساسة
- كلمات مرور تطبيقاتك
- رموز التحقق OTP
- معلومات بطاقتك البنكية الكاملة
**لا تعطيها لأحد أبداً!**

### 2. وعود غير واقعية
- "سيولة بدون خصومات"
- "تحصل على 90% من المبلغ"
هذا مستحيل! دائماً هناك رسوم وفرق بيع

### 3. الضغط للتعجيل
- "الع��ض ينتهي الآن"
- "آخر فرصة"
المزودون الموثوقون لا يضغطون عليك

### 4. عدم وجود تواصل واضح
- لا رقم واتساب ثابت
- لا حساب ا��ستقرام موثق
- يختفون بعد الدفع

## علامات المزود الموثوق م��ل مطر

### ما نفعله:
- نوضح جميع الخصومات مسب��اً بالحاسبة
- رقم واتساب ثابت: 0590360039
- حساب انستقرام: @liilsa.sol
- موقع واضح: مطر - سحابة غيث ماحسبت حسابها
- التنفيذ خلال ساعتين

### ما لا نفعله:
- لا نطلب كلمات مرور
- لا نطلب رموز OTP
- لا نطلب تسجيل دخول لحساباتك
- أنت من يقوم بالخطوات في هاتفك

## كيف تعمل معنا بأمان

1. تحسب المبلغ في حاسبتنا
2. تفتح المتجر (نون/اكسترا/المنيع) بنفسك
3. تضيف المنتجات وتختار وسيلة الدفع
4. تصور الشاشة وترسلها لنا
5. نتمم العملية ونحول لك الكاش

**أنت تتحكم في كل خطوة!**

## ماذا تفعل إذا شككت في مزود؟

1. اطلب حساباتهم الرسمية
2. ابحث عن تقييمات
3. ابدأ بمبلغ صغير للتجربة
4. وثق كل المحادثات

## تواصل معنا بأمان

- **واتساب**: 0590360039
- **انستقرام**: @liilsa.sol
- **الموقع**: مطر - سحابة غيث ماحسبت حسابها
    `
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articlesData[slug]
  
  if (!article) {
    return {
      title: "المقال غير موجود - مطر",
    }
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords.join(", "),
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      siteName: "مطر",
    },
    alternates: {
      canonical: `https://liilsol.com/articles/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articlesData[slug]

  if (!article) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "مطر",
      "url": "https://liilsol.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "مطر",
      "url": "https://liilsol.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://liilsol.com/articles/${slug}`
    },
    "keywords": article.keywords.join(", ")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link 
                href="/articles" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                العودة للمقالات
              </Link>
              
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                {article.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-relaxed">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">مطر</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString("ar-SA")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apps Logos */}
        <section className="py-6 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-8">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png"
                alt="تمارا"
                width={100}
                height={32}
                className="h-8 w-auto opacity-60"
              />
              <Image
                src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                alt="تابي"
                width={80}
                height={32}
                className="h-7 w-auto opacity-60"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-foreground leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>')
                      .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
                      .replace(/\| (.*) \| (.*) \|/g, '<tr><td class="border border-border px-4 py-2">$1</td><td class="border border-border px-4 py-2">$2</td></tr>')
                      .replace(/<tr>/g, '<table class="w-full border-collapse my-4"><tr>')
                      .replace(/<\/tr>(?![\s\S]*<tr>)/g, '</tr></table>')
                      .replace(/- (.*)/g, '<li class="text-muted-foreground mr-6 mb-2">$1</li>')
                      .replace(/(\d+)\. (.*)/g, '<li class="text-muted-foreground mr-6 mb-2"><span class="font-bold text-primary ml-2">$1.</span>$2</li>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">')
                  }}
                />
              </article>

              {/* CTA Box */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  جاهز تحصل على سيولة؟
                </h3>
                <p className="text-muted-foreground mb-6">
                  تواصل معنا الآن واحصل على كاش في حسابك خلال ساعتين فقط.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2 shadow-lg shadow-primary/20" asChild>
                    <a href="https://wa.me/966590360039">
                      واتساب: 0590360039
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent" asChild>
                    <Link href="/#calculator">
                      احسب المبلغ
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">شارك المقال:</span>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Share2 className="w-4 h-4" />
                    مشاركة
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  )
}
