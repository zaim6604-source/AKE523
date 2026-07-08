import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/400x300/83C5BE/83C5BE';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const services = [
  {
    title: 'Overseas Job Placement',
    desc: 'Connecting skilled and unskilled workers with verified employers in top destination countries.',
    color: '#006D77',
    img: 'https://picsum.photos/seed/job-placement/400/300',
  },
  {
    title: 'Visa Processing',
    desc: 'Complete visa application support, documentation, and follow-up for smooth processing.',
    color: '#83C5BE',
    img: 'https://picsum.photos/seed/visa-processing/400/300',
  },
  {
    title: 'Document Attestation',
    desc: 'Degree attestation, translation, and certification services for overseas requirements.',
    color: '#E29578',
    img: 'https://picsum.photos/seed/document-attestation/400/300',
  },
  {
    title: 'Medical & Trade Test Coordination',
    desc: 'Scheduling and coordination of mandatory medical exams and trade skill assessments.',
    color: '#003844',
    img: 'https://picsum.photos/seed/medical-test/400/300',
  },
  {
    title: 'Pre-Departure Orientation',
    desc: 'Cultural guidance, travel briefings, and essential tips before you depart.',
    color: '#006D77',
    img: 'https://picsum.photos/seed/orientation/400/300',
  },
  {
    title: 'Air Ticketing & Travel Support',
    desc: 'Affordable flight bookings and travel coordination for a smooth journey abroad.',
    color: '#83C5BE',
    img: 'https://picsum.photos/seed/ticketing/400/300',
  },
  {
    title: 'Employer Verification',
    desc: 'Thorough background checks on overseas employers to ensure legitimate opportunities.',
    color: '#E29578',
    img: 'https://picsum.photos/seed/employer-verification/400/300',
  },
  {
    title: 'Skilled & Unskilled Manpower Supply',
    desc: 'Reliable workforce solutions for construction, hospitality, factory, and service sectors.',
    color: '#003844',
    img: 'https://picsum.photos/seed/manpower/400/300',
  },
];

export default function Services() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="services" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#83C5BE" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#83C5BE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="pill-1 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto text-[#003844]">
            Comprehensive recruitment and support services — from application to arrival.
          </p>

          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 4) + 1} service-card relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
                style={{ minHeight: '280px' }}
              >
                {/* Background image or color */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${s.color}ee 100%)` }} />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-base font-bold text-white m-0">{s.title}</h3>
                </div>

                {/* Hover overlay */}
                <div
                  className="service-overlay absolute inset-0 flex flex-col justify-center items-center p-5 text-center translate-y-full"
                  style={{ backgroundColor: s.color }}
                >
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-3">{s.desc}</p>
                  <a href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white border border-white/50 rounded-full px-4 py-1.5 hover:bg-white/20 transition-colors">
                    Apply Now <i className="fa-solid fa-arrow-right text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}