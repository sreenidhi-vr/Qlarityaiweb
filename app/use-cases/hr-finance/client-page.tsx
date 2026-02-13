"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  AlertCircle,
  FileCheck,
  Shield,
  Scale,
  CheckCircle2,
  ArrowRight,
  Search,
  Database,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ClientHRFinanceUseCasePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-5/10 border border-chart-5/20 mb-6">
            <DollarSign className="w-4 h-4 text-chart-5" />
            <span className="text-sm text-chart-5">Finance & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            AI for Compliance, Audit, and Financial Operations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Enable financial teams to access policies, risk frameworks, and audit workflows instantly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
                Learn More About Qlarity
              </Button>
            </Link>
          </div>

          {/* Pain Point Cards */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {[
              {
                icon: AlertCircle,
                title: "Compliance Complexity",
                desc: "Navigating evolving regulations and frameworks",
              },
              {
                icon: FileCheck,
                title: "Audit Delays",
                desc: "Time-consuming manual document retrieval",
              },
              {
                icon: Shield,
                title: "Risk Exposure",
                desc: "Difficulty accessing risk policies quickly",
              },
              {
                icon: Scale,
                title: "Policy Interpretation",
                desc: "Unclear guidelines leading to errors",
              },
            ].map((pain, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background/50 hover:bg-background hover:border-chart-5/30 transition-all"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-chart-5/10">
                    <pain.icon className="w-6 h-6 text-chart-5" />
                  </div>
                  <h3 className="font-semibold">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Flow Section */}
      <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Your AI-Powered Compliance & Audit Assistant
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                QlarityAI transforms how finance teams access critical information—from compliance policies to audit
                workflows—with instant, accurate AI-powered retrieval.
              </p>
              <ul className="space-y-4">
                {[
                  "Centralized compliance and risk framework repository",
                  "Natural language queries for policy interpretation",
                  "Real-time audit document retrieval with citations",
                  "Role-based access for secure information governance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-chart-5/10 to-background border border-chart-5/20 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-chart-5/20">
                      <Search className="w-6 h-6 text-chart-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Query</p>
                      <p className="text-sm text-muted-foreground">
                        Ask about policies, frameworks, or audit requirements
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-chart-5 mx-auto" />
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-chart-5/20">
                      <Database className="w-6 h-6 text-chart-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">AI Retrieval</p>
                      <p className="text-sm text-muted-foreground">
                        Search across compliance docs, risk frameworks, and audit logs
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-chart-5 mx-auto" />
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-chart-5/20">
                      <Brain className="w-6 h-6 text-chart-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Instant Answer</p>
                      <p className="text-sm text-muted-foreground">Get precise responses with source citations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Cards */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Core Financial Intelligence Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Search,
                title: "Compliance Search",
                desc: "Instantly find relevant regulations, policies, and compliance requirements across all frameworks.",
                features: ["Multi-framework search", "Citation tracking", "Version control"],
              },
              {
                icon: Shield,
                title: "Risk Framework Access",
                desc: "Quick access to risk assessment guidelines, mitigation strategies, and control procedures.",
                features: ["Risk taxonomy navigation", "Control mapping", "Real-time updates"],
              },
              {
                icon: FileCheck,
                title: "Policy Interpretation",
                desc: "AI-powered explanations of complex financial policies with contextual examples and precedents.",
                features: ["Natural language queries", "Contextual examples", "Historical context"],
              },
              {
                icon: Scale,
                title: "Audit Workflow Assistance",
                desc: "Streamline audit processes with instant access to historical records, procedures, and checklists.",
                features: ["Audit trail tracking", "Document automation", "Workflow templates"],
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-background hover:border-chart-5/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-chart-5/10 group-hover:bg-chart-5/20 transition-colors">
                    <capability.icon className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4">{capability.desc}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-chart-5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Measurable Compliance & Audit Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "70%",
                label: "Faster Audit Preparation",
                desc: "Reduce time spent gathering audit documentation",
              },
              {
                metric: "85%",
                label: "Improved Compliance Accuracy",
                desc: "Minimize policy interpretation errors",
              },
              {
                metric: "50%",
                label: "Reduced Risk Exposure",
                desc: "Faster identification of compliance gaps",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-chart-5/20 bg-gradient-to-br from-background to-chart-5/5 text-center"
              >
                <div className="text-5xl font-bold text-chart-5 mb-3">{stat.metric}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-br from-chart-5/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Enable Smarter Compliance and Audit Operations with QlarityAI
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join forward-thinking financial teams using AI to transform compliance and audit workflows.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
                Learn More About Qlarity
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <DemoRequestModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </>
  )
}
