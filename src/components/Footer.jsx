import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Visa & Immigration", href: "#visa" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Overseas Manpower", "Visa Processing", "Immigration Services",
  "HR & Recruitment", "Document Attestation", "Travel Support",
];

const destinations = [
  "Saudi Arabia", "UAE", "Qatar", "Oman", "Germany", "Poland",
  "Italy", "Greece", "Malaysia", "Singapore", "South Korea",
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#003844" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#006D77" }}>
                <span className="text-white font-extrabold text-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>E</span>
              </div>
              <div className="leading-tight">
                <p className="text-white font-extrabold text-sm tracking-tight" style={{ fontFamily: "Plus Jakarta Sans" }}>Etcom Manpower</p>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#83C5BE" }}>Promoters</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>Manpower, visas, and immigration under one roof — G-11 Markaz, Islamabad.</p>
            <a href="https://www.linkedin.com/company/etcommp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full transition-all" style={{ backgroundColor: "rgba(0, 109, 119, 0.3)", color: "#83C5BE" }}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Plus Jakarta Sans" }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} className="flex items-center gap-2 text-sm text-left transition-colors duration-200 group" style={{ color: "#9CA3AF" }}>
                    <FontAwesomeIcon icon={faArrowRight} size="xs" className="transition-all duration-200 flex-shrink-0 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0" style={{ color: "#FFDD00" }} />
                    <span className="group-hover:text-[#FFDD00] transition-colors">{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Plus Jakarta Sans" }}>Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo("#services")} className="flex items-center gap-2 text-sm text-left transition-colors duration-200 group" style={{ color: "#9CA3AF" }}>
                    <span className="group-hover:text-[#FFDD00] transition-colors">{s}</span>
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mt-6 mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>Destinations</h4>
            <div className="flex flex-wrap gap-1.5">
              {destinations.slice(0, 6).map((d) => (
                <span key={d} className="px-2 py-0.5 text-xs rounded-full" style={{ backgroundColor: "rgba(0, 109, 119, 0.3)", color: "#83C5BE" }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Plus Jakarta Sans" }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/923219115599" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors group" style={{ color: "#9CA3AF" }}>
                  <FontAwesomeIcon icon={faWhatsapp} size="sm" className="mt-0.5 flex-shrink-0" style={{ color: "#83C5BE" }} />
                  <span className="text-sm group-hover:text-[#FFDD00] transition-colors">0321-9115599</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@etcommanpower.pk" className="flex items-start gap-3 transition-colors group" style={{ color: "#9CA3AF" }}>
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="mt-0.5 flex-shrink-0" style={{ color: "#83C5BE" }} />
                  <span className="text-sm group-hover:text-[#FFDD00] transition-colors">info@etcommanpower.pk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3" style={{ color: "#9CA3AF" }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="mt-0.5 flex-shrink-0" style={{ color: "#83C5BE" }} />
                  <span className="text-sm leading-relaxed">Office #1, 2nd Floor, Sajid Shabbir,<br />Sharif Road, G-11 Markaz,<br />Islamabad</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: "#6B7280" }}>&copy; {new Date().getFullYear()} Etcom Manpower Promoters (Pvt) Ltd. All rights reserved.</p>
          <p className="text-xs flex items-center gap-1" style={{ color: "#6B7280" }}>Made with <FontAwesomeIcon icon={faHeart} size="xs" style={{ color: "#E29578" }} /> in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
