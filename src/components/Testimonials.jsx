import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Construction Worker',
    location: 'Now in Saudi Arabia',
    text: 'The Sialkot Traders helped me find a great job in Riyadh. The whole process was smooth — from documentation to departure. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Muhammad Usman',
    role: 'Driver',
    location: 'Now in UAE',
    text: 'I was nervous about working abroad, but their team guided me every step. Got my visa in 3 weeks. Fair and honest service.',
    rating: 5,
  },
  {
    name: 'Bilal Ahmad',
    role: 'Welder',
    location: 'Now in Poland',
    text: 'Professional team with real experience. They connected me with a verified employer in Poland. The pay is good and conditions are excellent.',
    rating: 5,
  },
  {
    name: 'Sajid Mahmood',
    role: 'Security Guard',
    location: 'Now in Oman',
    text: 'I applied through The Sialkot Traders and got placed in Muscat within a month. Everything was transparent — no hidden charges.',
    rating: 4,
  },
  {
    name: 'Farhan Ali',
    role: 'Hospitality Staff',
    location: 'Now in Qatar',
    text: 'Thanks to The Sialkot Traders, I have a secure job in Doha. They handled all paperwork and even arranged my flight. Very grateful.',
    rating: 5,
  },
  {
    name: 'Khalid Parvez',
    role: 'Agriculture Worker',
    location: 'Now in Italy',
    text: 'Excellent service from start to finish. The team at Kutchery Road is professional and caring. They genuinely want the best for you.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="section-pad bg-diver-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-diver-primary/10 text-diver-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-star" />
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-diver-highlight font-heading">
            What Our Workers Say
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Real stories from workers we have placed overseas.
          </p>
        </div>

        {/* Offset Masonry */}
        <div ref={ref} className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`break-inside-avoid bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-diver-cta ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} className="fas fa-star text-diver-accent text-sm" />
                ))}
                {[...Array(5 - t.rating)].map((_, j) => (
                  <i key={j} className="far fa-star text-gray-300 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>

              <div className="pt-3 border-t border-gray-100">
                <p className="font-bold text-diver-highlight text-sm font-heading">
                  {t.name}
                </p>
                <p className="text-xs text-diver-primary font-medium">{t.role}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  <i className="fas fa-location-dot text-diver-cta mr-1" />
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
