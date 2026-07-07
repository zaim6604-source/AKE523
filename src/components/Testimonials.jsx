import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Ahmed Riaz',
    role: 'Placed in Saudi Arabia',
    text: 'Innovative World made the entire process smooth and hassle-free. From understanding my skills to finding the perfect opportunity, they were with me every step of the way. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sana Gul',
    role: 'Job Seeker, Nowshera',
    text: 'I was struggling to find the right job until I connected with Innovative World. Their team understood my background and found me an excellent placement within weeks. Truly professional service.',
    rating: 5,
  },
  {
    name: 'Bilal Khan',
    role: 'Business Owner, Nowshera',
    text: 'We needed reliable staff for our growing business. Innovative World provided us with dedicated, skilled professionals who have been an asset to our team. Great staffing solutions!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="section-pad bg-[#FFF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="pill-badge bg-[#02C39A]/10 text-[#02C39A] mb-4">SUCCESS STORIES</span>
          <h2 className="section-heading">What Our <span className="text-[#D7263D]">Clients Say</span></h2>
          <p className="text-[#340710]/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Real feedback from the people and businesses we've helped
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-[#D7263D]/5 transition-all duration-500 hover:-translate-y-1"
              style={{
                transitionDelay: `${i * 120}ms`,
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.6s',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <FaQuoteLeft className="text-[#D7263D]/20 text-3xl mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-[#02C39A] text-sm" />
                ))}
              </div>
              <p className="text-[#340710]/70 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-[#FFF0F3]">
                <p className="font-bold text-[#340710] text-sm font-heading">{t.name}</p>
                <p className="text-xs text-[#D7263D]/60 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
