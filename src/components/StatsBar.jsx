import useInView from '../hooks/useInView';

const stats = [
  { value: '500+', label: 'Placements', icon: 'fas fa-users' },
  { value: '120+', label: 'Client Companies', icon: 'fas fa-building' },
  { value: '15+', label: 'Industries', icon: 'fas fa-industry' },
  { value: '10+', label: 'Years Experience', icon: 'fas fa-calendar-check' },
];

export default function StatsBar() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-primary py-12 md:py-16">
      <div className="container-pad">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <i className={`${stat.icon} text-3xl text-cta mb-2`} />
              <div className="text-3xl md:text-4xl font-extrabold text-white font-heading">{stat.value}</div>
              <div className="text-secondary font-medium mt-1 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}