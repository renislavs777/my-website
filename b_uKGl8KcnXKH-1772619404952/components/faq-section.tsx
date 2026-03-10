"use client"

import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cik maksā mājaslapa?",
    answer:
      "Mūsu projektu izmaksas var ievērojami svārstīties atkarībā no projekta sarežģītības, nepieciešamajām funkcijām, dizaina un jūsu biznesa vajadzībām. Parasti projekti sākas no 500 EUR, taču precīzu piedāvājumu varam sagatavot tikai pēc tam, kad esam izpratuši jūsu mērķus un prasības. Piedāvājam bezmaksas konsultāciju, kuras laikā apspriedīsim jūsu ideju un sagatavosim atbilstošu piedāvājumu.",
  },
  {
    question: "Cik ilgi aizņem izstrāde?",
    answer:
      "Standarta mājaslapa aizņem 1–4 nedēļas no sākuma līdz palaišanai. Sarežģītāki projekti, piemēram, interneta veikali, var aizņemt vairāk laika. Vienmēr sniedzam skaidru laika grafiku pirms darba uzsākšanas.",
  },
  {
    question: "Vai piedāvājat pastāvīgu atbalstu?",
    answer:
      "Noteikti. Piedāvājam elastīgas uzturēšanas un atbalsta paketes. Tas ietver drošības atjauninājumus, veiktspējas uzraudzību, satura atjauninājumus un prioritāru kļūdu labošanu. 24/7.",
  },
  {
    question: "Kādas tehnoloģijas izmantojat?",
    answer:
      "Strādājam ar uzticamiem un pārbaudītiem risinājumiem, piemēram, WordPress un WooCommerce, kas ļauj izveidot profesionālas un viegli pārvaldāmas mājaslapas un e-veikalus. Mēs cenšamies visu nepieciešamo izveidot vienuviet, lai jums nebūtu jāmaksā papildus citām platformām vai uzņēmumiem par funkcijām, kuras varam izstrādāt paši atbilstoši jūsu vajadzībām.",
  },
  {
    question: "Vai varat pārdizainēt manu esošo lapu?",
    answer:
      "Jā. Mēs bieži palīdzam uzņēmumiem modernizēt tiešsaistes klātbūtni. Auditējam jūsu pašreizējo vietni, identificējam uzlabojumu jomas un veidojam svaigu dizainu, kas labāk kalpo jūsu mērķiem.",
  },
  {
    question: "Vai palīdzat ar SEO un saturu?",
    answer:
      "Katra mūsu veidotā mājaslapa jau no sākuma ir optimizēta meklētājiem. Piedāvājam arī papildu SEO pakalpojumus, tostarp atslēgvārdu izpēti, satura stratēģiju un pastāvīgu optimizāciju.",
  },
]

export function FaqSection() {
  return (
    <section id="buj" className="relative z-10 py-16 lg:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">
          {/* Left header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <RevealSection>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                BUJ
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase leading-[1.1]">
                Jautājumi
                <span className="text-accent">?</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Viss, kas jums jāzina par sadarbību ar mums.
                Ja ir citi jautājumi, vienkārši sazinieties.
              </p>
              <div className="mt-10 relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://nordicmedia.dk/wp-content/uploads/2024/05/Nordicmedia-Kolding.jpg"
                  alt="Darba vide"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>
          </div>

          {/* Right: accordion */}
          <div>
            <RevealSection delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-1">
                    <AccordionTrigger className="text-left text-base font-medium text-foreground py-6 hover:no-underline hover:text-accent transition-colors duration-300 [&[data-state=open]]:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6 max-w-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}
