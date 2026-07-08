const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_LIST = [
  'Work Visa Processing',
  'Overseas Job Placement',
  'Document Attestation',
  'Medical &amp; Trade Tests',
  'Pre-Departure Orientation',
  'Air Ticketing &amp; Travel',
]

export default function Footer() {
  return (
    <footer className="bg-highlight text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-extrabold text-lg">
                A
              </span>
              <div>
                <p className="font-bold text-base leading-tight">Al Rabaz</p>
                <p className="font-bold text-sm leading-tight text-white/70">International</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Licensed recruitment agency (2300/LHR) connecting Pir Mahal's workforce to trusted Gulf and European employers. Based on Rajana Road, Pir Mahal.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/923256561112"
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
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-primary" />
                    {link.label}
                  </a>
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
                  Rajana Road, Pir Mahal
                  <br />
                  Tehsil Pir Mahal
                  <br />
                  Toba Tek Singh, Punjab
                </span>
              </li>
              <li className="flex gap-2.5">
                <i className="fas fa-phone text-primary mt-1 shrink-0" />
                <a href="tel:0463361889" className="hover:text-white transition-colors">
                  046-3361889
                </a>
              </li>
              <li className="flex gap-2.5">
                <i className="fa-brands fa-whatsapp text-primary mt-1 shrink-0" />
                <a
                  href="https://wa.me/923256561112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0325-6561112
                </a>
              </li>
              <li className="flex gap-2.5">
                <i className="fas fa-envelope text-primary mt-1 shrink-0" />
                <a
                  href="mailto:info@alrabaz.pk"
                  className="hover:text-white transition-colors"
                >
                  info@alrabaz.pk
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
            &copy; {new Date().getFullYear()} Al Rabaz International. License 2300/LHR. All rights reserved.
          </p>
          <a
            href="https://wa.me/923256561112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-cyan-600 transition-colors shadow-lg"
          >
            <i className="fa-brands fa-whatsapp" />
            Quick Apply
          </a>
        </div>
      </div>
    </footer>
  )
}