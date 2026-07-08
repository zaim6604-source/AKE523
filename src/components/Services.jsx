import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';
import LazyImage from './LazyImage';

const SERVICES = [
  {
    id: 'placement',
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    description: 'End-to-end recruitment services connecting skilled and unskilled workers with verified employers across Saudi Arabia, UAE, Qatar, Europe, and Asia. We match your qualifications with the right opportunities.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  },
  {
    id: 'visa',
    icon: 'fa-passport',
    title: 'Visa Processing',
    description: 'Complete visa application assistance including document verification, embassy submissions, and follow-ups. We ensure a smooth, hassle-free visa process for all destination countries.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
  },
  {
    id: 'attestation',
    icon: 'fa-file-signature',
    title: 'Document Attestation',
    description: 'Professional attestation of educational certificates, experience letters, and personal documents from all relevant government and embassy authorities.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
  },
  {
    id: 'medical',
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Test Coordination',
    description: 'We coordinate medical examinations at approved centers and arrange trade tests to verify your skills, ensuring you meet international employer standards.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80',
  },
  {
    id: 'orientation',
    icon: 'fa-chalkboard-user',
    title: 'Pre-Departure Orientation',
    description: 'Comprehensive orientation sessions covering cultural awareness, labor laws, rights and responsibilities, and practical tips to help you succeed in your new country.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
  },
  {
    id: 'travel',
    icon: 'fa-plane',
    title: 'Air Ticketing & Travel Support',
    description: 'Affordable air ticketing services with travel assistance, including airport transfers, accommodation coordination, and 24/7 support during your journey.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80',
  },
  {
    id: 'verification',
    icon: 'fa-shield-halved',
    title: 'Employer Verification',
    description: 'Thorough verification of prospective employers including company registration, labor contract validity, and working conditions to ensure your safety and rights.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80',
  },
  {
    id: 'manpower',
    icon: 'fa-people-group',
    title: 'Skilled & Unskilled Manpower Supply',
    description: 'Bulk recruitment solutions for international employers — from construction workers and drivers to healthcare professionals and IT specialists.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
  },
];

const COLOR_CYCLE = [
  'border-[#FFD23F] bg-[#FFD23F]/10',
  'border-[#00B4D8] bg-[#00B4D8]/10',
  'border-[#FF4500] bg-[#FF4500]/10',
  'border-[#FF7F11] bg-[#FF7F11]/10',
  'border-[#E63600] bg-[#E63600]/10',
];

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const [ref, inView] = useInView({ threshold: 0.05 });

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section id="services" className="bg-[#FFF3E6] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="OUR SERVICES" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1200] mt-4 leading-tight">
            Comprehensive{' '}
            <span className="text-[#FF4500]">Recruitment Services</span>
          </h2>
          <p className="text-[#2B1200]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From first consultation to final departure — we handle every step of your overseas employment journey.
          </p>
        </div>

        {/* Desktop: Two-column explorer */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-start">
          {/* Left sticky list */}
          <div className="sticky top-24 space-y-2">
            {SERVICES.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-300 ${
                  activeId === service.id
                    ? COLOR_CYCLE[i % COLOR_CYCLE.length] + ' shadow-lg scale-[1.02]'
                    : 'border-transparent hover:bg-[#FFD23F]/10 hover:border-[#FFD23F]/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    activeId === service.id ? 'bg-white shadow-md' : 'bg-[#FFD23F]/20'
                  }`}>
                    <i className={`fas ${service.icon} ${
                      activeId === service.id ? 'text-[#FF4500]' : 'text-[#2B1200]/50'
                    } text-sm`} />
                  </div>
                  <span className={`font-bold text-sm transition-all ${
                    activeId === service.id ? 'text-[#2B1200]' : 'text-[#2B1200]/60'
                  }`}>
                    {service.title}
                  </span>
                  <i className={`fas fa-chevron-right ml-auto text-xs transition-all ${
                    activeId === service.id ? 'text-[#FF4500] opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right detail panel */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FFD23F]/20 transition-all duration-500">
            <div className="h-52 sm:h-64 overflow-hidden">
              <LazyImage
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                containerClass="w-full h-full"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD23F] to-[#FF7F11] flex items-center justify-center text-white shadow-md">
                  <i className={`fas ${activeService.icon} text-lg`} />
                </div>
                <h3 className="text-xl font-black text-[#2B1200]">{activeService.title}</h3>
              </div>
              <p className="text-[#2B1200]/70 leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Stacked expandable rows */}
        <div className="lg:hidden space-y-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                activeId === service.id
                  ? COLOR_CYCLE[i % COLOR_CYCLE.length] + ' shadow-lg'
                  : 'border-[#FFD23F]/20 bg-white'
              }`}
            >
              <button
                onClick={() => setActiveId(activeId === service.id ? '' : service.id)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  activeId === service.id ? 'bg-[#FF7F11] text-white' : 'bg-[#FFD23F]/20 text-[#2B1200]/50'
                }`}>
                  <i className={`fas ${service.icon} text-sm`} />
                </div>
                <span className="font-bold text-sm text-[#2B1200] flex-1">{service.title}</span>
                <i className={`fas fa-chevron-down text-xs text-[#2B1200]/40 transition-transform duration-300 ${
                  activeId === service.id ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                activeId === service.id ? 'max-h-[500px]' : 'max-h-0'
              }`}>
                <div className="px-4 pb-4">
                  <div className="h-36 rounded-xl overflow-hidden mb-3">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      containerClass="w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-[#2B1200]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}