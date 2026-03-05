"use client"

import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"

const featuresTop = [
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
]

const featuresBottom = [
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
    <section id="par-mums" className="relative z-10 pt-16 lg:pt-20 pb-28 lg:pb-36">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        {/* Grey divider line */}
        <div className="border-t border-border mb-16 lg:mb-20" />
        {/* Section header */}
        <RevealSection>
          <div className="mb-20 lg:mb-28">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Kāpēc mēs
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase leading-[1.1] max-w-2xl text-balance">
              Vairāk nekā{" "}
              <span className="text-accent">tikai mājaslapa</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Bez tukšiem solījumiem. Tikai pārdomāti risinājumi, moderns dizains un tehnoloģija, kas reāli strādā jūsu biznesa labā.
            </p>
          </div>
        </RevealSection>

        {/* Block 1: Image left, features right */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-28 lg:mb-36">
          <RevealSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/why-us-1.jpg"
                alt="Individuāli web risinājumi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/5" />
            </div>
          </RevealSection>

          <div className="flex flex-col gap-0">
            {featuresTop.map((feature, i) => (
              <RevealSection key={feature.num} delay={i * 120}>
                <div className="group py-8 first:pt-0 border-b border-border last:border-b-0">
                  <div className="flex items-start gap-5">
                    <span className="text-sm font-bold tracking-wider text-accent font-[family-name:var(--font-heading)] pt-1 shrink-0">
                      {feature.num}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground uppercase tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Block 2: Features left, image right (reversed) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-0 order-2 lg:order-1">
            {featuresBottom.map((feature, i) => (
              <RevealSection key={feature.num} delay={i * 120}>
                <div className="group py-8 first:pt-0 border-b border-border last:border-b-0">
                  <div className="flex items-start gap-5">
                    <span className="text-sm font-bold tracking-wider text-accent font-[family-name:var(--font-heading)] pt-1 shrink-0">
                      {feature.num}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground uppercase tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/why-us-2.jpg"
                alt="SEO un atbalsts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/5" />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
