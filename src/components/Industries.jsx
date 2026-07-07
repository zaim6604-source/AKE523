import useInView from '../hooks/useInView';

const industries = [
  { name: 'IT & Software', icon: 'fa-laptop-code', color: 'bg-primary text-white' },
  { name: 'Banking & Finance', icon: 'fa-building-columns', color: 'bg-accent text-white' },
  { name: 'Healthcare', icon: 'fa-heart-pulse', color: 'bg-secondary text-white' },
  { name: 'Manufacturing', icon: 'fa-industry', color: 'bg-cta text-ink' },
  { name: 'Retail & E-commerce', icon: 'fa-cart-shopping', color: 'bg-highlight text-white' },
  { name: 'Hospitality', icon: 'fa-utensils', color: 'bg-primary text-white' },
  { name: 'Construction', icon: 'fa-helmet-safety', color: 'bg-accent text-white' },
  { name: 'Education', icon: 'fa-graduation-cap', color: 'bg-secondary text-white' },
  { name: 'Telecom', icon: 'fa-tower-cell', color: 'bg-cta text-ink' },
  { name: 'Logistics', icon: 'fa-truck', color: 'bg-highlight text-white' },
];

export default function Industries() {
  const [ref, inView] = useInView();

  return (
    <section id="industries" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-building text-primary/70 text-xs" />
            INDUSTRIES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">
            Industries We Serve
          </h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">
            Cross-industry expertise spanning Lahore's key business sectors.
          </p>
        </div>

        <div ref={ref} className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`${ind.color} inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <i className={`fas ${ind.icon} text-xs`} />
              {ind.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}