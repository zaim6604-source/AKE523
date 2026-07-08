import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-extrabold">
                M
              </div>
              <div>
                <div className="text-sm font-extrabold leading-tight">MALGEEY OVERSEAS</div>
                <div className="text-[10px] font-semibold text-cta -mt-0.5">EMPLOYMENT PROMOTERS</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              Trusted overseas employment agency based in Peshawar, KPK. Connecting Pakistani workers
              with employers across the Gulf, Europe, and Asia since 2010.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/923005947249" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-whatsapp text-sm" />
              </a>
              <a href="tel:03005947249" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fas fa-phone text-sm" />
              </a>
              <a href="mailto:info@malgeeyoverseas.pk" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fas fa-envelope text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Story', to: '/story' },
                { label: 'Services', to: '/services' },
                { label: 'Country Guides', to: '/guides' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-xs text-white/70 hover:text-white transition-colors">
                    <i className="fas fa-chevron-right text-[8px] mr-2 text-cta" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-white/70">
                <i className="fas fa-map-marker-alt text-cta mt-0.5" />
                <span>Office #4, Abaseen Hotel,<br />Khyber Bazar Rd, Shoba,<br />Peshawar, KPK</span>
              </li>
              <li>
                <a href="https://wa.me/923005947249" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fab fa-whatsapp text-cta" />
                  0300-5947249
                </a>
              </li>
              <li>
                <a href="mailto:info@malgeeyoverseas.pk" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fas fa-envelope text-cta" />
                  info@malgeeyoverseas.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Quick Apply */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Get Started</h4>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Ready to work abroad? Send us a message on WhatsApp and we'll guide you through every step.
            </p>
            <a
              href="https://wa.me/923005947249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-5 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp text-base" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/50">
            &copy; {year} Malgeey Overseas Employment Promoters. All rights reserved.
          </p>
          <p className="text-[11px] text-white/50">
            <i className="fas fa-map-pin" /> Khyber Bazar, Peshawar
          </p>
        </div>
      </div>
    </footer>
  );
}