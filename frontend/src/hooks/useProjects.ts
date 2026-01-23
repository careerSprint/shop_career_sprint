import { useState } from "react"
import { Project } from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"

export function useProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectBuy = (project: Project) => {
    setSelectedProject(project)
    console.log("Buy project:", project.title)
    // Add your buy logic here (e.g., redirect to checkout, open modal, etc.)
  }

  const handleProjectDemo = (project: Project) => {
    setSelectedProject(project)
    console.log("View demo:", project.title)
    // Add your demo logic here (e.g., open demo in new tab, show modal, etc.)
  }

  return {
    projects,
    selectedProject,
    handleProjectBuy,
    handleProjectDemo,
    setSelectedProject
  }
}
