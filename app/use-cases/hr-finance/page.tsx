import type { Metadata } from "next"
import HRFinanceClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Finance AI Solutions — Compliance, Audit & Risk Management",
  description:
    "Enable financial teams to access policies, risk frameworks, and audit workflows instantly with AI-powered compliance and audit intelligence.",
  keywords: [
    "Finance AI Solutions",
    "Compliance Automation AI",
    "Audit AI Assistant",
    "Risk Framework AI",
    "Financial Policy AI",
    "Compliance Search AI",
    "Audit Workflow Automation",
    "Financial Operations AI",
  ],
  openGraph: {
    title: "Finance AI Solutions — Compliance, Audit & Risk Management",
    description: "Enable financial teams to access policies, risk frameworks, and audit workflows instantly.",
    url: "https://www.qlarityai.in/use-cases/hr-finance",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Finance AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance AI Solutions — Compliance, Audit & Risk Management",
    description: "Enable financial teams to access policies, risk frameworks, and audit workflows instantly.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/hr-finance",
  },
}

export default function HRFinanceUseCasePage() {
  return <HRFinanceClientPage />
}
