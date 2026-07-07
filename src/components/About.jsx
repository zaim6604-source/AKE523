import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
        <i className="fas fa-building text-primary/40 text-6xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

const trustChips = [
  { icon: "fa-certificate", label: "Govt. Licensed 2202/MLK" },
  { icon: "fa-handshake", label: "Ethical Recruitment" },
  { icon: "fa-clock", label: "Fast Processing" },
  { icon: "fa-globe", label: "9+ Countries" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            WHO WE ARE
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImgWithFallback
                src="https://plus.unsplash.com/premium_photo-1661760902897-2495710199ec?w=800&q=80"
                alt="Afnan Recruiting Agency team"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            {/* Address caption */}
            <div className="mt-4 bg-background rounded-xl p-4 shadow-sm border border-primary/10">
              <p className="text-sm text-ink/70">
                <i className="fas fa-location-dot text-primary mr-2"></i>
                Office No. 80, 2nd Floor, Mobi Plaza, Haider Road, Opp. Ciro's Cinema, Saddar, Rawalpindi
              </p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-ink/70 mb-6 leading-relaxed">
              Based at <strong>Mobi Plaza, Haider Road, Saddar, Rawalpindi</strong>, Afnan
              Recruiting Agency (License <strong>2202/MLK</strong>) is a government-licensed
              recruitment firm dedicated to connecting Pakistani workers with trusted employers across
              the Gulf and Europe.
            </p>
            <p className="text-ink/70 mb-8 leading-relaxed">
              With over 12 years of experience, we provide clear, end-to-end recruitment services
              — from documentation and visa processing to pre-departure orientation and travel support.
              Our commitment to honesty and transparency sets us apart.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3">
              {trustChips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15"
                >
                  <i className={`fas ${chip.icon} text-[10px]`}></i>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}