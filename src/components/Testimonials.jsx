import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

const TESTIMONIALS = [
  {
    quote: "Barkha International made my dream of working abroad a reality. From documentation to departure, their team guided me at every step. I've been working as a site supervisor in Dubai for over two years now, and I couldn't be more grateful.",
    name: 'Ahmed Raza',
    destination: 'Dubai, UAE',
    role: 'Site Supervisor',
    img: '/images/testimonial-1.jpg',
    color: 'bg-[#E10600]',
  },
  {
    quote: "The team at Barkha International is truly professional. They helped me secure a position in Riyadh within weeks of registration. The pre-departure orientation was incredibly helpful in settling into my new role.",
    name: 'Farhan Ali',
    destination: 'Riyadh, Saudi Arabia',
    role: 'Heavy Equipment Operator',
    img: '/images/testimonial-2.jpg',
    color: 'bg-[#1C1C1C]',
  },
  {
    quote: "I was hesitant about working overseas, but the Barkha team patiently answered all my questions and connected me with a verified employer. Now I earn three times what I did locally. Highly recommended for anyone in Islamabad!",
    name: 'Sajid Mehmood',
    destination: 'Doha, Qatar',
    role: 'Electrician',
    img: '/images/testimonial-3.jpg',
    color: 'bg-[#A30000]',
  },
];

export default function Testimonials() {
  const [popupIndex, setPopupIndex] = useState(null);

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="SUCCESS STORIES" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Real Stories from Our Candidates
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
            Hear from the professionals we've placed worldwide.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={(i % 3) + 1}>
              <button
                onClick={() => setPopupIndex(i)}
                className={`${t.color} rounded-2xl p-6 text-white shadow-lg text-left w-full h-full transition-all hover:scale-[1.02] cursor-pointer`}
              >
                <div className="shrink-0 mb-4">
                  <SafeImage
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-white/50 shadow-md"
                    type="avatar"
                  />
                </div>
                <div className="flex gap-1 text-[#FFD500] mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="fa-solid fa-star text-xs"></i>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-4 italic text-sm line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/70 text-xs">{t.role} &mdash; {t.destination}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Testimonial Popup */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setPopupIndex(null)}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl modal-content p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <SafeImage
                src={TESTIMONIALS[popupIndex].img}
                alt={TESTIMONIALS[popupIndex].name}
                className="w-16 h-16 rounded-full object-cover"
                type="avatar"
              />
              <div>
                <h3 className="font-bold text-[#1C1C1C]">{TESTIMONIALS[popupIndex].name}</h3>
                <p className="text-sm text-[#1C1C1C]/60">{TESTIMONIALS[popupIndex].role} &mdash; {TESTIMONIALS[popupIndex].destination}</p>
              </div>
            </div>
            <div className="flex gap-1 text-[#FFD500] mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <i key={s} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-[#1C1C1C]/70 leading-relaxed italic">
              &ldquo;{TESTIMONIALS[popupIndex].quote}&rdquo;
            </p>
            <button
              onClick={() => setPopupIndex(null)}
              className="mt-6 text-sm text-[#1C1C1C]/50 hover:text-[#1C1C1C]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}