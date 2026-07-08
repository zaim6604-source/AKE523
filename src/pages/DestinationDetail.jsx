import { useParams, Link } from 'react-router-dom'

const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%23006BA630"%3E%3Crect width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter,sans-serif" font-size="24" fill="%23006BA6"%3EImage%3C/text%3E%3C/svg%3E'
const imgErr = (e) => { e.target.src = FALLBACK }

const destinations = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', roles: ['Construction Workers', 'Heavy Drivers', 'Technicians', 'Hospitality Staff'], requirements: ['Valid passport (6+ months)', 'CNIC', 'Educational certificates', 'Experience letters', 'Medical fitness'], img: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800&q=80' },
  { slug: 'uae', name: 'UAE', flag: '🇦🇪', roles: ['Construction Workers', 'Drivers', 'Technicians', 'Hospitality Staff'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters', 'Police clearance'], img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', roles: ['Construction Workers', 'Security Guards', 'Drivers', 'Hospitality Staff'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters', 'Medical fitness'], img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80' },
  { slug: 'oman', name: 'Oman', flag: '🇴🇲', roles: ['Construction Workers', 'Technicians', 'Drivers', 'Hospitality Staff'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters'], img: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80' },
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', roles: ['Healthcare Professionals', 'IT Specialists', 'Engineers', 'Skilled Trades'], requirements: ['Valid passport', 'Degree attestation', 'Language proficiency (preferred)', 'Professional certifications', 'Experience letters'], img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80' },
  { slug: 'italy', name: 'Italy', flag: '🇮🇹', roles: ['Manufacturing Workers', 'Hospitality Staff', 'Construction Workers', 'Agriculture Workers'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters'], img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=800&q=80' },
  { slug: 'poland', name: 'Poland', flag: '🇵🇱', roles: ['Manufacturing Workers', 'Construction Workers', 'Logistics Staff', 'IT Specialists'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters'], img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80' },
  { slug: 'greece', name: 'Greece', flag: '🇬🇷', roles: ['Hospitality Staff', 'Construction Workers', 'Agriculture Workers', 'Shipping Crew'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Medical fitness'], img: 'https://images.unsplash.com/photo-1590496794008-383c8070b257?w=800&q=80' },
  { slug: 'romania', name: 'Romania', flag: '🇷🇴', roles: ['Construction Workers', 'Manufacturing Workers', 'Logistics Staff', 'IT Specialists'], requirements: ['Valid passport', 'CNIC', 'Educational certificates', 'Experience letters'], img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80' },
]

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = destinations.find((d) => d.slug === slug)

  if (!dest) {
    return (
      <div className="text-center py-20">
        <i className="fas fa-map-marker-alt text-4xl text-ink/30 mb-4" />
        <h2 className="text-xl font-bold text-primary mb-2">Destination Not Found</h2>
        <p className="text-ink/60 mb-4">The country you're looking for isn't listed yet.</p>
        <Link to="/destinations" className="text-secondary font-semibold hover:underline inline-flex items-center gap-1">
          <i className="fas fa-arrow-left" /> Back to Destinations
        </Link>
      </div>
    )
  }

  const applyText = `*Application for ${dest.name} - Mian Enterprises*%0A%0A_I am interested in ${dest.name} opportunities._`

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/destinations" className="inline-flex items-center gap-1 text-sm text-secondary font-semibold hover:underline mb-4">
        <i className="fas fa-arrow-left" /> Back to Destinations
      </Link>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
        <div className="relative h-56 md:h-72">
          <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" onError={imgErr} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <span className="text-4xl">{dest.flag}</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white">{dest.name}</h1>
              <p className="text-white/70 text-sm">Employment Opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
            <i className="fas fa-briefcase text-secondary" /> In-Demand Roles
          </h2>
          <ul className="space-y-2">
            {dest.roles.map((r) => (
              <li key={r} className="flex items-center gap-2 text-sm text-ink/70">
                <i className="fas fa-check-circle text-accent text-xs" /> {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
            <i className="fas fa-file-alt text-secondary" /> Requirements
          </h2>
          <ul className="space-y-2">
            {dest.requirements.map((r) => (
              <li key={r} className="flex items-center gap-2 text-sm text-ink/70">
                <i className="fas fa-check-circle text-accent text-xs" /> {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 text-center border border-primary/10">
        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2">Interested in {dest.name}?</h3>
        <p className="text-ink/60 text-sm mb-5">Apply now and our team will guide you through the process.</p>
        <a href={`https://wa.me/923009326122?text=${encodeURIComponent(applyText)}`} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-cta/30">
          <i className="fab fa-whatsapp" /> Apply for {dest.name}
        </a>
      </div>
    </div>
  )
}