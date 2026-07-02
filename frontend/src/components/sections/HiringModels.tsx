import { hiringModels } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { HiringModelCard } from '../ui/HiringModelCard'
import { SectionHeader } from '../ui/SectionHeader'

export function HiringModels() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Engagement Models"
          title="Flexible Hiring Models"
          description="Choose the engagement model that fits your project scope, budget, and timeline — with the flexibility to adapt as you grow."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {hiringModels.map((model) => (
            <HiringModelCard key={model.title} {...model} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
