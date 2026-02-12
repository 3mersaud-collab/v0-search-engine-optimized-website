"use client"

import { useRef, useState, useEffect } from "react"
import { Star, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reviews = [
  {
    id: 1,
    name: "عبدالله المطيري",
    initial: "ع",
    rating: 5,
    date: "قبل أسبوع",
    comment: "تجربة ممتازة من البداية للنهاية. تواصلت معاهم عن طريق الواتساب وخلال ساعة ونص استلمت المبلغ في حسابي.",
    service: "تابي",
  },
  {
    id: 2,
    name: "فهد الشمري",
    initial: "ف",
    rating: 5,
    date: "قبل أسبوعين",
    comment: "صراحة كنت متردد بالبداية بس الحمدلله تعاملت معاهم وكانت تجربة رهيبة. سرعة في الرد وسرعة في التحويل.",
    service: "تمارا",
  },
  {
    id: 3,
    name: "سارة القحطاني",
    initial: "س",
    rating: 5,
    date: "قبل 3 أسابيع",
    comment: "أفضل خدمة سيولة جربتها. المبلغ وصل حسابي قبل الوقت المتوقع. شكرا لكم على الأمانة والسرعة.",
    service: "تابي",
  },
  {
    id: 4,
    name: "خالد العتيبي",
    initial: "خ",
    rating: 5,
    date: "قبل شهر",
    comment: "ثاني مرة اتعامل معاهم والتجربة كل مرة أفضل من اللي قبلها. أسعار واضحة بدون أي رسوم مخفية.",
    service: "تابي",
  },
  {
    id: 5,
    name: "محمد الدوسري",
    initial: "م",
    rating: 5,
    date: "قبل شهر",
    comment: "خدمة ممتازة وسريعة. كنت محتاج سيولة ضرورية وتواصلت معاهم الساعة 11 بالليل وردوا علي بسرعة.",
    service: "مدفوع",
  },
  {
    id: 6,
    name: "نورة السبيعي",
    initial: "ن",
    rating: 5,
    date: "قبل شهر",
    comment: "تعامل راقي جدا وصدق في المواعيد. المبلغ وصلني بالضبط زي ما اتفقنا بدون أي نقص.",
    service: "تمارا",
  },
  {
    id: 7,
    name: "ريم الزهراني",
    initial: "ر",
    rating: 5,
    date: "قبل شهرين",
    comment: "خدمة احترافية وسرعة مو طبيعية! طلبت سيولة من تابي والمبلغ وصل حسابي قبل ما أكمل غدائي.",
    service: "تابي",
  },
  {
    id: 8,
    name: "بندر الرشيدي",
    initial: "ب",
    rating: 5,
    date: "قبل 4 أشهر",
    comment: "ثالث مرة اتعامل معاهم وكل مرة نفس المستوى العالي. سرعة + أمانة + أسعار ممتازة.",
    service: "تابي",
  },
]

const serviceColors: Record<string, string> = {
  "تابي": "bg-[#3BFFC1]/15 text-[#0a7c5c] border-[#3BFFC1]/30",
  "تمارا": "bg-[#FFD700]/15 text-[#7a6600] border-[#FFD700]/30",
  "مدفوع": "bg-[#4361EE]/15 text-[#4361EE] border-[#4361EE]/30",
}

const initialColors = [
  "bg-primary/15 text-primary",
  "bg-accent/15 text-accent",
  "bg-[#4361EE]/15 text-[#4361EE]",
  "bg-[#FFD700]/15 text-[#7a6600]",
  "bg-[#3BFFC1]/15 text-[#0a7c5c]",
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
            <div
              key={review.id}
              className="flex-shrink-0 w-[320px] md:w-[360px] bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all snap-start"
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
                    <span className="text-xs text-muted-foreground">{review.date}</span>
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
                <span className={`text-xs px-2 py-0.5 rounded-full border ${serviceColors[review.service]}`}>
                  {review.service}
                </span>
              </div>

              {/* Comment */}
              <p className="text-foreground text-sm leading-relaxed line-clamp-4">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/reviews">
                شاهد جميع التقييمات ({reviews.length}+)
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
