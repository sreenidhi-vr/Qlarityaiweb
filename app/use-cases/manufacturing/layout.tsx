import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing AI - SOP & Maintenance Assistant',
  description: 'AI-powered SOP access and maintenance guidance for manufacturing operations. Streamline production workflows, reduce downtime, and ensure compliance with industry standards.',
  keywords: [
    'Manufacturing AI',
    'SOP Management',
    'Maintenance Assistant',
    'Production AI',
    'Manufacturing Automation',
    'Industrial AI',
    'Factory Knowledge Base',
  ],
  openGraph: {
    title: 'Manufacturing AI Solutions - QlarityAI',
    description: 'AI-powered SOP and maintenance assistant for manufacturing operations. Instant access to procedures and technical documentation.',
    url: 'https://www.qlarityai.in/use-cases/manufacturing',
    siteName: 'QlarityAI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Manufacturing AI Solutions by QlarityAI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing AI Solutions - QlarityAI',
    description: 'AI-powered SOP and maintenance assistant for manufacturing operations. Instant access to procedures and technical documentation.',
    images: ['/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.qlarityai.in/use-cases/manufacturing',
  },
}

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
