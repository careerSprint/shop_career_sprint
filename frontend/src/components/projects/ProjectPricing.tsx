import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"
import { Project } from "./ProjectCard"

interface ProjectPricingProps {
  project: Project
  onLivePreview?: () => void
}

export function ProjectPricing({ project, onLivePreview }: ProjectPricingProps) {
  const originalPrice = parseInt(project.price.replace('$', ''))
  const discountedPrice = Math.floor(originalPrice * 0.9) // 10% discount
  const livePreviewButton = onLivePreview ? (
    <Button
      size="default"
      variant="outline"
      className="rounded-full border-neutral-200 bg-white px-6 text-sm text-neutral-900 shadow-sm hover:bg-neutral-50"
      onClick={onLivePreview}
      type="button"
    >
      Live Preview
    </Button>
  ) : (
    <Button
      size="default"
      variant="outline"
      className="rounded-full border-neutral-200 bg-white px-6 text-sm text-neutral-900 shadow-sm hover:bg-neutral-50"
      asChild
    >
      <a href={project.previewUrl} target="_blank" rel="noreferrer">
        Live Preview
      </a>
    </Button>
  )

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing for Advanced People</h2>
          <p className="text-muted-foreground text-lg">Get instant access to the full source code</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-red-500 text-white">Limited Time Offer</Badge>
            </div>
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Full Source Code License</CardTitle>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.9/5</span>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl font-bold text-primary">${discountedPrice}</div>
                <div className="text-2xl text-muted-foreground line-through">${originalPrice}</div>
                <Badge className="bg-green-500 text-white">Save 10%</Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">What you get:</h4>
                  {[
                    "Complete source code",
                    "Lifetime updates",
                    "24/7 support",
                    "Documentation",
                    "Deployment guide",
                    "Commercial license"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Perfect for:</h4>
                  {[
                    "Startups",
                    "Freelancers",
                    "Agencies",
                    "Enterprise",
                    "Learning projects",
                    "Client work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="flex-1 text-lg">
                  Buy Now - ${discountedPrice}
                </Button>
                {livePreviewButton}
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>30-day money-back guarantee • Instant download • Secure payment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
