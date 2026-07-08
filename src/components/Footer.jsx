import { Link } from 'react-router-dom';

const destinations = [
  { name: 'Saudi Arabia', slug: 'saudi-arabia' },
  { name: 'UAE', slug: 'uae' },
  { name: 'Qatar', slug: 'qatar' },
  { name: 'Kuwait', slug: 'kuwait' },
  { name: 'Oman', slug: 'oman' },
  { name: 'Germany', slug: 'germany' },
  { name: 'Poland', slug: 'poland' },
  { name: 'South Korea', slug: 'south-korea' },
  { name: 'Turkey', slug: 'turkey' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD500] text-xl">
                <i className="fa-solid fa-flag-checkered"></i>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg font-poppins">Gul Shahzad</span>
                <span className="font-bold text-white text-lg -mt-1 font-poppins">Corporation</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 font-inter">
              Govt. Licensed OEP — License No. 2263/RWP. Trusted overseas recruitment
              from Chandni Chowk, Satellite Town, Rawalpindi to the world.
            </p>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold px-3 py-1.5 rounded-full font-inter">
              <i className="fa-solid fa-certificate mr-1"></i>License 2263/RWP
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Countries', path: '/countries' },
                { label: 'Process', path: '/process' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#FFD500] text-sm transition-colors font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-poppins">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d.name}>
                  <Link
                    to={`/countries/${d.slug}`}
                    className="text-white/60 hover:text-[#FFD500] text-sm transition-colors font-inter"
                  >
                    <i className="fa-solid fa-location-dot text-[#FF4D4D] mr-2 text-xs"></i>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-poppins">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm font-inter">
                <i className="fa-solid fa-phone text-[#FF4D4D] mt-0.5"></i>
                <a href="tel:0514933684" className="hover:text-[#FFD500] transition-colors">051-4933684</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm font-inter">
                <i className="fa-brands fa-whatsapp text-[#FF4D4D] mt-0.5"></i>
                <a href="https://wa.me/92311509987" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">0311-509987</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm font-inter">
                <i className="fa-solid fa-location-dot text-[#FF4D4D] mt-0.5"></i>
                <span>Office No. 2, B-214, Basement, Al Fateh Plaza, Chandni Chowk, Satellite Town, Rawalpindi, Punjab</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm font-inter">
                <i className="fa-solid fa-envelope text-[#FF4D4D] mt-0.5"></i>
                <span>info@gulshahzad.pk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-inter">
            &copy; {new Date().getFullYear()} Gul Shahzad Corporation & Manpower Consultants. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-inter">
            Govt. Licensed OEP — License No. 2263/RWP
          </p>
        </div>
      </div>
    </footer>
  );
}