import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

const TESTIMONIALS = [
  {
    quote: "Arabian Gulf International made my dream of working in Dubai a reality. From documentation to departure, their team guided me at every step. I've been working as a site supervisor for over two years now, and I couldn't be more grateful.",
    name: 'Ahmed Raza',
    destination: 'Dubai, UAE',
    role: 'Site Supervisor',
    img: '/images/testimonial-1.jpg',
    color: 'bg-[#E0115F]',
  },
  {
    quote: "The team at Arabian Gulf International is truly professional. They helped me secure a position in Doha within weeks of registration. The pre-departure orientation was incredibly helpful in settling into my new role.",
    name: 'Farhan Ali',
    destination: 'Doha, Qatar',
    role: 'Heavy Equipment Operator',
    img: '/images/testimonial-2.jpg',
    color: 'bg-[#7B2D8E]',
  },
  {
    quote: "I was hesitant about working overseas, but the team patiently answered all my questions and connected me with a verified employer in Riyadh. Now I earn three times what I did locally. Highly recommended for anyone in Islamabad!",
    name: 'Sajid Mehmood',
    destination: 'Riyadh, Saudi Arabia',
    role: 'Electrician',
    img: '/images/testimonial-3.jpg',
    color: 'bg-[#FF5C8A]',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="SUCCESS STORIES" color="bg-[#B8004F]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Real Stories from Our Candidates
          </h2>
          <p className="text-[#5C1A32]/70 mt-3 max-w-2xl mx-auto">
            Hear from the professionals we've placed across the Gulf.
          </p>
        </FadeUp>

        <div className="space-y-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={(i % 3) + 1}>
              <div className={`${t.color} rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-start gap-6`}>
                <div className="shrink-0">
                  <SafeImage
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white/50 shadow-md"
                    type="avatar"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 text-[#FFD700] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i key={s} className="fa-solid fa-star text-sm"></i>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-bold text-white text-base">{t.name}</p>
                      <p className="text-white/70 text-sm">{t.role} — {t.destination}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}