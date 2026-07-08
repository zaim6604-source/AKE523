import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%23006BA630"%3E%3Crect width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter,sans-serif" font-size="24" fill="%23006BA6"%3EImage%3C/text%3E%3C/svg%3E'
const imgErr = (e) => { e.target.src = FALLBACK }

const counters = [
  { icon: 'fa-users', label: 'Workers Placed', end: 2500, suffix: '+' },
  { icon: 'fa-globe-asia', label: 'Countries', end: 9, suffix: '+' },
  { icon: 'fa-calendar', label: 'Years of Service', end: 6, suffix: '+' },
  { icon: 'fa-certificate', label: 'Govt. Licensed', end: 1, text: true },
]

function CounterCard({ item }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView || item.text) return
    const end = item.end
    const inc = end / (2000 / 16)
    const t = setInterval(() => {
      setVal((v) => {
        const next = v + inc
        return next >= end ? (clearInterval(t), end) : next
      })
    }, 16)
    return () => clearInterval(t)
  }, [inView, item])

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-md p-5 text-center border border-primary/10 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <i className={`fas ${item.icon} text-xl text-primary`} />
      </div>
      <div className="text-2xl md:text-3xl font-extrabold text-primary">
        {item.text ? <i className="fas fa-check-circle text-accent text-3xl" /> : `${Math.floor(val)}${item.suffix}`}
      </div>
      <p className="text-sm text-ink/60 font-medium mt-1">{item.label}</p>
    </div>
  )
}

function AnimateOnView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Overview() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Hero card */}
      <AnimateOnView>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-highlight p-6 md:p-10 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <span className="inline-block bg-cta text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              Govt. Licensed OEP — 2215/MLK
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Your Gateway from <span className="text-accent">Timergara</span><br />to Global Jobs
            </h1>
            <p className="text-white/80 max-w-xl text-sm md:text-base mb-6">
              Based at Munda Chowk, Timergara, Lower Dir — Mian Enterprises connects skilled Pakistani workers with verified employers across the Middle East and Europe.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/923009326122?text=*Application%20-%20Mian%20Enterprises*%0A%0A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cta text-white font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-cta/30">
                <i className="fas fa-paper-plane" /> Apply Now
              </a>
              <a href="https://wa.me/923009326122" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/30 transition-all border border-white/30">
                <i className="fab fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </AnimateOnView>

      {/* Counter cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {counters.map((item, i) => (
          <AnimateOnView key={item.label} delay={i * 80}>
            <CounterCard item={item} />
          </AnimateOnView>
        ))}
      </div>

      {/* Quick links */}
      <AnimateOnView>
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-primary/10">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/services', icon: 'fa-briefcase', label: 'Our Services', color: 'from-primary to-secondary' },
              { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations', color: 'from-secondary to-primary' },
              { to: '/process', icon: 'fa-route', label: 'How It Works', color: 'from-accent to-cta' },
              { to: '/apply', icon: 'fa-paper-plane', label: 'Apply Now', color: 'from-cta to-accent' },
            ].map((l) => (
              <Link key={l.to} to={l.to}
                className={`bg-gradient-to-br ${l.color} rounded-xl p-4 md:p-5 text-white hover:scale-[1.02] transition-transform shadow-md`}
              >
                <i className={`fas ${l.icon} text-xl md:text-2xl mb-2`} />
                <p className="text-sm font-bold">{l.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </AnimateOnView>

      {/* Image strip */}
      <AnimateOnView>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=400&q=80',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-28 md:h-36 object-cover rounded-xl shadow-sm" onError={imgErr} loading="lazy" />
          ))}
        </div>
      </AnimateOnView>

      {/* CTA */}
      <AnimateOnView className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-10 border border-primary/10">
        <h2 className="text-xl md:text-3xl font-bold text-primary mb-2">Ready to Start Your Journey?</h2>
        <p className="text-ink/60 mb-5 text-sm md:text-base">Take the first step toward an international career today.</p>
        <Link to="/apply" className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-cta/30">
          <i className="fas fa-paper-plane" /> Apply Now
        </Link>
      </AnimateOnView>
    </div>
  )
}