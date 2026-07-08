import { TESTIMONIALS } from './constants';
import useInView from './useInView';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-[#FFD740]">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} className="fas fa-star text-xs"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-[#F8EEFF]">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-star text-[10px] mr-1.5"></i>
            SUCCESS STORIES
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          What Our Workers Say
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10 md:mb-14">
          Real stories from workers we've placed in rewarding careers overseas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-[#CE93D8]/20 transition-all duration-700 hover-lift ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Stars count={t.stars} />
              <p className="text-[#2A1033]/70 text-sm leading-relaxed mt-3 mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[#CE93D8]/20 pt-3 mt-auto">
                <p className="font-heading font-bold text-sm text-[#2A1033]">{t.name}</p>
                <p className="text-xs text-[#9C27B0] font-medium">{t.role} &middot; {t.destination}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}