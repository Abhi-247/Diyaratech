import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&h=1080&auto=format&fit=crop',
    badge: 'Contract Technology Services',
    title: 'Enterprise Technology Solutions.',
    titleHighlight: 'Delivered with Confidence.',
    subtitle: 'Build, scale, and modernize your business with dedicated technology experts and flexible contract-based IT services.',
    description: 'Whether you need a complete development team, a dedicated developer, or specialized technology experts for a short-term or long-term project, we help businesses accelerate digital transformation with reliable, cost-effective, and scalable solutions.',
    primaryBtnText: 'Get Free Consultation',
    primaryBtnHref: '/contact',
    secondaryBtnText: 'Hire Dedicated Experts',
    secondaryBtnHref: '/hire-developers'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1920&h=1080&auto=format&fit=crop',
    badge: 'Expert Developers on Demand',
    title: 'Scale Your Team Rapidly with',
    titleHighlight: 'Top-Tier Dedicated Talent.',
    subtitle: 'Access a vetted pool of software engineers, designers, and project managers ready to integrate with your workflow.',
    description: 'We match you with specialists in React, Node.js, Python, Cloud Infrastructure, and more. Complete team scaling in days, not months, with full administrative and operational support.',
    primaryBtnText: 'Hire Dedicated Experts',
    primaryBtnHref: '/hire-developers',
    secondaryBtnText: 'Explore Our Services',
    secondaryBtnHref: '/#services'
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&h=1080&auto=format&fit=crop',
    badge: 'Digital Transformation',
    title: 'Modernize Your Infrastructure &',
    titleHighlight: 'Future-Proof Your Business.',
    subtitle: 'Deploy scalable cloud networks, secure backend systems, and high-performance user interfaces.',
    description: 'From legacy software migration to greenfield product development, our expert engineers design architectures that handle millions of requests with optimal speed, security, and uptime.',
    primaryBtnText: 'Get Free Consultation',
    primaryBtnHref: '/contact',
    secondaryBtnText: 'Why Choose Us',
    secondaryBtnHref: '/#why-choose-us'
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <AnimatedSection
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-16 md:pt-20 min-h-[650px] md:min-h-[700px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-slate-950/70 md:bg-slate-950/65" />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 md:py-15 lg:px-8 w-full">
        <div className="grid w-full">
          {SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx
            return (
              <div
                key={idx}
                className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out w-full flex flex-col items-center text-center ${isActive
                  ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                  : 'opacity-0 translate-y-8 pointer-events-none z-0'
                  }`}
              >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  {slide.badge}
                </span>

                <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
                  {slide.title}{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {slide.titleHighlight}
                  </span>
                </h1>

                <p className="mt-6 text-base font-medium text-slate-200 md:text-lg lg:text-xl max-w-3xl leading-relaxed">
                  {slide.subtitle}
                </p>



                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center justify-center w-full sm:w-auto">
                  <Button href={slide.primaryBtnHref} size="lg">
                    {slide.primaryBtnText}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    href={slide.secondaryBtnHref}
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/15 hover:border-white"
                  >
                    {slide.secondaryBtnText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white backdrop-blur-xs transition-all hover:bg-black/55 hover:scale-105 active:scale-95 cursor-pointer hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white backdrop-blur-xs transition-all hover:bg-black/55 hover:scale-105 active:scale-95 cursor-pointer hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-8 bg-accent' : 'w-2.5 bg-white/35 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}
