import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "مطلوب كلمة بحث" }, { status: 400 })
  }

  try {
    const searchUrl = `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`

    const res = await fetch(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ar,en;q=0.9",
      },
      signal: AbortSignal.timeout(8000),
    })

    const html = await res.text()

    // Extract product data from HTML using regex patterns
    const products: { name: string; price: string; url: string }[] = []

    // Match product blocks - extra.com uses JSON-LD or structured product data
    const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
    if (jsonLdMatches) {
      for (const match of jsonLdMatches) {
        try {
          const jsonStr = match.replace(/<script type="application\/ld\+json">/, "").replace(/<\/script>/, "")
          const data = JSON.parse(jsonStr)
          if (data["@type"] === "Product" || (Array.isArray(data) && data[0]?.["@type"] === "Product")) {
            const items = Array.isArray(data) ? data : [data]
            for (const item of items) {
              if (item.name && item.offers) {
                products.push({
                  name: item.name,
                  price: item.offers?.price || item.offers?.lowPrice || "غير محدد",
                  url: item.url || searchUrl,
                })
              }
            }
          }
        } catch {
          // Skip invalid JSON
        }
      }
    }

    // Fallback: try to extract from HTML patterns
    if (products.length === 0) {
      // Match product cards with price patterns
      const pricePattern = /data-price="([\d.]+)"/g
      const namePattern = /class="product-name[^"]*"[^>]*>([^<]+)/g
      const urlPattern = /href="(\/en-sa\/[^"]*(?:smartphones|mobiles|iphone|samsung|huawei)[^"]*)"/gi

      const prices: string[] = []
      const names: string[] = []
      const urls: string[] = []

      let m: RegExpExecArray | null
      while ((m = pricePattern.exec(html)) !== null) prices.push(m[1])
      while ((m = namePattern.exec(html)) !== null) names.push(m[1].trim())
      while ((m = urlPattern.exec(html)) !== null) urls.push(m[1])

      const count = Math.min(prices.length, names.length, 5)
      for (let i = 0; i < count; i++) {
        products.push({
          name: names[i],
          price: prices[i],
          url: `https://www.extra.com${urls[i] || ""}`,
        })
      }
    }

    return NextResponse.json({
      products: products.slice(0, 5),
      searchUrl,
      query,
    })
  } catch (err) {
    console.error("[v0] Extra search error:", err)
    return NextResponse.json({
      products: [],
      searchUrl: `https://www.extra.com/en-sa/search?q=${encodeURIComponent(query)}`,
      query,
    })
  }
}
