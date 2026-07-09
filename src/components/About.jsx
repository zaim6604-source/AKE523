import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from './OptimizedImage';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal bg-[#FFD6F0] p-6 sm:p-10 lg:p-14">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                alt="Professional team collaboration and partnership"
                className="aspect-[4/3]"
                icon="fas fa-handshake"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
                <i className="fas fa-info-circle" />
                About Us
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-4 sm:mb-6">
                Your Trusted Gateway to Global Opportunities
              </h2>
              <p className="text-sm sm:text-base text-[#1A0A1E]/70 leading-relaxed mb-6">
                Based at <strong>Baby Shopping Center, Peshawar Cantt</strong>, Parwaz Recruiting Agency
                (License #2325/PWR) has been connecting skilled workers from <strong>Peshawar,
                and across KPK</strong> to reputable employers worldwide. We handle everything
                from documentation to deployment — with transparency and care.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="chip bg-white/80">
                  <i className="fas fa-check-circle text-green-500" /> Govt. Licensed
                </div>
                <div className="chip bg-white/80">
                  <i className="fas fa-shield-alt text-[#FF3CAC]" /> No Hidden Fees
                </div>
                <div className="chip bg-white/80">
                  <i className="fas fa-clock text-[#FF3CAC]" /> Fast Processing
                </div>
                <div className="chip bg-white/80">
                  <i className="fas fa-headset text-[#FF3CAC]" /> 24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}