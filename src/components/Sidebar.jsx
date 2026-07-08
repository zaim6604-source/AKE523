import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home', icon: 'fa-house' },
  { to: '/about', label: 'About', icon: 'fa-building' },
  { to: '/services', label: 'Services', icon: 'fa-handshake' },
  { to: '/countries', label: 'Countries', icon: 'fa-globe' },
  { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
]

const WHATSAPP = 'https://wa.me/923215344448'
const WHATSAPP_SECONDARY = 'https://wa.me/923125227211'
const PHONE_1 = '0321-5344448'
const PHONE_2 = '0312-5227211'
const PHONE_3 = '0333-5227211'
const FACEBOOK = 'https://www.facebook.com/AlBassamiRecruitingAgency/'

export default function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-primary/10 text-primary shadow-sm'
        : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
    }`

  const navContent = (
    <>
      {/* Logo & License */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-primary to-highlight flex items-center justify-center shadow-lg shadow-primary/20">
          <i className="fas fa-briefcase text-white text-xl" />
        </div>
        <h1 className="text-lg font-bold leading-tight text-ink">
          Al-Bassami
        </h1>
        <p className="text-xs text-ink/50 font-medium">Recruiting Agency</p>
        <span className="inline-block mt-1.5 px-3 py-0.5 text-[10px] font-semibold bg-accent/20 text-accent/80 rounded-full tracking-wide">
          License 2251/RWP
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 mb-6">
        {NAV.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={linkClass}
            onClick={() => setDrawerOpen(false)}
          >
            <i className={`fas ${icon} w-5 text-center text-sm`} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* WhatsApp CTA */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-cta hover:bg-cta/90 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-cta/20"
      >
        <i className="fab fa-whatsapp text-base" />
        Quick Apply
      </a>

      {/* Contact Block */}
      <div className="mt-6 space-y-2.5 text-xs text-ink/60">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
          <i className="fab fa-whatsapp text-primary text-sm w-4 text-center" />
          {PHONE_1}
        </a>
        <a href={`tel:${PHONE_1}`} className="flex items-center gap-2 hover:text-primary transition-colors">
          <i className="fas fa-phone text-sm w-4 text-center" />
          {PHONE_1}
        </a>
        <a href={`tel:${PHONE_2}`} className="flex items-center gap-2 hover:text-primary transition-colors pl-6">
          {PHONE_2}
        </a>
        <a href={`tel:${PHONE_3}`} className="flex items-center gap-2 hover:text-primary transition-colors pl-6">
          {PHONE_3}
        </a>
        <a
          href={FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <i className="fab fa-facebook text-[#1877F2] text-sm w-4 text-center" />
          Facebook
        </a>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-80 border-r border-ink/5 bg-white/80 backdrop-blur-xl px-6 py-8 overflow-y-auto z-30">
        {navContent}
      </aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-xl border-b border-ink/5 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 -ml-2 rounded-lg hover:bg-ink/5 text-ink"
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-xl" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-highlight flex items-center justify-center">
            <i className="fas fa-briefcase text-white text-[10px]" />
          </div>
          <span className="text-sm font-bold text-ink">Al-Bassami</span>
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cta text-white text-xs font-semibold"
        >
          <i className="fab fa-whatsapp" />
          Apply
        </a>
      </div>

      {/* Drawer Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <div className={`drawer-panel ${drawerOpen ? 'open' : ''}`}>
        <div className="px-6 py-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-ink/5 text-ink/60"
              aria-label="Close menu"
            >
              <i className="fas fa-xmark text-xl" />
            </button>
          </div>
          {navContent}
        </div>
      </div>

      {/* Spacer for mobile top bar */}
      <div className="lg:hidden h-14" />
    </>
  )
}