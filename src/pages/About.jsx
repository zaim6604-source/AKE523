import ScrollReveal from '../components/ScrollReveal'
import FallbackImage from '../components/FallbackImage'
import { COMPANY } from '../data/siteData'

const CHIPS = [
  `Government Licensed ${COMPANY.license}`,
  '12+ Years Experience',
  'Gulf & Europe Placement',
  'Visa Processing',
  'Pre-Departure Training',
  '24/7 Support',
]

export default function About() {
  return (
    <section className="relative animate-page-enter">
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
                Chakwal's Trusted Recruitment Partner
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                {COMPANY.name} has been connecting skilled workers from Punjab with reputable employers worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal className="relative" delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format"
                  alt={`${COMPANY.name} office at Usmania Plaza, Chakwal`}
                  className="w-full h-72 lg:h-96"
                  icon="fa-building"
                  bgClass="from-primary to-secondary"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-5 py-3 rounded-xl shadow-lg hidden lg:block">
                <div className="text-sm font-bold">Serving Since</div>
                <div className="text-2xl font-extrabold">2012</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <p className="text-ink/70 leading-relaxed">
                  Based at <strong>Usmania Plaza, Pindi Road, Chakwal</strong>, {COMPANY.name} (License {COMPANY.license})
                  is a government-approved manpower recruitment agency dedicated to serving the people of
                  <strong> Chakwal, Talagang, Jhelum, and across Punjab</strong>.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  We specialize in placing skilled and semi-skilled workers with trusted employers in
                  <strong> Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, and Romania</strong>.
                  Our process is transparent, our fees are fair, and our commitment to our candidates is unwavering.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  At {COMPANY.name}, we believe every hardworking Pakistani deserves access to genuine overseas
                  employment opportunities. Our team personally guides each candidate from documentation through
                  departure, ensuring a smooth and stress-free experience.
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
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg mt-2"
                >
                  <i className="fab fa-whatsapp" />
                  Apply Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary text-3xl mx-auto mb-4">
                  <i className="fas fa-bullseye" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Our Mission</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  To connect skilled Pakistani workers with genuine overseas employment opportunities,
                  ensuring fair treatment, transparent processes, and successful outcomes.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-cta/20 flex items-center justify-center text-accent text-3xl mx-auto mb-4">
                  <i className="fas fa-eye" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Our Vision</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  To be Punjab's most trusted recruitment agency, known for integrity, reliability,
                  and transforming lives through ethical overseas employment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cta/20 to-primary/20 flex items-center justify-center text-cta text-3xl mx-auto mb-4">
                  <i className="fas fa-heart" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Our Values</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Transparency, integrity, and candidate welfare are at the core of everything we do.
                  Every candidate is treated with dignity and respect.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}