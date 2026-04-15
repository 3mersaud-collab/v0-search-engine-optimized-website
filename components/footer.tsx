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
                style={{ width: "48px", height: "48px" }}
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
              نقوم بالدخول كشركاء معكم في شراء الأجهزة الذكية عبر تابي وتمارا،
              ونتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ
              السيولة مباشرة لحسابكم البنكي خلال ساعة. خدمة موثوقة في الرياض وجدة والدمام.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+966503367637" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 56 345 7734</span>
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
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/siyola-tabby" className="text-background/70 hover:text-background transition-colors">سيولة تابي</Link>
              <Link href="/cash-tamara" className="text-background/70 hover:text-background transition-colors">كاش تمارا</Link>
              <Link href="/salfa-tabby" className="text-background/70 hover:text-background transition-colors">سلفة تابي</Link>
              <Link href="/salfa-tamara" className="text-background/70 hover:text-background transition-colors">سلفة تمارا</Link>
              <Link href="/tasyeel-tabby" className="text-background/70 hover:text-background transition-colors">تسييل تابي</Link>
              <Link href="/tahweel-tabby-cash" className="text-background/70 hover:text-background transition-colors">تحويل تابي كاش</Link>
              <Link href="/siyola-without-salary" className="text-background/70 hover:text-background transition-colors">سيولة بدون تحويل راتب</Link>
              <Link href="/#calculator" className="text-background/70 hover:text-background transition-colors">حاسبة السيولة</Link>
              <Link href="/check-limit" className="text-background/70 hover:text-background transition-colors">افحص حدك</Link>
              <Link href="/reviews" className="text-background/70 hover:text-background transition-colors">آراء العملاء</Link>
              <Link href="/articles" className="text-background/70 hover:text-background transition-colors">المقالات</Link>
              <Link href="/about" className="text-background/70 hover:text-background transition-colors">من نحن</Link>
              <Link href="/referral" className="text-background/70 hover:text-background transition-colors">برنامج الإحالات</Link>
              <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">الامتثال الشرعي</Link>
            </nav>
          </div>

          {/* Cities + Articles */}
          <div>
            <h4 className="font-bold mb-3">السيولة بالمدينة</h4>
            <nav className="flex flex-col gap-2 text-sm mb-5">
              <Link href="/siyola-riyadh" className="text-background/70 hover:text-background transition-colors">سيولة تابي الرياض</Link>
              <Link href="/siyola-jeddah" className="text-background/70 hover:text-background transition-colors">سيولة تابي جدة</Link>
              <Link href="/siyola-dammam" className="text-background/70 hover:text-background transition-colors">سيولة تابي الدمام</Link>
            </nav>
            <h4 className="font-bold mb-3">مقالات مفيدة</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/articles/tabby-vs-tamara" className="text-background/70 hover:text-background transition-colors">تابي أم تمارا — أيهما أفضل؟</Link>
              <Link href="/articles/كيف-احول-رصيد-تابي-الى-كاش" className="text-background/70 hover:text-background transition-colors">كيف أحوّل رصيد تابي للكاش؟</Link>
              <Link href="/articles/كم-عمولة-تسييل-تابي-وتمارا" className="text-background/70 hover:text-background transition-colors">كم عمولة تسييل تابي وتمارا؟</Link>
              <Link href="/articles/سيولة-تابي-بدون-تحويل-راتب" className="text-background/70 hover:text-background transition-colors">سيولة تابي بدون تحويل راتب</Link>
            </nav>
          </div>
        </div>

        {/* Services Tags */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {["سيولة تابي","كاش تابي","سيولة تمارا","كاش تمارا","سلفة تابي","سلفة تمارا",
              "تسييل تابي","تحويل رصيد تابي الى كاش","سيولة بدون تحويل راتب","سيولة بدون كفيل",
              "سيولة الرياض","كاش جدة","سيولة الدمام","تقسيط جوالات كاش","سيولة نقدية فورية"].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-background/10 rounded-lg text-xs text-background/60">{tag}</span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/70 text-sm text-center md:text-right">
            <p>جميع الحقوق محفوظة {new Date().getFullYear()} — مطر | سحابة غيث ماحسبت حسابها</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-background/70 hover:text-background transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="text-background/70 hover:text-background transition-colors">الشروط والأحكام</Link>
            <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">الامتثال الشرعي</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}