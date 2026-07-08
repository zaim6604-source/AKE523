import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Visa Processing — Saudi Arabia',
    text: 'Shafay International got my Saudi visa approved in just 5 working days. The team was incredibly professional and kept me updated at every step. Highly recommended for quick Gulf visas.',
    rating: 5,
  },
  {
    name: 'Bilal Hussain',
    role: 'Air Tickets & Visa — UAE',
    text: 'I needed a last-minute ticket and visa for Dubai. Shafay handled everything within 48 hours. Their office in Rawalpindi is easy to reach and the staff is very helpful.',
    rating: 5,
  },
  {
    name: 'Sadia Malik',
    role: 'Visa Processing — Qatar',
    text: 'As a first-time traveler to Qatar, I was nervous about the visa process. Shafay International made it so simple. From documentation to ticket booking, everything was seamless.',
    rating: 5,
  },
  {
    name: 'Kamran Ali',
    role: 'Manpower Supply — Oman',
    text: 'We have been working with Shafay International for our manpower needs in Muscat. Their verification process is thorough and the candidates they provide are well-prepared.',
    rating: 4,
  },
];

export default function Testimonials() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 bg-[#E8F5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-star" />
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            Real feedback from clients who trusted us with their travel and visa needs.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow border border-blue-50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i
                    key={j}
                    className={`fas fa-star text-sm ${j < t.rating ? 'text-[#FFBE0B]' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#062A45]/70 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-blue-50">
                <div className="w-10 h-10 rounded-full bg-[#0496FF] flex items-center justify-center text-white font-bold text-sm font-[Plus_Jakarta_Sans]">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#062A45]">{t.name}</div>
                  <div className="text-xs text-[#062A45]/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
