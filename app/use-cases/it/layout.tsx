import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT AI Solutions - Developer Documentation Assistant',
  description: 'AI-powered developer documentation assistant for IT teams. Instant access to technical documentation, API references, troubleshooting guides, and best practices.',
  keywords: [
    'IT AI',
    'Developer Documentation',
    'Technical Documentation AI',
    'API Documentation',
    'IT Knowledge Base',
    'DevOps AI',
    'Technical Support AI',
  ],
  openGraph: {
    title: 'IT AI Solutions - QlarityAI',
    description: 'AI-powered developer documentation assistant for IT teams. Quick access to technical documentation and troubleshooting guides.',
    url: 'https://www.qlarityai.in/use-cases/it',
    siteName: 'QlarityAI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'IT AI Solutions by QlarityAI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT AI Solutions - QlarityAI',
    description: 'AI-powered developer documentation assistant for IT teams. Quick access to technical documentation and troubleshooting guides.',
    images: ['/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.qlarityai.in/use-cases/it',
  },
}

export default function ITLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
