import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23006BA630"%3E%3Crect width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="%23006BA6"%3EImage%3C/text%3E%3C/svg%3E'
const imgErr = (e) => { e.target.src = FALLBACK }

const destinations = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', roles: 'Construction, Hospitality, Drivers, Technicians', img: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=400&q=80' },
  { slug: 'uae', name: 'UAE', flag: '🇦🇪', roles: 'Construction, Hospitality, Drivers, Technicians', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', roles: 'Construction, Hospitality, Security, Drivers', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80' },
  { slug: 'oman', name: 'Oman', flag: '🇴🇲', roles: 'Construction, Hospitality, Technicians, Drivers', img: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=400&q=80' },
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', roles: 'Healthcare, IT, Engineering, Skilled Trades', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80' },
  { slug: 'italy', name: 'Italy', flag: '🇮🇹', roles: 'Manufacturing, Hospitality, Construction, Agriculture', img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=400&q=80' },
  { slug: 'poland', name: 'Poland', flag: '🇵🇱', roles: 'Manufacturing, Construction, Logistics, IT', img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&q=80' },
  { slug: 'greece', name: 'Greece', flag: '🇬🇷', roles: 'Hospitality, Construction, Agriculture, Shipping', img: 'https://images.unsplash.com/photo-1590496794008-383c8070b257?w=400&q=80' },
  { slug: 'romania', name: 'Romania', flag: '🇷🇴', roles: 'Construction, Manufacturing, Logistics, IT', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80' },
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

export default function Destinations() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimateOnView>
        <div className="mb-8">
          <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">DESTINATIONS</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Countries We Recruit For</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Opportunities across the Middle East, Europe, and Asia</p>
        </div>
      </AnimateOnView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((d, i) => (
          <AnimateOnView key={d.slug} delay={i * 60}>
            <Link to={`/destinations/${d.slug}`} className="block bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-44 overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={imgErr} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-3xl">{d.flag}</span>
                  <span className="text-white font-bold text-lg">{d.name}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">In-Demand Roles</p>
                <p className="text-sm text-ink/70">{d.roles}</p>
                <span className="inline-flex items-center gap-1 text-xs text-secondary font-semibold mt-3 group-hover:gap-2 transition-all">
                  View Details <i className="fas fa-arrow-right text-xs" />
                </span>
              </div>
            </Link>
          </AnimateOnView>
        ))}
      </div>
    </div>
  )
}