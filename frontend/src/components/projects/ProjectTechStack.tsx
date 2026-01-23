import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "./ProjectCard"

interface ProjectTechStackProps {
  project: Project
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "Stripe", "JWT", "Docker"
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
        <p className="text-muted-foreground text-lg">Built with modern and proven technologies</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
