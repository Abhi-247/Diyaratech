import { processSteps } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ProcessStep } from '../ui/ProcessStep'
import { SectionHeader } from '../ui/SectionHeader'

export function Process() {
  return (
    <AnimatedSection className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="How We Work"
          title="Our Process"
          description="A proven, transparent methodology that ensures quality delivery from initial consultation through ongoing support."
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step}
              step={index + 1}
              title={step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
