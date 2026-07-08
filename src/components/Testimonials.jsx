import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';
import LazyImage from './LazyImage';

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    destination: 'Saudi Arabia',
    role: 'Construction Supervisor',
    quote: 'Ithmanzi turned my life around. Within weeks of registering, I was placed with a top construction firm in Riyadh. The team guided me through every document, every test, and every step. I\'m now earning three times what I was in Pakistan. This agency is the real deal.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Fatima Noreen',
    destination: 'Germany',
    role: 'Healthcare Assistant',
    quote: 'I never thought I\'d make it to Europe. Ithmanzi made it happen. From visa processing to pre-departure orientation, they were with me at every step. The team in Saddar is incredibly professional and supportive. I\'ve already recommended them to three of my cousins!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Usman Khalid',
    destination: 'UAE',
    role: 'Heavy Driver',
    quote: 'I\'d been trying to go to the UAE for years with no luck. Ithmanzi got me there in under two months. They handled everything — my visa, attestation, medical tests, even my flight. If you\'re in Rawalpindi and looking to work abroad, just go to Al-Riaz Plaza. Trust me.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    name: 'Saima Bibi',
    destination: 'Qatar',
    role: 'Hospitality Staff',
    quote: 'As a woman looking to work abroad, I was nervous about the process. Ithmanzi made me feel safe and confident. They connected me with a reputable hotel in Doha, and I\'ve been thriving there for over a year now. Forever grateful to the team at Ithmanzi!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
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
    <section id="testimonials" className="bg-[#FFF3E6] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="SUCCESS STORIES" index={0} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1200] mt-4 leading-tight">
            Real Stories from{' '}
            <span className="text-[#FF4500]">Real People</span>
          </h2>
        </div>

        {/* Giant Quotation Spotlight */}
        <div className="relative text-center" ref={ref}>
          {/* Decorative quotation mark */}
          <div className="text-6xl sm:text-8xl lg:text-9xl text-[#FFD23F]/40 font-serif leading-none mb-4 select-none">
            &ldquo;
          </div>

          {/* Quote Content */}
          <div className={`transition-all duration-500 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#2B1200]/80 leading-relaxed font-medium max-w-2xl mx-auto mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Avatar & Info */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD23F] shadow-md shrink-0">
                <LazyImage
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  containerClass="w-full h-full"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-[#2B1200]">{t.name}</div>
                <div className="text-sm text-[#2B1200]/60">
                  {t.role} — {t.destination}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 text-[#FF7F11]">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star ${i < t.rating ? 'opacity-100' : 'opacity-20'}`} />
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2.5 bg-[#FF4500]'
                    : 'w-2.5 h-2.5 bg-[#FFD23F] hover:bg-[#FF7F11]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}