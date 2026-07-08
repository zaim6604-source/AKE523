import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

export default function About() {
  const chips = [
    'Gulf Recruitment', 'European Jobs', 'Skilled Workers',
    'Documentation', 'Visa Processing', 'Medical Coordination',
    'Pre-Departure Briefing', 'South Punjab Focus',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill badge */}
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-6">
            <i className="fas fa-info-circle" />
            About Us
          </div>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp delay={100} className="w-full lg:w-5/12 shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <SafeImage
                src="/images/about.jpg"
                alt="Hairo Khan Buzdar International office"
                className="w-full h-72 sm:h-96 object-cover"
                fallbackType="about"
              />
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={200} className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-primary">Overseas Recruitment</span>
            </h2>
            <p className="text-ink/70 mt-4 leading-relaxed">
              Based in <strong>Pathar Bazar, Dera Ghazi Khan</strong>, Hairo Khan Buzdar International
              has been connecting skilled workers from South Punjab with reputable employers across
              the Gulf and Europe since 2012.
            </p>
            <p className="text-ink/70 mt-3 leading-relaxed">
              As a <strong>government-licensed agency (2169/DGK)</strong>, we handle every step
              of the recruitment process — from documentation and visa processing to pre-departure
              briefing — ensuring a smooth, dignified journey for every worker we place.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 bg-background text-primary text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  <i className="fas fa-check-circle text-[10px]" />
                  {c}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}