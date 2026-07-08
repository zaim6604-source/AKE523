import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

const WHY_US = [
  { icon: 'fa-certificate', title: 'Govt. Licensed', desc: 'We hold a valid government license (2210/ABT) issued by the Bureau of Emigration & Overseas Employment, ensuring full regulatory compliance.' },
  { icon: 'fa-handshake', title: 'Trusted Network', desc: 'With years of experience serving the Batagram community, we have built strong relationships with verified employers across the globe.' },
  { icon: 'fa-users-gear', title: 'End-to-End Support', desc: 'From initial consultation to departure, we guide you through every step — documentation, medical, visa, and travel arrangements.' },
  { icon: 'fa-shield-halved', title: 'Transparent Process', desc: 'No hidden fees, no false promises. We believe in clear communication and honest dealings with every candidate.' },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 bg-[#1C1C1C] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              <i className="fa-solid fa-certificate mr-1.5"></i>ABOUT US
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Poppins] mb-4">
              About Pak. Arsalan Corporation
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Alamgir Chowk, Batagram's trusted gateway to overseas employment since establishment.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <FadeUp className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <SafeImage src="/images/office.jpg" alt="Pak. Arsalan Corporation Office" className="w-full h-80 lg:h-96 object-cover" type="office" />
              </div>
            </FadeUp>
            <FadeUp delay={2} className="w-full lg:w-1/2">
              <span className="inline-block bg-[#E10600]/10 text-[#E10600] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 font-[Poppins]">
                Batagram's Bridge to the World
              </h2>
              <div className="space-y-4 text-[#141414]/70 leading-relaxed">
                <p>
                  Pak. Arsalan Corporation is a government-licensed overseas employment promoter (OEP License No. 2210/ABT),
                  headquartered at Gul Market, near Bus Stand, Alamgir Chowk, Batagram, KPK.
                </p>
                <p>
                  Founded with a mission to provide legitimate and rewarding overseas employment
                  opportunities to the skilled workforce of Batagram and surrounding regions, we have
                  helped hundreds of individuals secure jobs across the Gulf, Europe, and Asia.
                </p>
                <p>
                  Our deep roots in the Batagram community, combined with strong partnerships with
                  verified international employers, make us the preferred choice for overseas recruitment
                  in the region.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
                  className="bg-[#E10600] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1C1C1C] transition-all shadow-md">
                  <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
                </a>
                <Link to="/contact"
                  className="border-2 border-[#E10600] text-[#E10600] font-semibold px-6 py-3 rounded-full hover:bg-[#E10600] hover:text-white transition-all">
                  Contact Us
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-block bg-[#E10600]/10 text-[#E10600] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-[Poppins]">
              Why Pak. Arsalan Corporation?
            </h2>
            <p className="text-[#141414]/60 mt-3 max-w-2xl mx-auto">
              We are committed to providing ethical, transparent, and results-driven overseas employment services.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_US.map((item, i) => (
              <FadeUp key={i} delay={(i % 4) + 1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#E10600] flex items-center justify-center text-2xl text-white shrink-0">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#141414] text-lg mb-1 font-[Poppins]">{item.title}</h3>
                    <p className="text-[#141414]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}