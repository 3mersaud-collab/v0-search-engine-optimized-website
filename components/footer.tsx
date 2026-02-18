import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="مطر - سيولة تابي وتمارا" 
                width={48} 
                height={48} 
                className="rounded-xl"
                style={{ width: "48px", height: "auto" }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight font-serif">
                  مطر
                </span>
                <span className="text-[9px] text-background/50 font-light leading-none tracking-wide">سحابة غيث ماحسبت حسابها</span>
                <span className="text-[7px] text-background/30 font-light leading-none mt-0.5 tracking-widest">powered by liilsol</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              نقوم بالدخول كشركاء معكم في شراء الأجهزة الذكية عبر تابي وتمارا ومدفوع، 
              ونتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ السيولة أو السلفة المطلوب مباشرة لحسابكم البنكي خلال ساعتين. خدمة موثوقة في الرياض والسعودية.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="tel:+966590360039" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 59 036 0039</span>
              </a>
              <a href="mailto:matar@liilsa.com" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Mail className="w-4 h-4" />
                <span>matar@liilsa.com</span>
              </a>
              <a href="https://instagram.com/liilsa.sol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Instagram className="w-4 h-4" />
                <span>@liilsa.sol</span>
              </a>
              <a href="https://maps.google.com/?q=مطر+الرياض+حي+المرسلات" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background">
                <MapPin className="w-4 h-4" />
                <span>الرياض - حي المرسلات</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/order" className="text-background/70 hover:text-background transition-colors">
                طلب سيولة
              </Link>
              <Link href="/#calculator" className="text-background/70 hover:text-background transition-colors">
                حاسبة السيولة
              </Link>
              <Link href="/check-limit" className="text-background/70 hover:text-background transition-colors">
                افحص حدك واطلب
              </Link>
              <Link href="/track-order" className="text-background/70 hover:text-background transition-colors">
                تتبع طلبك
              </Link>
              <Link href="/reviews" className="text-background/70 hover:text-background transition-colors">
                آراء العملاء
              </Link>
              <Link href="/add-review" className="text-background/70 hover:text-background transition-colors">
                أضف تقييمك
              </Link>
              <Link href="/referral" className="text-background/70 hover:text-background transition-colors">
                برنامج الإحالات
              </Link>
              <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                من نحن
              </Link>
              <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">
                الامتثال الشرعي
              </Link>
              <Link href="/articles" className="text-background/70 hover:text-background transition-colors">
                المقالات
              </Link>
            </nav>
          </div>

          {/* SEO Keywords / Services */}
          <div>
            <h4 className="font-bold mb-4">خدماتنا</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سيولة تابي</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سيولة تمارا</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">كاش تابي</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">كاش تمارا</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سلفة تابي</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سلفة تمارا</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سيولة نقدية</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">سلفة فورية</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">شراكة في الشراء</span>
              <span className="px-3 py-1.5 bg-background/10 rounded-lg text-sm">مدفوع</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/70 text-sm text-center md:text-right">
            <p>جميع الحقوق محفوظة {new Date().getFullYear()} - مطر | سحابة غيث ماحسبت حسابها</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-background/70 hover:text-background transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-background/70 hover:text-background transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">
              الامتثال الشرعي
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
