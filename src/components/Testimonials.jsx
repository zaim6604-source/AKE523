const TESTIMONIALS = [
  {
    name: 'Ahmed Khan',
    role: 'Saudi Arabia — Driver',
    text: 'Al Rabaz International made my visa process incredibly smooth. From document submission to final departure, they handled everything. I was in Riyadh within 3 weeks!',
    rating: 5,
  },
  {
    name: 'Muhammad Usman',
    role: 'UAE — Labour',
    text: 'Very professional and trustworthy team. They guided me through every step and made sure all my documents were in order. Highly recommended for anyone in Pir Mahal.',
    rating: 5,
  },
  {
    name: 'Sajid Ali',
    role: 'Qatar — Construction',
    text: 'I had tried other agencies before but none were as efficient as Al Rabaz. Fast processing, clear communication, and no hidden charges. The best in Toba Tek Singh!',
    rating: 5,
  },
  {
    name: 'Bilal Ahmed',
    role: 'Poland — Factory Worker',
    text: 'Excellent service for European work visas too! They handled my Poland work permit application flawlessly. The pre-departure orientation was very helpful.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-star" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Real stories from people we have helped place in jobs around the world.
          </p>
        </div>

        {/* Wide banner stack */}
        <div className="space-y-5">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-background rounded-2xl p-6 sm:p-8 border border-primary/10 flex flex-col sm:flex-row sm:items-center gap-5 transition-shadow hover:shadow-md"
            >
              {/* Avatar */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="sm:text-center">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-sm ${
                        i < t.rating ? 'text-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-ink/70 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}