"use client"

import { RevealSection } from "@/components/reveal-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakti" className="relative z-10 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <RevealSection>
          <div className="mb-16 text-center lg:mb-20">
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-accent">Kontakti</p>
            <h2 className="text-balance font-[family-name:var(--font-heading)] text-4xl font-bold uppercase leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Uzsāksim ko lielisku.
            </h2>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid lg:grid-cols-5">
              <div className="flex flex-col justify-between bg-foreground p-10 lg:col-span-2 lg:p-14">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-tight text-background">
                    Sazināties
                    <br />
                    ar mums
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-background/80">
                    Gatavi pacelt savu biznesu jaunā līmenī? Nosūtiet mums ziņojumu un mēs atbildēsim 24 stundu laikā.
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-6">
                  <a href="mailto:krastins.renars@gmail.com" className="group flex items-center gap-4 transition-colors duration-300">
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <Mail className="size-4 text-background/70 transition-colors duration-300 group-hover:text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">E-pasts</p>
                      <p className="text-sm text-background/80 transition-colors duration-300 group-hover:text-background">
                        info@krastweb.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:+4581911508" className="group flex items-center gap-4 transition-colors duration-300">
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <Phone className="size-4 text-background/70 transition-colors duration-300 group-hover:text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">Tālrunis</p>
                      <p className="text-sm text-background/80 transition-colors duration-300 group-hover:text-background">
                        +45 81911508
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-background/10">
                      <MapPin className="size-4 text-background/70" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">Adrese</p>
                      <p className="text-sm text-background/80">Sirdī Latvija, bet tā Dānija</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:col-span-3 lg:p-14">
                <form
                  action="https://formspree.io/f/xwvrlpva"
                  method="POST"
                  className="flex flex-col gap-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                        Vārds
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jūsu vārds"
                        required
                        className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                        E-pasts
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jusu@epasts.lv"
                        required
                        className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Tēma
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Projekta tēma"
                      className="h-12 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Ziņojums
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Pastāstiet par savu projektu..."
                      required
                      className="min-h-36 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 resize-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 flex h-13 w-full items-center justify-center gap-3 rounded-full bg-accent text-sm font-medium uppercase tracking-[0.12em] text-accent-foreground transition-all duration-300 hover:brightness-110"
                  >
                    Nosūtīt ziņojumu
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
