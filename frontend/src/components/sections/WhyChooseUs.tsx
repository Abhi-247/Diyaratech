import { whyChoose } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from '../ui/SectionHeader'
import { WhyChooseCard } from '../ui/WhyChooseCard'

export function WhyChooseUs() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="About Us"
          title="Why Choose Diyaratech Software"
          description="We combine deep technical expertise with a partnership mindset — delivering enterprise-grade solutions with transparency, agility, and long-term value."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChoose.map((item, index) => (
            <WhyChooseCard key={item} title={item} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
