import useInView from '../hooks/useInView';

export default function CtaBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="bg-gradient-to-r from-[#FFD23F] via-[#FF7F11] to-[#FF4500] py-14 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
              Your Rise{' '}
              <span className="text-[#FFD23F]">Starts Today.</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-xl mx-auto mb-8">
              Don't wait for opportunity — create it. Take the first step toward a brighter future abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0098b8] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-paper-plane" />
                Apply Now
              </a>
              <a
                href="https://wa.me/923465320238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all backdrop-blur-sm border border-white/30"
              >
                <i className="fab fa-whatsapp" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}