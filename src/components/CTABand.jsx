import FadeUp from './FadeUp';

export default function CTABand() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E0115F] to-[#7B2D8E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Gulf Is Calling.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward a rewarding career in the Arabian Gulf.
            Your dream job is just an application away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#FFD700] text-[#3D0A1E] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm sm:text-base"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>Apply Now
            </a>
            <a
              href="tel:0514938271"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#7B2D8E] transition-all text-sm sm:text-base"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call Us Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}