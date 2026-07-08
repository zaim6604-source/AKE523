import { Link } from 'react-router-dom'
import { COMPANY, COUNTRIES } from '../data/siteData'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/countries' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

const DESTINATIONS = COUNTRIES.map((c) => c.name)

const SERVICES_LIST = [
  'Visa Processing',
  'Job Placement',
  'Travel Arrangements',
  'Legal Assistance',
  'Pre-Departure Training',
  'Post-Placement Support',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top wave */}
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-highlight fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-highlight text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-extrabold text-lg">
                  SA
                </div>
                <div>
                  <div className="font-bold">{COMPANY.name}</div>
                  <div className="text-xs text-white/60">License {COMPANY.license}</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Your trusted recruitment partner in Chakwal. Connecting skilled workers with employers in the Gulf and Europe.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Phone"
                >
                  <i className="fas fa-phone" />
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <i className="fas fa-link text-accent text-sm" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <i className="fas fa-chevron-right text-[8px] text-accent/60" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <i className="fas fa-globe text-accent text-sm" />
                Destinations
              </h3>
              <ul className="space-y-2">
                {DESTINATIONS.map((d) => (
                  <li key={d}>
                    <span className="text-sm text-white/70 flex items-center gap-2">
                      <i className="fas fa-location-dot text-[10px] text-accent/60" />
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <i className="fas fa-address-book text-accent text-sm" />
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={COMPANY.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-start gap-2"
                  >
                    <i className="fas fa-location-dot text-accent mt-1 shrink-0" />
                    <span>{COMPANY.address}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY.phone}`} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fas fa-phone text-accent shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fab fa-whatsapp text-accent shrink-0" />
                    {COMPANY.whatsapp}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fas fa-envelope text-accent shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* QuickApply CTA bar */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. | License {COMPANY.license}
            </p>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
            >
              <i className="fab fa-whatsapp" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}