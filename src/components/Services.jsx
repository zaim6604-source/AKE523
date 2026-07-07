import useInView from '../hooks/useInView';

const services = [
  { title: 'Recruitment & Talent Acquisition', desc: 'End-to-end hiring solutions to find the right talent for your organization.', color: 'bg-primary', icon: 'users' },
  { title: 'Executive Search & Headhunting', desc: 'Specialized search for senior leadership and hard-to-fill roles.', color: 'bg-secondary', icon: 'magnifying-glass' },
  { title: 'Temporary & Contract Staffing', desc: 'Flexible staffing solutions for seasonal, project, or interim needs.', color: 'bg-accent', icon: 'clock' },
  { title: 'Payroll & Benefits Management', desc: 'Accurate payroll processing and employee benefits administration.', color: 'bg-cta', icon: 'file-invoice' },
  { title: 'HR Consulting & Policy Setup', desc: 'Strategic HR guidance, policy development, and compliance support.', color: 'bg-highlight', icon: 'handshake' },
  { title: 'Training & Development', desc: 'Upskilling programs and professional development for your workforce.', color: 'bg-primary', icon: 'chart-line' },
  { title: 'Employee Onboarding & Compliance', desc: 'Streamlined onboarding processes and regulatory compliance management.', color: 'bg-accent', icon: 'clipboard-check' },
  { title: 'Outsourced HR (HR-as-a-Service)', desc: 'Complete HR department outsourcing for startups and SMEs.', color: 'bg-secondary', icon: 'building' },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="section-pad bg-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-briefcase text-primary/70 text-xs" /> OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">Comprehensive HR Solutions</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">From recruitment to HR consulting — everything your business needs to build a strong workforce.</p>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className={`rounded-2xl p-6 ${s.color} ${s.color === 'bg-cta' ? 'text-ink' : 'text-white'} transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms`, minHeight: '180px' }}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.color === 'bg-cta' ? 'bg-ink/10' : 'bg-white/15'}`}>
                <i className={`fas fa-${s.icon} text-lg`} />
              </div>
              <h3 className="font-bold text-base font-heading mb-2">{s.title}</h3>
              <p className={`text-sm leading-relaxed ${s.color === 'bg-cta' ? 'text-ink/70' : 'text-white/80'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
