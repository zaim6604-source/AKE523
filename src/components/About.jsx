import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-info-circle" />
            About Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            Your Trusted Travel &amp; Visa Partner
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-2xl mx-auto leading-relaxed">
            Shafay International (License #2243/KAR) specializes in visa processing and airline
            tickets for Gulf countries — with quick approvals, transparent service, and
            satisfaction guaranteed. We have offices in both Karachi and Rawalpindi to serve you better.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Karachi Office */}
          <div className="rounded-2xl bg-[#E8F5FF] p-6 sm:p-8 border border-[#0496FF]/20 hover:shadow-lg hover:shadow-[#0496FF]/10 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#0496FF] flex items-center justify-center text-white text-xl mb-4">
              <i className="fas fa-building" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#062A45] mb-1">
              Karachi — Head Office
            </h3>
            <p className="text-xs text-[#0496FF] font-semibold mb-3">License #2243/KAR</p>
            <div className="space-y-2.5 text-sm text-[#062A45]/70">
              <div className="flex items-start gap-2.5">
                <i className="fas fa-map-marker-alt mt-0.5 text-[#0496FF]" />
                <span>Office No. 30, Navy Heights, near Kala Pul, Karachi East, Sindh</span>
              </div>
              <a href="tel:02135520401" className="flex items-center gap-2.5 no-underline text-[#062A45]/70 hover:text-[#0496FF]">
                <i className="fas fa-phone text-[#0496FF]" />
                <span>021-35520401</span>
              </a>
            </div>
          </div>

          {/* Rawalpindi Office */}
          <div className="rounded-2xl bg-[#E8F5FF] p-6 sm:p-8 border border-[#0496FF]/20 hover:shadow-lg hover:shadow-[#0496FF]/10 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#0496FF] flex items-center justify-center text-white text-xl mb-4">
              <i className="fas fa-building" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#062A45] mb-1">
              Rawalpindi — Branch Office
            </h3>
            <p className="text-xs text-[#0496FF] font-semibold mb-3">License #2243/KAR</p>
            <div className="space-y-2.5 text-sm text-[#062A45]/70">
              <div className="flex items-start gap-2.5">
                <i className="fas fa-map-marker-alt mt-0.5 text-[#0496FF]" />
                <span>Office 1, 3rd Floor, Al-Mustafa Plaza, 6th Road, Rawalpindi</span>
              </div>
              <a href="https://wa.me/923002141262" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 no-underline text-[#062A45]/70 hover:text-green-600">
                <i className="fab fa-whatsapp text-green-600" />
                <span>0300-2141262</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <div className="chip bg-[#E8F5FF] border border-[#0496FF]/10">
            <i className="fas fa-check-circle text-green-500" /> Govt. Licensed
          </div>
          <div className="chip bg-[#E8F5FF] border border-[#0496FF]/10">
            <i className="fas fa-passport text-[#0496FF]" /> Quick Visa Approvals
          </div>
          <div className="chip bg-[#E8F5FF] border border-[#0496FF]/10">
            <i className="fas fa-plane text-[#0496FF]" /> Confirmed Tickets
          </div>
          <div className="chip bg-[#E8F5FF] border border-[#0496FF]/10">
            <i className="fas fa-headset text-[#0496FF]" /> End-to-End Support
          </div>
        </div>
      </div>
    </section>
  );
}
