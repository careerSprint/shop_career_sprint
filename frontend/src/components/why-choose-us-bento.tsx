"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export function WhyChooseUsBento() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_70%)] opacity-80 dark:bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_70%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-10" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:120px_120px] dark:opacity-10" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl dark:text-white">
            Why choose us over others?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-neutral-300">
            Production-ready full-stack builds plus hands-on delivery support{" "}
            {"\u2014"} buy a proven codebase or get it customized.
          </p>
        </div>
        <BentoGrid className="mt-14">
          <BentoGridItem
            className="md:col-span-2"
            title="Ready Codebase"
            description="Launch faster with a reliable, production-ready foundation."
            header={<ReadyCodebaseHeader />}
          />
          <BentoGridItem
            title="Custom Integrations"
            description="We add payments, auth, dashboards, and webhooks to fit your business."
            header={<IntegrationsHeader />}
          />
          <BentoGridItem
            title="Fast Deployments"
            description="We set up envs, CI/CD, and predictable releases."
            header={<DeploymentsHeader />}
          />
          <BentoGridItem
            title="Full Ownership"
            description="You keep the code, docs, and handoff to maintain with confidence."
            header={<OwnershipHeader />}
          />
          <BentoGridItem
            title="Smooth Migrations"
            description="Move to Next.js or a new stack without breaking users or SEO."
            header={<MigrationsHeader />}
          />
        </BentoGrid>
      </div>
    </section>
  )
}

const ReadyCodebaseHeader = () => (
  <div className="h-40 rounded-xl border border-white/10 bg-white/5 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
      <span className="h-2 w-2 rounded-full bg-amber-400/90" />
      <span className="h-2 w-2 rounded-full bg-rose-400/90" />
      <span className="ml-auto h-2 w-16 rounded-full bg-white/10" />
    </div>
    <div className="mt-4 space-y-2">
      {[
        "w-28",
        "w-32",
        "w-24",
        "w-36",
      ].map((width, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className={`h-2 ${width} rounded-full bg-white/15`} />
          <span className="ml-auto h-2 w-10 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  </div>
)

const IntegrationsHeader = () => (
  <div className="h-40 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 dark:border-neutral-800 dark:from-neutral-900/70">
    <div className="flex flex-col gap-2 text-[11px] leading-snug">
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-neutral-200">
        Checkout isn{"\u2019"}t working in production {"\u2014"} please help.
      </div>
      <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-sky-500/80 px-3 py-2 text-white">
        Share logs + env; we{"\u2019"}ll repro in staging.
      </div>
      <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-sky-500/80 px-3 py-2 text-white">
        Quick call to patch the deployment.
      </div>
    </div>
  </div>
)

const DeploymentsHeader = () => (
  <div className="h-40 rounded-xl border border-white/10 bg-white/5 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
    <div className="flex items-center justify-between">
      <span className="h-2 w-28 rounded-full bg-white/15" />
      <span className="h-2 w-10 rounded-full bg-emerald-400/80" />
    </div>
    <div className="mt-4 space-y-3">
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-2 w-4/5 rounded-full bg-sky-400/70" />
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-2 w-3/5 rounded-full bg-indigo-400/70" />
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-2 w-2/5 rounded-full bg-emerald-400/70" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="h-2 w-20 rounded-full bg-white/10" />
        <span className="ml-auto h-2 w-12 rounded-full bg-white/10" />
      </div>
    </div>
  </div>
)

const OwnershipHeader = () => (
  <div className="h-40 rounded-xl border border-white/10 bg-white/5 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="grid h-full grid-cols-3 gap-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="h-6 w-6 rounded-md bg-white/15" />
          <div className="mt-3 h-2 w-14 rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="h-6 w-6 rounded-md bg-white/15" />
          <div className="mt-3 h-2 w-16 rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-8 rounded-full bg-white/10" />
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="relative h-6 w-6 rounded-full border border-white/30">
            <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-t-full border border-white/30" />
          </div>
        <div className="mt-3 h-2 w-12 rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-9 rounded-full bg-white/10" />
      </div>
    </div>
  </div>
)

const MigrationsHeader = () => (
  <div className="flex h-40 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="space-y-2">
      <p className="text-[10px] uppercase tracking-wider text-white/40">Legacy</p>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="h-2 w-2 rounded-full bg-white/20" />
        ))}
      </div>
      <div className="h-2 w-16 rounded-full bg-white/10" />
    </div>
    <div className="flex flex-1 items-center gap-2">
      <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/50 to-white/10" />
      <div className="h-2 w-2 rotate-45 border-r border-t border-white/50" />
    </div>
    <div className="space-y-2 text-right">
      <p className="text-[10px] uppercase tracking-wider text-white/40">Next.js</p>
      <div className="flex justify-end gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="h-2 w-2 rounded-full bg-sky-400/70" />
        ))}
      </div>
      <div className="ml-auto h-2 w-16 rounded-full bg-white/10" />
    </div>
  </div>
)
