import type { Metadata } from "next"
import RetailLogisticsUseCasePageClient from "./client-page"

export const metadata: Metadata = {
  title: "Retail & Logistics AI Solutions — Product & Supply Chain Intelligence",
  description:
    "Transform retail and logistics operations with AI-powered instant access to SKU, supplier, warehouse, and shipping information.",
  keywords: [
    "Retail AI Solutions",
    "Logistics AI",
    "Supplier Management AI",
    "Product Information AI",
    "Inventory Management AI",
    "Shipping Operations AI",
    "Retail Knowledge Base",
    "Supply Chain AI",
    "SKU Lookup AI",
    "Warehouse SOP AI",
  ],
  openGraph: {
    title: "Retail & Logistics AI Solutions — Product & Supply Chain Intelligence",
    description:
      "Transform retail and logistics operations with AI-powered instant access to product, supplier, and warehouse information.",
    url: "https://www.qlarityai.in/use-cases/retail-logistics",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Retail & Logistics AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & Logistics AI Solutions — Product & Supply Chain Intelligence",
    description: "Transform retail operations with AI-powered knowledge access.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/retail-logistics",
  },
}

export default function RetailLogisticsUseCasePage() {
  return <RetailLogisticsUseCasePageClient />
}
