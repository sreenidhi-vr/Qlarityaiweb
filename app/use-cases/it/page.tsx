import type { Metadata } from "next"
import ITUseCasePageClient from "./client-page"

export const metadata: Metadata = {
  title: "AI Knowledge Hub for Engineering Teams — Developer Documentation Assistant",
  description:
    "Accelerate onboarding by 50% and boost productivity by 30% with AI-powered access to technical documentation, APIs, architecture, and runbooks. Reduce dependency on senior engineers.",
  keywords: [
    "Developer Documentation AI",
    "Engineering Knowledge Hub",
    "Technical Documentation Assistant",
    "API Documentation AI",
    "Codebase Understanding AI",
    "Developer Onboarding AI",
    "DevOps Knowledge Base",
    "Software Engineering AI",
    "Architecture Documentation",
    "Runbook Automation",
  ],
  openGraph: {
    title: "AI Knowledge Hub for Engineering Teams — Developer Documentation Assistant",
    description:
      "Accelerate onboarding by 50% and boost productivity by 30% with AI-powered access to technical documentation.",
    url: "https://www.qlarityai.in/use-cases/it",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Software & IT AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Knowledge Hub for Engineering Teams — Developer Documentation Assistant",
    description: "Accelerate onboarding by 50% and boost productivity by 30% with AI-powered technical documentation.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/it",
  },
}

export default function ITUseCasePage() {
  return <ITUseCasePageClient />
}
