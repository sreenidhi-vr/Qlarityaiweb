"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Shield,
  MessageSquare,
  BarChart3,
  Stethoscope,
  Lock,
  Factory,
  Code,
  School,
  Briefcase,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react"
import { Hero } from "@/components/hero"
import { ProblemDemo } from "@/components/problem-demo"
import { Features } from "@/components/features"
import { Navbar } from "@/components/navbar"
import { ProblemVisualization } from "@/components/problem-visualization"
import { Button } from "@/components/ui/button"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

        <Hero onRequestDemo={() => setIsDemoModalOpen(true)} />

        <ProblemDemo />

        <ProblemVisualization />

        <Features />

        {/* Current Capabilities */}
        <section className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Current Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure Knowledge Ingestion</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Imports and indexes SOPs, manuals, compliance frameworks (HIPAA, JCI, ISO, NABH)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Integrates with Slack, Teams, SharePoint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>AES-256 encrypted data handling</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-2/10">
                    <MessageSquare className="w-6 h-6 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold">Contextual Intelligence</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span>Hybrid semantic + keyword retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span>All answers include citations</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-3/10">
                    <MessageSquare className="w-6 h-6 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-bold">Conversational Access</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                    <span>Accessible via Slack, Teams, and Web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                    <span>Supports document uploads and natural-language queries</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-4/10">
                    <Lock className="w-6 h-6 text-chart-4" />
                  </div>
                  <h3 className="text-xl font-bold">Governance & Compliance</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 shrink-0 mt-0.5" />
                    <span>Customizable audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 shrink-0 mt-0.5" />
                    <span>Deployment: cloud, hybrid, on-prem</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-5/10">
                    <BarChart3 className="w-6 h-6 text-chart-5" />
                  </div>
                  <h3 className="text-xl font-bold">Insights & Analytics</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-0.5" />
                    <span>Identifies high-demand topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-0.5" />
                    <span>Highlights knowledge gaps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Cross-Industry Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/use-cases/healthcare" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <Stethoscope className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">Healthcare</h3>
                    </div>
                    <p className="text-muted-foreground">Clinical protocols & compliance assistant</p>
                  </div>
                </div>
              </Link>

              <Link href="/use-cases/manufacturing" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-2 hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <Factory className="w-8 h-8 text-chart-2 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">Manufacturing</h3>
                    </div>
                    <p className="text-muted-foreground">SOP & maintenance assistant</p>
                  </div>
                </div>
              </Link>

              <Link href="/use-cases/it" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-3 hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-8 h-8 text-chart-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">IT</h3>
                    </div>
                    <p className="text-muted-foreground">Developer documentation assistant</p>
                  </div>
                </div>
              </Link>

              <Link href="/use-cases/education" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-4 hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-chart-4/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <School className="w-8 h-8 text-chart-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">Education</h3>
                    </div>
                    <p className="text-muted-foreground">Faculty & student knowledge hub</p>
                  </div>
                </div>
              </Link>

              <Link href="/use-cases/hr-finance" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-5 hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-chart-5/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-8 h-8 text-chart-5 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">HR & Finance</h3>
                    </div>
                    <p className="text-muted-foreground">Policy Q&A, compliance automation</p>
                  </div>
                </div>
              </Link>

              <Link href="/use-cases/retail-logistics" className="block group">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-[0_8px_30px_rgb(10,15,41,0.12)] hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <ShoppingCart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">Retail & Logistics</h3>
                    </div>
                    <p className="text-muted-foreground">Supplier & product query engine</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Transform Your Enterprise Knowledge?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Experience the power of AI-driven knowledge intelligence for your organization.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg" onClick={() => setIsDemoModalOpen(true)}>
              Request Demo
            </Button>
          </div>
        </section>

        <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </main>
    </>
  )
}
