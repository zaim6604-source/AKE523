import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', icon: 'fa-chart-pie', label: 'Overview' },
  { to: '/services', icon: 'fa-briefcase', label: 'Services' },
  { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations' },
  { to: '/process', icon: 'fa-route', label: 'Process' },
  { to: '/apply', icon: 'fa-paper-plane', label: 'Apply Now' },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-white/20 text-white shadow-md'
        : 'text-white/70 hover:text-white hover:bg-white/10'
    }`

  return (
    <div className="min-h-screen bg-background text-ink flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-primary to-highlight flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-ink font-extrabold text-sm shadow-md">
              ME
            </div>
            <div className="min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Mian Enterprises</p>
              <p className="text-white/50 text-[10px] font-medium">OEP 2215/MLK</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto sidebar-scroll">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={() => setSidebarOpen(false)}>
              <i className={`fas ${item.icon} w-5 text-center text-sm`} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom contact */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <a
            href="https://wa.me/923009326122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-accent text-ink font-bold rounded-xl text-sm hover:opacity-90 transition-all shadow-md"
          >
            <i className="fab fa-whatsapp" /> WhatsApp Us
          </a>
          <div className="text-xs text-white/60 space-y-1.5">
            <a href="tel:0945831871" className="flex items-center gap-2 hover:text-accent transition-colors">
              <i className="fas fa-phone" /> 0945-831871
            </a>
            <a href="https://wa.me/923009326122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <i className="fab fa-whatsapp" /> 0300-9326122
            </a>
            <a href="mailto:info@mianenterprises.pk" className="flex items-center gap-2 hover:text-accent transition-colors truncate">
              <i className="fas fa-envelope" /> info@mianenterprises.pk
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top strip */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-6">
          <div className="h-14 flex items-center justify-between">
            <button className="lg:hidden text-primary p-1 -ml-1" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
              <i className="fas fa-bars text-xl" />
            </button>
            <div className="hidden lg:flex items-center gap-2 text-xs text-ink/60">
              <i className="fas fa-map-marker-alt text-primary" />
              Munda Chowk, Timergara, Lower Dir
            </div>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/923009326122" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-lg" />
              </a>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}