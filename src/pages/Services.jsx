import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { services } from '../data/countries';

const iconMap = [
  'fa-briefcase',
  'fa-passport',
  'fa-plane',
  'fa-file-contract',
  'fa-stethoscope',
  'fa-graduation-cap',
  'fa-shield-halved',
  'fa-umbrella-beach',
];

export default function Services() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-cta)' }}>
              <i className="fa-solid fa-concierge-bell" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Comprehensive Services</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              From initial consultation to departure day — every service designed to make your overseas employment journey smooth, safe, and successful.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={Math.min(i + 1, 4)}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border group" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.accent, color: service.accent === '#FFD500' ? 'var(--color-accent)' : 'white' }}
                  >
                    <i className={`fas ${iconMap[i]} text-xl`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-accent)' }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{service.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Contact us today and let our team guide you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923009219780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
              >
                <i className="fab fa-whatsapp" /> Apply via WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <i className="fa-regular fa-paper-plane" /> Contact Form
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}