"use client"

import Link from "next/link"
import { ArrowDownRight } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import { ShaderGradient } from "@/components/shader-gradient"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Shader gradient background */}
      <ShaderGradient />



      <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-20 pt-32 lg:px-12">
        <RevealSection>
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-white/60">
            Digitālā studija — Web & E-komercija
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,7.5vw,7rem)] font-extrabold leading-[0.9] tracking-tight text-white uppercase">
            {"Veidojam"}
            <br />
            <span className="text-accent">digitālās</span>
            <br />
            pieredzes
          </h1>
        </RevealSection>

        <RevealSection delay={250}>
          <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-white/50">
              Mājaslapas un interneta veikali ambicioziem zīmoliem.
              Veidoti ar precizitāti, dizainēti konversijai,
              optimizēti veiktspējai.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="#kontakti"
                className="group flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3 rounded-full text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:brightness-110"
              >
                Sākt projektu
                <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link
                href="#projekti"
                className="text-sm font-medium uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                Skatīt darbus
              </Link>
            </div>
          </div>
        </RevealSection>

        <div className="mt-20 h-px w-full bg-white/10" />
      </div>
    </section>
  )
}
