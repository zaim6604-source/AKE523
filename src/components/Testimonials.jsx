import ScrollReveal from './ScrollReveal'

const TESTIMONIALS = [
  {
    name: 'Shahid Khan',
    role: 'Placed in Saudi Arabia — Construction',
    quote: 'Hammad Recruiting Agency made my dream of working abroad a reality. From documentation to departure, they handled everything with care. Now I am earning well and supporting my family back in Swat.',
    rating: 5,
    initials: 'SK',
  },
  {
    name: 'Wajid Ali',
    role: 'Placed in UAE — Logistics',
    quote: 'I visited their office at Tahir Plaza, Batkhela and was impressed by their professionalism. Within weeks, I had a job offer from Dubai. Highly recommended for anyone in Malakand looking for overseas work.',
    rating: 5,
    initials: 'WA',
  },
  {
    name: 'Rashid Ahmad',
    role: 'Placed in Germany — Healthcare',
    quote: 'The team guided me through the entire process, including language training and visa interviews. Their pre-departure training was incredibly helpful. I am now working in Berlin.',
    rating: 5,
    initials: 'RA',
  },
  {
    name: 'Naveed ur Rahman',
    role: 'Placed in Qatar — Oil & Gas',
    quote: 'A trustworthy agency with a transparent process. No hidden fees, clear communication, and genuine job opportunities. I have already referred three friends from Dir to them.',
    rating: 4,
    initials: 'NR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-comments" />
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              What Our Candidates Say
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Real stories from workers we have placed abroad.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <i
                      key={si}
                      className={`fas fa-star ${si < t.rating ? 'text-accent' : 'text-gray-200'}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-ink/70 text-sm leading-relaxed flex-1 mb-4 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-ink">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}