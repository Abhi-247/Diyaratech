import { industries } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { IndustryCard } from '../ui/IndustryCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Industries() {
  return (
    <AnimatedSection id="industries" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across diverse sectors — delivering technology solutions tailored to industry-specific challenges and regulations."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.map((industry) => (
            <IndustryCard key={industry} name={industry} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
