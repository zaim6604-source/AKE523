import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

export default function Story() {
  return (
    <div className="page-enter-active">
      {/* ── Hero ── */}
      <section className="bg-background pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-6 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-book-open" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink text-center leading-tight max-w-4xl mx-auto">
              The Story Behind{' '}
              <span className="text-primary">Malgeey Overseas</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Narrative body ── */}
      <section className="pb-16 md:pb-24 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
              {/* Office photo */}
              <div className="rounded-xl overflow-hidden mb-8 shadow-md">
                <SafeImage
                  src="/images/about.jpg"
                  alt="Malgeey Overseas office"
                  className="w-full h-64 sm:h-80 object-cover"
                  fallbackType="about"
                />
              </div>

              <div className="editorial-body space-y-5">
                <p>
                  <strong className="text-ink">Malgeey Overseas Employment Promoters</strong> was
                  founded with a single mission: to create dignified, well-paying job opportunities
                  for the hardworking people of Khyber Pakhtunkhwa. From our office at <strong>Khyber
                  Bazar, Peshawar</strong>, we've built a reputation for honesty, transparency, and
                  results.
                </p>

                <p>
                  Our founder, having himself experienced the challenges of finding legitimate overseas
                  employment, established Malgeey Overseas to bridge the gap between Pakistan's skilled
                  workforce and international employers. What started as a small operation serving local
                  communities has grown into a trusted agency placing workers across the Gulf, Europe,
                  and Asia.
                </p>
              </div>

              <blockquote className="pull-quote">
                "Every worker who walks through our door carries a story of hope. Our job is to help
                them write the next chapter — in a country where their skills are valued and their
                future is bright."
              </blockquote>

              <div className="editorial-body space-y-5">
                <p>
                  Today, Malgeey Overseas serves hundreds of workers annually, with a network of
                  trusted employers in Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Greece,
                  Croatia, and Malaysia. We handle every step of the process — from registration
                  and documentation to visa processing, medical screening, and pre-departure briefing.
                </p>

                <p>
                  Our position at <strong>Khyber Bazar</strong> puts us at the heart of Peshawar's
                  commercial district, accessible to workers from across KPK and the tribal districts.
                  We pride ourselves on being approachable, transparent, and committed to our workers'
                  wellbeing — even after they've landed their jobs abroad.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { num: '2,000+', label: 'Workers Placed' },
                { num: '9', label: 'Countries' },
                { num: '15+', label: 'Years' },
                { num: '97%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-md border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">{s.num}</div>
                  <div className="text-xs text-ink/50 mt-1 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}