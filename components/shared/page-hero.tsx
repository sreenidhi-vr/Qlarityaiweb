"use client"

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface PageHeroProps {
  badge?: {
    icon: LucideIcon
    text: string
    color: string
  }
  title: string | ReactNode
  description: string
  actions?: ReactNode
}

export function PageHero({ badge, title, description, actions }: PageHeroProps) {
  return (
    <section className="px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto text-center">
        {badge && (
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${badge.color}/10 border border-${badge.color}/20 mb-6`}
          >
            <badge.icon className={`w-4 h-4 text-${badge.color}`} />
            <span className={`text-sm font-medium text-${badge.color}`}>{badge.text}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">{description}</p>
        {actions && <div className="flex flex-wrap gap-4 justify-center">{actions}</div>}
      </div>
    </section>
  )
}
