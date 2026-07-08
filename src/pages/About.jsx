const WHY_US = [
  'Government Licensed (2251/RWP)',
  '15+ Years of Industry Experience',
  '10,000+ Successful Placements',
  'Verified International Employers',
  'End-to-End Processing Support',
  'Transparent & Ethical Practices',
]

export default function About() {
  return (
    <div className="space-y-12 animate-fade-up pt-6 lg:pt-10">
      <div>
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-3 border border-primary/10">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
          Who We Are
        </h1>
        <p className="text-ink/60 leading-relaxed max-w-3xl">
          Based in the heart of <strong>Chandni Chowk, Satellite Town, Rawalpindi</strong>,
          Al-Bassami Recruiting Agency has been a trusted name in overseas employment
          since our establishment. Licensed under <strong>2251/RWP</strong>, we specialize
          in connecting Pakistani professionals with reputable employers across the
          Middle East, Europe, and Asia.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <i className="fas fa-bullseye text-primary" />
          </div>
          <h2 className="text-xl font-bold text-ink mb-3">Our Mission</h2>
          <p className="text-sm text-ink/60 leading-relaxed">
            To provide Pakistan-based companies with world-class professionals and
            open career opportunities that upgrade the competitiveness of the
            Pakistani workforce on a global scale.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
            <i className="fas fa-eye text-secondary" />
          </div>
          <h2 className="text-xl font-bold text-ink mb-3">Our Vision</h2>
          <p className="text-sm text-ink/60 leading-relaxed">
            To become a leading HR name in Pakistan's recruitment industry,
            recognized for integrity, excellence, and our commitment to transforming
            lives through meaningful international employment.
          </p>
        </div>
      </div>

      {/* Office Photo Placeholder */}
      <div className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-2xl border border-ink/5 overflow-hidden">
        <div className="aspect-video bg-ink/5 flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-building text-4xl text-ink/20 mb-2" />
            <p className="text-sm text-ink/40">Office No. 16, 2nd Floor, Resham Plaza</p>
            <p className="text-sm text-ink/40">Chandni Chowk, Satellite Town, Rawalpindi</p>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div>
        <h2 className="text-2xl font-bold text-ink mb-5">Why Choose Us?</h2>
        <div className="flex flex-wrap gap-3">
          {WHY_US.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-ink/5 shadow-sm text-sm font-medium"
            >
              <i className="fas fa-check-circle text-primary text-xs" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Trust Chips */}
      <div className="bg-cta/5 rounded-2xl p-6 sm:p-8 border border-cta/10">
        <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
          <i className="fas fa-shield-halved text-cta" />
          Trust & Credentials
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-ink/60">
          <div className="flex items-start gap-3">
            <i className="fas fa-certificate text-cta mt-0.5" />
            <span>Government Licensed (2251/RWP) — fully compliant with Overseas Employment Corporation regulations.</span>
          </div>
          <div className="flex items-start gap-3">
            <i className="fas fa-handshake text-cta mt-0.5" />
            <span>Member of recognized trade bodies with a track record of ethical recruitment practices.</span>
          </div>
          <div className="flex items-start gap-3">
            <i className="fas fa-star text-cta mt-0.5" />
            <span>Thousands of satisfied candidates placed across 9+ countries worldwide.</span>
          </div>
        </div>
      </div>
    </div>
  )
}