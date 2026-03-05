"use client"

import { useState } from "react"
import { RevealSection } from "@/components/reveal-section"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Apex pilnībā pārtransformēja mūsu tiešsaistes klātbūtni. Mūsu jaunā mājaslapa palielināja konversijas par 40% tikai trijos mēnešos. Uzmanība detaļām ir nepārspējama.",
    name: "Laura Bērziņa",
    role: "Izpilddirektore, StyleVault",
    logo: "http://test.nordfest.dk/wp-content/uploads/2026/03/tomoelogo.png",
    logoColor: "bg-accent",
  },
  {
    quote:
      "Profesionāli, atsaucīgi un neticami talantīgi. Viņi nodeva mūsu interneta veikalu pirms termiņa un kvalitāte pārsniedza visas gaidas. Nesadarbotos ne ar vienu citu.",
    name: "Mārtiņš Ozoliņš",
    role: "Dibinātājs, Urban Properties",
    logo: "UP",
    logoColor: "bg-foreground",
  },
  {
    quote:
      "Labākais ieguldījums, ko esam veikuši mūsu biznesam. Mūsu mājaslapa ir ātra, skaista un klienti pastāvīgi slavē pieredzi. Īsteni meistari.",
    name: "Anna Kalniņa",
    role: "Direktore, Bistro Nouveau",
    logo: "BN",
    logoColor: "bg-accent",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section id="atsauksmes" className="relative z-10 py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <RevealSection>
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Atsauksmes
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                Klientu vārdi
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={prev}
                className="flex size-10 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:bg-secondary rounded-full"
                aria-label="Iepriekšējā atsauksme"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                className="flex size-10 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:bg-secondary rounded-full"
                aria-label="Nākamā atsauksme"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="relative min-h-[280px]">
            <div key={current} className="animate-reveal-up flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
              {/* Left side: quote and author */}
              <div className="flex-1">
                <blockquote className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-foreground max-w-4xl">
                  {`"${t.quote}"`}
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center bg-accent text-accent-foreground font-[family-name:var(--font-heading)] text-sm font-bold rounded-full">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-[13px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Right side: client logo */}
              <div className="shrink-0 flex items-start justify-center lg:justify-end lg:pt-4">
                <div className={`flex size-24 lg:size-28 items-center justify-center rounded-2xl ${t.logoColor} text-accent-foreground font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold tracking-tight shadow-lg`}>
                  {t.logo}
                </div>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="mt-12 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-10 bg-accent"
                    : "w-5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Atsauksme ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden items-center gap-3 mt-6">
            <button
              onClick={prev}
              className="flex size-10 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:bg-secondary rounded-full"
              aria-label="Iepriekšējā atsauksme"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              className="flex size-10 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:bg-secondary rounded-full"
              aria-label="Nākamā atsauksme"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
