import { useEffect } from 'react'
import { developers, hiringModels } from '../data/content'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { DeveloperCard } from '../components/ui/DeveloperCard'
import { HiringModelCard } from '../components/ui/HiringModelCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HireDevelopersPage() {
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
              Talent On Demand
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Hire Dedicated Technology{' '}
              <span className="text-primary">Professionals</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
              Access pre-vetted experts across every technology stack. Scale your team instantly with
              professionals who integrate seamlessly into your workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request Dedicated Experts
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <AnimatedSection className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            badge="Our Talent Pool"
            title="Technology Professionals Available"
            description="Choose from a wide range of skilled professionals ready to join your team and accelerate your projects."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {developers.map((dev) => (
              <DeveloperCard key={dev} title={dev} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hiring Models */}
      <AnimatedSection className="section-padding">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            badge="Engagement Models"
            title="Flexible Hiring Models"
            description="Choose the engagement model that fits your project scope, budget, and timeline — with the flexibility to adapt as you grow."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hiringModels.map((model) => (
              <HiringModelCard key={model.title} {...model} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your Dream Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Tell us your requirements and we'll connect you with the right talent within 48 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
