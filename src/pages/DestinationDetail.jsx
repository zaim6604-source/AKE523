import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import COUNTRIES from '../data/countries'
import RevealOnScroll from '../components/RevealOnScroll'

export default function DestinationDetail() {
  const { slug } = useParams()
  const country = COUNTRIES.find((c) => c.slug === slug)
  const [heroError, setHeroError] = useState(false)

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">Destination Not Found</h1>
          <p className="text-ink/60 mb-6">The country you&apos;re looking for doesn&apos;t exist in our list.</p>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-highlight transition-colors"
          >
            <i className="fas fa-arrow-left" />
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  const c = country
  const whatsappText = `Hello%20Al-Imran%20International!%20I%20am%20interested%20in%20working%20in%20${encodeURIComponent(c.name)}.%20Please%20guide%20me%20about%20the%20process.`

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          {!heroError ? (
            <img
              src={c.heroImage}
              alt={c.name}
              className="w-full h-full object-cover"
              onError={() => setHeroError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-highlight" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-cta/60" />
          <div className="absolute inset-0 bg-dot-pattern" />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left" />
            Back to Destinations
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{c.flag}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                  {c.name}
                </h1>
                <p className="text-white/70 text-sm">
                  Processing time: <strong className="text-white">{c.processingTime}</strong>
                </p>
              </div>
            </div>

            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl">
              {c.description}
            </p>

            <a
              href={`https://wa.me/923467223031?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-cta text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-teal-600 transition-all shadow-xl shadow-cta/40 hover:shadow-cta/60 hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Apply for {c.name}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Job Roles */}
            <RevealOnScroll>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">
                  Available Roles in{' '}
                  <span className="text-primary">{c.name}</span>
                </h2>
                <div className="space-y-3">
                  {c.roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-3 bg-background rounded-xl p-4 border border-primary/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <i className="fas fa-briefcase" />
                      </div>
                      <span className="font-medium text-ink">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Requirements */}
            <RevealOnScroll>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">
                  Requirements for{' '}
                  <span className="text-primary">{c.name}</span>
                </h2>
                <div className="bg-background rounded-2xl p-6 border border-primary/10">
                  <ul className="space-y-3">
                    {c.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-ink/70 text-sm">
                        <i className="fas fa-check-circle text-cta mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-cta/10 rounded-xl border border-cta/20">
                  <p className="text-sm text-ink/70">
                    <strong className="text-cta">Processing time:</strong> Typically{' '}
                    {c.processingTime}. Actual time may vary based on documentation and
                    employer processing.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Work in {c.name}?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            Start your application today. Our team will guide you through every step.
          </p>
          <a
            href={`https://wa.me/923467223031?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Apply Now for {c.name}
          </a>
        </div>
      </section>
    </>
  )
}