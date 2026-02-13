"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  FileText,
  Package,
  Truck,
  ArrowRight,
  Search,
  Building2,
  BarChart3,
  Zap,
  Target,
  Clock,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { DemoRequestModal } from "@/components/demo-request-modal"

export default function ClientRetailLogisticsUseCasePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-5/10 border border-chart-5/20 mb-6">
            <ShoppingCart className="w-4 h-4 text-chart-5" />
            <span className="text-sm text-chart-5">Retail & Logistics Industry</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            AI-Powered Product, Inventory, and Supply Chain Intelligence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Retrieve SKU, supplier, and warehouse information instantly with contextual AI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-5 hover:bg-chart-5/90"
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

          {/* Challenge Cards in Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Package,
                title: "SKU Data Fragmentation",
                description: "Product info scattered across catalogs and systems",
              },
              {
                icon: Building2,
                title: "Supplier Communication",
                description: "Slow access to vendor details and procurement data",
              },
              {
                icon: Truck,
                title: "Logistics Complexity",
                description: "Warehouse procedures and shipping rules hard to find",
              },
              {
                icon: BarChart3,
                title: "Manual Lookups",
                description: "Teams waste time searching for inventory and supply chain info",
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background hover:border-chart-5/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-chart-5/10">
                    <challenge.icon className="w-6 h-6 text-chart-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Your Unified Product & Supply Chain Knowledge Engine
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                QlarityAI consolidates product catalogs, supplier databases, warehouse SOPs, and logistics guides into
                one AI-powered search interface.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Instant SKU & Product Lookup:</strong>
                    <span className="text-muted-foreground"> Get pricing, specs, and availability in seconds</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Supplier Intelligence:</strong>
                    <span className="text-muted-foreground"> Access vendor contacts and procurement workflows</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Warehouse & Logistics SOPs:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Retrieve shipping guidelines and inventory procedures
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-background to-chart-5/5 border border-chart-5/20 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-chart-5/10 rounded-lg">
                    <Search className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-chart-5 mb-1">1. Query</div>
                    <div className="text-sm text-muted-foreground">"What's the lead time for SKU #4532?"</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto" />
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-chart-5/10 rounded-lg">
                    <Zap className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-chart-5 mb-1">2. AI Retrieval</div>
                    <div className="text-sm text-muted-foreground">Searches across product & supplier databases</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto" />
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-chart-5/10 rounded-lg">
                    <Target className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-chart-5 mb-1">3. Contextual Answer</div>
                    <div className="text-sm text-muted-foreground">Instant response with source citations</div>
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
            Key Capabilities for Retail & Logistics
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Search,
                title: "SKU & Product Lookup",
                desc: "Instant access to product specifications, pricing, dimensions, and availability across your entire catalog.",
              },
              {
                icon: FileText,
                title: "Warehouse SOP Access",
                desc: "Quickly retrieve inventory procedures, storage guidelines, and quality control documentation.",
              },
              {
                icon: Building2,
                title: "Supplier & Procurement Intelligence",
                desc: "Get vendor contacts, lead times, procurement workflows, and contract details on demand.",
              },
              {
                icon: Truck,
                title: "Logistics Workflow Support",
                desc: "Access shipping requirements, carrier options, customs documentation, and delivery protocols instantly.",
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background hover:border-chart-5/50 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-5/10 group-hover:bg-chart-5/20 transition-colors">
                    <capability.icon className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.desc}</p>
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
            Measurable Impact on Retail & Logistics Operations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                metric: "50% Faster",
                label: "Product & supplier info retrieval time",
              },
              {
                icon: TrendingUp,
                metric: "35% Increase",
                label: "Supply chain team productivity",
              },
              {
                icon: Target,
                metric: "70% Reduction",
                label: "In manual lookups and data searches",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-chart-5/20 bg-background text-center hover:border-chart-5/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-chart-5/10">
                    <stat.icon className="w-8 h-8 text-chart-5" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-chart-5 mb-2">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-br from-chart-5/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Transform Retail & Logistics Operations with AI-Powered Knowledge Access
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join leading retailers and logistics providers using QlarityAI for streamlined operations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-chart-5 hover:bg-chart-5/90"
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
