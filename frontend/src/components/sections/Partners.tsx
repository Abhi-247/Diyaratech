import { partners } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Partners() {
  return (
    <AnimatedSection className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Our Partners</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide gap-8">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center justify-center px-6"
              >
                <div className="h-16 w-32 rounded-lg bg-surface flex items-center justify-center p-3 border border-border hover:border-primary transition-colors">
                  <span className="text-sm font-semibold text-charcoal text-center leading-tight">
                    {partner.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
