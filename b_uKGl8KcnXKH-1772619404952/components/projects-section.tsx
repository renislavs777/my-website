"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

const projects = [
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/Autoimage.jpg",
    name: "Autoleth",
    category: "Auto platforma",
    description:
      "BMW un MINI sertificēts dīleris un servisa centrs, kas nodrošina klientus ar jauniem un mazlietotiem auto.",
    url: "https://autoleth.dk",
  },
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/Emildas-G.jpg",
    name: "Emildasventures",
    category: "Auto noma",
    description:
      "Ekskluzīvu auto noma Kiprā. Speciāli taisīta booking sistēma, auto pārdošanas sistēma, kā arī kalendārs.",
    url: "https://emildasventures.com/",
  },
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/Dobot-robots.jpg",
    name: "Danatecrobots",
    category: "Interneta veikals",
    description:
      "Danatec ir oficiālais Dobot robotikas risinājumu izplatītājs Latvijā, Lietuvā un Igaunijā.",
    url: "https://danatecrobots.com/",
  },
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/infinity.jpg",
    name: "Infinitygulve",
    category: "Mājas lapa",
    description:
      "Unikālu formu un dabiska skaistuma parkets, skandināviska vienkāršība un neatkārtojamība.",
    url: "https://infinitygulve.dk/",
  },
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/Tomoeklub.jpg",
    name: "Tomoe",
    category: "Mājas lapa",
    description:
      "Džudo kluba mājas lapa, kas atrodās Dānijā. Lapā iespējams redzēt info un kalendāru par nodarbībām.",
    url: "https://tomoe.dk/",
  },
  {
    image: "http://test.nordfest.dk/wp-content/uploads/2026/03/Biezak-uzdotie-jautaumi.png",
    name: "Kronīši",
    category: "Mājas lapa",
    description:
      "Mājas lapa priekš koka karkasa siltumnīcām un angāriem. Izveidots unikāls kalkulators.",
    url: "https://kronisukokapstrade.lv/",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (!api) return
      if (entry.isIntersecting) {
        autoplayRef.current.play()
      } else {
        autoplayRef.current.stop()
      }
    },
    [api]
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Stop autoplay initially until section is in view
    autoplayRef.current.stop()

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    })
    observer.observe(section)
    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section ref={sectionRef} id="projekti" className="relative z-10 py-28 lg:py-36 pb-12 lg:pb-16">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Mūsu paveiktie darbi
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                Projekti
              </h2>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
                Neliela izlase no pēdējiem darbiem. Katrs projekts veidots ar precizitāti un mērķtiecību.
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={150}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              slidesToScroll: 1,
              loop: true,
            }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            {/* Arrows under the headline on the left */}
            <div className="flex items-center justify-start gap-3 mb-5">
              <CarouselPrevious className="static translate-y-0 size-10 border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground rounded-full" />
              <CarouselNext className="static translate-y-0 size-10 border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground rounded-full" />
            </div>
            <CarouselContent className="-ml-5 lg:-ml-6">
              {projects.map((project) => (
                <CarouselItem
                  key={project.name}
                  className="pl-5 lg:pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10 rounded-2xl" />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground uppercase tracking-tight">
                          {project.name}
                        </h3>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded-full shrink-0">
                          {project.category}
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-accent border border-accent/30 px-5 py-2 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                      >
                        <ExternalLink className="size-3.5" />
                        Skatīt mājaslapu
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </RevealSection>
      </div>
    </section>
  )
}
