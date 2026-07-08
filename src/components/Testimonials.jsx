import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const testimonials = [
  {
    name: 'Ahmed Buzdar',
    role: 'Construction Worker · Saudi Arabia',
    quote: 'HKB International handled everything from my visa to my flight. I landed in Riyadh with a job ready — no stress, no delays.',
    rating: 5,
  },
  {
    name: 'Farzana Bibi',
    role: 'Hotel Staff · Dubai, UAE',
    quote: 'As a woman from a small town, I was nervous about working abroad. They guided me through every step. Forever grateful.',
    rating: 5,
  },
  {
    name: 'Muhammad Yasin',
    role: 'Factory Worker · Seoul, South Korea',
    quote: 'The Korean factory job changed my family\'s life. Clean process, honest people. I recommend HKB to everyone in D.G. Khan.',
    rating: 5,
  },
  {
    name: 'Sajjad Hussain',
    role: 'Driver · Doha, Qatar',
    quote: 'I tried other agents before — HKB is different. They don\'t make false promises. What they say, they deliver.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-star" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            What Our Workers Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <SafeImage
                      src={`/images/testimonial-${i}.jpg`}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      fallbackType="testimonial"
                      fallbackSeed={i}
                    />
                  </div>
                  <div>
                    <div className="font-extrabold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i
                      key={idx}
                      className={`fas fa-star text-xs ${idx < t.rating ? 'star-yellow' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}