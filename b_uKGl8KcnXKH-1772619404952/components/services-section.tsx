"use client"

import { RevealSection } from "@/components/reveal-section"

const services = [
  {
    num: "01",
    title: "Mājaslapas",
    description:
      "Veidojam modernas un ātras mājaslapas, izmantojot pasaulē populārāko un uzticamāko satura vadības sistēmu – WordPress. Mūsu mērķis ir radīt lapas, kas ir viegli lietojamas, drošas un pielāgotas katra klienta vajadzībām. Strādājam tā, lai mūsu klientiem nākotnē būtu pēc iespējas mazāk papildu izmaksu un lai mājaslapu būtu viegli uzturēt.",
  },
  {
    num: "02",
    title: "Interneta veikali",
    description:
      "Izstrādājam ērtus, ātrus un drošus interneta veikalus, izmantojot pasaulē populārāko platformu – WordPress ar WooCommerce. Veikalus veidojam tā, lai tos būtu viegli pārvaldīt un attīstīt arī nākotnē. Mūsu mērķis ir radīt risinājumu, kas palīdz pārdot vairāk un vienlaikus samazina klientiem nevajadzīgas papildu izmaksas.",
  },
  {
    num: "03",
    title: "Dizains",
    description:
      "Mēs neveidojam mājaslapas no gataviem šabloniem. Katras lapas dizainu izstrādājam individuāli, balstoties uz klienta vēlmēm un zīmola identitāti. Mūsu mērķis ir radīt modernu, pārskatāmu un profesionālu dizainu, kas izceļ uzņēmumu un palīdz tam izskatīties uzticamam internetā.",
  },
]

export function ServicesSection() {
  return (
    <section id="pakalpojumi" className="relative z-10 pt-12 lg:pt-16 pb-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <RevealSection>
          <div className="mb-20">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Pakalpojumi
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
              Ko mēs jums piedāvājam?
            </h2>
          </div>
        </RevealSection>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <RevealSection key={service.num} delay={i * 80}>
              <div className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-t border-border -mx-8 pl-8 pr-4 lg:-mx-12 lg:pl-12 lg:pr-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50">
                <span className="text-5xl md:text-7xl font-bold tracking-tight text-accent/15 font-[family-name:var(--font-heading)] w-20 md:w-28 shrink-0 leading-none">
                  {service.num}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-foreground uppercase tracking-tight w-full md:w-72 shrink-0 transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </RevealSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
