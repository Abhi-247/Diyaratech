import { developers } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { DeveloperCard } from '../ui/DeveloperCard'
import { SectionHeader } from '../ui/SectionHeader'

export function HireDevelopers() {
  return (
    <AnimatedSection id="hire-developers" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Talent On Demand"
          title="Hire Dedicated Technology Professionals"
          description="Access pre-vetted experts across every technology stack. Scale your team instantly with professionals who integrate seamlessly into your workflow."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {developers.map((dev) => (
            <DeveloperCard key={dev} title={dev} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#contact" size="lg">
            Request Dedicated Experts
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
