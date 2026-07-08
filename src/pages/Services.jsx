import useInView from '../hooks/useInView'

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting candidates with verified employers across multiple countries, matching skills to the right opportunities.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application support, from document preparation to submission and follow-up.', color: 'bg-secondary' },
  { icon: 'fa-file-alt', title: 'Document Attestation', desc: 'Complete attestation and legalization of certificates and documents through relevant departments and embassies.', color: 'bg-accent' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of mandatory medical exams and trade tests at authorized centers.', color: 'bg-cta' },
  { icon: 'fa-chalkboard-teacher', title: 'Pre-Departure Orientation', desc: 'Orientation sessions on cultural awareness, contract terms, worker rights, and practical tips.', color: 'bg-highlight' },
  { icon: 'fa-plane', title: 'Air Ticketing & Travel', desc: 'Flight bookings, airport transfers, and travel documentation assistance.', color: 'bg-primary' },
  { icon: 'fa-search', title: 'Employer Verification', desc: 'Thorough verification of employers and job offers to ensure legitimate, safe employment.', color: 'bg-secondary' },
  { icon: 'fa-hard-hat', title: 'Manpower Supply', desc: 'Skilled and unskilled manpower supply for construction, hospitality, manufacturing, and more.', color: 'bg-accent' },
]

function AnimateOnView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto">
      <AnimateOnView>
        <div className="mb-8">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">OUR SERVICES</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">What We Offer</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Complete overseas employment services under one roof</p>
        </div>
      </AnimateOnView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <AnimateOnView key={s.title} delay={i * 60}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all group">
              <div className={`h-2 ${s.color}`} />
              <div className="p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fas ${s.icon} text-primary text-lg`} />
                </div>
                <h3 className="font-bold text-ink text-base mb-2">{s.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </div>
  )
}