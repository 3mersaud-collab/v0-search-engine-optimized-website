"use client"

import { useEffect, useState, useCallback } from "react"

export function RainBackground() {
  const [lightningFlash, setLightningFlash] = useState(false)
  const [boltPosition, setBoltPosition] = useState({ x: 50, segments: [] as { dx: number; dy: number }[] })

  const generateBoltSegments = useCallback(() => {
    const segments: { dx: number; dy: number }[] = []
    const numSegments = 6 + Math.floor(Math.random() * 5)
    for (let i = 0; i < numSegments; i++) {
      segments.push({
        dx: (Math.random() - 0.5) * 30,
        dy: 15 + Math.random() * 25,
      })
    }
    return segments
  }, [])

  useEffect(() => {
    const triggerLightning = () => {
      setBoltPosition({
        x: 15 + Math.random() * 70,
        segments: generateBoltSegments(),
      })
      setLightningFlash(true)
      setTimeout(() => setLightningFlash(false), 150)

      // Double flash effect
      setTimeout(() => {
        setLightningFlash(true)
        setTimeout(() => setLightningFlash(false), 80)
      }, 200)
    }

    const scheduleNext = () => {
      const delay = 4000 + Math.random() * 8000
      return setTimeout(() => {
        triggerLightning()
        timerId = scheduleNext()
      }, delay)
    }

    let timerId = scheduleNext()
    return () => clearTimeout(timerId)
  }, [generateBoltSegments])

  const boltPath = boltPosition.segments.reduce(
    (acc, seg, i) => {
      const prevX = i === 0 ? 0 : acc.points[i - 1].x
      const prevY = i === 0 ? 0 : acc.points[i - 1].y
      const newX = prevX + seg.dx
      const newY = prevY + seg.dy
      acc.points.push({ x: newX, y: newY })
      acc.d += ` L ${newX} ${newY}`
      return acc
    },
    { d: "M 0 0", points: [] as { x: number; y: number }[] }
  )

  // Generate rain drops with more variety
  const drops = []
  for (let i = 0; i < 60; i++) {
    const left = (i * 1.7 + (i % 3) * 7.2) % 100
    const duration = 1.8 + (i % 7) * 0.35
    const delay = (i * 0.37) % 4
    const height = 18 + (i % 5) * 6
    const opacity = 0.12 + (i % 4) * 0.04
    const width = i % 8 === 0 ? 2 : 1.5
    drops.push(
      <div
        key={i}
        className="rain-drop"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          height: `${height}px`,
          opacity,
          width: `${width}px`,
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Lightning flash overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-100"
        style={{
          backgroundColor: "var(--foreground)",
          opacity: lightningFlash ? 0.04 : 0,
        }}
      />

      {/* Cloud shapes - darker and more defined */}
      <div className="absolute top-[1%] right-[3%] w-80 h-32 bg-foreground/[0.06] rounded-full blur-2xl" />
      <div className="absolute top-[0%] right-[18%] w-[28rem] h-44 bg-foreground/[0.07] rounded-full blur-3xl" />
      <div className="absolute top-[3%] left-[5%] w-96 h-36 bg-foreground/[0.06] rounded-full blur-2xl" />
      <div className="absolute top-[1%] left-[25%] w-[32rem] h-48 bg-foreground/[0.065] rounded-full blur-3xl" />
      <div className="absolute top-[2%] left-[55%] w-72 h-28 bg-foreground/[0.05] rounded-full blur-2xl" />
      <div className="absolute top-[0%] left-[42%] w-64 h-24 bg-foreground/[0.06] rounded-full blur-3xl" />
      <div className="absolute top-[4%] right-[40%] w-56 h-20 bg-foreground/[0.04] rounded-full blur-2xl" />

      {/* Lightning bolt SVG */}
      {lightningFlash && (
        <svg
          className="absolute top-[5%]"
          style={{ left: `${boltPosition.x}%`, transform: "translateX(-50%)" }}
          width="120"
          height="300"
          viewBox="-60 -10 120 310"
          fill="none"
        >
          <path
            d={boltPath.d}
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#bolt-glow)"
            opacity="0.9"
          />
          <path
            d={boltPath.d}
            stroke="var(--foreground)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <defs>
            <filter id="bolt-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      )}

      {/* CSS Rain animation */}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(-8vh) rotate(4deg); opacity: 0; }
          8% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { transform: translateY(108vh) rotate(4deg); opacity: 0; }
        }
        .rain-drop {
          position: absolute;
          top: 0;
          width: 1.5px;
          border-radius: 0 0 2px 2px;
          background: linear-gradient(to bottom, transparent 0%, var(--foreground) 100%);
          animation: rain-fall linear infinite;
          opacity: 0;
        }
      `}</style>

      {/* Rain drops */}
      {drops}
    </div>
  )
}
