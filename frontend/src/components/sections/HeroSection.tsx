import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"

interface HeroSectionProps {
  badge?: string
  title: ReactNode
  subtitle: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function HeroSection({
  badge = "Season End Sale - 30% OFF",
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-b from-background to-muted/20 pt-8">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {badge && <Badge className="mb-4" variant="secondary">{badge}</Badge>}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={onPrimaryClick}>
              {primaryButtonText}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={onSecondaryClick}>
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
