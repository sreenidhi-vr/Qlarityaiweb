import type { Metadata } from "next"
import ClientHealthcareUseCasePage from "./client-page"

export const metadata: Metadata = {
  title: "Healthcare AI Solutions - Clinical Protocols & Compliance Intelligence",
  description:
    "Transform healthcare operations with AI-powered access to clinical protocols, HIPAA-compliant knowledge management, and instant compliance verification for JCI, ISO, and NABH standards. Reduce guideline access time by 60%.",
  keywords: [
    "Healthcare AI",
    "Clinical Protocols AI",
    "HIPAA Compliance",
    "JCI Standards",
    "ISO Healthcare",
    "NABH Compliance",
    "Medical AI Assistant",
    "Healthcare Knowledge Management",
    "Clinical Decision Support",
    "Healthcare Compliance AI",
    "Medical Protocol Assistant",
    "Healthcare Operations AI",
  ],
  openGraph: {
    title: "Healthcare AI Solutions - Clinical Protocols & Compliance Intelligence",
    description:
      "AI-powered clinical protocols and compliance assistant for healthcare organizations. HIPAA-compliant with 60% faster policy access and 85% reduction in compliance errors.",
    url: "https://www.qlarityai.in/use-cases/healthcare",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Healthcare AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AI Solutions - Clinical Protocols & Compliance Intelligence",
    description: "AI-powered clinical protocols and compliance assistant for healthcare organizations. HIPAA-compliant with 60% faster access.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/healthcare",
  },
}

export default function HealthcareUseCasePage() {
  return <ClientHealthcareUseCasePage />
}
