"use client"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

export function RevealSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
