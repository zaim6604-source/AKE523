import { PROCESS_STEPS } from './constants';
import useInView from './useInView';

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="relative py-16 md:py-24">
      {/* Bold diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9C27B0] to-[#FF4081] -skew-y-2 origin-left"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#9C27B0] to-[#FF4081]"></div>

      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>
      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V30C240 60 480 60 720 30C960 0 1200 0 1440 30V0H0Z" fill="white"/>
        </svg>
      </div>

      <div className="relative z-20 container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
            <i className="fas fa-arrow-right text-[10px] mr-1.5"></i>
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4">
          Your Journey to Overseas Employment
        </h2>
        <p className="text-center text-white/80 max-w-2xl mx-auto mb-10 md:mb-14">
          A simple, transparent process from registration to departure.
        </p>

        <div className="grid md:grid-cols-5 gap-4 md:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg
                ${i % 2 === 0 ? 'bg-[#FFD740] text-[#2A1033]' : 'bg-white text-[#9C27B0]'}`}
              >
                <span className="text-xl md:text-2xl font-extrabold font-heading">{step.number}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5">
                <div className={`text-2xl md:text-3xl mb-3 ${i % 2 === 0 ? 'text-[#FFD740]' : 'text-white'}`}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="text-white font-heading font-bold text-sm md:text-base mb-1">{step.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block text-white/40 text-2xl mt-2">
                  <i className="fas fa-chevron-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}