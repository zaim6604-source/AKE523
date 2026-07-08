export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0077CC] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm font-[Plus_Jakarta_Sans]">
                SI
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-[Plus_Jakarta_Sans] text-white leading-tight">Shafay</span>
                <span className="text-[10px] font-medium text-white/70 tracking-wide leading-tight">International</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
              Licensed visa processing and travel agency serving clients across Pakistan. License #2243/KAR.
            </p>
            <div className="flex gap-2">
              <a
                href="https://wa.me/923002141262"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="https://www.facebook.com/p/Shafay-International-100089781998994/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="mailto:shafay_int@yahoo.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-[Plus_Jakarta_Sans] mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Countries', href: '#countries' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold font-[Plus_Jakarta_Sans] mb-4 text-white">Destinations</h4>
            <ul className="space-y-2.5">
              {[
                'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait',
                'Oman (Muscat)', 'Bahrain (Manama)',
                'Germany', 'Malaysia (KL)', 'Turkey (Istanbul)',
              ].map((d) => (
                <li key={d}>
                  <span className="text-xs sm:text-sm text-white/60">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dual Office Contact */}
          <div>
            <h4 className="text-sm font-bold font-[Plus_Jakarta_Sans] mb-4 text-white">Our Offices</h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/60">
              <div>
                <p className="font-semibold text-white/80 mb-1">Karachi — Head Office</p>
                <div className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt mt-0.5 text-[#FFBE0B]" />
                  <span>
                    Office No. 30, Navy Heights,<br />
                    near Kala Pul, Karachi East, Sindh
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <i className="fas fa-phone text-[#FFBE0B]" />
                  <a href="tel:02135520401" className="text-white/60 hover:text-white no-underline">021-35520401</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white/80 mb-1">Rawalpindi — Branch</p>
                <div className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt mt-0.5 text-[#FFBE0B]" />
                  <span>
                    Office 1, 3rd Floor, Al-Mustafa Plaza,<br />
                    6th Road, Rawalpindi
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <i className="fab fa-whatsapp text-[#FFBE0B]" />
                  <a
                    href="https://wa.me/923002141262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white no-underline"
                  >
                    0300-2141262
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/923002141262"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] transition-all no-underline"
            >
              <i className="fab fa-whatsapp text-xs" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {year} Shafay International. All rights reserved.</span>
          <span>License #2243/KAR | Govt. Registered Travel &amp; Visa Agency</span>
        </div>
      </div>
    </footer>
  );
}
