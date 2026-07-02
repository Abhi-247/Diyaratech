import { partners } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

// Import partner logos
import winkgetLogo from '../../assets/winkgetlogo.png'
import wensworkLogo from '../../assets/wenswork.png'

const logoImages: Record<string, string> = {
  'winkgetlogo.png': winkgetLogo,
  'wenswork.png': wensworkLogo,
}

export function Partners() {
  return (
    <AnimatedSection className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Our Brand Partners</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide gap-8">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center justify-center px-6"
              >
                <div className="h-20 w-44 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-border hover:border-primary transition-colors">
                  {partner.image && logoImages[partner.image] ? (
                    <img
                      src={logoImages[partner.image]}
                      alt={partner.name}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-base font-bold text-charcoal text-center leading-tight">
                      {partner.logo}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
