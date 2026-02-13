"use client"

import { Search, Brain, Zap } from "lucide-react"

export function ProblemVisualization() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">See the Difference</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Traditional Search - Chaos */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm h-64 mb-8">
              {/* Background grid representing documents */}
              <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-destructive/10 border border-destructive/30 rounded animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Search icon spinning in confusion */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-12 h-12 text-destructive opacity-60 animate-spin" />
              </div>

              {/* Question marks floating around */}
              <div className="absolute top-4 right-8 text-destructive/40 text-2xl animate-bounce">?</div>
              <div
                className="absolute bottom-8 left-4 text-destructive/40 text-2xl animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                ?
              </div>
              <div
                className="absolute top-12 left-6 text-destructive/40 text-2xl animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                ?
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Traditional Search</h3>
            <p className="text-sm text-muted-foreground text-center">Manual browsing through endless documents</p>
            <p className="text-sm text-destructive font-semibold mt-2">⏱️ Hours to find answers</p>
          </div>

          {/* QlarityAI - Clarity */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm h-64 mb-8">
              {/* Central brain icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Brain className="w-16 h-16 text-primary animate-pulse" />

                  {/* Radiating circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-20 h-20 border-2 border-primary/40 rounded-full animate-ping" />
                    <div
                      className="absolute w-28 h-28 border-2 border-primary/20 rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              </div>

              {/* Connected nodes around the brain */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i / 6) * Math.PI * 2
                  const x = Math.cos(angle) * 80 + 50
                  const y = Math.sin(angle) * 80 + 50
                  return (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">QlarityAI</h3>
            <p className="text-sm text-muted-foreground text-center">AI instantly understands and answers</p>
            <p className="text-sm text-primary font-semibold mt-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Seconds to find answers
            </p>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="grid md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive mb-1">~2 hours</div>
            <p className="text-sm text-muted-foreground">Traditional Search</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">&lt;10 seconds</div>
            <p className="text-sm text-muted-foreground">QlarityAI Speed</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive mb-1">70%</div>
            <p className="text-sm text-muted-foreground">Info Missed</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">99%</div>
            <p className="text-sm text-muted-foreground">Accuracy Rate</p>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}
