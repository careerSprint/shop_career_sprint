import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle } from "lucide-react"
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
}

export function ProjectCard({ project, onBuyClick, onDemoClick }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <project.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {project.badge}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{project.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{project.price}</div>
            <div className="text-sm text-muted-foreground">one-time</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base">
          {project.description}
        </CardDescription>
        <div className="space-y-2 mb-6">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <Button className="w-full">
              View Details
            </Button>
          </Link>
          <Button 
            variant="outline"
            onClick={() => onDemoClick?.(project)}
          >
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
