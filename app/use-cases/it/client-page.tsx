"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Code,
  Database,
  Shield,
  GitBranch,
  FileCode,
  Rocket,
  Server,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ClientITUseCasePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20 mb-6">
            <Code className="w-4 h-4 text-chart-3" />
            <span className="text-sm text-chart-3">Software & IT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            AI Knowledge Hub for Engineering Teams
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Accelerate onboarding, streamline development, and eliminate repetitive documentation queries.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-3 hover:bg-chart-3/90"
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

          {/* Engineering Challenges - Inline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="p-6 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex justify-center mb-4">
                <FileCode className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-center mb-2">Scattered Docs & Outdated Wikis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Information spread across multiple platforms and tools
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex justify-center mb-4">
                <Server className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-center mb-2">Onboarding Dependency on Seniors</h3>
              <p className="text-sm text-muted-foreground text-center">
                New developers bottlenecked by limited senior availability
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex justify-center mb-4">
                <Database className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-center mb-2">Slow Access to Architecture Knowledge</h3>
              <p className="text-sm text-muted-foreground text-center">
                Critical system design details buried in old documentation
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-center mb-2">Repeated Operational Queries</h3>
              <p className="text-sm text-muted-foreground text-center">Same questions asked repeatedly across teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Modernized */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-chart-3/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-chart-3" />
              <span className="text-sm font-medium text-chart-3">Powered by AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Your Developer Knowledge Engine</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              QlarityAI acts as a centralized AI-powered knowledge hub that connects all your technical documentation,
              architecture decisions, runbooks, and code repositories into one intelligent interface.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Feature Card - Spans Full on Mobile */}
            <div className="md:col-span-2 p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-chart-3/50 transition-all hover:shadow-[0_8px_30px_rgba(10,15,41,0.12)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-chart-3/10 border border-chart-3/20 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-chart-3" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Unified Knowledge Access</h3>
                    <p className="text-muted-foreground text-lg">
                      Engineers can instantly find answers about APIs, deployment procedures, security protocols, and
                      system architecture without waiting for senior developers or digging through outdated wikis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards - Side by Side */}
            <div className="p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-chart-3/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                  <Database className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Centralized Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Unified access to all technical documentation and knowledge bases across your organization
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-chart-3/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                  <Zap className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Context-Aware Search</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered search that understands developer intent and provides relevant context
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-chart-3/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                  <FileCode className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Automatic Citations</h3>
                  <p className="text-sm text-muted-foreground">
                    Every answer includes source citations and version tracking for complete accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-chart-3/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                  <Shield className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Secure & Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security with role-based access control and audit trails
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Cards */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            Key Capabilities for Engineering Teams
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Empower your developers with instant access to critical technical knowledge
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                  <Code className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">API & Architecture Answers</h3>
                  <p className="text-muted-foreground">
                    Instantly retrieve API documentation, system architecture diagrams, and design decisions with full
                    context and citations.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Query endpoints, parameters, and authentication methods</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Understand service dependencies and data flows</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                  <GitBranch className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Codebase Understanding</h3>
                  <p className="text-muted-foreground">
                    Navigate complex codebases with AI-assisted explanations of modules, functions, and coding patterns
                    specific to your organization.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Find where and how features are implemented</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Learn internal coding standards and best practices</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                  <Rocket className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Runbook & Deployment Guidance</h3>
                  <p className="text-muted-foreground">
                    Access step-by-step deployment procedures, rollback instructions, and operational runbooks instantly
                    when needed.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Execute deployments with confidence</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Troubleshoot incidents with proven procedures</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                  <Shield className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security & DevOps Knowledge Access</h3>
                  <p className="text-muted-foreground">
                    Query security protocols, compliance requirements, infrastructure configurations, and DevOps best
                    practices with instant answers.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Understand security policies and compliance needs</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>Access infrastructure and monitoring guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Measurable Impact on Engineering Productivity
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-3/50 transition-colors">
              <div className="text-5xl font-bold text-chart-3 mb-2">50%</div>
              <div className="text-lg font-semibold mb-2">Faster Onboarding</div>
              <p className="text-sm text-muted-foreground">
                New developers become productive faster with instant access to knowledge
              </p>
            </div>
            <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-3/50 transition-colors">
              <div className="text-5xl font-bold text-chart-3 mb-2">30%</div>
              <div className="text-lg font-semibold mb-2">Increase in Productivity</div>
              <p className="text-sm text-muted-foreground">
                Engineers spend less time searching and more time building
              </p>
            </div>
            <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-3/50 transition-colors">
              <div className="text-5xl font-bold text-chart-3 mb-2">70%</div>
              <div className="text-lg font-semibold mb-2">Reduced Dependency on SMEs</div>
              <p className="text-sm text-muted-foreground">
                Senior engineers freed from repetitive documentation questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Workflow Diagram */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            How It Works: Developer Workflow
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Simple, fast, and accurate knowledge retrieval in three steps
          </p>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-chart-3 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold">Query</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Developer asks a natural language question about APIs, architecture, or deployment
                  </p>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm font-mono">"How do I authenticate with the payment API?"</p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-chart-3 w-6 h-6 z-10" />
              </div>

              <div className="relative">
                <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-chart-3 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold">Retrieval</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    AI searches across documentation, wikis, and code repositories for relevant information
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-chart-3/20 rounded animate-pulse"></div>
                    <div className="h-2 bg-chart-3/30 rounded animate-pulse delay-75"></div>
                    <div className="h-2 bg-chart-3/40 rounded animate-pulse delay-150"></div>
                  </div>
                </div>
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-chart-3 w-6 h-6 z-10" />
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-3/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-chart-3 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Answer with Citation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Receive accurate answer with source citations and version information
                </p>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-muted/50 border border-border text-xs">
                    <CheckCircle2 className="w-3 h-3 text-chart-3 inline mr-1" />
                    API Docs v2.1 • Section 4.3
                  </div>
                  <div className="p-2 rounded bg-muted/50 border border-border text-xs">
                    <CheckCircle2 className="w-3 h-3 text-chart-3 inline mr-1" />
                    Auth Guide • Updated 2 weeks ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-br from-chart-3/10 via-background to-chart-3/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Empower Your Engineering Team with Instant Knowledge Access
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Transform how your developers access and share knowledge with QlarityAI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-3 hover:bg-chart-3/90"
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
