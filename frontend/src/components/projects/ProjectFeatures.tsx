import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Shield, Globe, Smartphone, Database } from "lucide-react"
import { Project } from "./ProjectCard"

interface ProjectFeaturesProps {
  project: Project
}

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with blazing fast load times"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Built with security best practices and modern standards"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Search engine friendly with proper meta tags and structure"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience on all devices and screen sizes"
    },
    {
      icon: Database,
      title: "Scalable",
      description: "Built to scale with your business growth"
    },
    {
      icon: CheckCircle,
      title: "Well Documented",
      description: "Comprehensive documentation and setup guides"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
        <p className="text-muted-foreground text-lg">Everything you need for a professional application</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
