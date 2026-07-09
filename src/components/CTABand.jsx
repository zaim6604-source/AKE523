import FadeUp from './FadeUp';

export default function CTABand() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E10600] via-[#A30000] to-[#1C1C1C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your Future Starts Here.
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward a rewarding international career. Barkha International is your precise route to jobs abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923009050416"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm sm:text-base pulse-cta"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
            </a>
            <a
              href="tel:0512806263"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#E10600] transition-all text-sm sm:text-base"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call 051-2806263
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}