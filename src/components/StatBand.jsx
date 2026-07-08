import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 8, suffix: '+', label: 'Countries', icon: 'fa-globe' },
  { value: 5, suffix: '+', label: 'Years Service', icon: 'fa-calendar-check' },
  { value: 500, suffix: '+', label: 'Workers Placed', icon: 'fa-users' },
  { value: 95, suffix: '%', label: 'Success Rate', icon: 'fa-chart-line' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
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
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatBand() {
  return (
    <section className="relative bg-primary py-14 md:py-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <i className={`fas ${stat.icon} text-accent text-2xl`} />
              <Counter target={stat.value} suffix={stat.suffix} />
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}