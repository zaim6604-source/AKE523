export default function MarqueeBar() {
  return (
    <div className="relative top-16 sm:top-20 bg-primary text-white overflow-hidden py-2.5">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="flex items-center gap-2">
              <i className="fas fa-plane text-accent text-sm" />
              Gulf &amp; Europe Recruitment
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-bolt text-accent text-sm" />
              Fast, Reliable Service
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-id-card text-accent text-sm" />
              License 2300/LHR
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-location-dot text-accent text-sm" />
              Rajana Road, Pir Mahal
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-phone text-accent text-sm" />
              046-3361889
            </span>
            <span className="text-white/60">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}