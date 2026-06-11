"use client"

import { useRef, useState, useEffect } from "react"
import { Star, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// التقييمات الحقيقية اللي فيها تعليق فقط - للكاروسيل
const reviews = [
  {
    id: 2,
    name: "تاليا",
    initial: "ت",
    rating: 5,
    date: "قبل يوم",
    comment: "تعاملت معهم مصداقية وامانه والموظفة تعاملها راقي وانصح بالتعامل معهم",
    isLocalGuide: true,
  },
  {
    id: 3,
    name: "Joodu Alhmadan",
    initial: "J",
    rating: 5,
    date: "قبل يوم",
    comment: "تعامل الموظفه جميل جدا يعطيها الف عافيه",
    isLocalGuide: true,
  },
  {
    id: 4,
    name: "MM DR",
    initial: "M",
    rating: 5,
    date: "قبل أسبوع",
    comment: "جوده عاليه ومصادقية وأسعار في المتناول.. والأهم هو التعامل الراقي والشغل الإحترافي.. أنصح وبشده التعامل معهم",
    isLocalGuide: false,
  },
  {
    id: 5,
    name: "امل البلوشي",
    initial: "ا",
    rating: 5,
    date: "قبل يوم",
    comment: "ممتازة الموظفه جدا وصبوره وواضح انها تحب شغلها واميته جداا اشكركم على الخدمة الجميله",
    isLocalGuide: false,
  },
  {
    id: 6,
    name: "Beba S",
    initial: "B",
    rating: 5,
    date: "قبل أسبوع",
    comment: "خدمة احترافية شباب ذوق متفهمين وكانو واضحين انصح فيهم وبشده",
    isLocalGuide: false,
  },
  {
    id: 7,
    name: "Userz.",
    initial: "U",
    rating: 5,
    date: "قبل أسبوع",
    comment: "تعامل جداً ممتاز وانصح بشده",
    isLocalGuide: false,
  },
  {
    id: 8,
    name: "KA",
    initial: "K",
    rating: 5,
    date: "قبل 4 أيام",
    comment: "المعامله راقيه أخلاق و احترام و مصداقيه و كلامها جدا مريح ان شاءالله مو آخر تعامل",
    isLocalGuide: false,
  },
  {
    id: 9,
    name: "Aaa Aaa",
    initial: "A",
    rating: 5,
    date: "قبل 5 أيام",
    comment: "معاملتهم راقيه جدا بكل ادب وطولت بال ... وشرح بالتفصيل .... ونسبتهم افضل من غيرهم بكثير ... وينزل لك المبلغ خلال ساعه",
    isLocalGuide: false,
  },
  {
    id: 11,
    name: "saloom ALdosari",
    initial: "S",
    rating: 5,
    date: "قبل 5 أيام",
    comment: "سريعين في تعاملهم وموثوقين انصحكم فيهم والله يعطيهم العافيه صراحه",
    isLocalGuide: false,
  },
  {
    id: 15,
    name: "عبدالله",
    initial: "ع",
    rating: 5,
    date: "قبل أسبوع",
    comment: "شكراً على مجهودكم",
    isLocalGuide: false,
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

export function GoogleReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function checkScroll() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) el.addEventListener("scroll", checkScroll, { passive: true })
    return () => el?.removeEventListener("scroll", checkScroll)
  }, [])

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current
    if (!el) return
    const amount = dir === "left" ? -340 : 340
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="reviews" className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-medium mb-4 border border-yellow-500/20">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span>تقييمات Google Maps</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-muted-foreground max-w-lg">
              آراء حقيقية من عملاء استخدموا خدمة السيولة من مطر
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Google Badge */}
            <div className="bg-card rounded-xl px-5 py-3 border border-border flex items-center gap-3 shadow-sm">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-5 object-contain"
              />
              <div className="border-r border-border h-8" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground leading-none">5.0</span>
                <div className="flex mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="التالي"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="السابق"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Reviews */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, index) => (
            <a
              key={review.id}
              href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[320px] md:w-[360px] bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all snap-start cursor-pointer block no-underline"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base ${
                      initialColors[index % initialColors.length]
                    }`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-foreground text-sm">{review.name}</h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {review.isLocalGuide ? "Local Guide" : review.date}
                    </span>
                  </div>
                </div>
                <img
                  src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                  alt="Google"
                  className="h-4 object-contain opacity-50"
                />
              </div>

              {/* Stars + Service */}
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
                {review.isLocalGuide && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 font-medium">Local Guide</span>
                )}
              </div>

              {/* Comment */}
              <p className="text-foreground text-sm leading-relaxed line-clamp-4">{review.comment}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/reviews">
                شاهد جميع التقييمات (17)
              </Link>
            </Button>
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                افتح على Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
