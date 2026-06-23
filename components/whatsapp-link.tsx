"use client"
import { ReactNode } from "react"

// Google Ads Conversion ID and Label for WhatsApp click
// Label: S9b2CIXoicQcEIGzzMhD — "ضغط واتساب" conversion action
const ADS_CONVERSION_ID = "AW-18137422209"
const ADS_CONVERSION_LABEL = "S9b2CIXoicQcEIGzzMhD"

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
 *
 * Uses gtag_report_conversion pattern recommended by Google Ads for click events.
 */
export function WhatsAppLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: WhatsAppLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Prevent immediate navigation to allow gtag to fire
      e.preventDefault()
      const destination = href

      window.gtag("event", "conversion", {
        send_to: `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}`,
        event_callback: function () {
          // Navigate after conversion is recorded
          if (target === "_blank") {
            window.open(destination, "_blank", "noopener,noreferrer")
          } else {
            window.location.href = destination
          }
        },
      })

      // Fallback: navigate after 1 second if callback doesn't fire
      setTimeout(() => {
        if (target === "_blank") {
          window.open(destination, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = destination
        }
      }, 1000)
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
