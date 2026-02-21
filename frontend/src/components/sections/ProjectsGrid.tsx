"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Project } from "@/components/projects/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectsGridProps {
  projects: Project[]
  onProjectBuy?: (project: Project) => void
  onProjectDemo?: (project: Project) => void
}

const DEFAULT_URL = "https://www.sharwings.in/"
const TAB_LIMIT = 6

function hasLiveUrl(project: Project) {
  return project.previewUrl !== DEFAULT_URL || project.id === "ecommerce-platform"
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "")
  const active = projects.find((p) => p.id === activeId) ?? projects[0]
  const isLive = active ? hasLiveUrl(active) : false

  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 pt-6 pb-0">

        {/* ── Tab bar ── */}
        <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-100 dark:bg-neutral-900 px-3 py-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">

          {/* macOS dots — hidden on mobile to save space */}
          <div className="hidden sm:flex items-center gap-1.5 mr-5 shrink-0">
            <div className="h-3 w-3 rounded-full bg-rose-500" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>

          {/* Project tabs — first 6 only */}
          {projects.slice(0, TAB_LIMIT).map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={`px-2.5 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg transition-colors font-medium whitespace-nowrap shrink-0 ${
                activeId === project.id
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {project.title}
            </button>
          ))}

          {/* More → */}
          <Link
            href="/projects"
            className="ml-1 flex items-center gap-1 whitespace-nowrap shrink-0 rounded-lg px-2.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
          >
            More <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </Link>
        </div>

        {/* ── Large preview card ── */}
        <div className="mt-4 rounded-t-2xl border border-neutral-200 dark:border-neutral-800 border-b-0 bg-white dark:bg-neutral-900 overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs text-neutral-400 truncate">
                  {isLive ? active.previewUrl : "Demo coming soon"}
                </div>
              </div>

              {/* Preview area */}
              <div className="preview-wrap relative w-full overflow-hidden" style={{ height: "300px" }}>
                <style>{`
                  @media (min-width: 640px) { .preview-wrap { height: 420px !important; } .preview-iframe { transform: scale(0.56) !important; } }
                  @media (min-width: 1024px) { .preview-wrap { height: 520px !important; } .preview-iframe { transform: scale(0.72) !important; } }
                `}</style>
                {isLive ? (
                  <iframe
                    src={active.previewUrl}
                    className="preview-iframe"
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: "scale(0.28)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                      border: "none",
                    }}
                    loading="lazy"
                    tabIndex={-1}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 bg-neutral-50 dark:bg-neutral-900">
                    <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                      <active.icon className="h-12 w-12 text-neutral-300" />
                    </div>
                    <p className="text-sm font-medium text-neutral-400">Live demo coming soon</p>
                  </div>
                )}
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none" />
              </div>

              {/* Project info + actions */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
                {/* Title + description row */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0">
                    <active.icon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">{active.title}</h3>
                      <Badge variant="secondary" className="text-xs">{active.badge}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-neutral-500">{active.rating}</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{active.description}</p>
                  </div>
                </div>

                {/* Price + actions row */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base">{active.price}</div>
                    <div className="text-xs text-neutral-400">one-time</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/projects/${active.id}`}
                      className="flex items-center gap-1 rounded-lg bg-neutral-900 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                    >
                      View Details <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                    <button
                      onClick={() => isLive && window.open(active.previewUrl, "_blank", "noopener,noreferrer")}
                      disabled={!isLive}
                      className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isLive ? "Live Demo" : "Coming Soon"}
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
