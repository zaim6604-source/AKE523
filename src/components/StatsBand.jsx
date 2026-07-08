import useInView from '../hooks/useInView';
import AnimatedCounter from './AnimatedCounter';

const STATS = [
  { icon: 'fa-users', end: 3500, suffix: '+', label: 'Workers Placed', color: 'text-white' },
  { icon: 'fa-globe', end: 10, suffix: '+', label: 'Countries', color: 'text-white' },
  { icon: 'fa-certificate', end: 100, suffix: '%', label: 'Govt. Licensed', color: 'text-white' },
  { icon: 'fa-handshake', end: 98, suffix: '%', label: 'Trusted in Rawalpindi', color: 'text-white' },
];

export default function StatsBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-[#FFD23F] py-8 sm:py-10 lg:py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                <i className={`fas ${stat.icon} text-xl sm:text-2xl text-[#FF4500]`} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#2B1200]/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}