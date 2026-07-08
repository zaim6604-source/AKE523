import { Link } from 'react-router-dom'
import FadeUp from '../components/FadeUp'

const WA_NUMBER = '923338608944'

const stats = [
  { end: '1,500+', label: 'Workers Placed', icon: 'fa-users' },
  { end: '9', label: 'Countries', icon: 'fa-flag' },
  { end: '15+', label: 'Years Experience', icon: 'fa-calendar' },
  { end: '98%', label: 'Satisfaction', icon: 'fa-star' },
]

const quickLinks = [
  { to: '/services', label: 'Our Services', icon: 'fa-briefcase', desc: 'Explore our recruitment services' },
  { to: '/destinations', label: 'Destinations', icon: 'fa-globe', desc: 'View countries we serve' },
  { to: '/process', label: 'How It Works', icon: 'fa-road', desc: 'Our 5-step process' },
  { to: '/apply', label: 'Apply Now', icon: 'fa-paper-plane', desc: 'Start your journey today' },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* ── Hero Dashboard Card ── */}
      <FadeUp>
        <div className="dashboard-card overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* License badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <i className="fas fa-certificate" />
              GOVERNMENT LICENSED · 2279/SKT
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.1] mt-2">
              Sialkot's Modern Gateway to{' '}
              <span className="text-primary">Global Jobs</span>
            </h1>

            <p className="text-ink/60 mt-4 max-w-2xl leading-relaxed">
              Kotli Associates — trusted overseas recruitment agency based at Rehman Centre,
              Chowk Kotli Behram, Sialkot. We connect skilled workers from Punjab with
              reputable employers across the Gulf and Europe.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg"
              >
                <i className="fas fa-paper-plane" />
                Apply Now
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Counter Cards ── */}
      <FadeUp delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="dashboard-card text-center">
              <div className="w-10 h-10 rounded-xl bg-background text-primary flex items-center justify-center mx-auto mb-2">
                <i className={`fas ${s.icon}`} />
              </div>
              <div className="counter-value text-primary">{s.end}</div>
              <div className="text-xs font-semibold text-ink/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* ── Quick Links ── */}
      <FadeUp delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="dashboard-card flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-background text-primary flex items-center justify-center text-lg group-hover:bg-primary group-hover:text-white transition-all">
                <i className={`fas ${link.icon}`} />
              </div>
              <div>
                <div className="text-sm font-extrabold text-ink">{link.label}</div>
                <div className="text-xs text-ink/50">{link.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </FadeUp>

      {/* ── License Info ── */}
      <FadeUp delay={300}>
        <div className="dashboard-card flex items-center gap-3 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <i className="fas fa-certificate" />
          </div>
          <div>
            <div className="text-sm font-bold text-ink">Government Licensed · 2279/SKT</div>
            <div className="text-xs text-ink/50">
              Issued by the Bureau of Immigration & Overseas Employment, Government of Pakistan
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  )
}