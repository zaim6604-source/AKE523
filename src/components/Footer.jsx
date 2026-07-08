export default function Footer() {
  const destinations = ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'];
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Countries', href: '#countries' },
    { label: 'Process', href: '#process' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#B8004F] text-white">
      {/* Wave divider */}
      <div className="wave-divider relative -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 30C240 -10 480 70 720 30C960 -10 1200 70 1440 30V60H0V30Z" fill="#B8004F" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD700] text-xl">
                <i className="fa-regular fa-building"></i>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg">Arabian Gulf</span>
                <span className="font-bold text-white text-lg -mt-1">International</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2175/RWP. Trusted overseas recruitment
              from I-8 Markaz, Islamabad to the Arabian Gulf.
            </p>
            <span className="inline-block bg-[#FFD700]/20 text-[#FFD700] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="fa-solid fa-certificate mr-1"></i>License 2175/RWP
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#FFD700] text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-[#FFD700] text-sm uppercase tracking-wider mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d} className="text-white/70 text-sm">
                  <i className="fa-solid fa-location-dot text-[#FF5C8A] mr-2 text-xs"></i>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#FFD700] text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-phone text-[#FF5C8A] mt-0.5"></i>
                <a href="tel:0514938271" className="hover:text-[#FFD700] transition-colors">051-4938271</a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-location-dot text-[#FF5C8A] mt-0.5"></i>
                <span>Office No. 51, 2nd Floor, Rehmat Centre, I-8 Markaz, Islamabad</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-envelope text-[#FF5C8A] mt-0.5"></i>
                <span>info@arabiangulfinternational.pk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Arabian Gulf International. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Govt. Licensed OEP — License No. 2175/RWP
          </p>
        </div>
      </div>
    </footer>
  );
}