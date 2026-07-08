import useInView from '../hooks/useInView'

const steps = [
  { num: 1, title: 'Register & Consult', icon: 'fa-clipboard-list', desc: 'Visit our office at Munda Chowk, Timergara, or reach out via WhatsApp. We\'ll discuss your skills, preferences, and available opportunities.', color: 'bg-primary' },
  { num: 2, title: 'Documents & Visa', icon: 'fa-file-contract', desc: 'We guide you through document collection, attestation, and visa application. Our team handles the paperwork so you don\'t have to.', color: 'bg-secondary' },
  { num: 3, title: 'Medical & Trade Test', icon: 'fa-stethoscope', desc: 'We coordinate medical examinations and trade tests at authorized centers to meet destination country requirements.', color: 'bg-accent' },
  { num: 4, title: 'Employer Confirmation', icon: 'fa-handshake', desc: 'Once your employer confirms the offer, we review the contract with you to ensure everything is clear and fair.', color: 'bg-cta' },
  { num: 5, title: 'Ticketing & Departure', icon: 'fa-plane-departure', desc: 'We arrange your flight, provide pre-departure orientation, and ensure you have everything needed for a smooth journey.', color: 'bg-highlight' },
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

export default function Process() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimateOnView>
        <div className="mb-10">
          <span className="inline-block bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full mb-3">HOW IT WORKS</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Your Journey in 5 Steps</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Simple, transparent process from registration to departure</p>
        </div>
      </AnimateOnView>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <AnimateOnView key={s.num} delay={i * 100}>
              <div className="relative flex items-start gap-4 md:gap-6">
                <div className={`relative z-10 w-12 h-12 rounded-full ${s.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md`}>
                  {s.num}
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-md p-4 md:p-6 border border-primary/10 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`fas ${s.icon} text-lg ${s.color.replace('bg-', 'text-')}`} />
                    <h3 className="font-bold text-ink text-base">{s.title}</h3>
                  </div>
                  <p className="text-ink/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </div>
  )
}