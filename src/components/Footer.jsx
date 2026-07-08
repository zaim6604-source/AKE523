import { Link } from 'react-router-dom';

export default function Footer() {
  const destinations = ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Germany', 'Poland', 'South Korea', 'Turkey'];
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Countries', to: '/countries' },
    { label: 'Process', to: '/process' },
    { label: 'Contact', to: '/contact' },
  ];

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
                <span className="font-bold text-white text-lg">Pak. Arsalan</span>
                <span className="font-bold text-white text-lg -mt-1">Corporation</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2210/ABT. Trusted overseas recruitment
              from Alamgir Chowk, Batagram, KPK to the world.
            </p>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="fa-solid fa-certificate mr-1"></i>License 2210/ABT
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/70 hover:text-[#FFD500] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d} className="text-white/70 text-sm">
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
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-phone text-[#FF4D4D] mt-0.5"></i>
                <a href="tel:0997310612" className="hover:text-[#FFD500] transition-colors">0997-310612</a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-brands fa-whatsapp text-[#FF4D4D] mt-0.5"></i>
                <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">0300-5096511</a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-location-dot text-[#FF4D4D] mt-0.5"></i>
                <span>Gul Market, near Bus Stand, Alamgir Chowk, Batagram, KPK</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-envelope text-[#FF4D4D] mt-0.5"></i>
                <span>info@pakarsalan.pk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Pak. Arsalan Corporation. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Govt. Licensed OEP — License No. 2210/ABT
          </p>
        </div>
      </div>
    </footer>
  );
}