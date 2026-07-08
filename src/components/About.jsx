import { useState } from 'react'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80'

const CHIPS = [
  'Govt. Licensed 2166/RWP',
  '10+ Years Experience',
  'All Countries',
  'Fast Processing',
  'Skilled & Unskilled',
  'Document Attestation',
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

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Image */}
          <div className="relative">
            {!imgError ? (
              <img
                src={ABOUT_IMAGE}
                alt="Malakand Recruiting Agency office"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <i className="fas fa-building text-5xl text-primary/40" />
              </div>
            )}
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-cta text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-cta/30">
              <i className="fas fa-id-card mr-2" />
              License 2166/RWP
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-6">
              Trusted Recruiting Agency{' '}
              <span className="text-primary">in Faizabad, Rawalpindi</span>
            </h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Based at <strong>Office 17-U, Twin City Plaza, Faizabad, Murree Road, Rawalpindi</strong>, Malakand Recruiting Agency is a government-licensed recruitment firm (License <strong>2166/RWP</strong>) dedicated to providing fast, reliable work-visa services for every country.
              </p>
              <p>
                With an experienced and qualified team, we handle everything from work visa processing and overseas job placement to document attestation, medical coordination, and pre-departure orientation. Our mission is simple: get you working abroad — the fastest way possible.
              </p>
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