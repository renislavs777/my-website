"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Darbi", href: "#projekti" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Par mums", href: "#par-mums" },
  { label: "BUJ", href: "#buj" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5 lg:px-12">
        <Link
          href="/"
          className={`font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight uppercase transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Apex
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 hover:text-accent ${
                  scrolled ? "text-muted-foreground" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#kontakti"
          className={`hidden md:inline-flex text-[13px] font-medium uppercase tracking-[0.15em] px-6 py-2.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "text-foreground border border-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              : "text-white border border-white/25 hover:bg-white/10"
          }`}
        >
          Sazināties
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-full border transition-colors duration-500 ${
            scrolled ? "text-foreground border-border" : "text-white border-white/25"
          }`}
          aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-8 text-foreground p-2 rounded-full border border-border"
            aria-label="Aizvērt izvēlni"
          >
            <X className="size-5" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-heading)] text-3xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kontakti"
            onClick={() => setOpen(false)}
            className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground border border-foreground/20 px-8 py-3 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent"
          >
            Sazināties
          </Link>
        </div>
      )}
    </header>
  )
}
