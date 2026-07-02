import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Hero } from './components/sections/Hero'
import { HireDevelopers } from './components/sections/HireDevelopers'
import { HiringModels } from './components/sections/HiringModels'
import { Industries } from './components/sections/Industries'
import { Partners } from './components/sections/Partners'
import { Process } from './components/sections/Process'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { TrustedPartner } from './components/sections/TrustedPartner'
import { WhyChooseUs } from './components/sections/WhyChooseUs'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedPartner />
        <Partners />
        <Services />
        <HireDevelopers />
        <HiringModels />
        <Industries />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
