"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ExternalLink, MapPin, Quote, ThumbsUp, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// تقييمات حقيقية من Google Maps - liilSOL
const googleReviews = [
  {
    id: 1,
    name: "Aloo Li",
    initial: "A",
    rating: 5,
    date: "قبل يوم",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 2,
    name: "تاليا",
    initial: "ت",
    rating: 5,
    date: "قبل يوم",
    comment: "تعاملت معهم مصداقية وامانه والموظفة تعاملها راقي وانصح بالتعامل معهم\nشكراً لكم على رقي خدمتكم",
    likes: 0,
    isLocalGuide: true,
    verified: true,
  },
  {
    id: 3,
    name: "Joodu Alhmadan",
    initial: "J",
    rating: 5,
    date: "قبل يوم",
    comment: "تعامل الموظفه جميل جدا يعطيها الف عافيه",
    likes: 0,
    isLocalGuide: true,
    verified: true,
  },
  {
    id: 4,
    name: "MM DR",
    initial: "M",
    rating: 5,
    date: "قبل أسبوع",
    comment: "جوده عاليه ومصادقية وأسعار في المتناول.. والأهم هو التعامل الراقي والشغل الإحترافي..\nتحياتي لكل من تعاملت معه\nأنصح وبشده التعامل معهم\nبصراحة من اليوم ورايح ما راح أتعامل إلا معهم..\nبالتوفيق لهم جميعاً والله يرزقهم من واسع رزقه",
    likes: 1,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 5,
    name: "امل البلوشي",
    initial: "ا",
    rating: 5,
    date: "قبل يوم",
    comment: "ممتازة الموظفه جدا وصبوره وواضح انها تحب شغلها واميته جداا اشكركم على الخدمة الجميله والموظفة العسل السكر مره حبيتها وحبيت اخلاقها واحترمها للعميل",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 6,
    name: "Beba S",
    initial: "B",
    rating: 5,
    date: "قبل أسبوع",
    comment: "خدمة احترافية\nشباب ذوق متفهمين\nوكانو واضحين انصح فيهم وبشده",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 7,
    name: "Userz.",
    initial: "U",
    rating: 5,
    date: "قبل أسبوع",
    comment: "تعامل جداً ممتاز وانصح بشده",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 8,
    name: "KA",
    initial: "K",
    rating: 5,
    date: "قبل 4 أيام",
    comment: "المعامله راقيه أخلاق و احترام و مصداقيه و كلامها جدا مريح\nان شاءالله مو آخر تعامل",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 9,
    name: "Aaa Aaa",
    initial: "A",
    rating: 5,
    date: "قبل 5 أيام",
    comment: "معاملتهم راقيه جدا بكل ادب وطولت بال ... وشرح بالتفصيل .... ونسبتهم افضل من غيرهم بكثير ... وينزل لك المبلغ خلال ساعه ....",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 10,
    name: "Fawuz Ayed",
    initial: "F",
    rating: 5,
    date: "قبل 5 أيام",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 11,
    name: "saloom ALdosari",
    initial: "S",
    rating: 5,
    date: "قبل 5 أيام",
    comment: "سريعين في تعاملهم وموثوقين انصحكم فيهم والله يعطيهم العافيه صراحه",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 12,
    name: "rashed subaie",
    initial: "R",
    rating: 5,
    date: "قبل 6 أيام",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 13,
    name: "Foxie Active",
    initial: "F",
    rating: 5,
    date: "قبل 6 أيام",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 14,
    name: "Yousuf Rashidi",
    initial: "Y",
    rating: 5,
    date: "قبل أسبوع",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 15,
    name: "عبدالله",
    initial: "ع",
    rating: 5,
    date: "قبل أسبوع",
    comment: "شكراً على مجهودكم",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 16,
    name: "msh m",
    initial: "M",
    rating: 5,
    date: "قبل أسبوع",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
]

const initialColors = [
  "bg-primary/15 text-primary",
  "bg-accent/15 text-accent",
  "bg-[#4361EE]/15 text-[#4361EE]",
  "bg-[#FFD700]/15 text-[#7a6600]",
  "bg-[#3BFFC1]/15 text-[#0a7c5c]",
  "bg-[#FF6B6B]/15 text-[#c0392b]",
  "bg-[#A855F7]/15 text-[#7e22ce]",
  "bg-[#F97316]/15 text-[#c2410c]",
]

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  const filteredReviews = filter === "all"
    ? googleReviews
    : filter === "with-comment"
    ? googleReviews.filter((r) => r.comment.length > 0)
    : googleReviews

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 10)

  const totalReviews = 17 // العدد الحقيقي من Google Maps

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: star === 5 ? 17 : 0,
    percent: star === 5 ? 100 : 0,
  }))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              آراء العملاء
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              تقييمات عملائنا على Google Maps
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              شاهد تقييمات حقيقية من عملاء جربوا خدمة السيولة معنا
            </p>

            {/* Google Rating Summary Card */}
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Big Rating */}
                <div className="flex flex-col items-center gap-2">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-7 object-contain mb-2"
                  />
                  <span className="text-6xl font-bold text-foreground">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{totalReviews} تقييم</span>
                </div>

                {/* Right: Rating Breakdown */}
                <div className="flex-1 w-full">
                  {ratingBreakdown.map((item) => (
                    <div key={item.star} className="flex items-center gap-3 mb-1.5">
                      <span className="text-sm text-muted-foreground w-3">{item.star}</span>
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-6 text-left">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  شاهد جميع التقييمات على Google
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  قيّمنا على Google
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/966590360039?text=أريد%20رؤية%20تعاملاتكم%20السابقة"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اطلب التعاملات السابقة
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 border-b border-border sticky top-16 z-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {[
              { key: "all", label: `الكل (${totalReviews})` },
              { key: "with-comment", label: "مع تعليق" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => { setFilter(item.key); setShowAll(false) }}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  filter === item.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {displayedReviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg ${
                        initialColors[index % initialColors.length]
                      }`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {review.isLocalGuide && (
                          <span className="text-xs text-muted-foreground">Local Guide</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                    alt="Google"
                    className="h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Stars + Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-secondary fill-secondary"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 font-medium">NEW</span>
                </div>

                {/* Comment */}
                {review.comment ? (
                  <p className="text-foreground leading-relaxed mb-4 whitespace-pre-line">{review.comment}</p>
                ) : (
                  <p className="text-muted-foreground text-sm italic mb-4">{"(تقييم بدون تعليق)"}</p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-muted-foreground">
                  {review.likes > 0 ? (
                    <div className="flex items-center gap-1.5 text-xs">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{review.likes}</span>
                    </div>
                  ) : (
                    <div />
                  )}
                  <span className="text-xs">Google Maps</span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {filteredReviews.length > 10 && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="gap-2"
              >
                {showAll ? (
                  <>
                    عرض أقل
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    عرض جميع التقييمات ({filteredReviews.length})
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Request Previous Transactions */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              اطلب مشاهدة تعاملاتنا السابقة
            </h2>
            <p className="text-muted-foreground mb-6">
              نرسل لك صور من تعاملاتنا السابقة مع العملاء وآرائهم الحقيقية عبر واتساب
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://wa.me/966590360039?text=أريد%20رؤية%20تعاملاتكم%20السابقة%20وآراء%20العملاء"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                اطلب التعاملات السابقة عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا نحن موثوقون؟</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">موقع حقيقي</h3>
              <p className="text-sm text-muted-foreground">
                لدينا موقع على Google Maps يمكنك زيارته
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">تقييمات حقيقية</h3>
              <p className="text-sm text-muted-foreground">
                {totalReviews} تقييم حقيقي من عملاء على Google
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Quote className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">تعاملات موثقة</h3>
              <p className="text-sm text-muted-foreground">
                نرسل لك صور التعاملات السابقة عند الطلب
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            هل جربت خدمتنا؟
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            شاركنا تجربتك على Google Maps وساعد الآخرين في اتخاذ قرارهم
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                قيّمنا على Google
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#calculator">احسب سيولتك</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
