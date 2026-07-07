import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D7263D] to-[#7768AE]" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)' }} />
      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-4 leading-tight">
          Ready to Get Started?{' '}
          <span className="text-[#02C39A]">Let's Talk.</span>
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Connect with Innovative World today and take the first step toward your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/923335553256"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#02C39A] hover:bg-[#02b38d] text-white font-bold text-base px-10 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
          >
            <FaWhatsapp /> Get Started
          </a>
          <a
            href="https://wa.me/923335553256"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold text-base px-10 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2 border border-white/40"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
