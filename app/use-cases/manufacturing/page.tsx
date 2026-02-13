import type { Metadata } from "next"
import ManufacturingUseCasePageClient from "./client-page"

export const metadata: Metadata = {
  title: "Manufacturing AI Solutions - AI-Powered Knowledge Intelligence",
  description:
    "Reduce downtime by 40% with AI-powered access to SOPs, maintenance protocols, and equipment documentation. Improve operational efficiency and safety compliance.",
  keywords: [
    "Manufacturing AI",
    "SOP Assistant AI",
    "Maintenance AI",
    "Manufacturing Knowledge Base",
    "Equipment Documentation AI",
    "Manufacturing Compliance",
    "Quality Control AI",
    "Factory Operations AI",
    "Technician Training AI",
    "Troubleshooting Intelligence",
  ],
  openGraph: {
    title: "Manufacturing AI Solutions - AI-Powered Knowledge Intelligence",
    description:
      "Reduce downtime by 40% with AI-powered access to SOPs, maintenance protocols, and equipment documentation.",
    url: "https://www.qlarityai.in/use-cases/manufacturing",
    siteName: "QlarityAI",
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Manufacturing AI Solutions by QlarityAI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing AI Solutions - AI-Powered Knowledge Intelligence",
    description: "Reduce downtime by 40% with AI-powered access to SOPs and maintenance protocols.",
    images: ["/assets/Logo.png"],
  },
  alternates: {
    canonical: "https://www.qlarityai.in/use-cases/manufacturing",
  },
}

export default function ManufacturingUseCasePage() {
  return <ManufacturingUseCasePageClient />
}
