import { STATS } from './constants';
import useInView from './useInView';

function StatItem({ stat, index, inView }) {
  return (
    <div
      className={`text-center p-4 md:p-6 transition-all duration-700 delay-${index * 150} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {stat.noNumber ? (
        <>
          <div className="text-3xl md:text-4xl mb-2 text-[#FFD740]">
            <i className={`fas ${stat.icon}`}></i>
          </div>
          <p className="text-white/90 font-semibold text-sm md:text-base leading-tight">{stat.label}</p>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-2">
            <i className={`fas ${stat.icon} text-[#FFD740] text-lg md:text-xl`}></i>
            <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading">
              {stat.number}
            </span>
          </div>
          <p className="text-[#CE93D8] font-medium text-sm md:text-base mt-1">{stat.label}</p>
        </>
      )}
    </div>
  );
}

export default function StatBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-gradient-to-r from-[#9C27B0] to-[#7B1FA2] py-10 md:py-14">
      <div ref={ref} className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}