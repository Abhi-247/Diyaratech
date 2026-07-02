import { testimonials } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from '../ui/SectionHeader'
import { TestimonialCard } from '../ui/TestimonialCard'

export function Testimonials() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Trusted by enterprises and growing businesses worldwide for reliable technology partnerships."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
