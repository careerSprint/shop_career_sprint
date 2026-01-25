import { ProjectCard, Project } from "@/components/projects/ProjectCard"

interface ProjectsGridProps {
  projects: Project[]
  onProjectBuy?: (project: Project) => void
  onProjectDemo?: (project: Project) => void
}

export function ProjectsGrid({ projects, onProjectBuy, onProjectDemo }: ProjectsGridProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg">Production-ready applications for your business needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onBuyClick={onProjectBuy}
            onDemoClick={onProjectDemo}
            navigationRoot={project.id}
          />
        ))}
      </div>
    </div>
  )
}
