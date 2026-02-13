"use client"

import type { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

export function BenefitCard({ icon: Icon, title, description, color = "primary" }: BenefitCardProps) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-3 rounded-lg bg-${color}/10`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
