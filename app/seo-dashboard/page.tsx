"use client"

import { useState } from "react"
import {
  Code,
  FileText,
  ExternalLink,
  MapPin,
  Gauge,
  Braces,
  BookOpen,
  Globe,
  BarChart3,
  ArrowLeft,
  Play,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

type SEOModule =
  | "technical"
  | "onpage"
  | "offpage"
  | "local"
  | "performance"
  | "schema"
  | "content"
  | "submission"
  | "monitoring"
  | null

export default function SEODashboard() {
  const [selectedModule, setSelectedModule] = useState<SEOModule>(null)
  const [showAuditModal, setShowAuditModal] = useState(false)
  const [showMetaModal, setShowMetaModal] = useState(false)
  const seoScore = 78

  const modules = [
    {
      id: "technical" as const,
      title: "Technical SEO",
      subtitle: "Next.js + Vercel",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "onpage" as const,
      title: "On-Page SEO",
      subtitle: "Content Optimization",
      icon: FileText,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      id: "offpage" as const,
      title: "Off-Page SEO",
      subtitle: "External Presence",
      icon: ExternalLink,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      id: "local" as const,
      title: "Local SEO",
      subtitle: "India-Focused",
      icon: MapPin,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      id: "performance" as const,
      title: "Performance",
      subtitle: "Speed Optimization",
      icon: Gauge,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
    {
      id: "schema" as const,
      title: "Schema Markup",
      subtitle: "Structured Data",
      icon: Braces,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "content" as const,
      title: "Content Strategy",
      subtitle: "Blog Planning",
      icon: BookOpen,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      id: "submission" as const,
      title: "Search Submission",
      subtitle: "Engine Registration",
      icon: Globe,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      id: "monitoring" as const,
      title: "SEO Monitoring",
      subtitle: "Continuous Tracking",
      icon: BarChart3,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onRequestDemo={() => {}} />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">SEO Optimization Dashboard</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Optimize QlarityAI's website for search visibility, performance, and discoverability
            </p>
          </div>

          {/* SEO Score Meter */}
          <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-primary mb-2">{seoScore}%</div>
              <p className="text-sm text-muted-foreground">Overall SEO Score</p>
            </div>
            <Progress value={seoScore} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Needs Work</span>
              <span>Good</span>
              <span>Excellent</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Module Grid */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className="group relative p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all text-left"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${module.bgColor}`}>
                        <Icon className={`w-6 h-6 ${module.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                      <span>Click to expand</span>
                      <span className="text-primary">→</span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowAuditModal(true)}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
      >
        <Play className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Run Full SEO Audit
        </span>
      </button>

      {/* Generate Meta Tags Button */}
      <button
        onClick={() => setShowMetaModal(true)}
        className="fixed bottom-24 right-8 p-3 rounded-full bg-card border border-border text-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        title="Generate Meta Tags"
      >
        <Code className="w-5 h-5" />
      </button>

      {/* Side Panel for Module Details */}
      <Sheet open={selectedModule !== null} onOpenChange={() => setSelectedModule(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-3">
              <button
                onClick={() => setSelectedModule(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              {selectedModule && modules.find((m) => m.id === selectedModule)?.title}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {selectedModule === "technical" && <TechnicalSEOPanel />}
            {selectedModule === "onpage" && <OnPageSEOPanel />}
            {selectedModule === "offpage" && <OffPageSEOPanel />}
            {selectedModule === "local" && <LocalSEOPanel />}
            {selectedModule === "performance" && <PerformancePanel />}
            {selectedModule === "schema" && <SchemaMarkupPanel />}
            {selectedModule === "content" && <ContentStrategyPanel />}
            {selectedModule === "submission" && <SubmissionPanel />}
            {selectedModule === "monitoring" && <MonitoringPanel />}
          </div>
        </SheetContent>
      </Sheet>

      {/* SEO Audit Modal */}
      <Dialog open={showAuditModal} onOpenChange={setShowAuditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Run Full SEO Audit</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <p className="text-muted-foreground">
              This will perform a comprehensive SEO audit across all modules including technical setup, content
              optimization, performance metrics, and more.
            </p>
            <div className="grid gap-3">
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <h4 className="font-semibold mb-2">Audit Scope</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Technical SEO validation</li>
                  <li>• On-page content analysis</li>
                  <li>• Performance benchmarks</li>
                  <li>• Schema markup verification</li>
                  <li>• Mobile responsiveness check</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => setShowAuditModal(false)}>
                <Play className="w-4 h-4 mr-2" />
                Start Audit
              </Button>
              <Button variant="outline" onClick={() => setShowAuditModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Meta Tags Generator Modal */}
      <Dialog open={showMetaModal} onOpenChange={setShowMetaModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Generate Meta Tags</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Page Title</label>
                <input
                  type="text"
                  placeholder="QlarityAI - AI Agents for Enterprise"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Meta Description</label>
                <textarea
                  placeholder="AI-powered knowledge base search for enterprises..."
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background h-24"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Keywords (comma-separated)</label>
                <input
                  type="text"
                  placeholder="AI Agents, Enterprise AI, Knowledge Management"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold">Generated Code</h4>
                <Button size="sm" variant="ghost">
                  Copy
                </Button>
              </div>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
                {`<meta name="title" content="QlarityAI - AI Agents for Enterprise" />
<meta name="description" content="AI-powered knowledge base..." />
<meta name="keywords" content="AI Agents, Enterprise AI..." />`}
              </pre>
            </div>
            <Button onClick={() => setShowMetaModal(false)}>Done</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Panel Components
function TechnicalSEOPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Metadata Setup</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Title tags optimized (50-60 characters)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Meta descriptions present (150-160 characters)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠</span>
            <span>Keywords need review</span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">robots.txt + sitemap.xml</h3>
        <p className="text-sm text-muted-foreground mb-3">Ensure search engines can crawl your site properly.</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            View robots.txt
          </Button>
          <Button size="sm" variant="outline">
            View sitemap.xml
          </Button>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Image Alt-Text Validation</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Images with alt text</span>
            <span className="font-medium">45/50</span>
          </div>
          <Progress value={90} className="h-2" />
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Core Web Vitals</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-green-500">0.9s</div>
            <div className="text-xs text-muted-foreground">LCP</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-500">0.05</div>
            <div className="text-xs text-muted-foreground">CLS</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-500">95ms</div>
            <div className="text-xs text-muted-foreground">FID</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OnPageSEOPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">H1/H2/H3 Structure</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Single H1 per page</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Logical heading hierarchy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠</span>
            <span>Some H2 tags missing keywords</span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Keyword Optimization</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Primary Keywords</span>
              <span className="text-green-500">Good</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Long-tail Keywords</span>
              <span className="text-yellow-500">Needs Work</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Internal Linking</h3>
        <p className="text-sm text-muted-foreground mb-3">Strategic internal links improve navigation and SEO.</p>
        <Button size="sm">Generate Link Suggestions</Button>
      </div>
    </div>
  )
}

function OffPageSEOPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Google Search Console</h3>
        <p className="text-sm text-muted-foreground mb-3">Monitor search performance and indexing status.</p>
        <Button size="sm" variant="outline">
          Connect GSC
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Google Analytics GA4</h3>
        <p className="text-sm text-muted-foreground mb-3">Track user behavior and conversion metrics.</p>
        <Button size="sm" variant="outline">
          Setup GA4
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Backlink Strategy</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">LinkedIn Company Page</span>
            <Button size="sm" variant="ghost">
              Setup
            </Button>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Medium Publication</span>
            <Button size="sm" variant="ghost">
              Setup
            </Button>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Product Hunt</span>
            <Button size="sm" variant="ghost">
              Setup
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

function LocalSEOPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Google Business Profile</h3>
        <p className="text-sm text-muted-foreground mb-3">Optimize your local business presence on Google.</p>
        <Button size="sm">Setup Profile</Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">India-Specific Keywords</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">AI India</span>
          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">Enterprise AI India</span>
          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">Healthcare AI India</span>
          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">Bangalore AI</span>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Local Rich Results</h3>
        <p className="text-sm text-muted-foreground">
          Implement LocalBusiness schema to appear in local search results.
        </p>
      </div>
    </div>
  )
}

function PerformancePanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">PageSpeed Insights</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-green-500 mb-1">92</div>
            <div className="text-xs text-muted-foreground">Desktop</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-yellow-500 mb-1">78</div>
            <div className="text-xs text-muted-foreground">Mobile</div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Bundle Optimization</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Code splitting enabled</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠</span>
            <span>Reduce unused JavaScript by 45KB</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠</span>
            <span>Optimize images (convert to WebP)</span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Edge Caching</h3>
        <p className="text-sm text-muted-foreground mb-3">Leverage Vercel's Edge Network for faster delivery.</p>
        <Button size="sm" variant="outline">
          Configure Caching
        </Button>
      </div>
    </div>
  )
}

function SchemaMarkupPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">SoftwareApplication Schema</h3>
        <pre className="text-xs bg-muted/50 p-3 rounded-lg overflow-x-auto">
          {`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QlarityAI",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}`}
        </pre>
        <Button size="sm" className="mt-2">
          Copy Code
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">FAQ Schema</h3>
        <p className="text-sm text-muted-foreground mb-3">Add FAQ schema to appear in rich results.</p>
        <Button size="sm" variant="outline">
          Generate FAQ Schema
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Breadcrumb Schema</h3>
        <p className="text-sm text-muted-foreground mb-3">Help search engines understand site structure.</p>
        <Button size="sm" variant="outline">
          Generate Breadcrumb Schema
        </Button>
      </div>
    </div>
  )
}

function ContentStrategyPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">AI-Generated Blog Ideas</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-muted/50 text-sm">
            "How AI is Transforming Healthcare Compliance in 2024"
          </div>
          <div className="p-3 rounded-lg bg-muted/50 text-sm">
            "5 Ways Manufacturing Can Benefit from AI Knowledge Bases"
          </div>
          <div className="p-3 rounded-lg bg-muted/50 text-sm">
            "Enterprise AI: Bridging the Gap Between Data and Action"
          </div>
        </div>
        <Button size="sm" className="mt-3">
          Generate More Topics
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Content Calendar</h3>
        <p className="text-sm text-muted-foreground mb-3">Plan your content strategy for the next 3 months.</p>
        <Button size="sm" variant="outline">
          View Calendar
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Industry-Specific Content</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline">
            Healthcare
          </Button>
          <Button size="sm" variant="outline">
            Manufacturing
          </Button>
          <Button size="sm" variant="outline">
            IT & Tech
          </Button>
          <Button size="sm" variant="outline">
            Education
          </Button>
        </div>
      </div>
    </div>
  )
}

function SubmissionPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Google Search Console</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Site Verification</p>
            <p className="text-xs text-muted-foreground">Verify ownership of your site</p>
          </div>
          <Button size="sm">Verify</Button>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Submit Sitemap</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value="https://www.qlarityai.in/sitemap.xml"
              readOnly
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background"
            />
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Google
            </Button>
            <Button size="sm" variant="outline">
              Bing
            </Button>
            <Button size="sm" variant="outline">
              Yandex
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Indexing Status</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pages Submitted</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pages Indexed</span>
            <span className="font-medium text-green-500">10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pending</span>
            <span className="font-medium text-yellow-500">2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MonitoringPanel() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Broken Link Checker</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Links Scanned</span>
            <span className="font-medium">145</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Broken Links</span>
            <span className="font-medium text-red-500">3</span>
          </div>
        </div>
        <Button size="sm" className="mt-3">
          View Details
        </Button>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Ranking Trends</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">AI Agents</span>
              <span className="text-green-500">↑ #12</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Enterprise AI</span>
              <span className="text-green-500">↑ #8</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h3 className="font-semibold mb-3">Vercel Analytics Sync</h3>
        <p className="text-sm text-muted-foreground mb-3">Connect Vercel Analytics for performance insights.</p>
        <Button size="sm" variant="outline">
          Connect Analytics
        </Button>
      </div>
    </div>
  )
}
