import { useEffect } from 'react'
import { Contact } from '../components/sections/Contact'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Let's Build Something{' '}
              <span className="text-primary">Great Together</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
              Tell us about your project and we'll connect you with the right technology experts
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  )
}
