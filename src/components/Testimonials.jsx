import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Ahmed Khan',
    location: 'Saudi Arabia',
    role: 'Construction Supervisor',
    text: 'Habib Brothers made my dream of working in Saudi Arabia a reality. From documentation to departure, their team guided me at every step. I am now earning a stable income and supporting my family back in Swat.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Fatima Ali',
    location: 'UAE',
    role: 'Hospitality Staff',
    text: 'I was nervous about finding a job abroad, but Habib Brothers found me a wonderful position in Dubai. The pre-departure orientation was incredibly helpful. Highly recommended!',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Mohammad Usman',
    location: 'Germany',
    role: 'Skilled Technician',
    text: 'The team at Habib Brothers helped me with everything from my visa to trade tests. Their employer verification gave me peace of mind. I am now working in Berlin and loving it.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    name: 'Zainab Noor',
    location: 'Qatar',
    role: 'Retail Associate',
    text: 'Thanks to Habib Brothers, I secured a job in Doha within weeks. Their process was transparent and professional. I appreciate their honest approach and genuine care.',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    name: 'Bilal Ahmad',
    location: 'Oman (Muscat)',
    role: 'Driver',
    text: 'Habib Brothers helped me get a driving job in Muscat. The whole process was smooth and they kept me informed at every step. Grateful for their support!',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
];

const rotations = [-3, 4, -5, 3, -2];

export default function Testimonials() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="blob blob-crimson hidden lg:block" style={{ width: 300, height: 300, top: '5%', left: '-5%' }} />
      <div className="blob blob-mint hidden lg:block" style={{ width: 250, height: 250, bottom: '5%', right: '-5%' }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Success Stories" title="What Our Candidates Say" />
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i}
              className="polaroid rounded-2xl"
              style={{ transform: `rotate(${rotations[i]}deg)`, transitionDelay: `${i * 0.08}s` }}>
              {/* Tape */}
              <div className="polaroid-tape" />
              {/* Photo area */}
              <div className="rounded-xl overflow-hidden mb-3 h-40">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              {/* Content */}
              <div className="px-2">
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#555' }}>"{t.text}"</p>
                {/* Mint stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, si) => (
                    <i key={si} className={`fas fa-star text-xs ${si < t.rating ? 'polaroid-stars' : 'text-gray-200'}`} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div>
                    <strong className="block text-sm text-[#340710]">{t.name}</strong>
                    <span className="text-xs" style={{ color: 'var(--color-primary)' }}>
                      {t.role} &middot; {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}