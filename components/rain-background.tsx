"use client"

export function RainBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Cloud shapes */}
      <div className="absolute top-[2%] right-[5%] w-72 h-28 bg-foreground/[0.04] rounded-full blur-2xl" />
      <div className="absolute top-[1%] right-[20%] w-96 h-36 bg-foreground/[0.05] rounded-full blur-3xl" />
      <div className="absolute top-[4%] left-[10%] w-80 h-28 bg-foreground/[0.04] rounded-full blur-2xl" />
      <div className="absolute top-[2%] left-[30%] w-[28rem] h-40 bg-foreground/[0.045] rounded-full blur-3xl" />
      <div className="absolute top-[3%] left-[55%] w-64 h-24 bg-foreground/[0.035] rounded-full blur-2xl" />
      <div className="absolute top-[0%] left-[45%] w-56 h-20 bg-foreground/[0.04] rounded-full blur-3xl" />

      {/* CSS Rain drops */}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(-5vh); opacity: 0; }
          5% { opacity: 1; }
          85% { opacity: 0.7; }
          100% { transform: translateY(105vh); opacity: 0; }
        }
        .rain-drop {
          position: absolute;
          top: 0;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, currentColor);
          animation: rain-fall linear infinite;
          opacity: 0;
          color: var(--foreground);
        }
      `}</style>

      {/* Rain drops - more visible */}
      <div className="rain-drop" style={{ left: '3%', animationDuration: '3.2s', animationDelay: '0s', height: '28px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '7%', animationDuration: '3.8s', animationDelay: '0.6s', height: '32px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '11%', animationDuration: '3.5s', animationDelay: '1.4s', height: '24px', opacity: 0.08 }} />
      <div className="rain-drop" style={{ left: '16%', animationDuration: '4.0s', animationDelay: '0.3s', height: '30px', opacity: 0.1 }} />
      <div className="rain-drop" style={{ left: '20%', animationDuration: '3.3s', animationDelay: '2.0s', height: '26px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '25%', animationDuration: '3.7s', animationDelay: '0.9s', height: '34px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '29%', animationDuration: '4.2s', animationDelay: '1.7s', height: '28px', opacity: 0.08 }} />
      <div className="rain-drop" style={{ left: '34%', animationDuration: '3.4s', animationDelay: '0.2s', height: '22px', opacity: 0.1 }} />
      <div className="rain-drop" style={{ left: '38%', animationDuration: '3.9s', animationDelay: '1.1s', height: '30px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '42%', animationDuration: '3.6s', animationDelay: '2.3s', height: '26px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '47%', animationDuration: '4.1s', animationDelay: '0.5s', height: '32px', opacity: 0.08 }} />
      <div className="rain-drop" style={{ left: '51%', animationDuration: '3.3s', animationDelay: '1.8s', height: '28px', opacity: 0.1 }} />
      <div className="rain-drop" style={{ left: '55%', animationDuration: '3.8s', animationDelay: '0.7s', height: '24px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '60%', animationDuration: '4.0s', animationDelay: '2.1s', height: '30px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '64%', animationDuration: '3.5s', animationDelay: '0.4s', height: '34px', opacity: 0.08 }} />
      <div className="rain-drop" style={{ left: '68%', animationDuration: '3.7s', animationDelay: '1.5s', height: '26px', opacity: 0.1 }} />
      <div className="rain-drop" style={{ left: '73%', animationDuration: '4.2s', animationDelay: '0.1s', height: '28px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '77%', animationDuration: '3.4s', animationDelay: '2.4s', height: '32px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '81%', animationDuration: '3.9s', animationDelay: '0.8s', height: '22px', opacity: 0.08 }} />
      <div className="rain-drop" style={{ left: '85%', animationDuration: '3.6s', animationDelay: '1.3s', height: '30px', opacity: 0.1 }} />
      <div className="rain-drop" style={{ left: '89%', animationDuration: '4.1s', animationDelay: '1.9s', height: '26px', opacity: 0.07 }} />
      <div className="rain-drop" style={{ left: '93%', animationDuration: '3.3s', animationDelay: '0.6s', height: '34px', opacity: 0.09 }} />
      <div className="rain-drop" style={{ left: '97%', animationDuration: '3.8s', animationDelay: '2.2s', height: '28px', opacity: 0.08 }} />
      {/* Extra drops for density */}
      <div className="rain-drop" style={{ left: '9%', animationDuration: '3.1s', animationDelay: '1.0s', height: '26px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '23%', animationDuration: '4.3s', animationDelay: '0.4s', height: '30px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '36%', animationDuration: '3.2s', animationDelay: '1.6s', height: '22px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '50%', animationDuration: '4.0s', animationDelay: '2.5s', height: '28px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '66%', animationDuration: '3.6s', animationDelay: '0.2s', height: '32px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '79%', animationDuration: '3.9s', animationDelay: '1.2s', height: '24px', opacity: 0.06 }} />
      <div className="rain-drop" style={{ left: '91%', animationDuration: '3.4s', animationDelay: '0.9s', height: '30px', opacity: 0.06 }} />
    </div>
  )
}
