"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.setProperty("--glow-x", `${e.clientX}px`)
      glowRef.current.style.setProperty("--glow-y", `${e.clientY}px`)
      glowRef.current.style.opacity = "1"
    }

    const handleMouseLeave = () => {
      if (!glowRef.current) return
      glowRef.current.style.opacity = "0"
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(34,160,90,0.06), transparent 60%)",
      }}
    />
  )
}
