import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR & Finance AI - Policy Q&A & Compliance Automation',
  description: 'AI-powered HR and Finance assistant for policy queries, compliance automation, and employee self-service. Streamline HR operations and financial documentation access.',
  keywords: [
    'HR AI',
    'Finance AI',
    'HR Automation',
    'Policy Management',
    'Compliance Automation',
    'Employee Self-Service',
    'HR Knowledge Base',
    'Finance Documentation',
  ],
  openGraph: {
    title: 'HR & Finance AI Solutions - QlarityAI',
    description: 'AI-powered HR and Finance assistant for policy Q&A and compliance automation. Instant access to HR policies and financial procedures.',
    url: 'https://www.qlarityai.in/use-cases/hr-finance',
    siteName: 'QlarityAI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'HR & Finance AI Solutions by QlarityAI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR & Finance AI Solutions - QlarityAI',
    description: 'AI-powered HR and Finance assistant for policy Q&A and compliance automation. Instant access to HR policies and financial procedures.',
    images: ['/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.qlarityai.in/use-cases/hr-finance',
  },
}

export default function HRFinanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
