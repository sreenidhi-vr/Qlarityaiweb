"use client"

import { CheckCircle, AlertCircle } from "lucide-react"

export function ProblemDemo() {
  return (
    <section className="px-4 py-24 border-t border-border bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">
          The Complexity That Shouldn't Exist
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Way */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <h3 className="text-2xl font-bold">Traditional Search</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <p className="text-sm text-muted-foreground font-mono">{"// Manual document review"}</p>
                <div className="mt-3 space-y-2">
                  <div className="h-3 bg-border rounded w-full"></div>
                  <div className="h-3 bg-border rounded w-4/5"></div>
                  <div className="h-3 bg-border rounded w-3/5"></div>
                  <div className="mt-3 text-sm text-muted-foreground">Hours spent searching...</div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Keyword-based results miss context</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Manual interpretation required</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Inconsistent results every time</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Scales poorly with large documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* QlarityAI Way */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-2xl font-bold">QlarityAI</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-sm text-primary font-mono">{"// Instant intelligent answers"}</p>
                <div className="mt-3 space-y-2">
                  <div className="h-3 bg-primary/30 rounded w-full"></div>
                  <div className="h-3 bg-primary/30 rounded w-4/5"></div>
                  <div className="h-3 bg-primary/30 rounded w-3/5"></div>
                  <div className="mt-3 text-sm text-primary">Answer in seconds ⚡</div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Understands context and meaning</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">AI-powered intelligent responses</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Consistent, accurate answers</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Handles any size knowledge base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
