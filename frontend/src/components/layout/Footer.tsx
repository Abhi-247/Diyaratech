import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'
import {
  contactInfo,
  footerLinks,
  industries,
} from '../../data/content'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="overflow-x-hidden bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo} alt="Diyaratech Software" className="h-10" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Enterprise contract technology services for businesses worldwide. Build, scale, and
              modernize with dedicated experts you can trust.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/diyaratech-software/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gray-300 transition-colors hover:bg-primary hover:text-white"
              >
                <SocialIcon name="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-8">
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                {footerLinks.quick.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Hire Developers</h4>
              <ul className="space-y-2.5">
                {footerLinks.hire.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">
                    <span className="font-semibold text-white">Head Office:</span><br />
                    {contactInfo.headOffice}
                  </span>
                </li>
                <li className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">
                    <span className="font-semibold text-white">Branch Office:</span><br />
                    {contactInfo.branchOffice}
                  </span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h4 className="text-lg font-bold">Subscribe to our newsletter</h4>
              <p className="mt-1 text-sm text-gray-400">
                Get insights on technology trends and enterprise solutions.
              </p>
            </div>
            <form
              onSubmit={handleNewsletter}
              className="flex w-full min-w-0 flex-col gap-3 sm:flex-row lg:max-w-md lg:shrink-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
              />
              <Button type="submit" size="md" className="w-full shrink-0 sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p className="min-w-0 break-words">
            &copy; {new Date().getFullYear()} Diyaratech Software. All rights reserved.
          </p>
          <p className="min-w-0 shrink-0">Serving {industries.length}+ industries worldwide</p>
        </div>
      </div>
    </footer>
  )
}
