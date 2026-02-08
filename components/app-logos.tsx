"use client"

// Tabby Logo - SVG مدمج
export function TabbyLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#3BFFC1"/>
      <text x="70" y="33" textAnchor="middle" fill="#292929" fontSize="22" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">tabby</text>
    </svg>
  )
}

// Tamara Logo - SVG مدمج
export function TamaraLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#FFD700"/>
      <text x="70" y="33" textAnchor="middle" fill="#1A1A1A" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">tamara</text>
    </svg>
  )
}

// Madfu Logo - SVG مدمج
export function MadfuLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#4361EE"/>
      <text x="70" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">مدفوع</text>
    </svg>
  )
}

// All logos in a row
export function AppLogos({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-20 h-8",
    md: "w-28 h-10",
    lg: "w-36 h-14"
  }

  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <TabbyLogo className={sizeClasses[size]} />
        </div>
        <span className="text-sm font-medium text-muted-foreground">تابي</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <TamaraLogo className={sizeClasses[size]} />
        </div>
        <span className="text-sm font-medium text-muted-foreground">تمارا</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <MadfuLogo className={sizeClasses[size]} />
        </div>
        <span className="text-sm font-medium text-muted-foreground">مدفوع</span>
      </div>
    </div>
  )
}

// Individual logo cards for selection
export function AppLogoCard({ 
  app, 
  selected, 
  onClick,
  label
}: { 
  app: "tabby" | "tamara" | "madfu"
  selected?: boolean
  onClick?: () => void
  label?: string
}) {
  const labels = {
    tabby: "كاش تابي",
    tamara: "كاش تمارا",
    madfu: "مدفوع"
  }
  const colors = {
    tabby: "border-[#3BFFC1]",
    tamara: "border-[#FFD700]",
    madfu: "border-[#4361EE]"
  }
  const bgColors = {
    tabby: "bg-[#3BFFC1]/10",
    tamara: "bg-[#FFD700]/10",
    madfu: "bg-[#4361EE]/10"
  }

  return (
    <button
      onClick={onClick}
      className={`flex-1 p-6 rounded-xl border-2 transition-all min-w-[140px] ${
        selected
          ? `${colors[app]} ${bgColors[app]} shadow-lg scale-[1.02]`
          : "border-border hover:border-primary/50 bg-card"
      }`}
    >
      <div className="h-14 mb-3 flex items-center justify-center">
        {app === "tabby" && <TabbyLogo className="w-28 h-12" />}
        {app === "tamara" && <TamaraLogo className="w-28 h-12" />}
        {app === "madfu" && <MadfuLogo className="w-28 h-12" />}
      </div>
      <span className="text-sm font-semibold text-foreground">{label || labels[app]}</span>
    </button>
  )
}
