import useInView from '../hooks/useInView';

const testimonials = [
  { name: 'Ahmed Hassan', role: 'CEO, TechVista Solutions', text: 'ZB HR Services transformed our hiring process. They found us exceptional talent in half the time it used to take. Highly professional and responsive.', rating: 5 },
  { name: 'Sara Imran', role: 'HR Director, CareFirst Group', text: 'We\'ve been using ZB HR for payroll and compliance for over a year now. Their attention to detail and reliability is outstanding. A true partner.', rating: 5 },
  { name: 'Usman Chaudhry', role: 'Founder, GrowthCraze', text: 'As a startup, finding the right people was our biggest challenge. ZB HR connected us with amazing team members who share our vision. Game-changer!', rating: 5 },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-quote-right text-primary/70 text-xs" /> CLIENT SUCCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">What Our Clients Say</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">Trusted by Lahore's leading businesses.</p>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-background rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-primary/5 transition-all duration-500 hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} className="fas fa-star text-cta text-sm" />
                ))}
              </div>
              <p className="text-ink/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="pt-4 border-t border-primary/10">
                <p className="font-bold text-ink text-sm font-heading">{t.name}</p>
                <p className="text-xs text-secondary font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
