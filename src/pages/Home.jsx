import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const inc = end / (duration / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref} className="font-extrabold text-3xl md:text-4xl text-[#FFD500]">{count}{suffix}</span>;
}

const STATS = [
  { icon: 'fa-users', end: 5000, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe', end: 9, suffix: '', label: 'Countries' },
  { icon: 'fa-building', end: 200, suffix: '+', label: 'Employer Partners' },
  { icon: 'fa-star', end: 98, suffix: '%', label: 'Success Rate' },
];

const SERVICES_TEASER = [
  { icon: 'fa-briefcase', title: 'Job Placement', desc: 'End-to-end recruitment for overseas positions', color: '#E10600' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa documentation support', color: '#FF4D4D' },
  { icon: 'fa-file-lines', title: 'Documentation', desc: 'Attestation & document verification', color: '#1C1C1C' },
  { icon: 'fa-plane', title: 'Travel Support', desc: 'Ticketing & pre-departure orientation', color: '#A30000' },
];

const FEATURED_COUNTRIES = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', img: '/images/saudi.jpg' },
  { slug: 'uae', name: 'UAE', flag: '🇦🇪', img: '/images/uae.jpg' },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', img: '/images/qatar.jpg' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src="/images/hero-bg.jpg" alt="Career abroad" className="w-full h-full object-cover" type="hero" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <FadeUp className="max-w-2xl">
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 border border-[#FFD500]/30">
              <i className="fa-solid fa-certificate mr-1.5"></i>Pak. Arsalan Corporation — License 2210/ABT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 font-[Poppins]">
              Batagram's Bridge<br />
              <span className="text-[#FFD500]">to a Better Living Abroad</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Based in Alamgir Chowk, Batagram, KPK — Pak. Arsalan Corporation connects skilled Pakistani workers
              with premium job opportunities across the globe. Trusted, transparent, results-driven.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
                className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm sm:text-base">
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
              </a>
              <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#141414] transition-all text-sm sm:text-base">
                <i className="fa-brands fa-whatsapp mr-2"></i>Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      {/* Stat Strip */}
      <section className="bg-[#1C1C1C] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <FadeUp key={i} delay={(i % 4) + 1} className="flex flex-col items-center">
                <div className="tachymeter-ring mb-3">
                  <i className={`fa-solid ${stat.icon} text-2xl text-[#FFD500]`}></i>
                </div>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <div className="text-sm font-medium text-white/70 mt-1">{stat.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-block bg-[#E10600]/10 text-[#E10600] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-[Poppins]">
              Our Services
            </h2>
            <p className="text-[#141414]/60 mt-3 max-w-2xl mx-auto">
              From application to departure — we handle every step of your overseas employment journey.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_TEASER.map((svc, i) => (
              <FadeUp key={i} delay={(i % 4) + 1}>
                <div className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white mb-4 transition-all group-hover:scale-110"
                    style={{ backgroundColor: svc.color }}>
                    <i className={`fa-solid ${svc.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-[#141414] text-lg mb-2 font-[Poppins]">{svc.title}</h3>
                  <p className="text-[#141414]/60 text-sm">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-8">
            <Link to="/services"
              className="inline-block bg-[#E10600] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1C1C1C] transition-all shadow-md">
              View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-block bg-[#E10600]/10 text-[#E10600] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              DESTINATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-[Poppins]">
              Explore Global Opportunities
            </h2>
            <p className="text-[#141414]/60 mt-3 max-w-2xl mx-auto">
              We connect talent to top employers across the Gulf, Europe, and Asia.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_COUNTRIES.map((c, i) => (
              <FadeUp key={i} delay={(i % 3) + 1}>
                <Link to={`/countries/${c.slug}`} className="block group">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                    <SafeImage src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" type="landmark" />
                    <div className="absolute inset-0 tile-overlay"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <span className="text-3xl mb-1 block">{c.flag}</span>
                      <h3 className="text-xl font-bold text-white font-[Poppins]">{c.name}</h3>
                      <span className="inline-block mt-2 text-[#FFD500] text-sm font-semibold">
                        View Opportunities <i className="fa-solid fa-arrow-right ml-1"></i>
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E10600] to-[#FFD500]"></div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-8">
            <Link to="/countries"
              className="inline-block bg-[#1C1C1C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#E10600] transition-all shadow-md">
              View All Countries <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#E10600] to-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[Poppins]">Ready to Start Your Journey?</h2>
            <p className="text-white/80 mb-8">Take the first step toward your international career today.</p>
            <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
              className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg inline-block">
              <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}