import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center`}>
        <i className="fas fa-image text-white/50 text-4xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Sunburst ray backdrop */}
      <div className="sunburst pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              <i className="fas fa-badge-check mr-1.5"></i>
              Licensed Recruiter — 2202/MLK
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-ink">
              Fresh Opportunities,{" "}
              <span className="text-primary">Honest Guidance</span>
              <br />
              <span className="text-accent">Real Departures</span>
            </h1>

            <p className="text-base sm:text-lg text-ink/70 mb-8 leading-relaxed max-w-lg">
              Afnan Recruiting Agency places Rawalpindi's workers with trusted Gulf and European
              employers — licensed and clear.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923445937116"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <i className="fas fa-paper-plane"></i>
                Apply Now
              </a>
              <a
                href="https://wa.me/923445937116"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-primary/30 text-primary px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary/5 transition-all inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp Us
              </a>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-primary/10">
              <div className="flex items-center gap-2">
                <i className="fas fa-users text-primary"></i>
                <span className="text-sm text-ink/60">3000+ Placed</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-globe text-accent"></i>
                <span className="text-sm text-ink/60">9+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-halved text-cta"></i>
                <span className="text-sm text-ink/60">Govt. Licensed</span>
              </div>
            </div>
          </div>

          {/* Right: photo in rounded frame with flare */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delay-1">
            <div className="relative">
              {/* Flare accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary/30 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>

              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImgWithFallback
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&q=80"
                  alt="Afnan Recruiting Agency"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2202/MLK badge */}
              <div className="absolute -bottom-3 -left-3 bg-white shadow-lg rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-primary/20">
                <i className="fas fa-certificate text-primary text-xs"></i>
                <span className="font-heading font-bold text-xs text-ink">2202/MLK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}