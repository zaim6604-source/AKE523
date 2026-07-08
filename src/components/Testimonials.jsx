import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    destination: 'Saudi Arabia',
    role: 'Construction Supervisor',
    quote: 'M. G. Traders turned my life around. Within weeks of registering, I was placed with a top construction firm in Riyadh. The team guided me through every document, every test, and every step. I\'m now earning three times what I was in Pakistan.',
    rating: 5,
  },
  {
    name: 'Fatima Noreen',
    destination: 'Germany',
    role: 'Healthcare Assistant',
    quote: 'I never thought I\'d make it to Europe. M. G. Traders made it happen. From visa processing to pre-departure orientation, they were with me at every step. The team at Rehmanabad Chowk is incredibly professional and supportive.',
    rating: 5,
  },
  {
    name: 'Usman Khalid',
    destination: 'UAE',
    role: 'Heavy Driver',
    quote: 'I\'d been trying to go to the UAE for years with no luck. M. G. Traders got me there in under two months. They handled everything — my visa, attestation, medical tests, even my flight. If you\'re in Rawalpindi and looking to work abroad, just go to Rose Arcade.',
    rating: 5,
  },
  {
    name: 'Saima Bibi',
    destination: 'Qatar',
    role: 'Hospitality Staff',
    quote: 'As a woman looking to work abroad, I was nervous about the process. M. G. Traders made me feel safe and confident. They connected me with a reputable hotel in Doha, and I\'ve been thriving there for over a year now.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[current];

  const goTo = (index) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  };

  return (
    <section id="testimonials" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="SUCCESS STORIES" index={0} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Real Stories from{' '}
            <span className="text-[#1B4965]">Real People</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left - Giant Quote Mark Column */}
          <div className="lg:col-span-2 relative">
            <div className="text-[120px] sm:text-[180px] lg:text-[220px] text-[#1B4965]/5 font-serif leading-none select-none absolute -top-16 -left-8">
              &ldquo;
            </div>
            <div className="relative z-10 pt-12 lg:pt-20">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B2436] leading-tight mb-4">
                What Our <span className="text-[#FF6B35]">Candidates</span> Say
              </h3>
              <p className="text-[#0B2436]/60 text-sm sm:text-base leading-relaxed">
                Every departure is a story of trust, hard work, and a better future. Here are just a few of the thousands of lives we've helped transform.
              </p>
            </div>
          </div>

          {/* Right - Mini Cards */}
          <div className="lg:col-span-3 space-y-4">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                  i === current ? 'border-[#FF6B35]' : 'border-[#C9CCD5]'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goTo(i)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#0B2436] text-sm">{testimonial.name}</span>
                      <span className="text-xs text-[#0B2436]/40">—</span>
                      <span className="text-xs text-[#5FA8D3] font-medium">{testimonial.role}</span>
                    </div>
                    <p className="text-sm text-[#0B2436]/70 leading-relaxed line-clamp-3">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-[#FF6B35]">
                      {[...Array(5)].map((_, si) => (
                        <i key={si} className={`fas fa-star text-[10px] ${si < testimonial.rating ? 'opacity-100' : 'opacity-20'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#C9CCD5] mt-2 shrink-0" />
                  <span className="text-xs text-[#0B2436]/40 whitespace-nowrap mt-2">{testimonial.destination}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
