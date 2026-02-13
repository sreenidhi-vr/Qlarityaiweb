"use client"

import { Upload, Zap, Brain } from "lucide-react"

const features = [
  {
    icon: Upload,
    title: "Upload Instantly",
    description: "Upload documents, PDFs, or entire knowledge bases in seconds",
  },
  {
    icon: Zap,
    title: "Get Instant Answers",
    description: "Ask questions and get accurate, contextual answers powered by AI",
  },
  {
    icon: Brain,
    title: "Deep Understanding",
    description: "AI understands meaning, context, and nuances across all documents",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">
          Simple. Powerful. Intelligent.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
