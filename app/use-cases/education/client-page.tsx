"use client"

import { useState } from "react"
import Link from "next/link"
import {
  School,
  Users,
  BookOpen,
  FileText,
  Zap,
  TrendingUp,
  Clock,
  GraduationCap,
  Building,
  Shield,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ClientEducationUseCasePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-4/10 border border-chart-4/20 mb-6">
            <School className="w-4 h-4 text-chart-4" />
            <span className="text-sm text-chart-4">Education Industry</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Smart Knowledge Access for Students, Faculty, and Administrators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Transform institutional knowledge into an interactive AI-powered assistant.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-4 hover:bg-chart-4/90"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request Demo
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
                Learn More About Qlarity
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {[
              {
                icon: BookOpen,
                title: "Fragmented Resources",
                desc: "Documents spread across systems",
              },
              {
                icon: Clock,
                title: "Delayed Support",
                desc: "Students wait for simple answers",
              },
              {
                icon: Users,
                title: "Overwhelmed Staff",
                desc: "Repetitive queries burden faculty",
              },
              {
                icon: FileText,
                title: "Policy Confusion",
                desc: "Unclear institutional procedures",
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-chart-4/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-chart-4/10">
                    <challenge.icon className="w-6 h-6 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Your Campus Knowledge Assistant
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                QlarityAI transforms your institutional knowledge—syllabi, course catalogs, policies, handbooks, and
                administrative documents—into an intelligent, searchable assistant accessible to everyone on campus.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Students, faculty, and staff get instant, accurate answers to academic and administrative questions
                without waiting for office hours or navigating complex document repositories.
              </p>
              <ul className="space-y-4">
                {[
                  "Unified access to all institutional knowledge",
                  "24/7 availability for students and staff",
                  "Reduced burden on administrative offices",
                  "Improved campus experience and satisfaction",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-chart-4/10 mt-1">
                      <Zap className="w-4 h-4 text-chart-4" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg border border-border bg-gradient-to-br from-background to-chart-4/5 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border">
                    <Search className="w-8 h-8 text-chart-4 shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Student Query</div>
                      <div className="text-sm text-muted-foreground">Ask any academic or policy question</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-chart-4 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-chart-4/50">
                    <Zap className="w-8 h-8 text-chart-4 shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">AI Retrieval</div>
                      <div className="text-sm text-muted-foreground">Search across all documents instantly</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-chart-4 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-chart-4/10 border border-chart-4">
                    <GraduationCap className="w-8 h-8 text-chart-4 shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Instant Answer</div>
                      <div className="text-sm text-muted-foreground">With source citations and references</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            Key Capabilities for Education
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-balance">
            Empower your campus with AI-driven knowledge access across all departments and user groups
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Academic FAQ Assistant",
                desc: "Instant answers to course policies, syllabi, assignment guidelines, grading criteria, and academic calendar queries.",
              },
              {
                icon: FileText,
                title: "Policy Retrieval",
                desc: "Quick access to institutional policies, student handbooks, code of conduct, registration procedures, and graduation requirements.",
              },
              {
                icon: Users,
                title: "Faculty Resource Access",
                desc: "Teaching resources, curriculum guides, grading policies, professional development materials, and administrative procedures for faculty.",
              },
              {
                icon: Building,
                title: "Administrative Automation",
                desc: "Streamlined responses for financial aid queries, housing information, campus services, event schedules, and facility bookings.",
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-border bg-gradient-to-br from-background to-chart-4/5 hover:border-chart-4/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-4/10 group-hover:bg-chart-4/20 transition-colors">
                    <capability.icon className="w-7 h-7 text-chart-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Impact Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                metric: "70%",
                label: "Reduction in Administrative Queries",
                desc: "Self-service answers decrease staff workload",
              },
              {
                icon: Clock,
                metric: "24/7",
                label: "Always-Available Support",
                desc: "Students get instant help any time",
              },
              {
                icon: Users,
                metric: "85%",
                label: "Student Satisfaction Increase",
                desc: "Faster access to academic resources",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-border bg-background hover:border-chart-4/50 transition-all duration-300 hover:shadow-lg group text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-chart-4/10 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-chart-4" />
                </div>
                <div className="text-4xl font-bold text-chart-4 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Use Case Scenarios */}
        <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Education Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "Course Material Access",
                query: "What are the submission guidelines for the final project?",
                use: "Instant access to syllabi, assignments, and academic policies",
              },
              {
                title: "Administrative Policy Queries",
                query: "What is the grade appeal process?",
                use: "Quick answers to institutional policies and procedures",
              },
              {
                title: "Student Services Support",
                query: "How do I apply for financial aid?",
                use: "Self-service access to registration, financial aid, and campus resources",
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background hover:border-chart-4/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <div className="bg-muted/50 rounded-lg p-4 mb-3 border border-border">
                  <p className="text-foreground font-mono text-sm">{useCase.query}</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="w-5 h-5 text-chart-4 shrink-0 mt-0.5" />
                    <span>{useCase.use}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="px-4 py-24 bg-gradient-to-br from-chart-4/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Elevate Learning and Campus Efficiency with QlarityAI
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join leading institutions using QlarityAI for better academic resource access.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-4 hover:bg-chart-4/90"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request Demo
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
