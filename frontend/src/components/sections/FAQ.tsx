import { faqs } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { FAQAccordion } from '../ui/FAQAccordion'
import { SectionHeader } from '../ui/SectionHeader'

export function FAQ() {
  return (
    <AnimatedSection className="section-padding bg-surface">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Diyaratech Software."
        />

        <FAQAccordion items={faqs} />
      </div>
    </AnimatedSection>
  )
}
