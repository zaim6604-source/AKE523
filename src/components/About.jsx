import FallbackImage from './FallbackImage'
import ScrollReveal from './ScrollReveal'

const CHIPS = [
  'Government Licensed 2167/MLK',
  '10+ Years Experience',
  'Gulf & Europe Placement',
  'Visa Processing',
  'Pre-Departure Training',
  '24/7 Support',
]

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Wavy divider top */}
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-info-circle" />
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Your Trusted Recruitment Partner in <span className="text-primary">Malakand</span>
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Hammad Recruiting Agency has been connecting skilled workers from KPK with reputable employers worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal className="relative" delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format"
                  alt="Hammad Recruiting Agency office at Tahir Plaza, Batkhela"
                  className="w-full h-72 lg:h-96"
                  icon="fa-building"
                  bgClass="from-primary to-secondary"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-5 py-3 rounded-xl shadow-lg hidden lg:block">
                <div className="text-sm font-bold">Serving Since</div>
                <div className="text-2xl font-extrabold">2014</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <p className="text-ink/70 leading-relaxed">
                  Based at <strong>Tahir Plaza, Batkhela</strong>, Hammad Recruiting Agency (License 2167/MLK)
                  is a government-approved manpower recruitment agency dedicated to serving the people of
                  <strong> Malakand, Swat, Dir, and across KPK</strong>.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  We specialize in placing skilled and semi-skilled workers with trusted employers in
                  <strong> Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Croatia, and Malaysia</strong>.
                  Our process is transparent, our fees are fair, and our commitment to our candidates is unwavering.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/10"
                    >
                      <i className="fas fa-check-circle text-primary text-[10px]" />
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg mt-2"
                >
                  Visit Our Office
                  <i className="fas fa-arrow-right text-sm" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Wavy divider bottom */}
      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}