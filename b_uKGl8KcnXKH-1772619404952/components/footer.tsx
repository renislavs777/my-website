import Link from "next/link"

const footerLinks = [
  {
    heading: "Navigācija",
    links: [
      { label: "Darbi", href: "#projekti" },
      { label: "Pakalpojumi", href: "#pakalpojumi" },
      { label: "Par mums", href: "#par-mums" },
      { label: "Kontakti", href: "#kontakti" },
    ],
  },
  {
    heading: "Pakalpojumi",
    links: [
      { label: "Mājaslapas", href: "#pakalpojumi" },
      { label: "Interneta veikali", href: "#pakalpojumi" },
      { label: "Dizains", href: "#pakalpojumi" },
    ],
  },
  {
    heading: "Juridiskā info",
    links: [
      { label: "BUJ", href: "#buj" },
      
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-20 lg:py-24 bg-[oklch(0.95_0.003_155)] dark:bg-[oklch(0.12_0.005_160)]">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground uppercase"
            >
              Krastweb
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Veidojam digitālās pieredzes ambicioziem zīmoliem.
              Mājaslapas, interneta veikali un dizains, kas
              veidots ar precizitāti.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                {group.heading}
              </p>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
          <p className="text-[13px] text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Apex Digital. Visas tiesības aizsargātas.`}
          </p>
          <p className="text-[13px] text-muted-foreground">
            Veidots no sirds un no rajona
          </p>
        </div>
      </div>
    </footer>
  )
}
