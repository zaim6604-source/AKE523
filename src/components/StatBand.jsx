import { useState, useEffect, useRef } from 'react'

const STATS = [
  { icon: 'fa-user-check', target: 500, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe', target: 9, suffix: '', label: 'Countries Served' },
  { icon: 'fa-building', target: 50, suffix: '+', label: 'Partner Employers' },
  { icon: 'fa-star', target: 98, suffix: '%', label: 'Success Rate' },
]

function Counter({ target, suffix, label, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center text-white animate-count-up">
      <i className={`fas ${icon} text-3xl mb-2 opacity-80`} />
      <div className="text-3xl sm:text-4xl font-extrabold">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium opacity-80 mt-1">{label}</div>
    </div>
  )
}

export default function StatBand() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}