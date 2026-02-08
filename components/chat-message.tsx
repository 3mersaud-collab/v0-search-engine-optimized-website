"use client"

import Link from "next/link"

function parseMessageContent(text: string) {
  const parts: { type: "text" | "link"; content: string; href?: string }[] = []

  // Match markdown links [text](url) and plain URLs
  const regex = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s<>)\]]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) })
    }

    if (match[1] && match[2]) {
      // Markdown link [text](url)
      parts.push({ type: "link", content: match[1], href: match[2] })
    } else if (match[3]) {
      // Plain URL
      const url = match[3]
      // Clean trailing punctuation
      const cleanUrl = url.replace(/[.,،:;!؟?]+$/, "")
      const label = cleanUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
      parts.push({ type: "link", content: label, href: cleanUrl })
      // If we cleaned some chars, add them back as text
      if (cleanUrl.length < url.length) {
        parts.push({ type: "text", content: url.slice(cleanUrl.length) })
      }
    }

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) })
  }

  return parts.length > 0 ? parts : [{ type: "text" as const, content: text }]
}

function formatText(text: string) {
  // Bold **text**
  const boldRegex = /\*\*([^*]+)\*\*/g
  const segments: { type: "bold" | "normal"; content: string }[] = []
  let lastIdx = 0
  let m: RegExpExecArray | null

  while ((m = boldRegex.exec(text)) !== null) {
    if (m.index > lastIdx) {
      segments.push({ type: "normal", content: text.slice(lastIdx, m.index) })
    }
    segments.push({ type: "bold", content: m[1] })
    lastIdx = m.index + m[0].length
  }
  if (lastIdx < text.length) {
    segments.push({ type: "normal", content: text.slice(lastIdx) })
  }

  return segments.length > 0 ? segments : [{ type: "normal" as const, content: text }]
}

export function ChatMessageContent({ text, isUser }: { text: string; isUser: boolean }) {
  const lines = text.split("\n")

  return (
    <div className="text-sm leading-relaxed space-y-1">
      {lines.map((line, lineIdx) => {
        const parsed = parseMessageContent(line)
        return (
          <div key={lineIdx}>
            {parsed.map((part, partIdx) => {
              if (part.type === "link" && part.href) {
                const isInternal = part.href.startsWith("/") || part.href.includes("liilsol")
                if (isInternal) {
                  const path = part.href.startsWith("/") ? part.href : new URL(part.href).pathname
                  return (
                    <Link
                      key={partIdx}
                      href={path}
                      className={`underline font-medium ${isUser ? "text-primary-foreground hover:text-primary-foreground/80" : "text-primary hover:text-primary/80"}`}
                    >
                      {part.content}
                    </Link>
                  )
                }
                return (
                  <a
                    key={partIdx}
                    href={part.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline font-medium ${isUser ? "text-primary-foreground hover:text-primary-foreground/80" : "text-primary hover:text-primary/80"}`}
                  >
                    {part.content} &#x2197;
                  </a>
                )
              }
              // Text part - handle bold
              const segments = formatText(part.content)
              return segments.map((seg, segIdx) =>
                seg.type === "bold" ? (
                  <strong key={`${partIdx}-${segIdx}`}>{seg.content}</strong>
                ) : (
                  <span key={`${partIdx}-${segIdx}`}>{seg.content}</span>
                )
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
