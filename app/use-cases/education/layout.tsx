import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education AI - Faculty & Student Knowledge Hub',
  description: 'AI-powered knowledge hub for educational institutions. Instant access to curricula, policies, research materials, and administrative documentation for faculty and students.',
  keywords: [
    'Education AI',
    'EdTech AI',
    'Academic Knowledge Base',
    'Faculty Assistant',
    'Student Portal AI',
    'Educational Resources',
    'Learning Management AI',
  ],
  openGraph: {
    title: 'Education AI Solutions - QlarityAI',
    description: 'AI-powered faculty and student knowledge hub for educational institutions. Quick access to academic resources and policies.',
    url: 'https://www.qlarityai.in/use-cases/education',
    siteName: 'QlarityAI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Education AI Solutions by QlarityAI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education AI Solutions - QlarityAI',
    description: 'AI-powered faculty and student knowledge hub for educational institutions. Quick access to academic resources and policies.',
    images: ['/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.qlarityai.in/use-cases/education',
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
