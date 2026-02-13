import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlarityai.in"),
  title: {
    default: "QlarityAI - AI Agents for Enterprise Knowledge Management",
    template: "%s | QlarityAI",
  },
  description:
    "AI-powered knowledge base search for enterprises. Secure, compliant AI agents for healthcare, manufacturing, IT, education, HR, finance, retail and logistics.",
  keywords: [
    "AI Agents",
    "Enterprise AI",
    "Knowledge Management",
    "Healthcare AI",
    "Manufacturing AI",
    "Enterprise Automation",
  ],
  authors: [{ name: "QlarityAI" }],
  creator: "QlarityAI",
  publisher: "QlarityAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.qlarityai.in",
    siteName: "QlarityAI",
    title: "QlarityAI - AI Agents for Enterprise Knowledge Management",
    description: "AI-powered knowledge base search for enterprises across multiple industries.",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "QlarityAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QlarityAI - AI Agents for Enterprise Knowledge Management",
    description: "AI-powered knowledge base search for enterprises.",
    images: ["/assets/Logo.png"],
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
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qlarityai.in/#organization",
        "name": "QlarityAI",
        "url": "https://www.qlarityai.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.qlarityai.in/icon.svg"
        },
        "description": "AI-powered knowledge base search for enterprises. Secure, compliant AI agents for healthcare, manufacturing, IT, education, HR, finance, retail and logistics.",
        "sameAs": [
          "https://www.linkedin.com/company/qlarityai",
          "https://twitter.com/qlarityai"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.qlarityai.in/#software",
        "name": "QlarityAI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50"
        },
        "description": "Enterprise AI-powered knowledge management platform with secure document search, compliance automation, and multi-industry support."
      },
      {
        "@type": "WebSite",
        "@id": "https://www.qlarityai.in/#website",
        "url": "https://www.qlarityai.in",
        "name": "QlarityAI",
        "publisher": {
          "@id": "https://www.qlarityai.in/#organization"
        }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
