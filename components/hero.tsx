"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onRequestDemo: () => void
}

export function Hero({ onRequestDemo }: HeroProps) {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Get Answers from Your Knowledge Base in Seconds
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
          Stop wasting time searching through documents. QlarityAI understands your knowledge base and answers questions
          instantly with AI intelligence.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="px-8 py-4 text-lg" onClick={onRequestDemo}>
            Request Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
