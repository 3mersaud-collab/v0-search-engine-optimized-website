"use client"
import { ReactNode } from "react"

interface WhatsAppLinkProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

/**
 * WhatsAppLink keeps WhatsApp navigation consistent across the site.
 * Conversion tracking is added only after Google Ads provides the new
 * conversion action label for account AW-18423806059.
 */
export function WhatsAppLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  )
}
