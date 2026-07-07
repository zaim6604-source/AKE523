import { useState } from "react";

const services = [
  {
    title: "Overseas Job Placement",
    desc: "Connecting skilled Pakistani workers with reputable employers across the Gulf and Europe. End-to-end placement support.",
    icon: "fa-briefcase",
    color: "bg-primary",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    title: "Visa Processing",
    desc: "Complete visa documentation and processing for work permits, ensuring compliance with destination country requirements.",
    icon: "fa-passport",
    color: "bg-secondary",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    title: "Document Attestation",
    desc: "Degree attestation, certificate verification, and embassy legalization services for overseas employment.",
    icon: "fa-file-shield",
    color: "bg-accent",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Medical & Trade Test Coordination",
    desc: "Scheduling and coordination of mandatory medical examinations and trade skill assessments.",
    icon: "fa-stethoscope",
    color: "bg-cta",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    title: "Pre-Departure Orientation",
    desc: "Cultural and practical orientation sessions preparing workers for life and work in their destination country.",
    icon: "fa-chalkboard-user",
    color: "bg-primary",
    img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
  },
  {
    title: "Air Ticketing & Travel Support",
    desc: "Competitive airfare arrangements and travel logistics support for a smooth departure experience.",
    icon: "fa-plane",
    color: "bg-secondary",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    title: "Employer Verification",
    desc: "Thorough background verification of overseas employers to ensure legitimate and safe placement.",
    icon: "fa-magnifying-glass",
    color: "bg-accent",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    title: "Skilled & Unskilled Manpower Supply",
    desc: "Comprehensive workforce solutions providing skilled professionals and general laborers to overseas employers.",
    icon: "fa-people-group",
    color: "bg-cta",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <i className="fas fa-image text-gray-400 text-3xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            OUR SERVICES
          </span>
        </div>

        <div className="space-y-6">
          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={s.title}
                className={`flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Text side */}
                <div className={`${s.color} text-white p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-center`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <i className={`fas ${s.icon} text-lg`}></i>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold">{s.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">{s.desc}</p>
                </div>

                {/* Image side */}
                <div className="w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                  <ImgWithFallback
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}