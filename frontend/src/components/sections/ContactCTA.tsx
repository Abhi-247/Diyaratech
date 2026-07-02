import { Link } from 'react-router-dom'
import { MessageSquare, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

export function ContactCTA() {
  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl bg-charcoal p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <MessageSquare className="h-3.5 w-3.5" />
              Get In Touch
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let's Build Something Great Together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
                Tell us about your project and we'll connect you with the right technology experts
                within 24 hours.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
            >
              Request Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
