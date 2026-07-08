import { NavLink } from 'react-router-dom'
import FadeUp from './FadeUp'

const WA_NUMBER = '923338608944'

const navItems = [
  { to: '/', label: 'Overview', icon: 'fa-chart-pie' },
  { to: '/services', label: 'Services', icon: 'fa-briefcase' },
  { to: '/destinations', label: 'Destinations', icon: 'fa-globe' },
  { to: '/process', label: 'Process', icon: 'fa-road' },
  { to: '/apply', label: 'Apply', icon: 'fa-paper-plane' },
]

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      {/* Logo */}
      <div className="px-5 pt-6 pb-4 border-b border-white/10">
        <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
            <i className="fas fa-briefcase" />
          </div>
          <div>
            <div className="text-sm font-extrabold leading-tight">KOTLI</div>
            <div className="text-[10px] font-semibold text-secondary -mt-0.5">ASSOCIATES</div>
          </div>
        </NavLink>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-cta">
          <i className="fas fa-certificate text-[8px]" />
          License 2279/SKT
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <i className={`fas ${item.icon} w-4 text-center text-xs`} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* WhatsApp CTA */}
      <div className="px-4 py-4 border-t border-white/10">
        <FadeUp>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cta text-ink font-extrabold px-4 py-2.5 rounded-full text-sm hover:brightness-110 transition-all shadow-lg w-full justify-center"
          >
            <i className="fab fa-whatsapp" />
            Quick Apply
          </a>
        </FadeUp>

        {/* Contact info */}
        <div className="mt-3 space-y-1.5 text-[11px] text-white/40">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone text-[10px] w-3 text-center" />
            055-4273677
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-phone text-[10px] w-3 text-center" />
            055-3234535
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp text-[10px] w-3 text-center" />
            0333-8608944
          </div>
        </div>
      </div>
    </aside>
  )
}