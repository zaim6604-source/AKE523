import useCountUp from '../hooks/useCountUp';
import useScrollReveal from '../hooks/useScrollReveal';

function StatItem({ end, suffix, label, icon }) {
  const [count, ref] = useCountUp(end);

  return (
    <div ref={ref} className="text-center text-white">
      <i className={`${icon} text-2xl sm:text-3xl mb-2 text-[#FFBE0B]`} />
      <div className="text-3xl sm:text-4xl font-extrabold font-[Plus_Jakarta_Sans] mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base text-white/80 font-medium">{label}</div>
    </div>
  );
}

export default function StatBand() {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-[#0496FF] py-12 sm:py-16">
      <div ref={revealRef} className="reveal max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <StatItem end={10000} suffix="+" label="Visas Processed" icon="fas fa-passport" />
          <StatItem end={9} suffix="+" label="Destination Countries" icon="fas fa-globe" />
          <StatItem end={15} suffix="+" label="Years Experience" icon="fas fa-calendar-check" />
          <StatItem end={98} suffix="%" label="Client Satisfaction" icon="fas fa-star" />
        </div>
      </div>
    </section>
  );
}
