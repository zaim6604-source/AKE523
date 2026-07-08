export default function TopStrip({ onMenuClick }) {
  return (
    <header className="top-strip">
      {/* Hamburger for mobile */}
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white text-lg p-1 -ml-1"
        aria-label="Toggle sidebar"
      >
        <i className="fas fa-bars" />
      </button>

      <span className="hidden sm:inline">
        <i className="fas fa-map-marker-alt text-cta" />
      </span>
      <span className="hidden sm:inline">Rehman Centre, Chowk Kotli Behram, Sialkot</span>

      <span className="hidden md:inline ml-auto text-white/70">
        <i className="fas fa-clock" /> Mon–Sat, 9AM–6PM
      </span>

      <span className="hidden lg:inline text-white/70">
        <i className="fas fa-phone" /> 055-4273677
      </span>
    </header>
  )
}