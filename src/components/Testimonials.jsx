import useInView from '../hooks/useInView';

const testimonials = [
  {
    quote: 'M & L Consultants transformed our HR operations. Their team designed a performance management system that actually works for our staff. We\'ve seen measurable improvements in engagement and productivity.',
    name: 'Fatima Hassan',
    role: 'CEO, TechVista Islamabad',
    color: '#1B4965',
  },
  {
    quote: 'We were struggling with compliance and policy documentation. M & L stepped in and created a complete HR policy framework that gave us peace of mind. Thorough, professional, and practical.',
    name: 'Omar Shehzad',
    role: 'Managing Director, BlueChip Logistics',
    color: '#5FA8D3',
  },
  {
    quote: 'The recruitment support from M & L was outstanding. They understood our culture and found candidates who fit perfectly. Far better than the big agencies we\'ve used before.',
    name: 'Ayesha Malik',
    role: 'HR Director, Islamabad Healthcare Group',
    color: '#FF6B35',
  },
  {
    quote: 'As a growing startup, we couldn\'t afford a full-time HR team. M & L\'s HR-as-a-Service model gave us exactly what we needed — expert support without the overhead.',
    name: 'Bilal Tariq',
    role: 'Founder, GreenTech Solutions',
    color: '#0B3954',
  },
  {
    quote: 'Their training programs are exceptional. We\'ve seen a real shift in our team\'s capabilities after just a few sessions. M & L brings a fresh, practical approach to professional development.',
    name: 'Sana Khalid',
    role: 'Operations Manager, Horizon Industries',
    color: '#1B4965',
  },
  {
    quote: 'Professional, responsive, and deeply knowledgeable. M & L helped us restructure our organization during a period of rapid growth. Their guidance was invaluable.',
    name: 'Kamran Javed',
    role: 'COO, PakBuild Developers',
    color: '#5FA8D3',
  },
];

const cardBgs = ['#F2F6F9', '#E8F0F6', '#FFF3EE', '#E3EDF2', '#F2F6F9', '#E8F0F6'];

export default function Testimonials() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="testimonials" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#F2F6F9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
            style={{ backgroundColor: '#1B4965', color: 'white' }}>
            CLIENT SUCCESS
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#4A5C6B' }}>
          Hear from the businesses and professionals we&apos;ve partnered with.
        </p>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} relative rounded-2xl p-6 sm:p-7 shadow-md transition-transform duration-300 hover:-translate-y-2`}
              style={{ backgroundColor: cardBgs[i] }}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-3 right-4 text-5xl sm:text-6xl font-serif opacity-15 leading-none" style={{ color: t.color }}>
                &quot;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fa-solid fa-star text-xs" style={{ color: '#FF6B35' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base leading-relaxed mb-5 relative z-10" style={{ color: '#0B2436' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name + Role */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: '#0B2436' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#4A5C6B' }}>
                    {t.role}
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