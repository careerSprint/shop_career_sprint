"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard, Project } from "@/components/projects/ProjectCard"

interface ProjectsGridProps {
  projects: Project[]
  onProjectBuy?: (project: Project) => void
  onProjectDemo?: (project: Project) => void
}

const tabs = [
  { id: "all",        label: "All" },
  { id: "ecommerce",  label: "E-Commerce" },
  { id: "saas",       label: "SaaS & Tools" },
  { id: "travel",     label: "Travel" },
  { id: "enterprise", label: "Enterprise" },
]

const categoryMap: Record<string, string[]> = {
  ecommerce:  ["ecommerce", "ecommerce-platform"],
  saas:       ["resume-ai", "site2qr", "campus-market", "color-palettes", "portfolio", "home-asset"],
  travel:     ["travel-bare", "umrah-companions", "trip-impression"],
  enterprise: ["crm", "lms", "video-call", "live-stream"],
}

const FEATURED_COUNT = 6

export function ProjectsGrid({ projects, onProjectBuy, onProjectDemo }: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [showMore, setShowMore] = useState(false)

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => categoryMap[activeTab]?.includes(p.id))

  const featured = activeTab === "all" ? filtered.slice(0, FEATURED_COUNT) : filtered
  const more     = activeTab === "all" ? filtered.slice(FEATURED_COUNT)    : []

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setShowMore(false)
  }

  return (
    <div className="bg-white">

      {/* Tab bar */}
      <div className="container mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center gap-1 border border-neutral-200 rounded-xl bg-neutral-100 px-4 py-2.5 w-fit">
          {/* macOS traffic lights */}
          <div className="flex items-center gap-1.5 mr-5">
            <div className="h-3 w-3 rounded-full bg-rose-500" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-1.5 text-sm rounded-lg transition-colors font-medium ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* White card */}
      <div className="container mx-auto px-6 pb-0">
        <div className="bg-white rounded-t-2xl p-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onBuyClick={onProjectBuy}
                    onDemoClick={onProjectDemo}
                    navigationRoot={project.id}
                  />
                ))}
              </div>

              {more.length > 0 && (
                <>
                  <div className="flex justify-center mt-10">
                    <button
                      className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-neutral-400 transition-colors"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      {showMore ? "Show Less ↑" : `Browse More Projects (${more.length}) ↓`}
                    </button>
                  </div>

                  {showMore && (
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {more.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onBuyClick={onProjectBuy}
                          onDemoClick={onProjectDemo}
                          navigationRoot={project.id}
                        />
                      ))}
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  )
}
