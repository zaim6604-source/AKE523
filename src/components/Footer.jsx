const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#countries' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const destinations = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman',
  'Germany', 'Poland', 'Romania', 'Cyprus', 'Malaysia',
];

export default function Footer() {
  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold mb-2 font-display">
              Zanib <span className="text-accent">Recruiting</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2315/RWP<br />
              6th Road, Rawalpindi
            </p>
            <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
              OEP 2315/RWP
            </span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d} className="text-white/70 text-sm">{d}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/923335020040" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm">
                  <i className="fab fa-whatsapp text-green-400" />
                  0333-5020040
                </a>
              </li>
              <li>
                <a href="tel:+92514846430"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm">
                  <i className="fas fa-phone text-accent" />
                  051-4846430
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <i className="fas fa-map-marker-alt text-accent mt-1" />
                <span>
                  Flat No. 5, 1st Floor, Al-Mustafa Plaza,<br />
                  6th Road, Rawalpindi, Punjab
                </span>
              </li>
              <li>
                <a href="mailto:info@zanibra.pk"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm">
                  <i className="fas fa-envelope" />
                  info@zanibra.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Zanib Recruiting Agency. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Govt. Licensed OEP — License No. 2315/RWP | 6th Road, Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}
