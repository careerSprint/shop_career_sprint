"use client"

import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface HeroSectionProps {
  badge?: string
  title: ReactNode
  subtitle: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const avatars = [
  { color: "bg-blue-500",    initial: "A" },
  { color: "bg-rose-500",    initial: "R" },
  { color: "bg-amber-500",   initial: "S" },
  { color: "bg-emerald-500", initial: "M" },
  { color: "bg-violet-500",  initial: "K" },
]

export function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="bg-white dark:bg-neutral-950 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12 items-end">

          {/* Left — headline + subtitle + buttons */}
          <div className="max-w-4xl">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-6 text-base text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <Button
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-md px-7 font-medium"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md px-7 font-medium bg-white dark:bg-transparent"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </motion.div>
          </div>

          {/* Right — trust badge */}
          <motion.div
            className="flex flex-col gap-2 pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-snug">
              Trusted by 500+ founders,<br />developers and creators
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex -space-x-2">
                {avatars.map((av, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${av.color} border-2 border-white dark:border-neutral-950 flex items-center justify-center text-[11px] font-semibold text-white`}
                  >
                    {av.initial}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-0.5 ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
