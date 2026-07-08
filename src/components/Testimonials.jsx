import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/100x100/FFB6C1/FFB6C1';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const testimonials = [
  {
    quote: 'Niaz Recruiting Agency made the entire process so simple. From registration to departure, everything was handled professionally. I\'m now working in Dubai and supporting my family back in Rawalpindi.',
    name: 'Ahmed Raza',
    dest: 'Dubai, UAE',
    role: 'Construction Supervisor',
    avatar: 'https://picsum.photos/seed/avatar-1/100/100',
    bg: '#FFE0F0',
  },
  {
    quote: 'I was nervous about finding legitimate work abroad, but the team at Niaz put all my worries to rest. Transparent fees, honest guidance, and a job I love in Saudi Arabia. Highly recommended!',
    name: 'Imran Khan',
    dest: 'Riyadh, Saudi Arabia',
    role: 'Heavy Equipment Operator',
    avatar: 'https://picsum.photos/seed/avatar-2/100/100',
    bg: '#E6FCF5',
  },
  {
    quote: 'From Commercial Market to Kuala Lumpur — Niaz Recruiting Agency made it happen. They took care of my visa, documents, and even my flight. A truly refreshing, hassle-free experience.',
    name: 'Sajid Mehmood',
    dest: 'Kuala Lumpur, Malaysia',
    role: 'Factory Technician',
    avatar: 'https://picsum.photos/seed/avatar-3/100/100',
    bg: '#FFF0F5',
  },
  {
    quote: 'What I appreciated most was the honesty. They told me exactly what to expect, what the costs were, and kept me updated through every step. Now I\'m in Doha with a great contract.',
    name: 'Bilal Ahmed',
    dest: 'Doha, Qatar',
    role: 'Security Officer',
    avatar: 'https://picsum.photos/seed/avatar-4/100/100',
    bg: '#FFF5E6',
  },
  {
    quote: 'I went from Rawalpindi to Seoul thanks to Niaz Recruiting Agency. Their pre-departure orientation was incredibly helpful — I felt prepared from day one. Thank you for changing my life!',
    name: 'Usman Ali',
    dest: 'Seoul, South Korea',
    role: 'Manufacturing Worker',
    avatar: 'https://picsum.photos/seed/avatar-5/100/100',
    bg: '#FFE6EE',
  },
  {
    quote: 'Finding a legitimate recruiter in Rawalpindi is not easy, but Niaz Recruiting Agency stood out. Licensed, professional, and they genuinely care. I\'ve already recommended them to my cousins.',
    name: 'Tariq Javed',
    dest: 'Muscat, Oman',
    role: 'Driver',
    avatar: 'https://picsum.photos/seed/avatar-6/100/100',
    bg: '#F0F0FF',
  },
];

export default function Testimonials() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="testimonials" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#FFEFF6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="pill-1 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            SUCCESS STORIES
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#5A1E3A' }}>
          Real stories from real people — our candidates share their experience.
        </p>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} relative rounded-2xl p-6 sm:p-7 shadow-md transition-transform duration-300 hover:-translate-y-2`}
              style={{ backgroundColor: t.bg }}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-3 right-4 text-5xl sm:text-6xl font-serif opacity-20 leading-none" style={{ color: '#E0218A' }}>
                &quot;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fa-solid fa-star text-xs" style={{ color: '#00BFA6' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base leading-relaxed mb-5 relative z-10" style={{ color: '#3D0A22' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-sm border-2 border-white"
                  loading="lazy"
                  onError={handleImgError}
                />
                <div>
                  <div className="text-sm font-bold" style={{ color: '#3D0A22' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#5A1E3A' }}>
                    {t.dest} — {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}