import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import PillBadge from '../components/PillBadge';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';

const trustChips = [
  { icon: 'fa-certificate', text: 'Govt. Licensed OEP' },
  { icon: 'fa-handshake', text: 'Verified Employers' },
  { icon: 'fa-passport', text: 'Visa Assistance' },
  { icon: 'fa-plane-departure', text: 'Pre-Departure Support' },
  { icon: 'fa-shield-alt', text: 'No Hidden Fees' },
  { icon: 'fa-headset', text: '24/7 Support' },
];

const stats = [
  { icon: 'fa-calendar-check', number: '8+', label: 'Years Experience' },
  { icon: 'fa-building', number: '150+', label: 'Partner Employers' },
  { icon: 'fa-globe', number: '9', label: 'Active Countries' },
  { icon: 'fa-star', number: '97%', label: 'Success Rate' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  return (
    <div className="page-enter">
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0B3954] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PillBadge text="ABOUT US" index={2} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
            Your Trusted Partner in{' '}
            <span className="text-[#FF6B35]">Global Employment</span>
          </h1>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-16 sm:py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=700&q=80"
                  alt="Gulalai Overseas Employment"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover"
                  onError={(e) => { e.target.src = FALLBACK_IMG; }}
                />
              </div>
              {/* Floating License Badge */}
              <div className={`absolute -bottom-4 -right-4 bg-[#FF6B35] text-white font-bold px-5 py-3 rounded-2xl shadow-xl rotate-3 transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="text-xs opacity-80 font-medium">License No.</div>
                <div className="text-lg">FF-227</div>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2436] leading-tight">
                From <span className="text-[#1B4965]">Peshawar</span> to the World
              </h2>
              <div className="space-y-4 text-[#0B2436]/70 leading-relaxed text-base sm:text-lg">
                <p>
                  <strong className="text-[#0B2436]">Gulalai Overseas Employment Promoter</strong> is a government-licensed Overseas Employment Promoter (OEP) based at the prestigious <strong className="text-[#0B2436]">Deans Trade Center</strong> in Peshawar Cantonment, Khyber Pakhtunkhwa. We are dedicated to connecting the skilled workforce of KPK and across Pakistan with reputable employers around the world.
                </p>
                <p>
                  From construction and healthcare to IT and hospitality, we handle every step of the recruitment journey — from documentation and visa processing to pre-departure orientation and travel coordination. Our mission is simple: turn your ambition into opportunity and help you build a brighter future abroad.
                </p>
                <p>
                  With 8+ years of experience and a network spanning 9 countries across the Gulf, Europe, and Asia, we've successfully placed thousands of workers in rewarding positions. Our commitment to transparency, integrity, and excellence sets us apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Band ─── */}
      <section className="bg-[#1B4965] py-10 sm:py-14" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5FA8D3]/20 backdrop-blur-sm mb-3">
                  <i className={`fas ${stat.icon} text-xl sm:text-2xl text-[#FF6B35]`} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#C9CCD5] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Chips ─── */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PillBadge text="WHY CHOOSE US" index={1} />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2436] mt-4 mb-10">
            Built on <span className="text-[#1B4965]">Trust</span> & Transparency
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trustChips.map((chip) => (
              <div key={chip.text} className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 card-lift">
                <div className="w-12 h-12 rounded-xl bg-[#1B4965]/10 flex items-center justify-center shrink-0">
                  <i className={`fas ${chip.icon} text-[#1B4965] text-lg`} />
                </div>
                <span className="font-semibold text-[#0B2436] text-sm text-left">{chip.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Office / CTA ─── */}
      <section className="bg-gradient-to-r from-[#0B3954] to-[#1B4965] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
            <i className="fas fa-location-dot text-[#FF6B35]" />
            FF-227, Deans Trade Center, Peshawar Cantonment, KPK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#C9CCD5] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Browse our open positions and apply today. We're here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg"
            >
              <i className="fas fa-search" />
              Browse Jobs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
            >
              <i className="fas fa-paper-plane" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}