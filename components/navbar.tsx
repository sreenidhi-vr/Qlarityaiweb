"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onRequestDemo: () => void
}

export function Navbar({ onRequestDemo }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/Logo.png"
            alt="QlarityAI Logo"
            width={180}
            height={60}
            priority
          />
        </Link>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <Button onClick={onRequestDemo}>Request Demo</Button>
        </div>
      </div>
    </nav>
  )
}
