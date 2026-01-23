"use client"

import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_70%)] opacity-60" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">
            Why choose us over others?
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl">
            Production-ready full-stack builds plus hands-on delivery support - buy a proven project,
            customize it to your business, and ship faster.
          </p>
        </div>
        <BentoGrid>
          <BentoItem className="lg:col-span-2 p-0">
            <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-950/90 p-6">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
              <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[10px] font-semibold text-black flex items-center justify-center">
                      C
                    </div>
                    <div className="max-w-[220px] rounded-2xl rounded-tl-none bg-neutral-900/80 px-3 py-2 text-[11px] leading-snug text-neutral-200">
                      Add Razorpay + subscriptions?
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-3">
                    <div className="max-w-[220px] rounded-2xl rounded-tr-none bg-blue-600/90 px-3 py-2 text-[11px] leading-snug text-white">
                      Yes - webhooks + billing, PR to staging.
                    </div>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-[10px] font-semibold text-white flex items-center justify-center">
                      S
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 text-[10px] font-semibold text-white flex items-center justify-center">
                      A
                    </div>
                    <div className="max-w-[220px] rounded-2xl rounded-tl-none bg-neutral-900/80 px-3 py-2 text-[11px] leading-snug text-neutral-200">
                      Have a site - migrate to Next.js?
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-3">
                    <div className="max-w-[220px] rounded-2xl rounded-tr-none bg-blue-600/90 px-3 py-2 text-[11px] leading-snug text-white">
                      We'll port routes, keep SEO + analytics.
                    </div>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-[10px] font-semibold text-white flex items-center justify-center">
                      S
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[10px] font-semibold text-black flex items-center justify-center">
                      C
                    </div>
                    <div className="max-w-[220px] rounded-2xl rounded-tl-none bg-neutral-900/80 px-3 py-2 text-[11px] leading-snug text-neutral-200">
                      How fast can we ship v1?
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-3">
                    <div className="max-w-[220px] rounded-2xl rounded-tr-none bg-blue-600/90 px-3 py-2 text-[11px] leading-snug text-white">
                      Start from a ready project; deploy fast.
                    </div>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-[10px] font-semibold text-white flex items-center justify-center">
                      S
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
                  <div className="inline-flex rounded-full bg-blue-600/90 px-3 py-2 text-[11px] text-white">
                    Checkout isn't working in production - please help.
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="rounded-full bg-neutral-900/80 px-3 py-2 text-[11px] text-neutral-300">
                      Share logs + env; we'll repro in staging.
                    </div>
                    <div className="rounded-full bg-neutral-900/80 px-3 py-2 text-[11px] text-neutral-300">
                      Quick call to patch the deployment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoItem>

          <BentoItem className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_65%)]" />
            <div className="absolute inset-0">
              {accentDots.map((dot, index) => (
                <span
                  key={index}
                  className="absolute rounded-full blur-[2px]"
                  style={dot}
                />
              ))}
            </div>
            <div className="relative z-10 h-full">
              <p className="text-sm text-neutral-300">Delivery signals</p>
              <p className="mt-2 text-xs text-neutral-500">
                Live status on builds, staging, and releases.
              </p>
            </div>
          </BentoItem>

          {features.map((feature) => (
            <BentoItem key={feature.title}>
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{feature.description}</p>
            </BentoItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Production Codebase",
    description: "Battle-tested architecture, clean code, and sensible defaults.",
  },
  {
    title: "Custom Integrations",
    description: "Payments, auth, dashboards, webhooks, and third-party APIs.",
  },
  {
    title: "Smooth Migrations",
    description: "Move stacks without breaking users, SEO, or analytics.",
  },
  {
    title: "Fast Deployments",
    description: "Envs, CI/CD, and predictable releases.",
  },
  {
    title: "Full Ownership",
    description: "You keep the code, docs, and handoff to maintain with confidence.",
  },
  {
    title: "Production Support",
    description: "Hotfixes, performance tuning, and production help.",
  },
]

const accentDots: CSSProperties[] = [
  { top: "14%", left: "18%", width: "42px", height: "42px", background: "rgba(59,130,246,0.6)" },
  { top: "26%", right: "20%", width: "34px", height: "34px", background: "rgba(236,72,153,0.6)" },
  { top: "48%", left: "30%", width: "28px", height: "28px", background: "rgba(34,197,94,0.6)" },
  { bottom: "18%", left: "20%", width: "22px", height: "22px", background: "rgba(16,185,129,0.6)" },
  { bottom: "24%", right: "28%", width: "18px", height: "18px", background: "rgba(148,163,184,0.5)" },
  { bottom: "12%", right: "18%", width: "26px", height: "26px", background: "rgba(96,165,250,0.6)" },
]

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("grid gap-6 lg:grid-cols-3", className)}>{children}</div>
)

const BentoItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "group relative rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur p-6",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition duration-300 ease-out",
      "hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      "motion-reduce:transition-none motion-reduce:hover:transform-none",
      className
    )}
  >
    {children}
  </div>
)


