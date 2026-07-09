export default function Footer() {
  const destinations = ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Germany', 'Poland', 'South Korea', 'Turkey'];
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Countries', href: '#countries' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Process', href: '#process' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD500] text-xl">
                <i className="fa-regular fa-building"></i>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-poppins font-bold text-white text-lg">Barkha</span>
                <span className="font-poppins font-bold text-white text-lg -mt-1">International</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2312/RWP. Trusted overseas recruitment
              from Blue Area, Islamabad to destinations worldwide.
            </p>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="fa-solid fa-certificate mr-1"></i>License 2312/RWP
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-white/50 hover:text-[#FFD500] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d} className="text-white/50 text-sm">
                  <i className="fa-solid fa-location-dot text-[#FF4D4D] mr-2 text-xs"></i>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <i className="fa-solid fa-phone text-[#FF4D4D] mt-0.5"></i>
                <div>
                  <a href="tel:0512806263" className="hover:text-[#FFD500] transition-colors block">051-2806263</a>
                  <a href="tel:0512806264" className="hover:text-[#FFD500] transition-colors block">051-2806264</a>
                  <a href="tel:03005132100" className="hover:text-[#FFD500] transition-colors block">0300-5132100</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <i className="fa-brands fa-whatsapp text-[#FF4D4D] mt-0.5"></i>
                <a href="https://wa.me/923009050416" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">0300-9050416</a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <i className="fa-solid fa-envelope text-[#FF4D4D] mt-0.5"></i>
                <a href="mailto:info@barkha.com.pk" className="hover:text-[#FFD500] transition-colors">info@barkha.com.pk</a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <i className="fa-brands fa-facebook-f text-[#FF4D4D] mt-0.5"></i>
                <a href="https://facebook.com/barkha.international2312" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">/barkha.international2312</a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <i className="fa-solid fa-location-dot text-[#FF4D4D] mt-0.5"></i>
                <span>Office #102, 1st Floor, Royal Centre, Fazal-e-Haq Road, Blue Area, Islamabad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Barkha International (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Govt. Licensed OEP — License No. 2312/RWP
          </p>
        </div>
      </div>
    </footer>
  );
}