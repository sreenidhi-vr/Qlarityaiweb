"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Factory,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Shield,
  GraduationCap,
  Clock,
  TrendingDown,
  Users,
  ArrowRight,
  FileText,
  Search,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ManufacturingUseCasePageClient() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
              <Factory className="w-4 h-4 text-chart-2" />
              <span className="text-sm font-medium text-chart-2">Manufacturing AI Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              AI-Powered Knowledge Intelligence for Manufacturing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Reduce downtime, standardize operations, and empower technicians with instant, verified answers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => setIsDemoModalOpen(true)}>
                Request Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Learn More About Qlarity</Link>
              </Button>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Manufacturing Challenges</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-lg bg-background border border-border hover:border-chart-2/50 transition-colors">
                  <AlertTriangle className="w-8 h-8 text-destructive mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Equipment Downtime</h3>
                  <p className="text-muted-foreground text-sm">
                    Technicians waste hours searching through manuals during critical breakdowns
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-background border border-border hover:border-chart-2/50 transition-colors">
                  <Users className="w-8 h-8 text-destructive mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Knowledge Silos</h3>
                  <p className="text-muted-foreground text-sm">
                    Critical knowledge trapped in senior technicians' heads, creating dependency bottlenecks
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-background border border-border hover:border-chart-2/50 transition-colors">
                  <FileText className="w-8 h-8 text-destructive mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Inconsistent Procedures</h3>
                  <p className="text-muted-foreground text-sm">
                    Multiple versions of SOPs lead to errors and quality issues
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-background border border-border hover:border-chart-2/50 transition-colors">
                  <Clock className="w-8 h-8 text-destructive mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Slow Onboarding</h3>
                  <p className="text-muted-foreground text-sm">
                    New technicians take months to become productive due to complex equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">QlarityAI Manufacturing Knowledge Engine</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your manufacturing operations with AI-powered instant access to SOPs, maintenance protocols,
                and troubleshooting guides
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-2/50 transition-colors">
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                  <Search className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Knowledge Access</h3>
                <p className="text-muted-foreground">
                  Natural language queries return precise answers from equipment manuals, SOPs, and maintenance
                  histories in seconds
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-2/50 transition-colors">
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                  <Shield className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Information</h3>
                <p className="text-muted-foreground">
                  All responses sourced from approved documentation with citations, ensuring compliance and accuracy
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-2/50 transition-colors">
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                  <Zap className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Always-on assistant eliminates waiting for expert availability during critical production issues
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-2/10">
                    <FileText className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold">SOP & Maintenance Assistant</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Instant access to standard operating procedures, preventive maintenance schedules, and
                  equipment-specific protocols through natural language queries.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Step-by-step procedural guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Equipment-specific maintenance schedules</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Safety protocol verification</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-2/10">
                    <Wrench className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold">Troubleshooting Intelligence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered diagnostics that analyze symptoms and guide technicians through systematic troubleshooting
                  processes based on historical data.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Symptom-based diagnostics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Historical issue resolution lookup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Root cause analysis guidance</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-2/10">
                    <Shield className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold">Quality & Compliance Access</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Real-time access to quality standards, inspection procedures, and compliance requirements with
                  automatic documentation tracking.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Quality control procedures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">ISO/regulatory compliance verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Audit trail documentation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-2/10">
                    <GraduationCap className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold">Technician Training & Onboarding</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Accelerate new technician productivity with on-demand training materials, equipment familiarization,
                  and skill-building resources.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Interactive equipment training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">On-the-job learning support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Skill gap identification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Measurable Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-2/50 transition-colors">
                <TrendingDown className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                <div className="text-4xl font-bold text-chart-2 mb-2">40%</div>
                <div className="text-lg font-semibold mb-2">Downtime Reduction</div>
                <p className="text-sm text-muted-foreground">
                  Faster troubleshooting and maintenance resolution with instant access to verified solutions
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-2/50 transition-colors">
                <Clock className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                <div className="text-4xl font-bold text-chart-2 mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Faster Knowledge Access</div>
                <p className="text-sm text-muted-foreground">
                  From hours of manual searching to seconds with AI-powered natural language queries
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background text-center hover:border-chart-2/50 transition-colors">
                <Users className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                <div className="text-4xl font-bold text-chart-2 mb-2">50%</div>
                <div className="text-lg font-semibold mb-2">Onboarding Time Reduced</div>
                <p className="text-sm text-muted-foreground">
                  New technicians reach full productivity faster with on-demand learning resources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From query to resolution in seconds - see how QlarityAI transforms manufacturing knowledge access
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="p-6 rounded-lg border border-border bg-background h-full">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Ask Question</h3>
                  <p className="text-sm text-muted-foreground">
                    Technician asks a natural language question about equipment, procedures, or troubleshooting
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-chart-2/50" />
              </div>

              <div className="relative">
                <div className="p-6 rounded-lg border border-border bg-background h-full">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="font-bold mb-2">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    QlarityAI searches across all approved documentation, manuals, and knowledge bases
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-chart-2/50" />
              </div>

              <div className="relative">
                <div className="p-6 rounded-lg border border-border bg-background h-full">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Get Answer</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive precise, verified answer with source citations and related procedures
                  </p>
                </div>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-chart-2/50" />
              </div>

              <div>
                <div className="p-6 rounded-lg border border-border bg-background h-full">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Take Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Implement solution confidently with step-by-step guidance and safety protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Examples Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Real-World Manufacturing Scenarios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <Wrench className="w-10 h-10 text-chart-2 mb-4" />
                <h3 className="text-xl font-bold mb-3">Emergency Equipment Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Production line stops due to hydraulic press failure. Technician needs immediate troubleshooting
                  guidance.
                </p>
                <div className="bg-muted/50 p-4 rounded-md mb-3">
                  <p className="text-sm font-mono">
                    "Hydraulic press HP-300 showing error code E47, what are the troubleshooting steps?"
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Instant error code diagnosis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Step-by-step repair procedure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Safety precautions and required tools</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <FileText className="w-10 h-10 text-chart-2 mb-4" />
                <h3 className="text-xl font-bold mb-3">Preventive Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Maintenance team needs to perform scheduled service on CNC machines across multiple lines.
                </p>
                <div className="bg-muted/50 p-4 rounded-md mb-3">
                  <p className="text-sm font-mono">
                    "What is the quarterly maintenance checklist for CNC mill model XR-2000?"
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Complete maintenance checklist</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Required parts and consumables</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Documentation requirements</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <Shield className="w-10 h-10 text-chart-2 mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality Compliance Check</h3>
                <p className="text-muted-foreground mb-4">
                  Quality inspector needs to verify product specifications meet ISO standards before shipment.
                </p>
                <div className="bg-muted/50 p-4 rounded-md mb-3">
                  <p className="text-sm font-mono">
                    "What are the ISO 9001 inspection criteria for welded assemblies?"
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">ISO compliance requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Inspection procedure and criteria</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Documentation templates</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <GraduationCap className="w-10 h-10 text-chart-2 mb-4" />
                <h3 className="text-xl font-bold mb-3">New Technician Training</h3>
                <p className="text-muted-foreground mb-4">
                  Recently hired technician needs to learn safety procedures and equipment operation protocols.
                </p>
                <div className="bg-muted/50 p-4 rounded-md mb-3">
                  <p className="text-sm font-mono">
                    "What are the safety lockout procedures for working on conveyor system C-12?"
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">LOTO safety procedures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Equipment-specific safety protocols</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Related training resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 bg-gradient-to-br from-chart-2/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              See how QlarityAI can reduce downtime and empower your technicians with instant knowledge access.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => setIsDemoModalOpen(true)}>
                Request Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Learn More About Qlarity</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  )
}
