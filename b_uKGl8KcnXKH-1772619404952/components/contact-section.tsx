"use client"

import { useState } from "react"
import { RevealSection } from "@/components/reveal-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakti" className="relative z-10 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        {/* Section header - centered */}
        <RevealSection>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Kontakti
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl uppercase leading-[1.1] text-balance">
              Uzsāksim ko lielisku.
            </h2>
          </div>
        </RevealSection>

        {/* Main content card */}
        <RevealSection delay={100}>
          <div className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left panel - dark accent area with contact info */}
              <div className="lg:col-span-2 bg-foreground p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-background uppercase tracking-tight">
                    Sazināties
                    <br />
                    ar mums
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-background/50">
                    Gatavi pacelt savu biznesu jaunā līmenī?
                    Nosūtiet mums ziņojumu un mēs atbildēsim 24 stundu laikā.
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-6">
                  <a
                    href="mailto:hello@apexdigital.lv"
                    className="group flex items-center gap-4 transition-colors duration-300"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <Mail className="size-4 text-background/70 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">E-pasts</p>
                      <p className="text-sm text-background/80 group-hover:text-background transition-colors duration-300">hello@apexdigital.lv</p>
                    </div>
                  </a>

                  <a
                    href="tel:+37120001234"
                    className="group flex items-center gap-4 transition-colors duration-300"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <Phone className="size-4 text-background/70 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">Tālrunis</p>
                      <p className="text-sm text-background/80 group-hover:text-background transition-colors duration-300">+371 2000 1234</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <MapPin className="size-4 text-background/70" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">Adrese</p>
                      <p className="text-sm text-background/80">Brīvības iela 100, Rīga</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel - form */}
              <div className="lg:col-span-3 p-10 lg:p-14">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle2 className="size-8 text-accent" />
                    </div>
                    <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground uppercase tracking-tight">
                      Ziņojums nosūtīts
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                      Paldies par sazināšanos. Mēs izskatīsim jūsu ziņojumu un sazināsimies ar jums drīzā laikā.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          Vārds
                        </label>
                        <Input
                          id="name"
                          placeholder="Jūsu vārds"
                          required
                          className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          E-pasts
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jusu@epasts.lv"
                          required
                          className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Tēma
                      </label>
                      <Input
                        id="subject"
                        placeholder="Projekta tēma"
                        className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Ziņojums
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Pastāstiet par savu projektu..."
                        required
                        className="min-h-36 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 resize-none focus:border-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-2 flex items-center justify-center gap-3 w-full h-13 rounded-full bg-accent text-accent-foreground text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:brightness-110"
                    >
                      Nosūtīt ziņojumu
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
