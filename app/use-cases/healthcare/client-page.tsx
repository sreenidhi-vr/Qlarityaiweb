"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Stethoscope,
  CheckCircle2,
  FileText,
  Clock,
  Shield,
  Users,
  ArrowRight,
  AlertCircle,
  BookOpen,
  FileCheck,
  UserCheck,
  TrendingUp,
  BarChart3,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ClientHealthcareUseCasePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-1/10 text-chart-1 border border-chart-1/20 mb-6">
              <Stethoscope className="w-4 h-4" />
              <span className="text-sm font-medium">Healthcare Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              AI-Assisted Clinical & Operational Intelligence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Instant access to clinical protocols, compliance rules, and administrative workflows — with verified
              accuracy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" onClick={() => setIsDemoModalOpen(true)} className="bg-chart-1 hover:bg-chart-1/90">
                Request Healthcare Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Learn More About Qlarity</Link>
              </Button>
            </div>

            {/* Healthcare Challenges - Inline Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex justify-center mb-4">
                  <FileText className="w-8 h-8 text-chart-1" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Scattered Clinical Protocols</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Clinical protocols scattered across PDFs, shared drives, and intranet systems
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex justify-center mb-4">
                  <Clock className="w-8 h-8 text-chart-1" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Slow Guideline Access</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Delays in accessing treatment guidelines during critical care moments
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-chart-1" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Compliance Dependency</h3>
                <p className="text-sm text-muted-foreground text-center">
                  High dependency on compliance teams for policy verification
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-chart-1" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Administrative Delays</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Coordination delays in administrative workflows and documentation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">QlarityAI Healthcare Solution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A centralized medical knowledge engine powered by advanced AI retrieval technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Explanation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Centralized Medical Knowledge Engine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  QlarityAI consolidates all your clinical protocols, compliance documentation, and operational SOPs
                  into a single, intelligent knowledge base. Our AI-powered system understands medical terminology and
                  retrieves accurate information instantly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-chart-1 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">HIPAA-Compliant Architecture</h4>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security with end-to-end encryption and access controls
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-chart-1 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Real-Time Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatic synchronization when protocols or guidelines are updated
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-chart-1 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Natural Language Queries</h4>
                      <p className="text-sm text-muted-foreground">
                        Ask questions in plain language and get precise, cited responses
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Workflow Diagram */}
              <div className="space-y-4">
                <div className="p-6 rounded-lg border-2 border-chart-1/20 bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-1 text-white font-bold text-sm">
                      1
                    </div>
                    <h4 className="font-semibold">Query Input</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">
                    Clinician asks: "What's the protocol for managing post-op infections?"
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                </div>

                <div className="p-6 rounded-lg border-2 border-chart-1/20 bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-1 text-white font-bold text-sm">
                      2
                    </div>
                    <h4 className="font-semibold">AI Retrieval</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">
                    System searches across clinical protocols, guidelines, and SOPs
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                </div>

                <div className="p-6 rounded-lg border-2 border-chart-1/20 bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-1 text-white font-bold text-sm">
                      3
                    </div>
                    <h4 className="font-semibold">Verified Response</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">
                    Returns accurate protocol with source citations and compliance notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Capabilities</h2>
              <p className="text-lg text-muted-foreground">Comprehensive healthcare intelligence at your fingertips</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-1/10">
                    <BookOpen className="w-8 h-8 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-bold">Clinical Protocol Retrieval</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Instant access to treatment protocols, clinical guidelines, and evidence-based care pathways. Search
                  by condition, procedure, or department.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Emergency protocols and critical care guidelines</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Medication administration and dosage references</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Infection control and safety procedures</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-1/10">
                    <Shield className="w-8 h-8 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-bold">Compliance & Policy Intelligence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Real-time verification of JCI, ISO, NABH, and HIPAA compliance requirements. Automated audit trail and
                  policy version tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Accreditation standards and quality metrics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Regulatory compliance documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Patient safety and risk management policies</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-1/10">
                    <FileCheck className="w-8 h-8 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-bold">Documentation & Operational SOP Access</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive library of standard operating procedures for clinical and administrative operations.
                  Searchable by role, department, or process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Admission, discharge, and transfer protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Medical equipment operation and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Lab procedures and diagnostic workflows</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-chart-1/10">
                    <UserCheck className="w-8 h-8 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-bold">Admin Workflow Assistance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Streamline administrative tasks with intelligent guidance for billing, scheduling, HR policies, and
                  facility management procedures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Insurance verification and billing procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Staff scheduling and credential management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span>Vendor management and procurement workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Impact</h2>
              <p className="text-lg text-muted-foreground">
                Real results from healthcare organizations using QlarityAI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-lg border border-border bg-background text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-chart-1" />
                </div>
                <div className="text-4xl font-bold text-chart-1 mb-2">60%</div>
                <h3 className="font-semibold mb-2">Faster Guideline Retrieval</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce time searching for clinical protocols from hours to seconds
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-chart-1" />
                </div>
                <div className="text-4xl font-bold text-chart-1 mb-2">85%</div>
                <h3 className="font-semibold mb-2">Reduction in Compliance Errors</h3>
                <p className="text-sm text-muted-foreground">
                  Minimize policy violations through instant access to current standards
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background text-center">
                <div className="flex justify-center mb-4">
                  <Activity className="w-12 h-12 text-chart-1" />
                </div>
                <div className="text-4xl font-bold text-chart-1 mb-2">3x</div>
                <h3 className="font-semibold mb-2">Faster Decision Support for Clinicians</h3>
                <p className="text-sm text-muted-foreground">
                  Accelerate clinical decision-making with immediate protocol access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Scenarios Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Use Case Scenarios</h2>
              <p className="text-lg text-muted-foreground">See how healthcare teams use QlarityAI every day</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-chart-1" />
                  <h3 className="text-xl font-bold">Emergency Protocols</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-3">
                  <p className="text-sm font-mono text-foreground">
                    "What is the rapid response protocol for cardiac arrest in the ER?"
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Emergency department staff get instant access to ACLS protocols, medication dosages, and equipment
                  checklists during critical situations.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-chart-1" />
                  <h3 className="text-xl font-bold">Medication Dosage Queries</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-3">
                  <p className="text-sm font-mono text-foreground">
                    "What's the pediatric dosing for amoxicillin by weight?"
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nurses verify medication dosages against approved formularies and age-specific guidelines before
                  administration.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-chart-1" />
                  <h3 className="text-xl font-bold">SOPs for Admissions & Discharge</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-3">
                  <p className="text-sm font-mono text-foreground">
                    "What documents are required for patient discharge to a skilled nursing facility?"
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Case managers streamline discharge planning with instant access to transfer requirements and
                  documentation checklists.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background hover:border-chart-1/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-chart-1" />
                  <h3 className="text-xl font-bold">Audit & Accreditation Support</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-3">
                  <p className="text-sm font-mono text-foreground">
                    "Show me all JCI patient safety goal implementations"
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quality teams prepare for accreditation audits by quickly gathering compliance documentation and
                  implementation evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 bg-gradient-to-br from-chart-1/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Request a Healthcare Demo</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              See how QlarityAI can transform clinical operations and improve patient care outcomes in your
              organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-chart-1 hover:bg-chart-1/90 px-8"
              >
                Schedule Healthcare Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Explore QlarityAI Platform</Link>
              </Button>
            </div>
          </div>
        </section>

        <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </main>
    </>
  )
}
