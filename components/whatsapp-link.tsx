"use client"
import { ReactNode } from "react"

// Google Ads Conversion ID and Label for WhatsApp click
const ADS_CONVERSION_ID = "AW-18137422209"
const ADS_CONVERSION_LABEL = "whatsapp_click"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface WhatsAppLinkProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

/**
 * WhatsAppLink — wraps any WhatsApp link and fires a Google Ads conversion
 * event ONLY when the user actually clicks it. This ensures Google Ads
 * charges only for real WhatsApp-intent clicks, not page visits.
 */
export function WhatsAppLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: WhatsAppLinkProps) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}`,
        event_callback: undefined,
      })
    }
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
