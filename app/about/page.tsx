"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Clock, Users, Award, MapPin, Phone, Mail, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo.jpg" 
                alt="مطر - سيولة تابي وتمارا" 
                width={100} 
                height={100} 
                className="rounded-2xl shadow-lg"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              من نحن
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              مطر - سحابة غيث ماحسبت حسابها
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              نقوم بالدخول كشركاء معكم في شراء الاجهزة الذكية عبر تطبيقات الدفع الآجل 
              تابي وتمارا ومدفوع. نتكفل بقيمة الدفعة الاولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ السيولة او السلفة المطلوب مباشرة لحسابكم البنكي.
            </p>
            <div className="mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/#calculator">احسب سيولتك الآن</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reviews">آراء العملاء</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "عميل سعيد" },
              { number: "100K+", label: "ريال تم تحويلها" },
              { number: "2", label: "ساعة للتنفيذ" },
              { number: "5.0", label: "تقييم Google" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              لماذا تختارنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              مميزات تجعلنا الخيار الأول
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "سرعة فائقة",
                description: "ننفذ طلبك ونحول المبلغ لحسابك خلال ساعتين فقط"
              },
              {
                icon: Shield,
                title: "شراكة حقيقية في الشراء",
                description: "ندخل كشركاء معكم في شراء الجهاز ونبيعه لطرف ثالث مستقل بكل شفافية"
              },
              {
                icon: Users,
                title: "دعم متواصل",
                description: "فريقنا متاح على واتساب للإجابة على جميع استفساراتك"
              },
              {
                icon: Award,
                title: "أفضل خدمة سيولة وسلفة",
                description: "نقدم أفضل خدمة سيولة وسلفة بدخولنا كشركاء معكم بأقل نسبة وشفافية كاملة"
              },
              {
                icon: Star,
                title: "تقييمات ممتازة",
                description: "أكثر من 500 عميل راضٍ بتقييم 4.9 من 5"
              },
              {
                icon: CheckCircle2,
                title: "خبرة طويلة",
                description: "سنوات من الخبرة في سوق السيولة السعودي"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              آلية العمل
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              كيف نحول رصيدك إلى كاش؟
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                "تختار المبلغ المطلوب من حاسبة السيولة",
                "نختار لك الجهاز المناسب من المتاجر المعتمدة",
                "ندخل معك كشركاء في شراء الجهاز عبر تابي أو تمارا أو مدفوع ونتكفل بالدفعة الأولى",
                "نقوم ببيع الجهاز بسعر السوق نقداً",
                "نخصم نسبة الشراكة وال��سوم الإدارية ونحول لك مبلغ السيولة أو السلفة المطلوب لحسابك البنكي"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                تواصل معنا
              </h2>
              <p className="text-muted-foreground text-lg">
                نحن هنا لمساعدتك. تواصل معنا في أي وقت
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://wa.me/966590360039"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 border border-border hover:border-green-500/50 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">واتساب</h3>
                <p className="text-muted-foreground" dir="ltr">0590360039</p>
              </a>

              <a 
                href="mailto:matar@liilsa.com"
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground text-sm">matar@liilsa.com</p>
              </a>

              <a 
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">الموقع</h3>
                <p className="text-muted-foreground">الرياض - حي المرسلات</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز للحصول على سيولة فورية؟
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            احسب المبلغ الآن وتواصل معنا لتحويل رصيدك إلى كاش خلال ساعتين
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#calculator">احسب سيولتك</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                تواصل واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
