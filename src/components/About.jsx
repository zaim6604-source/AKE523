import useInView from '../hooks/useInView';

const trustChips = [
  { label: 'Vetted Talent', icon: 'fa-shield-halved' },
  { label: 'Fast Turnaround', icon: 'fa-bolt' },
  { label: 'Confidential', icon: 'fa-lock' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-info-circle text-primary/70 text-xs" /> WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">Lahore's Trusted HR & Staffing Partner</h2>
          <p className="text-ink/60 text-lg mt-3 max-w-2xl mx-auto">Connecting businesses with the right talent — and professionals with the right opportunities.</p>
        </div>
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="overflow-hidden rounded-2xl shadow-purple-glow">
              <img src="/images/meeting.jpg" alt="ZB HR Services office" className="w-full h-80 lg:h-[450px] object-cover transition-transform duration-500 ease-in-out hover:scale-110" onError={(e) => { e.target.src = '/images/fallback.svg'; }} loading="lazy" />
            </div>
          </div>
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
            <p className="text-ink/70 leading-relaxed mb-5">ZB HR Services is a Lahore-based human resources and staffing firm dedicated to helping businesses recruit, manage, and retain top talent. Whether you're a growing company looking for the perfect hire or a professional seeking the next step in your career — we're here to help.</p>
            <p className="text-ink/70 leading-relaxed mb-8">With years of experience across multiple industries, our team understands the local talent landscape and delivers customized HR solutions that drive real results. From recruitment and payroll to compliance and training, we handle your people needs so you can focus on your business.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {trustChips.map((chip, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-background text-primary text-sm font-semibold px-4 py-2 rounded-full">
                  <i className={`fas ${chip.icon} text-xs`} /> {chip.label}
                </span>
              ))}
            </div>
            <a href="https://wa.me/923008582313?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20ZB%20HR%20Services." target="_blank" rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg" /> Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
