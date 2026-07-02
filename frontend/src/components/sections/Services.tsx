import { services } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from '../ui/SectionHeader'
import { ServiceCard } from '../ui/ServiceCard'

export function Services() {
  return (
    <AnimatedSection id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Our Contract Technology Services"
          description="Comprehensive technology capabilities delivered by experienced professionals — tailored to your business goals and timeline."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
