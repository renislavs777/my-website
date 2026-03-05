"use client"

import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"

const features = [
  {
    num: "01",
    title: "Individuāli risinājumi jūsu biznesam",
    description:
      "Mēs varam izveidot gandrīz jebkuru funkcionalitāti, kas nepieciešama jūsu biznesam – booking sistēmas, kalkulatorus, formas, integrācijas un citus pielāgotus risinājumus. Mēs pielāgojam mājaslapu jūsu vajadzībām, nevis liekam biznesam pielāgoties sistēmai.",
  },
  {
    num: "02",
    title: "Viegli pārvaldāma mājaslapa",
    description:
      "Mēs veidojam mājaslapas tā, lai tās būtu viegli rediģēt un pārvaldīt arī bez tehniskām zināšanām. Turklāt mēs nodrošinām video pamācības, lai jūs paši varētu ērti veikt izmaiņas, pievienot saturu vai atjaunināt informāciju, kad tas ir nepieciešams.",
  },
  {
    num: "03",
    title: "SEO optimizācija",
    description:
      "Jūsu mājaslapa tiek izstrādāta ar pareizu SEO pamatu, lai tā būtu vieglāk atrodama Google meklētājā. Tāpat tiek integrēts Google Analytics, kas ļauj sekot līdzi apmeklētāju statistikai un labāk saprast, kā cilvēki izmanto jūsu mājaslapu.",
  },
  {
    num: "04",
    title: "24/7 atbalsts un palīdzība",
    description:
      "Mēs vienmēr esam sasniedzami, kad jums tas ir nepieciešams. Atšķirībā no daudziem citiem pakalpojumu sniedzējiem, mēs esam blakus arī pēc projekta pabeigšanas – palīdzam, konsultējam un risinām problēmas jebkurā laikā.",
  },
]

export function WhyUsSection() {
  return (
    <section id="par-mums" className="relative z-10 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <RevealSection>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Kāpēc mēs
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase leading-[1.1]">
                Vairāk nekā 
                <br />
                <span className="text-accent">tikai mājaslapa</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Bez tukšiem solījumiem. Tikai pārdomāti risinājumi, moderns dizains un tehnoloģija, kas reāli strādā jūsu biznesa labā. Mēs koncentrējamies uz rezultātu – mājaslapu, kas ne tikai izskatās labi, bet arī palīdz piesaistīt klientus un attīstīt jūsu uzņēmumu. 🚀
              </p>
              <div className="mt-10 relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="http://test.nordfest.dk/wp-content/uploads/2026/03/398321879_830289102435057_9155434284416908712_n.webp"
                  alt="Krastweb"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>
          </div>

          {/* Right: feature blocks */}
          <div className="flex flex-col gap-0">
            {features.map((feature, i) => (
              <RevealSection key={feature.num} delay={i * 100}>
                <div className="group py-10 border-t border-border">
                  <div className="flex items-start gap-6">
                    <span className="text-base font-bold tracking-wider text-accent font-[family-name:var(--font-heading)] pt-1 shrink-0">
                      {feature.num}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground uppercase tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
