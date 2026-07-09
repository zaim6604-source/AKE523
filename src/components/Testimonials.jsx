import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
  { name: 'Muhammad Ali', role: 'Placed in Saudi Arabia — Construction', text: 'Parwaz made my dream of working abroad a reality. From documentation to departure, every step was handled professionally. I\'ve been in Riyadh for 8 months now and couldn\'t be happier.', rating: 5 },
  { name: 'Shahid Khan', role: 'Placed in UAE — Logistics', text: 'I was skeptical at first, but their team guided me through the entire process. Transparent fees, no hidden charges. Highly recommended for anyone in Peshawar looking for overseas jobs.', rating: 5 },
  { name: 'Ayesha Bibi', role: 'Placed in Germany — Healthcare', text: 'As a female professional, I was nervous about working abroad. Parwaz supported me every step of the way. The pre-departure orientation was incredibly helpful. Now working in Berlin!', rating: 5 },
  { name: 'Rashid Ahmad', role: 'Placed in Qatar — Oil & Gas', text: 'Fast processing and excellent communication. They kept me updated throughout the visa process. If you\'re in Peshawar or KPK, this is the agency to trust.', rating: 4 },
];

export default function Testimonials() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 bg-[#FFD6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-star" />
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-3">
            Hear From Our Candidates
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-xl mx-auto">
            Real stories from real people we&apos;ve helped place around the world.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow border border-pink-50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i key={j} className={`fas fa-star text-sm ${j < t.rating ? 'text-[#00F5D4]' : 'text-gray-200'}`} />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#1A0A1E]/70 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-pink-50">
                <div className="w-10 h-10 rounded-full bg-[#FF3CAC] flex items-center justify-center text-white font-bold text-sm font-[Plus Jakarta Sans]">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A0A1E]">{t.name}</div>
                  <div className="text-xs text-[#1A0A1E]/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}