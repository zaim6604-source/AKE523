const quickLinks = ['Home', 'About', 'Services', 'Why Us', 'Process', 'FAQs', 'Contact'];
const serviceLinks = [
  'HR Consulting',
  'Recruitment & Staffing',
  'Payroll & Benefits',
  'Policy & Compliance',
  'Training & Development',
  'Performance Management',
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getSectionId = (link) => {
    const map = { 'Home': '#hero', 'Why Us': '#why-us' };
    return map[link] || `#${link.toLowerCase()}`;
  };

  return (
    <footer style={{ backgroundColor: '#0B3954' }}>
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#1B4965" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold shadow-md" style={{ backgroundColor: '#FF6B35' }}>
                M&L
              </div>
              <span className="font-bold text-lg text-white">M &amp; L Consultants</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#5FA8D3' }}>
              HR Consulting &bull; Islamabad
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#C9CCD5' }}>
              Practical HR consulting tailored to your business — helping Islamabad&apos;s organizations hire, manage, and grow their people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FF6B35' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={getSectionId(link)}
                    onClick={(e) => { e.preventDefault(); scrollTo(getSectionId(link)); }}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#C9CCD5' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FF6B35' }}>Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: '#C9CCD5' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FF6B35' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/923353465095" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#C9CCD5' }}>
                  <i className="fa-brands fa-whatsapp text-xs" style={{ color: '#FF6B35' }} />
                  0335-3465095
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm" style={{ color: '#C9CCD5' }}>
                  <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: '#FF6B35' }} />
                  16/2, Islamabad, ICT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t text-center" style={{ borderColor: '#1B4965' }}>
          <p className="text-xs sm:text-sm" style={{ color: '#5FA8D3' }}>
            &copy; {new Date().getFullYear()} M &amp; L Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}