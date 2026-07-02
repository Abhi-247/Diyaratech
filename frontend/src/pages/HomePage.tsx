import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FAQ } from '../components/sections/FAQ'
import { Hero } from '../components/sections/Hero'
import { HireDevelopersCTA } from '../components/sections/HireDevelopersCTA'
import { HiringModels } from '../components/sections/HiringModels'
import { IndustriesCTA } from '../components/sections/IndustriesCTA'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Partners } from '../components/sections/Partners'
import { Process } from '../components/sections/Process'
import { Services } from '../components/sections/Services'
import { Testimonials } from '../components/sections/Testimonials'
import { TrustedPartner } from '../components/sections/TrustedPartner'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          
          const card = el.querySelector('.group') || el
          card.classList.add('service-highlight')
          
          const removeTimer = setTimeout(() => {
            card.classList.remove('service-highlight')
          }, 2500)

          return () => clearTimeout(removeTimer)
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <TrustedPartner />
      <Partners />
      <Services />
      <HireDevelopersCTA />
      <HiringModels />
      <IndustriesCTA />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}
