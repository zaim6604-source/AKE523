import { useState } from 'react'

const CHIPS = [
  'Govt. Licensed 2300/LHR',
  '5+ Years Experience',
  'Gulf &amp; Europe Focus',
  'Fast Processing',
  'Skilled &amp; Unskilled',
  'Document Attestation',
]

const PROMISES = [
  'Complete transparency — no hidden fees, ever.',
  'End-to-end support from application to departure.',
  'Verified employers with fair, safe working conditions.',
  'Fastest processing times for Gulf and European visas.',
  'Personalized guidance for every candidate.',
]

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill label */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-info-circle" />
            About Us
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image */}
          <div className="relative">
            {!imgError ? (
              <img
                src="/images/about.jpg"
                alt="Al Rabaz International consultation"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <i className="fas fa-building text-5xl text-primary/40" />
              </div>
            )}
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-cta text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-cta/30">
              <i className="fas fa-id-card mr-2" />
              License 2300/LHR
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-6">
              Trusted Recruiting Agency{' '}
              <span className="text-primary">in Pir Mahal</span>
            </h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Based at <strong>Rajana Road, Pir Mahal</strong>, Al Rabaz International is a government-licensed recruitment firm (License <strong>2300/LHR</strong>) dedicated to connecting local workers with trusted employers across the Gulf and Europe.
              </p>
              <p>
                We specialize in placing skilled and unskilled workers from the Toba Tek Singh region into legitimate, well-paying jobs abroad. From Saudi Arabia to South Korea, our team handles every step — visa processing, document attestation, medical coordination, and pre-departure orientation.
              </p>
            </div>

            {/* Our Promise */}
            <div className="mt-6 p-5 bg-white rounded-2xl border border-primary/10">
              <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
                <i className="fas fa-handshake text-primary" />
                Our Promise
              </h3>
              <ul className="space-y-2">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <i className="fas fa-check-circle text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  <i className="fas fa-check-circle text-[10px]" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}