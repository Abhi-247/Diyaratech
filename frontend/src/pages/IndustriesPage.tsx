import { useEffect } from 'react'
import { industries } from '../data/content'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { IndustryCard } from '../components/ui/IndustryCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/15 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Industries We Serve
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Deep Domain Expertise Across{' '}
              <span className="text-primary">
                {industries.length}+ Industries
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
              Delivering technology solutions tailored to industry-specific challenges, regulations,
              and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <AnimatedSection className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            badge="Our Expertise"
            title="Sectors We Transform"
            description="From healthcare to fintech, manufacturing to hospitality — we bring specialized knowledge and proven solutions to every industry we serve."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {industries.map((industry) => (
              <IndustryCard key={industry} name={industry} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Don't See Your Industry?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            We work across all verticals. Contact us to discuss how we can tailor our solutions to
            your specific industry needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" variant="secondary">
              Let's Discuss Your Industry
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
