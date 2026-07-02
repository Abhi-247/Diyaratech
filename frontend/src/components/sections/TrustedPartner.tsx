import { stats } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeader } from '../ui/SectionHeader'
import { StatCard } from '../ui/StatCard'

export function TrustedPartner() {
  return (
    <AnimatedSection className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Why Partner With Us"
          title="Trusted Technology Partner for Modern Businesses"
          description="Technology is evolving faster than ever, and businesses need skilled professionals who can deliver quality solutions without the overhead of permanent hiring."
        />

        <div className="mx-auto max-w-4xl space-y-4 text-center text-base leading-relaxed text-muted md:text-lg">
          <p>
            Our Contract Tech Services provide access to experienced software developers, designers,
            engineers, project managers, QA specialists, AI experts, and cloud professionals who work
            as an extension of your team.
          </p>
          <p>
            From startups to large enterprises, we deliver technology solutions that drive innovation,
            productivity, and business growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
