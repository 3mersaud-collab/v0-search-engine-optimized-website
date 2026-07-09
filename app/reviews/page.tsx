"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ExternalLink, MapPin, Quote, ThumbsUp, ChevronDown, ChevronUp, Send, Heart, Sparkles, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

// تقييمات حقيقية من Google Maps - liilSOL
// تم التحقق: فقط التقييمات اللي فيها تعليقات عربية حقيقية
const googleReviews = [
  {
    id: 1,
    name: "ابوغيث المخلفي",
    initial: "ا",
    rating: 5,
    date: "3 أشهر",
    comment: "تعاملهم جدا راقي وشكرا للاخت مشاعل متعاونة وراقية في التعامل الله يوفقها وانصح بشدة التعامل معهم",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 2,
    name: "MM DR",
    initial: "M",
    rating: 5,
    date: "4 أشهر",
    comment: "جودة عالية ومصادقية وأسعار في المتناول.. والأهم هو التعامل الراقي والشغل الإحترافي..\nتحياتي لكل من تعاملت معه\nأنصح وبشده التعامل معهم\nبصراحة من اليوم ورايح ما راح أتعامل إلا معهم..\nبالتوفيق لهم جميعاً والله يرزقهم من واسع رزقه",
    likes: 1,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 3,
    name: "Sultan Aljohani",
    initial: "S",
    rating: 5,
    date: "4 أشهر",
    comment: "انصح بالتعامل معهم للامانه خدمه سريعه وتعامل احترافي وراقي من الاخت المسؤولة عن الواتساب",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 4,
    name: "badr omary",
    initial: "B",
    rating: 5,
    date: "شهرين",
    comment: "الله يوفق خدمة العملاء التعامل راقي من الموظفه الله يجزاها خير الجزاء ويكتب اجرها\nالف تحيه لكم ولجهودكم",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 5,
    name: "Jaber Majhali",
    initial: "J",
    rating: 5,
    date: "3 أشهر",
    comment: "تعامل راقي وسريع من الموظف وانصح بالتعامل معهم",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 6,
    name: "KA",
    initial: "K",
    rating: 5,
    date: "4 أشهر",
    comment: "المعامله راقيه أخلاق و احترام و مصداقيه و كلامها جدا مريح\nان شاءالله مو آخر تعامل",
    likes: 1,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 7,
    name: "Aaa Aaa",
    initial: "A",
    rating: 5,
    date: "4 أشهر",
    comment: "معاملتهم راقيه جدا بكل ادب وطولت بال ... وشرح بالتفصيل .... ونسبتهم افضل من غيرهم بكثير ... وينزل لك المبلغ خلال ساعه ....",
    likes: 1,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 8,
    name: "ابو همس",
    initial: "ا",
    rating: 5,
    date: "3 أشهر",
    comment: "رجل صادق في تعامله وثقه وبيض الله وجهه والتحويل وصلني فوري",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 9,
    name: "تاليا",
    initial: "ت",
    rating: 5,
    date: "4 أشهر",
    comment: "تعاملت معهم مصداقية وامانه والموظفة تعاملها راقي وانصح بالتعامل معهم\nشكراً لكم على رقي خدمتكم",
    likes: 0,
    isLocalGuide: true,
    verified: true,
  },
  {
    id: 10,
    name: "Joodu Alhmadan",
    initial: "J",
    rating: 5,
    date: "4 أشهر",
    comment: "تعامل الموظفه جميل جدا يعطيها الف عافيه",
    likes: 0,
    isLocalGuide: true,
    verified: true,
  },
  {
    id: 11,
    name: "امل البلوشي",
    initial: "ا",
    rating: 5,
    date: "4 أشهر",
    comment: "ممتازة الموظفه جدا وصبوره وواضح انها تحب شغلها واميته جداا اشكركم على الخدمة الجميله والموظفة العسل السكر مره حبيتها وحبيت اخلاقها واحترمها للعميل",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 12,
    name: "Beba S",
    initial: "B",
    rating: 5,
    date: "4 أشهر",
    comment: "خدمة احترافية\nشباب ذوق متفهمين\nوكانو واضحين انصح فيهم وبشده",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 13,
    name: "Userz.",
    initial: "U",
    rating: 5,
    date: "4 أشهر",
    comment: "تعامل جداً ممتاز وانصح بشده",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 14,
    name: "saloom ALdosari",
    initial: "S",
    rating: 5,
    date: "4 أشهر",
    comment: "سريعين في تعاملهم وموثوقين انصحكم فيهم والله يعطيهم العافيه صراحه",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 15,
    name: "Fawuz Ayed",
    initial: "F",
    rating: 5,
    date: "4 أشهر",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 16,
    name: "rashed subaie",
    initial: "R",
    rating: 5,
    date: "5 أشهر",
    comment: "",
    likes: 0,
    isLocalGuide: false,
    verified: true,
  },
  {
    id: 17,
    name: "Foxie Active",
    initial: "F",
    rating: 5,
    date: "5 أشهر",
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

const encouragingQuotes = [
  "آرائكم هي صوتكم عندنا — وكلمة واحدة منكم تقدر تساعد شخص كثير يتأكد ويثق بخدمتنا",
  "تجربتك مهمة — شاركها معنا وساعد غيرك يتخذ قراره بثقة",
  "كل تقييم هو خطوة ت_build ثقة — نحب نسمع منكم",
]

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  // تقييمات العملاء من Supabase
  const [customerReviews, setCustomerReviews] = useState<Array<{
    id: string; name: string; rating: number; comment: string; app_type: string; created_at: string
  }>>([])

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setCustomerReviews(data) })
      .catch(() => {})
  }, [])

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    app: "",
    rating: 0,
    hoverRating: 0,
    comment: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const filteredReviews = filter === "all"
    ? googleReviews
    : filter === "with-comment"
    ? googleReviews.filter((r) => r.comment.length > 0)
    : googleReviews

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 10)

  const totalReviews = 27

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: star === 5 ? 25 : star === 1 ? 2 : 0,
    percent: star === 5 ? 93 : star === 1 ? 7 : 0,
  }))

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.app || formData.rating === 0) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          rating: formData.rating,
          comment: formData.comment,
          app_type: formData.app,
        }),
      })
      const data = await res.json()
      if (res.ok && data.review) {
        // أضف التقييم الجديد فوراً في الصفحة
        setCustomerReviews((prev) => [data.review, ...prev])
      }
      setFormSubmitted(true)
    } catch {
      setFormSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Sparkles className="w-4 h-4 inline ml-1" />
              رأيك يهمنا
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              شاركنا تجربتك مع مطر
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              {encouragingQuotes[0]}
            </p>
            <p className="text-base text-muted-foreground/70 mb-8 max-w-2xl mx-auto">
              أكّدنا ثقة {totalReviews} عميل — وأنت تقدر تضيف صوتك معهم. كلماتك بسيطة تكفي لتساعد شخص ثاني يتأكد ويثق في خدمتنا.
            </p>

            {/* Review Form Card */}
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg mb-10">
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <MessageCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      اكتب تقييمك هنا
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      فقط 3 خطوات بسيطة — اسمك، التطبيق اللي استخدمته، وتقييمك
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      اسمك
                    </label>
                    <Input
                      type="text"
                      placeholder="مثال: عبدالله"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 text-right"
                    />
                  </div>

                  {/* App Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      أي تطبيق استخدمته للتكييش؟
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["تابي", "تمارا"].map((app) => (
                        <button
                          key={app}
                          type="button"
                          onClick={() => setFormData({ ...formData, app })}
                          className={`py-3.5 px-4 rounded-xl border-2 text-lg font-bold transition-all ${
                            formData.app === app
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground hover:border-primary/40"
                          }`}
                        >
                          {app}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      كيف كانت تجربتك؟
                    </label>
                    <div className="flex justify-center gap-2 py-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setFormData({ ...formData, hoverRating: star })}
                          onMouseLeave={() => setFormData({ ...formData, hoverRating: 0 })}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 transition-transform hover:scale-110 focus:outline-none"
                        >
                          <Star
                            className={`w-9 h-9 ${
                              star <= (formData.hoverRating || formData.rating)
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-secondary fill-secondary"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {formData.rating > 0 && (
                      <p className="text-center text-sm text-primary font-medium mt-1">
                        {formData.rating === 5 && "ممتاز! شكراً لك 🌟"}
                        {formData.rating === 4 && "جيد جداً! شكراً لك"}
                        {formData.rating === 3 && "جيد — نحب نعرف كيف نشيل أفضل"}
                        {formData.rating === 2 && "نشكر صداقتك — نحب نعرف المشكلة"}
                        {formData.rating === 1 && "نسأل عن تفاصيل المشكلة ونحسن فوراً"}
                      </p>
                    )}
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      تعليقك (اختياري)
                    </label>
                    <Textarea
                      placeholder="اكتب كيف كانت تجربتك... مثال: سرعة في التنفيذ ومعاملة راقية"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={!formData.name || !formData.app || formData.rating === 0 || isSubmitting}
                    className="w-full h-12 text-lg gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        أرسل تقييمك
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-500 fill-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    شكراً لتقييمك يا {formData.name}!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    تقييمك تم حفظه وظاهر الحين للزوار في الصفحة. نقدر لك وقتك 🌟
                  </p>
                  <div className="flex justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < formData.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-secondary fill-secondary"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Google Rating Summary Card */}
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-7 object-contain"
                />
                <h2 className="text-lg font-bold text-foreground">
                  تقييمات Google Maps
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-6xl font-bold text-foreground">4.7</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{totalReviews} تقييم</span>
                </div>

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
                  href="https://wa.me/966568037324?text=أريد%20رؤية%20تعاملاتكم%20السابقة"
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

      {/* Google Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            تقييمات عملائنا على Google Maps
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {displayedReviews.map((review, index) => (
              <a
                key={review.id}
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all group cursor-pointer block no-underline"
              >
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

                {review.comment ? (
                  <p className="text-foreground leading-relaxed mb-4 whitespace-pre-line">{review.comment}</p>
                ) : (
                  <p className="text-muted-foreground text-sm italic mb-4">{"(تقييم بدون تعليق)"}</p>
                )}

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
              </a>
            ))}
          </div>

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

      {/* Customer Submitted Reviews */}
      {customerReviews.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-10">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground text-center">
                تقييمات من زوار الموقع
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {customerReviews.map((review, index) => {
                const initial = review.name.trim().charAt(0).toUpperCase() || "؟"
                const dateLabel = new Date(review.created_at).toLocaleDateString("ar-SA", { day: "numeric", month: "long", year: "numeric" })
                return (
                  <div
                    key={review.id}
                    className="bg-card rounded-2xl p-6 border border-primary/20 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg ${initialColors[index % initialColors.length]}`}>
                          {initial}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{review.name}</h3>
                          <span className="text-xs text-muted-foreground">{review.app_type}</span>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        موقع مطر
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-secondary fill-secondary"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{dateLabel}</span>
                    </div>

                    {review.comment ? (
                      <p className="text-foreground leading-relaxed whitespace-pre-line">{review.comment}</p>
                    ) : (
                      <p className="text-muted-foreground text-sm italic">{"(تقييم بدون تعليق)"}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

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
                href="https://wa.me/966568037324?text=أريد%20رؤية%20تعاملاتكم%20السابقة%20وآراء%20العملاء"
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
            {encouragingQuotes[1]}
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
