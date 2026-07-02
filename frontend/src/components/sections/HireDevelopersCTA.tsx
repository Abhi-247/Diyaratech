import { Link } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

export function HireDevelopersCTA() {
  return (
    <AnimatedSection id="hire-developers" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl bg-charcoal p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Users className="h-3.5 w-3.5" />
                Talent On Demand
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Hire Dedicated Technology Professionals
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
                Access pre-vetted experts across every technology stack. Scale your team instantly
                with professionals who integrate seamlessly into your workflow.
              </p>
            </div>

            <Link
              to="/hire-developers"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
            >
              Explore Talent
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
