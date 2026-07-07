import useInView from '../hooks/useInView';

const features = [
  { title: 'Rigorous Vetting', desc: 'Every candidate is thoroughly screened, verified, and matched to your specific requirements.', icon: 'fa-shield-halved', color: 'from-primary to-highlight' },
  { title: 'Industry Expertise', desc: 'Deep domain knowledge across 10+ industries ensures we understand your unique hiring needs.', icon: 'fa-chart-simple', color: 'from-accent to-primary' },
  { title: 'Confidential & Compliant', desc: 'We maintain strict confidentiality and full compliance with labor laws and regulations.', icon: 'fa-scale-balanced', color: 'from-highlight to-accent' },
  { title: 'Dedicated Account Manager', desc: 'A single point of contact who knows your business and delivers personalized service.', icon: 'fa-user-tie', color: 'from-secondary to-primary' },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section id="why-choose-us" className="section-pad bg-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-star text-primary/70 text-xs" /> WHY ZB HR
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">Why Partner With Us?</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">What sets ZB HR Services apart as Lahore's preferred HR partner.</p>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 border border-primary/5 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                <i className={`fas ${f.icon} text-white text-lg`} />
              </div>
              <h3 className="font-bold text-ink text-lg font-heading mb-2">{f.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
