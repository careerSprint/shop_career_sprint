"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

const navItems = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
]

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const root = window.document.documentElement
    const stored = window.localStorage.getItem("site-theme")
    if (stored === "dark") {
      root.classList.add("dark")
      setIsDark(true)
    } else if (stored === "light") {
      root.classList.remove("dark")
      setIsDark(false)
    } else {
      setIsDark(root.classList.contains("dark"))
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window === "undefined") return
    const root = window.document.documentElement
    setIsDark((prev) => {
      const next = !prev
      root.classList.toggle("dark", next)
      window.localStorage.setItem("site-theme", next ? "dark" : "light")
      return next
    })
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-neutral-900 dark:text-white"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <NavbarButton variant="primary" href="#contact">
            Contact Us
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 dark:border-zinc-700 dark:bg-neutral-900 dark:text-white"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4" />
                  Light mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  Dark mode
                </>
              )}
            </button>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href="#contact"
            >
              Contact Us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
