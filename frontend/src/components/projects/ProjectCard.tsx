"use client"

import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

export interface Project {
  id: string
  title: string
  description: string
  icon: LucideIcon
  price: string
  previewUrl: string
  badge: string
  rating: number
  features: string[]
}

interface ProjectCardProps {
  project: Project
  onBuyClick?: (project: Project) => void
  onDemoClick?: (project: Project) => void
  navigationRoot: string
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Preview area */}
      <div className="relative h-56 overflow-hidden bg-neutral-50">
        <iframe
          src={project.previewUrl}
          style={{
            width: "1440px",
            height: "900px",
            transform: "scale(0.35)",
            transformOrigin: "top left",
            pointerEvents: "none",
            border: "none",
          }}
          loading="lazy"
          tabIndex={-1}
        />

        {/* Gradient fade at bottom of preview */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" />

        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Link
            href={`/projects/${project.id}`}
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-neutral-100 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => window.open(project.previewUrl, "_blank", "noopener,noreferrer")}
            className="rounded-lg border border-white/60 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Live Demo
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-neutral-900 text-base">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">{project.badge}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">{project.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-bold text-neutral-900">{project.price}</div>
            <div className="text-xs text-muted-foreground">one-time</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-500 line-clamp-2">{project.description}</p>
      </div>

    </div>
  )
}
