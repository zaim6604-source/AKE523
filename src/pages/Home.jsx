import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import useInView from '../hooks/useInView';
import { jobs } from '../data/jobs';
import { services } from '../data/countries';

const stats = [
  { value: '5000+', label: 'Workers Placed' },
  { value: '9', label: 'Global Destinations' },
  { value: '15+', label: 'Years Experience' },
  { value: '2309/SKT', label: 'Licensed Operator' },
];

const featuredJobs = jobs.slice(0, 6);

const galleryImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=80',
];

export default function Home() {
  const [statsRef, statsVisible] = useInView(0.2);
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const [openService, setOpenService] = useState(null);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1500&q=80"
            alt="Global city skyline representing international opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,109,119,0.92) 0%, rgba(0,56,68,0.88) 50%, rgba(0,109,119,0.85) 100%)' }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6 sm:space-y-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm text-white" style={{ backgroundColor: '#006D77' }}>
                  <i className="fa-solid fa-flag-checkered text-[10px]" />
                  Govt. Licensed OEP — 2309/SKT
                </span>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Daska's Trusted{' '}
                  <span style={{ color: '#FFDD00' }}>Gateway</span>
                  {' '}to Global Employment
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Fowzan Traders — connecting Pakistani workers with trusted employers across the Gulf, Europe, and Asia. Licensed, transparent, and driven by results.
                </p>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href="https://wa.me/923006162506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#E29578' }}
                  >
                    <i className="fab fa-whatsapp" />
                    Apply Now
                  </a>
                  <a
                    href="https://wa.me/923006162506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 border-2"
                    style={{ borderColor: '#FFDD00', color: '#FFDD00' }}
                  >
                    <i className="fab fa-whatsapp" />
                    WhatsApp Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFDD00' }}>
                    <i className="fa-solid fa-certificate" />
                    License 2309/SKT
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <i className="fa-solid fa-building-columns" style={{ color: '#FFDD00' }} />
                    Govt. Licensed
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#FFDD00' }} />
                    Circular Road, Daska
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full relative" style={{ border: '3px solid rgba(0, 109, 119, 0.1)' }}>
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl" style={{ border: '4px solid #83C5BE' }}>
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
                      alt="Global opportunities"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-10" style={{ backgroundColor: '#E29578', border: '3px solid #83C5BE' }} />
                  <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-2 z-10 border" style={{ borderColor: 'rgba(0, 109, 119, 0.15)' }}>
                    <div className="text-[10px] font-bold" style={{ color: '#006D77' }}>License</div>
                    <div className="text-xs font-bold" style={{ color: '#003844' }}>2309/SKT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section ref={statsRef} style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center fade-up ${statsVisible ? 'visible' : ''} fade-up-delay-${i + 1}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {statsVisible ? s.value : '0'}
                </div>
                <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#FFDD00' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 bg-[#006D77]/10 text-[#006D77]">
            <i className="fa-solid fa-concierge-bell" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight" style={{ color: '#003844', fontFamily: "'Poppins', sans-serif" }}>
            Complete Employment Solutions
          </h2>
          <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: '#006D77' }}>
            From initial consultation to departure — we handle every step of your overseas employment journey.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10">
          {services.slice(0, 4).map((service, i) => (
            <FadeIn key={service.title} delay={Math.min(i + 1, 4)}>
              <div
                className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group text-center"
                style={{ borderColor: '#83C5BE30' }}
                onClick={() => setOpenService(openService === i ? null : i)}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: service.accent }}>
                  <i className={`fas ${['fa-briefcase','fa-passport','fa-plane','fa-file-contract'][i]} text-xl text-white`} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#003844' }}>{service.title}</h3>
                <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#006D77' }}>
                  {openService === i ? service.description : service.description.slice(0, 80) + '...'}
                </p>
                <button className="mt-3 text-xs font-semibold" style={{ color: '#E29578' }}>
                  {openService === i ? 'Show Less' : 'Read More'} <i className={`fa-solid fa-chevron-${openService === i ? 'up' : 'down'} text-[10px]`} />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={4}>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white" style={{ backgroundColor: '#006D77' }}>
              View All Services <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#EDF6F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 bg-[#006D77]/10 text-[#006D77]">
              <i className="fa-solid fa-globe" />
              Featured Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight" style={{ color: '#003844', fontFamily: "'Poppins', sans-serif" }}>
              Where We Place Workers
            </h2>
            <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: '#006D77' }}>
              Trusted partnerships with employers across the Gulf, Europe, and Southeast Asia.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {featuredJobs.map((job, i) => (
              <FadeIn key={job.id} delay={Math.min(i + 1, 4)}>
                <Link to={`/jobs/${job.id}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#83C5BE30] hover:shadow-lg group">
                  <div className="h-40 overflow-hidden">
                    <img src={job.image} alt={job.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{job.flag}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#83C5BE]/30 text-[#003844]">{job.country}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#006D77]/10 text-[#006D77]">{job.trade}</span>
                    </div>
                    <h3 className="text-base font-bold mt-2 mb-1" style={{ color: '#003844' }}>{job.role}</h3>
                    <p className="text-xs" style={{ color: '#006D77' }}>{job.openings} openings &bull; {job.salary}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#E29578' }}>
                      View Details <i className="fa-solid fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={4}>
            <div className="text-center mt-10">
              <Link to="/jobs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white" style={{ backgroundColor: '#E29578' }}>
                View All Openings <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== LIGHTBOX GALLERY ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 bg-[#006D77]/10 text-[#006D77]">
            <i className="fa-solid fa-images" />
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight" style={{ color: '#003844', fontFamily: "'Poppins', sans-serif" }}>
            Our Office & Operations
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {galleryImages.map((img, i) => (
            <FadeIn key={i} delay={Math.min(i + 1, 4)}>
              <div className="rounded-2xl overflow-hidden shadow-sm cursor-pointer img-hover-zoom h-40" onClick={() => setLightboxOpen(i)}>
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightboxOpen(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxOpen(null)} className="absolute -top-10 right-0 text-white text-lg hover:text-[#E29578] transition-colors">
              <i className="fa-solid fa-xmark" />
            </button>
            <img src={galleryImages[lightboxOpen]} alt="Gallery" className="w-full max-h-[80vh] object-contain rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
      )}

      {/* ===== CTA BAND ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4" style={{ background: 'linear-gradient(135deg, #006D77 0%, #003844 100%)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white m-0 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ready to Work Abroad?
            </h2>
            <p className="text-base sm:text-lg text-[#83C5BE] max-w-xl mx-auto leading-relaxed">
              One message is all it takes. Let Fowzan Traders connect you with verified employers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://wa.me/923006162506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#E29578', color: 'white' }}
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <i className="fa-regular fa-paper-plane" />
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
