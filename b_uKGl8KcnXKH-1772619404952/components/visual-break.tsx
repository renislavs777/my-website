"use client"

import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"

export function VisualBreak() {
  return (
    <section className="relative z-10 w-full overflow-hidden">
      {/* Full-width image with overlay */}
      <div className="relative h-[50vh] min-h-[400px] lg:h-[60vh]">
        <Image
          src="/images/workspace.jpg"
          alt="Moderna darba vide"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
            <RevealSection>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Mūsu pieeja
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-background uppercase leading-[1.1] text-balance">
                Dizains, kas strādā.
                <br />
                <span className="text-accent">Kods, kam var uzticēties.</span>
              </h2>
              <p className="mt-8 mx-auto max-w-lg text-sm leading-relaxed text-background/60">
                Katrs projekts tiek veidots ar mērķi — ne tikai izskatīties labi, bet arī dot reālus rezultātus jūsu biznesam.
              </p>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}
