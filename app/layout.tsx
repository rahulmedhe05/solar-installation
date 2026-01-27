import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocalBusinessSchema, WebsiteSchema, ReviewSchema } from "@/components/seo-schemas"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "#1 Solar Installation Vadodara | ₹78,000 Subsidy | SolarVadodara.in",
    template: "%s | SolarVadodara.in"
  },
  description:
    "🌞 Vadodara's most trusted solar company! 5000+ installations, MNRE approved, ₹78,000 PM Surya Ghar subsidy. Get ZERO electricity bills with 25-year warranty. Free site survey! Call +91-6353583148",
  keywords:
    "solar installation vadodara, solar panel vadodara, best solar company vadodara, rooftop solar vadodara, solar subsidy vadodara, pm surya ghar vadodara, 3kw solar system price, 5kw solar vadodara, on grid solar, net metering UGVCL",
  authors: [{ name: "SolarVadodara.in" }],
  creator: "SolarVadodara.in",
  publisher: "SolarVadodara.in",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://solarvadodara.in"),
  alternates: {
    canonical: "https://solarvadodara.in",
  },
  openGraph: {
    title: "🌞 Vadodara's #1 Solar Company | ₹78,000 Subsidy | 5000+ Installations",
    description:
      "Transform your rooftop into a powerhouse! MNRE approved, 25-year warranty, ZERO electricity bills. Join 5000+ happy Vadodara families. Free site survey!",
    url: "https://solarvadodara.in",
    siteName: "SolarVadodara.in",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Best Solar Panel Installation in Vadodara - SolarVadodara.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌞 #1 Solar Installation Vadodara | ₹78,000 Subsidy",
    description: "5000+ installations ✅ 25-year warranty ✅ MNRE approved ✅ Zero bills. Free survey!",
    images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop"],
    creator: "@solarvadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <ReviewSchema />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
