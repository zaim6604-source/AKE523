import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Recruitment & Placement',
  'Staffing Solutions',
  'Career Consultancy',
  'Document Support',
  'Corporate Services',
  'Training & Development',
  'Manpower Supply',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#B3001B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl font-heading font-bold text-white">
                Innovative <span className="text-[#02C39A]">World</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Nowshera's trusted agency connecting people and businesses with the right opportunities. Recruitment, staffing, and professional services you can rely on.
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#02C39A] mt-0.5 flex-shrink-0" />
                <span>2X6Q+52M, Mohalla Meetha Khel, Nowshera, 24100, KPK</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#02C39A] flex-shrink-0" />
                <a href="https://wa.me/923335553256" target="_blank" rel="noopener noreferrer" className="hover:text-[#02C39A] transition-colors">
                  0333-5553256
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#02C39A] flex-shrink-0" />
                <a href="mailto:info@innovativeworld.pk" className="hover:text-[#02C39A] transition-colors">
                  info@innovativeworld.pk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 font-heading">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-white/60 hover:text-[#02C39A] text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 font-heading">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services"
                    className="text-white/60 hover:text-[#02C39A] text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {year} Innovative World. All rights reserved.</p>
          <p>Nowshera, KPK, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
