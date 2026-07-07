const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Recruitment & Talent Acquisition',
  'Executive Search',
  'Temporary Staffing',
  'Payroll Management',
  'HR Consulting',
  'Training & Development',
];

const industries = [
  'IT & Software', 'Banking & Finance', 'Healthcare', 'Manufacturing',
  'Retail & E-commerce', 'Hospitality', 'Construction', 'Education',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-highlight text-white">
      <div className="container-pad py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5 group">
              <span className="w-10 h-10 rounded-lg bg-cta text-ink flex items-center justify-center font-heading font-bold text-sm">ZB</span>
              <div>
                <p className="font-heading font-bold text-white text-sm leading-tight">ZB HR Services</p>
                <p className="text-cta text-xs font-semibold">HR & Staffing, Lahore</p>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Lahore's trusted HR and staffing partner — helping businesses hire, manage, and retain top talent since 2014.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://wa.me/923008582313" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i className="fab fa-whatsapp text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-cta text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/60 hover:text-cta text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Industries</h4>
            <ul className="space-y-1.5 mb-7">
              {industries.map((ind, i) => (
                <li key={i} className="text-white/60 text-sm">{ind}</li>
              ))}
            </ul>
            <h4 className="font-heading font-bold text-white text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <i className="fab fa-whatsapp text-cta mt-0.5" />
                <span>0300-8582313</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-location-dot text-cta mt-0.5" />
                <span>FORC+RCP, Service Rd, Islam Nagar, Zaman Colony, Lahore, Punjab</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {year} ZB HR Services. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <i className="fas fa-heart text-accent mx-0.5" /> for Lahore's businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
