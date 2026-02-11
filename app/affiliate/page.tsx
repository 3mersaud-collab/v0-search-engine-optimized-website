import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users, 
  Wallet, 
  TrendingUp, 
  Gift, 
  CheckCircle2, 
  MessageCircle,
  Share2,
  BadgePercent,
  Banknote,
  Clock,
  Star,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "برنامج المسوقين بالعمولة | انضم لفريق liilsol",
  description: "انضم لبرنامج المسوقين بالعمولة في liilsol واحصل على عمولة مجزية على كل عميل. فرصة دخل إضافي بدون رأس مال.",
  keywords: "تسويق بالعمولة, عمولة, دخل إضافي, العمل من المنزل, liilsol affiliate",
}

export default function AffiliatePage() {
  const benefits = [
    {
      icon: BadgePercent,
      title: "عمولة مجزية",
      description: "احصل على عمولة على كل عميل يتم تحويله من خلالك"
    },
    {
      icon: Banknote,
      title: "دفع فوري",
      description: "استلم عمولتك فور إتمام العملية مباشرة في حسابك"
    },
    {
      icon: Clock,
      title: "بدون التزام",
      description: "اعمل بوقتك الخاص بدون أي التزامات أو ضغوط"
    },
    {
      icon: Users,
      title: "دعم مستمر",
      description: "فريق دعم متاح لمساعدتك وتدريبك على أفضل الطرق"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "سجل معنا",
      description: "تواصل معنا عبر الواتساب للتسجيل في برنامج المسوقين"
    },
    {
      number: "02",
      title: "استلم رابطك الخاص",
      description: "نعطيك رابط أو كود خاص بك لتتبع العملاء"
    },
    {
      number: "03",
      title: "شارك وسوّق",
      description: "شارك الرابط مع معارفك أو على منصات التواصل"
    },
    {
      number: "04",
      title: "احصل على عمولتك",
      description: "استلم عمولتك فور إتمام كل عملية"
    }
  ]

  const requirements = [
    "حساب واتساب نشط",
    "القدرة على التواصل مع العملاء",
    "الالتزام بالمصداقية والشفافية",
    "لا يشترط خبرة سابقة"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo.jpg" 
                alt="liilsol" 
                width={80} 
                height={80} 
                className="rounded-2xl shadow-lg"
                style={{ width: "80px", height: "auto" }}
              />
            </div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              برنامج المسوقين بالعمولة
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              اربح معنا بدون رأس مال
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              انضم لفريق المسوقين في liilsol واحصل على عمولة مجزية على كل عميل. 
              فرصتك لدخل إضافي من المنزل بكل سهولة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="https://wa.me/966590360039?text=أرغب%20بالانضمام%20لبرنامج%20المسوقين%20بالعمولة" target="_blank">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  سجل الآن عبر الواتساب
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تنضم لبرنامجنا؟
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مميزات حصرية تجعل العمل معنا فرصة لا تُفوّت
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              كيف تبدأ؟
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              4 خطوات بسيطة للبدء في الربح معنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                  <h3 className="font-bold text-foreground text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-0 w-full">
                    <ArrowLeft className="w-6 h-6 text-primary/30 mx-auto" style={{ transform: 'translateX(-50%)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                نظام العمولات
              </h2>
              <p className="text-muted-foreground text-lg">
                عمولات تنافسية ودفع فوري
              </p>
            </div>
            
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-primary text-primary-foreground">
                    <div className="flex items-center gap-3 mb-4">
                      <Wallet className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">العمولة</h3>
                    </div>
                    <p className="text-4xl font-bold mb-2">تُحدد حسب الاتفاق</p>
                    <p className="text-primary-foreground/80">
                      عمولة ثابتة على كل عملية ناجحة
                    </p>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-foreground text-xl mb-4">مثال توضيحي:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>عميل طلب سيولة = تحصل على عمولتك</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>10 عملاء شهرياً = دخل إضافي ممتاز</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>لا حد أقصى للأرباح</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                المتطلبات
              </h2>
              <p className="text-muted-foreground text-lg">
                شروط بسيطة للانضمام لفريقنا
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground">
              <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                جاهز تبدأ رحلتك معنا؟
              </h2>
              <p className="text-xl opacity-90 mb-8">
                سجل الآن وابدأ بالربح من أول عميل
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="https://wa.me/966590360039?text=أرغب%20بالانضمام%20لبرنامج%20المسوقين%20بالعمولة" target="_blank">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل معنا الآن
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
