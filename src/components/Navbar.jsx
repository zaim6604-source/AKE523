import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Visa & Immigration", href: "#visa" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || open ? "rgba(237, 246, 249, 0.95)" : "transparent",
        backdropFilter: scrolled || open ? "blur(12px)" : "none",
        borderBottom: scrolled || open ? "1px solid rgba(0, 109, 119, 0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Wordmark */}
          <button onClick={() => nav("#home")} className="flex items-center gap-2.5 cursor-pointer">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "#006D77" }}
            >
              <span className="text-white font-extrabold text-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>E</span>
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-sm tracking-tight" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>
                Etcom Manpower
              </p>
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "#006D77", color: "#FFDD00" }}
              >
                Islamabad
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => nav(l.href)}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "#003844" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full" style={{ backgroundColor: "#006D77" }} />
              </button>
            ))}
            <a
              href="https://www.linkedin.com/company/etcommp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="sm" />
            </a>
            <a
              href="https://wa.me/923219115599"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "#E29578" }}
            >
              Get Started
            </a>
          </nav>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://www.linkedin.com/company/etcommp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="sm" />
            </a>
            <button onClick={() => setOpen(!open)} className="p-1" style={{ color: "#003844" }}>
              {open ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: open ? "500px" : "0",
          opacity: open ? 1 : 0,
          backgroundColor: "rgba(237, 246, 249, 0.98)",
        }}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => nav(l.href)}
              className="text-sm font-medium text-left py-1"
              style={{ color: "#003844" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/923219115599"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-full w-fit transition-all duration-200"
            style={{ backgroundColor: "#E29578" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}