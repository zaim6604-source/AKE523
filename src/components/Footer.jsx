import { Link } from 'react-router-dom'
import { COMPANY } from '../data/siteData'

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Journey', path: '/journey' },
  { label: 'Contact', path: '/contact' },
]

const DESTINATIONS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Germany', 'Poland', 'Romania', 'Malaysia',
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cta to-accent flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                  AK
                </div>
                <div>
                  <div className="font-bold">Azi Khel Recruiting</div>
                  <div className="text-xs text-cta">License {COMPANY.license}</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {COMPANY.tagline}. Connecting skilled workers with employers in the Gulf and Europe from two strategic locations.
              </p>
              <div className="flex items-center gap-2">
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-cta hover:text-highlight transition-colors" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp" />
                </a>
                <a href={`tel:${COMPANY.offices.head.phone}`}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-cta hover:text-highlight transition-colors" aria-label="Phone">
                  <i className="fas fa-phone" />
                </a>
                <a href={`mailto:${COMPANY.email}`}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-cta hover:text-highlight transition-colors" aria-label="Email">
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
                    <Link to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
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

            {/* Dual Office Contact */}
            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <i className="fas fa-address-book text-accent text-sm" />
                Two Offices
              </h3>

              {/* Head Office */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <p className="text-xs font-semibold text-cta mb-2">HEAD OFFICE — KHAWAZA KHELA</p>
                <ul className="space-y-2">
                  <li>
                    <a href={COMPANY.offices.head.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-start gap-2">
                      <i className="fas fa-location-dot text-accent mt-1 shrink-0" />
                      <span>{COMPANY.offices.head.address}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${COMPANY.offices.head.phone}`}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <i className="fas fa-phone text-accent shrink-0" />
                      {COMPANY.offices.head.phone}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Branch Office */}
              <div>
                <p className="text-xs font-semibold text-cta mb-2">BRANCH — RAWALPINDI</p>
                <ul className="space-y-2">
                  <li>
                    <a href={COMPANY.offices.branch.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-start gap-2">
                      <i className="fas fa-location-dot text-accent mt-1 shrink-0" />
                      <span>{COMPANY.offices.branch.address}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${COMPANY.offices.branch.phone}`}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <i className="fas fa-phone text-accent shrink-0" />
                      {COMPANY.offices.branch.phone}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Shared WhatsApp */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-accent shrink-0" />
                  {COMPANY.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QuickApply CTA bar */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Azi Khel Recruiting Agency. All rights reserved. | License {COMPANY.license}
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