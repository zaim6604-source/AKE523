import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';
import LazyImage from './LazyImage';

const STAT_CIRCLES = [
  { icon: 'fa-calendar-check', number: '10+', label: 'Years Experience', color: 'bg-[#1B4965] text-white' },
  { icon: 'fa-building', number: '150+', label: 'Partner Employers', color: 'bg-[#5FA8D3] text-white' },
  { icon: 'fa-passport', number: '40+', label: 'Visa Categories', color: 'bg-[#FF6B35] text-white' },
  { icon: 'fa-star', number: '98%', label: 'Success Rate', color: 'bg-[#0B3954] text-white' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="ABOUT US" index={1} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with fact sheet panel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <LazyImage
                src="/images/about-team.jpg"
                alt="M. G. Traders team"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                containerClass="w-full"
              />
            </div>

            {/* Floating License Badge */}
            <div className={`absolute -bottom-4 -right-4 bg-[#FF6B35] text-white font-bold px-5 py-3 rounded-2xl shadow-xl rotate-3 transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="text-xs opacity-80 font-medium">License No.</div>
              <div className="text-lg">2264 / RWP</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-[#1B4965]">Global Employment</span>
            </h2>
            <div className="space-y-4 text-[#0B2436]/70 leading-relaxed text-base sm:text-lg">
              <p>
                Based at <strong className="text-[#0B2436]">Rehmanabad Chowk, Murree Road, Rawalpindi</strong>, M. G. Traders is a government-licensed Overseas Employment Promoter (OEP) bearing License No. <strong className="text-[#1B4965]">2264/RWP</strong>. We are dedicated to connecting the talented workforce of Rawalpindi and Punjab with reputable employers across the Gulf and Europe.
              </p>
              <p>
                From construction and healthcare to hospitality and logistics, we handle every step of the recruitment journey — from documentation and visa processing to pre-departure orientation and travel support. Our mission: deliver trusted trade, tested results, and real departures.
              </p>
            </div>

            {/* Stat Circles */}
            <div className="flex flex-wrap gap-4 pt-4">
              {STAT_CIRCLES.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 ${stat.color} px-4 py-3 rounded-full shadow-md transition-all duration-700`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className={`fas ${stat.icon} text-sm`} />
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-sm">{stat.number}</div>
                    <div className="text-[10px] opacity-80 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
