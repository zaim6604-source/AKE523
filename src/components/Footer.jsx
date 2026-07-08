import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
]

const SERVICES_LIST = [
  'Work Visa Processing',
  'Overseas Job Placement',
  'Document Attestation',
  'Medical & Trade Tests',
  'Pre-Departure Orientation',
  'Air Ticketing & Travel',
]

export default function Footer() {
  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-extrabold text-lg">
                AI
              </span>
              <div>
                <p className="font-bold text-base leading-tight">Al-Imran</p>
                <p className="font-bold text-sm leading-tight text-white/70">International</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Licensed overseas recruitment agency providing fast, reliable work-visa services worldwide. Based in Swat Market, Mingora, Swat, KPK.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/alimraninternatioanl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://wa.me/923467223031"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((svc) => (
                <li key={svc}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <i className="fas fa-circle text-[6px] text-primary" />
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5">
                <i className="fas fa-location-dot text-primary mt-1 shrink-0" />
                <span>
                  Office B/6-7, First Floor
                  <br />
                  Swat Market, G.T Road
                  <br />
                  Mingora, Swat, KPK
                </span>
              </li>
              <li className="flex gap-2.5">
                <i className="fa-brands fa-whatsapp text-primary mt-1 shrink-0" />
                <div>
                  <a
                    href="https://wa.me/923467223031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    0346-7223031 (Primary)
                  </a>
                  <br />
                  <a
                    href="https://wa.me/923139905002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    0313-9905002
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5">
                <i className="fas fa-envelope text-primary mt-1 shrink-0" />
                <a
                  href="mailto:info@alimranintl.pk"
                  className="hover:text-white transition-colors"
                >
                  info@alimranintl.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Al-Imran International. License 2206/MLK. All rights reserved.
          </p>
          <a
            href="https://wa.me/923467223031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-600 transition-colors shadow-lg"
          >
            <i className="fa-brands fa-whatsapp" />
            Quick Apply
          </a>
        </div>
      </div>
    </footer>
  )
}