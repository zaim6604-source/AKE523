import FadeUp from './FadeUp';

export default function CTABand() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E10600] to-[#1C1C1C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto font-inter">
            Take the first step toward a rewarding international career.
            Your dream job is just an application away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/92311509987"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm sm:text-base"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
            </a>
            <a
              href="tel:0514933684"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#1C1C1C] transition-all text-sm sm:text-base"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call Us Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}