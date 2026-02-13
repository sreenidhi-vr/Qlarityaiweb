"use client"

import type { LucideIcon } from "lucide-react"

interface UseCaseCardProps {
  icon: LucideIcon
  title: string
  query: string
  description: string
}

export function UseCaseCard({ icon: Icon, title, query, description }: UseCaseCardProps) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="bg-muted/50 p-4 rounded-md mb-3">
        <p className="text-sm font-mono text-muted-foreground">{query}</p>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
