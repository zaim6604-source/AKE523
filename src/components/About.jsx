import { FaShieldAlt, FaHandshake, FaBullseye } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import { useState } from 'react';

export default function About() {
  const [ref, inView] = useInView();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const trustChips = [
    { icon: FaShieldAlt, label: 'Reliable' },
    { icon: FaHandshake, label: 'Professional' },
    { icon: FaBullseye, label: 'Client-Focused' },
  ];

  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src={imgError ? '/images/fallback.svg' : '/images/hero-office.jpg'}
                alt="Innovative World office"
                className={`w-full h-[350px] md:h-[450px] object-cover img-hover-zoom ${imgLoaded ? 'loaded' : 'loading'}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#D7263D]/10 rounded-2xl -z-5" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#7768AE]/10 rounded-2xl -z-5" />
          </div>

          <div>
            <span className="pill-badge bg-[#D7263D]/10 text-[#D7263D] mb-4">
              WHO WE ARE
            </span>
            <h2 className="section-heading mb-6">
              Your Trusted Partner in{' '}
              <span className="text-[#D7263D]">Nowshera</span>
            </h2>
            <p className="text-[#340710]/60 leading-relaxed mb-4 text-base md:text-lg">
              Innovative World is a Nowshera-based agency dedicated to connecting people and businesses with the right opportunities. We specialize in recruitment, staffing, and professional services that help our community thrive.
            </p>
            <p className="text-[#340710]/60 leading-relaxed mb-8 text-base md:text-lg">
              With years of experience in the local market, we understand the unique needs of Nowshera's businesses and job seekers. Our commitment to quality, transparency, and personalized service sets us apart as a trusted partner in growth.
            </p>

            <div className="flex flex-wrap gap-3">
              {trustChips.map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0F3] text-[#D7263D] font-medium text-sm"
                >
                  <chip.icon className="text-xs" />
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
