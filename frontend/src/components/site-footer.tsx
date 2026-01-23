"use client"

import { FormEvent, useRef, useState } from "react"
import { Github, Linkedin, Youtube, Instagram, X } from "lucide-react"

const navigation = [
  {
    title: "Products",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Pricing", href: "#pricing" },
      { label: "Custom Builds", href: "#custom-builds" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#docs" },
      { label: "Support", href: "#support" },
      { label: "Changelog", href: "#changelog" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Careers", href: "#careers", badge: "HIRING" },
    ],
  },
]

const socialLinks = [
  { label: "X", href: "#", icon: <X className="h-4 w-4" /> },
  { label: "GitHub", href: "#", icon: <Github className="h-4 w-4" /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin className="h-4 w-4" /> },
  { label: "YouTube", href: "#", icon: <Youtube className="h-4 w-4" /> },
  { label: "Instagram", href: "#", icon: <Instagram className="h-4 w-4" /> },
]

export default function SiteFooter() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [status, setStatus] = useState("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) {
      setError("Email is required")
      setStatus("")
      return
    }

    setError("")
    setEmail("")
    setStatus("Thanks — we’ll be in touch.")

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => setStatus(""), 3800)
  }

  return (
    <footer className="bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#05060b] dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-lg font-semibold dark:border-white/20 dark:bg-white/10 dark:text-white">
                S
              </div>
              <div>
                <p className="text-lg font-semibold">Sharwings</p>
                <p className="text-sm text-zinc-600 dark:text-white/60">
                  Shop Projects’ curated full-stack apps, ready to deploy or adapt.
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-white/60">
              Deploy faster with production-ready stacks, custom integrations, and hands-on delivery support. Join builders who ship with confidence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition hover:border-emerald-400 hover:text-emerald-400 dark:border-white/20 dark:bg-white/10 dark:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-6 text-zinc-900 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-600 dark:text-white/60">
              Newsletter
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
              Stay in the loop
            </p>
            <p className="text-sm text-zinc-600 dark:text-white/60">
              Monthly drops with new launches, discounts, and insider builds.
            </p>
            <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="rounded-md border border-zinc-300 bg-white px-3 py-2 focus-within:border-emerald-400/80 dark:border-white/20 dark:bg-black/40">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent text-sm placeholder:text-zinc-400 focus:outline-none"
                />
              </div>
              {error && <p className="text-xs text-red-500">{error}</p>}
              {status && <p className="text-xs text-emerald-500">{status}</p>}
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:border-t md:border-zinc-200 md:pt-10 dark:md:border-white/10">
          {navigation.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold text-zinc-800 dark:text-white/80">{section.title}</p>
              <div className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-white/60 dark:hover:text-white"
                  >
                    {link.label}
                    {link.badge ? (
                      <span className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-500">
                        {link.badge}
                      </span>
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-black/60 dark:border-white/10 dark:text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Shop Projects. All rights reserved.</p>
          <p>Built with care for founders, product teams, and agencies.</p>
        </div>
      </div>
    </footer>
  )
}
