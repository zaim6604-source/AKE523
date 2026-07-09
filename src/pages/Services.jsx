import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { services } from '../data/countries';

const iconMap = [
  'fa-briefcase', 'fa-passport', 'fa-plane', 'fa-file-contract',
  'fa-stethoscope', 'fa-graduation-cap', 'fa-shield-halved', 'fa-umbrella-beach',
];

export default function Services() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-concierge-bell" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Comprehensive Services</h1>
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
              <div
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border group cursor-pointer"
                style={{ borderColor: '#83C5BE30' }}
                onClick={() => setModalIndex(i)}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 text-white" style={{ backgroundColor: service.accent }}>
                    <i className={`fas ${iconMap[i]} text-xl`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#003844' }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#006D77' }}>{service.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Service Detail Modal */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setModalIndex(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: services[modalIndex].accent }}>
                  <i className={`fas ${iconMap[modalIndex]} text-lg`} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#003844' }}>{services[modalIndex].title}</h3>
              </div>
              <button onClick={() => setModalIndex(null)} className="text-gray-400 hover:text-[#E29578] transition-colors text-xl">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#006D77' }}>{services[modalIndex].description}</p>
            <a
              href="https://wa.me/923006162506"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#E29578' }}
            >
              <i className="fab fa-whatsapp" />
              Apply via WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Contact us today and let our team guide you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923006162506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#E29578', color: 'white' }}
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
