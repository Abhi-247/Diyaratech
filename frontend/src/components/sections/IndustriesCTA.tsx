import { Link } from 'react-router-dom'
import { Building2, ArrowRight } from 'lucide-react'
import { industries } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

export function IndustriesCTA() {
  return (
    <AnimatedSection id="industries" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <Building2 className="h-3.5 w-3.5" />
                {industries.length}+ Industries
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Industries We Serve
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                Deep domain expertise across diverse sectors — delivering technology solutions
                tailored to industry-specific challenges and regulations.
              </p>
            </div>

            <Link
              to="/industries"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-charcoal hover:shadow-lg"
            >
              View All Industries
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
