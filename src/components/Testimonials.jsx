import useReveal from '../hooks/useReveal';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    name: 'Usman Khan',
    role: 'Welder — Certified 6G',
    quote: 'I came to New Trademan with basic welding experience. The hands-on training and trade test gave me the confidence and certificate I needed to apply for overseas jobs.',
    rating: 5,
    img: '/images/testimonial-1.jpg',
  },
  {
    name: 'Bilal Ahmad',
    role: 'Electrician',
    quote: 'The instructors are true professionals. They took me through everything from basic wiring to industrial electrical systems. Highly recommend for anyone serious about their trade.',
    rating: 5,
    img: '/images/testimonial-2.jpg',
  },
  {
    name: 'Rashid Mehmood',
    role: 'AC Technician',
    quote: 'I had been working as an AC tech for years but had no certificate. New Trademan assessed my skills fairly and issued a recognised certificate. Now I\'m preparing to go to the Gulf.',
    rating: 5,
    img: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  useReveal('.tst-reveal');

  return (
    <section id="testimonials" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 tst-reveal reveal">
          <span className="pill-badge">OUR TRAINEES</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            What Our Trainees Say
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            Real stories from workers who trained and certified with New Trademan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="tst-reveal reveal rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFF8E0', border: '1px solid rgba(255,32,110,0.08)' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} size={14} style={{ color: '#FBFF12' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#4B4453' }}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <div className="font-display font-bold text-sm" style={{ color: '#1A1423' }}>{t.name}</div>
                  <div className="text-xs font-semibold" style={{ color: '#FF206E' }}>{t.role}</div>
                </div>
                <FaQuoteRight size={20} className="ml-auto" style={{ color: '#FF206E', opacity: 0.15 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}