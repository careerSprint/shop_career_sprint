export interface Statistic {
  value: string
  title: string
  subtitle: string
}

interface StatisticsSectionProps {
  title: string
  subtitle: string
  statistics: Statistic[]
}

export function StatisticsSection({ title, subtitle, statistics }: StatisticsSectionProps) {
  return (
    <div className="bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.title}</div>
              <div className="text-muted-foreground">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
