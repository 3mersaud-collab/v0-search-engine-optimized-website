import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "مقالات سيولة تابي وتمارا | دليل كاش وسلفة شامل",
  description: "مقالات تعليمية عن سيولة تابي، كاش تمارا، سلفة تابي، سلفة تمارا. دليل شامل لتحويل رصيدك إلى كاش نقدي مع مطر.",
  keywords: "سيولة تابي, سيولة تمارا, كاش تابي, كاش تمارا, سلفة تابي, سلفة تمارا, تحويل رصيد تابي, مقالات سيولة, مطر, سحابة غيث",
  alternates: {
    canonical: "https://liilsol.com/articles",
  },
}

const articles = [
  {
    id: "siyola-tabby-guide",
    title: "سيولة تابي: دليل شامل للحصول على كاش من تابي خلال ساعة",
    excerpt: "تعرف على خطوات الحصول على سيولة تابي وكيفية تحويل رصيدك إلى كاش نقدي في حسابك البنكي خلال ساعة من دفع الدفعة الأولى.",
    category: "سيولة تابي",
    readTime: "5 دقائق",
    date: "2026-01-15",
    keywords: ["سيولة تابي", "كاش تابي", "تحويل رصيد تابي", "سلفة تابي"],
    featured: true
  },
  {
    id: "cash-tamara-steps",
    title: "كاش تمارا: خطوات فحص الحد وتحويل الرصيد بالتفصيل",
    excerpt: "دليل شامل لكاش تمارا وخطوات التحويل المختلفة عن تابي. تعرف على طريقة فحص حدك الائتماني بالتفصيل.",
    category: "كاش تمارا",
    readTime: "6 دقائق",
    date: "2026-01-10",
    keywords: ["كاش تمارا", "سيولة تمارا", "تحويل تمارا", "سلفة تمارا"],
    featured: true
  },
  {
    id: "salfa-tabby-tamara",
    title: "سلفة تابي وتمارا: الفرق بين التطبيقين وأيهما أفضل لك",
    excerpt: "مقارنة شاملة بين سلفة تابي وسلفة تمارا ومدفوع. تعرف على الفرق في الخطوات والمتاجر المتاحة.",
    category: "مقارنة",
    readTime: "7 دقائق",
    date: "2026-01-05",
    keywords: ["سلفة تابي", "سلفة تمارا", "مقارنة تابي تمارا", "سيولة"]
  },
  {
    id: "siyola-guide-beginners",
    title: "دليل المبتدئين: ما هي السيولة وكيف تحصل على كاش من رصيدك؟",
    excerpt: "شرح مبسط لمفهوم السيولة من تطبيقات الدفع الآجل للمبتدئين. تعرف على الخطوات والرسوم بالتفصيل.",
    category: "سيولة",
    readTime: "8 دقائق",
    date: "2025-12-28",
    keywords: ["سيولة", "سلفة", "دفع آجل", "كاش"]
  },
  {
    id: "best-stores-siyola",
    title: "المتاجر المتاحة لسيولة تابي وتمارا ومدفوع",
    excerpt: "تعرف على المتاجر المتاحة لكل تطبيق: نون واكسترا لتابي وتمارا، والمنيع لمدفوع. روابط مباشرة.",
    category: "المتاجر",
    readTime: "4 دقائق",
    date: "2025-12-20",
    keywords: ["نون", "اكسترا", "المنيع", "متاجر سيولة"]
  },
  {
    id: "tabby-vs-tamara",
    title: "تابي vs تمارا: مقارنة كاملة 2026 — أيهما الأنسب لك؟",
    excerpt: "مقارنة شاملة بين تابي وتمارا 2026: الحد الأقصى، رسوم التأخير، عدد الأقساط، سرعة الموافقة، والتأثير على السجل الائتماني.",
    category: "مقارنة",
    readTime: "8 دقائق",
    date: "2026-06-19",
    keywords: ["تابي vs تمارا", "فرق تابي تمارا", "مقارنة تابي تمارا", "تابي مقابل تمارا"],
    featured: true
  },
  {
    id: "bnpl-saudi-2026",
    title: "تطبيقات التقسيط في السعودية 2026 — الدليل الشامل",
    excerpt: "دليل شامل ومحدث 2026 لكل تطبيقات التقسيط في السعودية: تابي، تمارا، سهولة، وغيرها. مقارنة، مميزات، عيوب، وكيف تختار الأنسب.",
    category: "دليل شامل",
    readTime: "10 دقائق",
    date: "2026-06-21",
    keywords: ["تطبيقات تقسيط السعودية", "تطبيقات BNPL السعودية", "تابي تمارا مقارنة", "افضل تطبيق تقسيط"],
    featured: true
  },
  {
    id: "avoid-scams-siyola",
    title: "كيف تحمي نفسك من النصب في خدمات السيولة",
    excerpt: "نصائح مهمة لتجنب الاحتيال عند طلب سيولة تابي أو تمارا. تعرف على علامات المزود الموثوق.",
    category: "أمان",
    readTime: "5 دقائق",
    date: "2025-12-15",
    keywords: ["حماية", "نصب", "احتيال", "سيولة آمنة"]
  },
  {
    id: "siyola-madfu-guide",
    title: "سيولة مدفوع 2026: دليل شامل لتحويل رصيدك إلى كاش",
    excerpt: "دليل شامل لسيولة مدفوع 2026: خطوات تحويل رصيدك في تطبيق مدفوع إلى كاش نقدي عبر متجر المنيع خلال ساعة مع مطر.",
    category: "سيولة مدفوع",
    readTime: "7 دقائق",
    date: "2026-06-01",
    keywords: ["سيولة مدفوع", "كاش مدفوع", "تحويل مدفوع", "مدفوع المنيع"]
  },
  {
    id: "siyola-riyadh-jeddah",
    title: "سيولة تابي وتمارا في الرياض وجدة والدمام 2026",
    excerpt: "خدمة سيولة تابي وتمارا متاحة في جميع مدن السعودية بدون استثناء. تحويل فوري عبر واتساب بغض النظر عن موقعك.",
    category: "خدمة السيولة",
    readTime: "6 دقائق",
    date: "2026-06-10",
    keywords: ["سيولة تابي الرياض", "سيولة تمارا جدة", "سيولة الدمام", "سيولة السعودية"]
  },
  {
    id: "siyola-imkan-guide",
    title: "سيولة إمكان 2026: دليل شامل لتحويل رصيدك إلى كاش فوري",
    excerpt: "تعرّف على خطوات سيولة إمكان وكيف تحوّل رصيدك في تطبيق إمكان إلى كاش نقدي في حسابك البنكي خلال ساعة مع مطر.",
    category: "سيولة إمكان",
    readTime: "7 دقائق",
    date: "2026-06-25",
    keywords: ["سيولة إمكان", "كاش إمكان", "تحويل رصيد إمكان", "تسييل إمكان"],
    featured: true
  },
  {
    id: "siyola-kwara-guide",
    title: "سيولة كوارا 2026: كيف تحوّل رصيدك في كوارا إلى كاش فوري",
    excerpt: "دليل سيولة كوارا 2026: خطوات تحويل رصيد كوارا إلى كاش نقدي في حسابك البنكي خلال ساعة مع مطر.",
    category: "سيولة كوارا",
    readTime: "6 دقائق",
    date: "2026-06-25",
    keywords: ["سيولة كوارا", "كاش كوارا", "تسييل كوارا"]
  },
  {
    id: "siyola-mora-guide",
    title: "سيولة مورا 2026: دليل تحويل رصيد مورا إلى كاش نقدي",
    excerpt: "دليل سيولة مورا 2026: كيف تحوّل رصيدك في تطبيق مورا إلى كاش نقدي فوري في حسابك البنكي مع مطر.",
    category: "سيولة مورا",
    readTime: "6 دقائق",
    date: "2026-06-25",
    keywords: ["سيولة مورا", "كاش مورا", "تسييل مورا"]
  },
  {
    id: "all-bnpl-apps-siyola",
    title: "سيولة جميع تطبيقات التقسيط 2026: تابي، تمارا، مدفوع، إمكان، كوارا، مورا",
    excerpt: "مطر يسيّل جميع تطبيقات التقسيط في السعودية. دليل شامل لسيولة تابي، تمارا، مدفوع، إمكان، كوارا، مورا وغيرها بأفضل سعر في السوق.",
    category: "جميع التطبيقات",
    readTime: "10 دقائق",
    date: "2026-06-26",
    keywords: ["سيولة جميع التطبيقات", "تسييل تطبيقات التقسيط", "سيولة 2026"],
    featured: true
  }
]

export default function ArticlesPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">مقالات مطر التعليمية</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-relaxed">
                دليلك الشامل لـ<span className="text-primary">سيولة تابي</span> و<span className="text-accent">كاش تمارا</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                مقالات تعليمية شاملة عن السيولة والسلفة والكاش من تابي وتمارا ومدفوع. 
                تعرف على الخطوات والرسوم والنصائح للحصول على أفضل قيمة.
              </p>

              {/* Apps Logos */}
              <div className="flex justify-center items-center gap-8">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png"
                  alt="تمارا"
                  width={100}
                  height={32}
                  className="opacity-70"
                  style={{ width: 'auto', height: '32px' }}
                />
                <Image
                  src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                  alt="تابي"
                  width={80}
                  height={32}
                  className="opacity-70"
                  style={{ width: 'auto', height: '28px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              المقالات الأكثر قراءة
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group p-6"
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="gap-2" asChild>
                    <Link href={`/articles/${article.id}`}>
                      اقرأ المقال
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              جميع المقالات
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                      {article.category}
                    </span>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.keywords.slice(0, 3).map((keyword, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <Link href={`/articles/${article.id}`}>
                        اقرأ المزيد
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                كل ما تحتاج معرفته عن سيولة تابي وكاش تمارا
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  هل تبحث عن <strong className="text-foreground">سيولة تابي</strong> أو <strong className="text-foreground">كاش تمارا</strong>؟ مطر يقدم لك دليلاً شاملاً لفهم كيفية تحويل رصيدك في تطبيقات الدفع الآجل إلى نقد حقيقي في حسابك البنكي.
                </p>
                <p>
                  سواء كنت تبحث عن <strong className="text-foreground">سلفة تابي</strong> أو <strong className="text-foreground">سلفة تمارا</strong> أو حتى كاش من مدفوع، مقالاتنا تشرح لك كل الخطوات بالتفصيل: من فحص الحد الائتماني، إلى اختيار المتجر المناسب (نون، اكسترا، أو المنيع)، وحتى استلام المبلغ في حسابك.
                </p>
                <p>
                  نوضح لك أيضاً كيفية حساب المبلغ النهائي الذي ستستلمه، مع شرح تفصيلي للرسوم الإدارية وفرق البيع والدفعة الأولى. كل هذا مع نصائح لحمايتك من النصب والاحتيال.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              جاهز تحصل على سيولة أو كاش الآن؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا للحصول على سيولة تابي أو كاش تمارا خلال ساعة من دفع الدفعة الأولى
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
                <a href="https://wa.me/966575506660">
                  واتساب: تواصل معنا
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/#calculator">احسب المبلغ المستلم</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "مقالات مطر - سيولة تابي وتمارا",
            "description": "مقالات تعليمية عن سيولة تابي وكاش تمارا وسلفة",
            "url": "https://liilsol.com/articles",
            "publisher": {
              "@type": "Organization",
              "name": "مطر",
              "url": "https://liilsol.com"
            },
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.excerpt,
              "datePublished": article.date,
              "keywords": article.keywords.join(", "),
              "url": `https://liilsol.com/articles/${article.id}`
            }))
          })
        }}
      />
    </div>
  )
}
