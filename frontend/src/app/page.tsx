"use client"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { SiteNavbar } from "@/components/sections/SiteNavbar"
import { WhyChooseUsBento } from "@/components/why-choose-us-bento"
import GlobeDemo from "@/components/globe-demo"
import SiteFooter from "@/components/site-footer"
import { useProjects } from "@/hooks/useProjects"

export default function Home() {
  const { projects, handleProjectBuy, handleProjectDemo } = useProjects()

  const handleBrowseProjects = () => {
    console.log("Browse all projects")
    // Add navigation logic here
  }

  const handleViewDemo = () => {
    console.log("View general demo")
    // Add demo logic here
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <main>
        <HeroSection
          title={
            <>
              Build Full apps in days,
              <span className="text-primary"> not months</span>
            </>
          }
          subtitle="Ready-to-deploy production applications built with modern technologies. Save hundreds of development hours with our battle-tested solutions."
          primaryButtonText="Browse Projects"
          secondaryButtonText="View Demo"
          onPrimaryClick={handleBrowseProjects}
          onSecondaryClick={handleViewDemo}
        />

        <div id="projects">
          <ProjectsGrid
            projects={projects}
            onProjectBuy={handleProjectBuy}
            onProjectDemo={handleProjectDemo}
          />
        </div>

        <div id="about">
          <WhyChooseUsBento />
        </div>
        <GlobeDemo />
        <SiteFooter />
      </main>
    </div>
  )
}
