import { FaShieldAlt, FaRocket, FaUserCheck, FaSearch, FaHandshake, FaHeadset } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const features = [
  { icon: FaShieldAlt, title: 'Trusted & Verified', desc: 'Fully verified and trusted agency serving Nowshera with integrity.' },
  { icon: FaRocket, title: 'Fast Turnaround', desc: 'Quick response times and efficient processing for all your needs.' },
  { icon: FaUserCheck, title: 'Personalized Service', desc: 'Tailored solutions designed around your unique requirements.' },
  { icon: FaSearch, title: 'Local Expertise', desc: 'Deep understanding of the Nowshera market and community.' },
  { icon: FaHandshake, title: 'Transparent Process', desc: 'Clear communication and honest dealings at every step.' },
  { icon: FaHeadset, title: 'Dedicated Support', desc: 'Ongoing support before, during, and after every engagement.' },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="pill-badge bg-[#7768AE]/10 text-[#7768AE] mb-4">WHY US</span>
          <h2 className="section-heading">Why Choose <span className="text-[#D7263D]">Innovative World</span></h2>
          <p className="text-[#340710]/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            What sets us apart as Nowshera's trusted partner
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-[#FFF0F3] rounded-2xl p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg border border-[#D7263D]/5"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.6s',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#D7263D]/10 flex items-center justify-center mb-3">
                  <Icon className="text-[#D7263D] text-base" />
                </div>
                <h3 className="text-sm font-heading font-bold text-[#340710] mb-1">{f.title}</h3>
                <p className="text-xs text-[#340710]/60 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
