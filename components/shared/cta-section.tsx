"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText?: string
  onPrimaryClick?: () => void
  showSecondaryButton?: boolean
}

export function CTASection({
  title,
  description,
  primaryButtonText = "Request Demo",
  onPrimaryClick,
  showSecondaryButton = false,
}: CTASectionProps) {
  return (
    <section className="px-4 py-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">{description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="px-8 py-6 text-lg" onClick={onPrimaryClick}>
            {primaryButtonText}
          </Button>
          {showSecondaryButton && (
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
                Learn More About Qlarity
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
