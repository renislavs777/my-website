"use client"

import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"

const features = [
  {
    num: "01",
    title: "Zibens ātrums",
    description:
      "Ielādes laiks zem sekundes. Jūsu mājaslapa ir optimizēta Core Web Vitals rādītājiem no paša sākuma. Izmantojam modernākos ietvarus, lai jūsu lietotāji nekad negaidītu.",
  },
  {
    num: "02",
    title: "SEO prioritāte",
    description:
      "Veidots ar meklētāju optimizāciju prātā jau no pamata. Semantisks HTML, strukturēti dati un veiktspējas optimizācija, lai jūs atrastu pareizie cilvēki.",
  },
  {
    num: "03",
    title: "Pikselis pie pikseļa",
    description:
      "Katra detaļa ir svarīga. Mēs perfekcionējam tipogrāfiju, atstarpes un kustības, lai radītu saskarnes, kas jūtas izstrādātas, nevis saliktas kopā.",
  },
  {
    num: "04",
    title: "Vienmēr pieejami",
    description:
      "Novērtīgs atbalsts un uzturēšana pēc palaišanas. Mēs uzraugām, optimizējam un attīstām jūsu digitālo klātbūtni. Jūs koncentrējaties uz biznesu, mēs parūpējamies par tehnoloģijām.",
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
                Veidots savādāk,
                <br />
                <span className="text-accent">ar nodomu.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Apvienojam tehniskās zināšanas ar radošo vīziju.
                Bez šabloniem. Bez saīsinājumiem. Katrs projekts tiek veidots no nulles,
                lai perfekti kalpo jūsu mērķiem.
              </p>
              <div className="mt-10 relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/why-us.jpg"
                  alt="Moderna darba vieta ar dizaina rīkiem"
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
                    <span className="text-[13px] font-medium tracking-wider text-accent font-[family-name:var(--font-heading)] pt-1 shrink-0">
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
