import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retail & Logistics AI - Supplier & Product Query Engine',
  description: 'AI-powered supplier and product query engine for retail and logistics operations. Instant access to supplier information, product catalogs, and logistics documentation.',
  keywords: [
    'Retail AI',
    'Logistics AI',
    'Supply Chain AI',
    'Supplier Management',
    'Product Catalog AI',
    'Inventory AI',
    'Logistics Knowledge Base',
  ],
  openGraph: {
    title: 'Retail & Logistics AI Solutions - QlarityAI',
    description: 'AI-powered supplier and product query engine for retail and logistics. Quick access to supplier data and product information.',
    url: 'https://www.qlarityai.in/use-cases/retail-logistics',
    siteName: 'QlarityAI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Retail & Logistics AI Solutions by QlarityAI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail & Logistics AI Solutions - QlarityAI',
    description: 'AI-powered supplier and product query engine for retail and logistics. Quick access to supplier data and product information.',
    images: ['/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.qlarityai.in/use-cases/retail-logistics',
  },
}

export default function RetailLogisticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
