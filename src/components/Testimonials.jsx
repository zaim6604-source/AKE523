import { useState } from "react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Construction Worker — Qatar",
    quote: "Afnan Recruiting made the entire process smooth and transparent. From documentation to departure, they guided me at every step. I'm now working in Doha and earning well.",
    rating: 5,
  },
  {
    name: "Muhammad Usman",
    role: "Driver — Saudi Arabia",
    quote: "I was hesitant about overseas work, but Afnan's team patiently answered all my questions. They found me a great driving position in Riyadh. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kamran Ali",
    role: "Nurse — Germany",
    quote: "The team handled my credential attestation, visa processing, and even arranged German language classes. Thanks to them, I'm now working at a hospital in Berlin.",
    rating: 5,
  },
  {
    name: "Sajid Mehmood",
    role: "Factory Worker — Poland",
    quote: "Professional, honest, and efficient. Afnan Recruiting helped me get a factory job in Warsaw within weeks. I'm grateful for their support throughout.",
    rating: 4,
  },
  {
    name: "Tariq Khan",
    role: "Hospitality Staff — UAE",
    quote: "From the initial consultation at their Saddar office to my flight to Dubai, everything was handled professionally. They truly care about their candidates.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            SUCCESS STORIES
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Coverflow carousel */}
          <div className="relative overflow-hidden py-8">
            <div className="flex items-center justify-center gap-4 perspective-[1000px]">
              {testimonials.map((t, i) => {
                const offset = i - active;
                const isCenter = i === active;
                return (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-500 cursor-pointer flex-shrink-0 ${
                      isCenter
                        ? "scale-100 z-10 opacity-100 w-full max-w-lg"
                        : Math.abs(offset) === 1
                        ? "scale-85 opacity-50 w-40 hidden md:block"
                        : "scale-75 opacity-20 w-24 hidden lg:block"
                    }`}
                    style={{
                      transform: isCenter
                        ? "scale(1) translateX(0)"
                        : offset < 0
                        ? `scale(0.85) translateX(${30 * offset}px)`
                        : `scale(0.85) translateX(${30 * offset}px)`,
                    }}
                  >
                    {isCenter ? (
                      <div className="bg-background rounded-2xl p-6 md:p-8 shadow-md border border-primary/10 text-center">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, s) => (
                            <i
                              key={s}
                              className={`fas fa-star ${s < t.rating ? "text-secondary" : "text-gray-200"}`}
                            ></i>
                          ))}
                        </div>
                        <p className="text-ink/80 text-sm md:text-base leading-relaxed italic mb-6">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <div>
                          <p className="font-heading font-bold text-ink">{t.name}</p>
                          <p className="text-xs text-ink/50">{t.role}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-background/50 rounded-xl p-4 shadow border border-primary/5 text-center">
                        <p className="text-xs text-ink/40 italic truncate">&ldquo;{t.quote.slice(0, 50)}...&rdquo;</p>
                        <p className="text-xs font-semibold text-ink/60 mt-2">{t.name}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous"
              >
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                aria-label="Next"
              >
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}