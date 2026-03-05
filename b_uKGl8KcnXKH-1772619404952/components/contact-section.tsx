"use client"

import { useState } from "react"
import { RevealSection } from "@/components/reveal-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, Mail, MapPin, Phone, Loader2 } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const result = await res.json()
        setError(result.error || "Kaut kas nogāja greizi.")
      }
    } catch {
      setError("Neizdevās nosūtīt. Lūdzu, mēģiniet vēlāk.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakti" className="relative z-10 py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          {/* Left side */}
          <div>
            <RevealSection>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Kontakti
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase leading-[1.1]">
                Uzsāksim
                <br />
                <span className="text-accent">ko lielisku.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Gatavi pacelt savu biznesu jaunā līmenī?
                Nosūtiet mums ziņojumu un mēs atbildēsim 24 stundu laikā.
              </p>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="mt-14 flex flex-col gap-4">
                <a
                  href="mailto:hello@apexdigital.lv"
                  className="group flex items-center gap-4 py-5 border-t border-border transition-colors duration-300 hover:bg-secondary/50 -mx-4 px-4 rounded-xl"
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                    <Mail className="size-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-foreground">hello@apexdigital.lv</span>
                  <ArrowUpRight className="ml-auto size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="tel:+37120001234"
                  className="group flex items-center gap-4 py-5 border-t border-border transition-colors duration-300 hover:bg-secondary/50 -mx-4 px-4 rounded-xl"
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                    <Phone className="size-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-foreground">+371 2000 1234</span>
                  <ArrowUpRight className="ml-auto size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <div className="flex items-center gap-4 py-5 border-t border-b border-border -mx-4 px-4 rounded-xl">
                  <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                    <MapPin className="size-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-foreground">
                    Brīvības iela 100, Rīga, LV-1001
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right side - form */}
          <div>
            <RevealSection delay={200}>
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-12">
                  <div className="flex size-14 items-center justify-center bg-accent text-accent-foreground font-[family-name:var(--font-heading)] font-bold rounded-full text-sm">
                    OK
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground uppercase tracking-tight">
                    Ziņojums nosūtīts
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                    Paldies par sazināšanos. Mēs izskatīsim jūsu ziņojumu un sazināsimies ar jums drīzā laikā.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2.5 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                      >
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
                      <label
                        htmlFor="email"
                        className="mb-2.5 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                      >
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
                    <label
                      htmlFor="message"
                      className="mb-2.5 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Ziņojums
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Pastāstiet par savu projektu..."
                      required
                      className="min-h-40 rounded-xl border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/50 resize-none focus:border-accent"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto self-start h-12 px-10 rounded-full bg-accent text-accent-foreground font-medium uppercase tracking-[0.12em] text-sm hover:brightness-110 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Nosūta...
                      </>
                    ) : (
                      <>
                        Nosūtīt ziņojumu
                        <ArrowUpRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}
