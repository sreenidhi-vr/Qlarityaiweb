import type { Metadata } from "next"
import EducationUseCasePageClient from "./client-page"

export const metadata: Metadata = {
  title: "Education AI Solutions — Smart Knowledge Access for Students & Faculty",
  description:
    "Transform institutional knowledge into an interactive AI-powered assistant. Smart access for students, faculty, and administrators with 24/7 availability.",
  keywords: [
    "Education AI",
    "Academic Knowledge Base",
    "Faculty Resources AI",
    "Student Support AI",
    "Educational Institution AI",
    "Course Materials AI",
    "University Knowledge Management",
    "Academic Administration AI",
  ],
  openGraph: {
    title: "Education AI Solutions — Smart Knowledge Access for Students & Faculty",
    description: "Transform institutional knowledge into an interactive AI-powered assistant accessible 24/7.",
    url: "https://www.qlarityai.in/use-cases/education",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Education AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education AI Solutions — Smart Knowledge Access for Students & Faculty",
    description: "Transform institutional knowledge into an interactive AI-powered assistant.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/education",
  },
}

export default function EducationUseCasePage() {
  return <EducationUseCasePageClient />
}
