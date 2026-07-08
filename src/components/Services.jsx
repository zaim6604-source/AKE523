import { useState } from 'react';
import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const SERVICES = [
  {
    id: 'placement',
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    description: 'End-to-end recruitment services connecting skilled and unskilled workers with verified employers across Saudi Arabia, UAE, Qatar, Europe, and beyond.',
  },
  {
    id: 'visa',
    icon: 'fa-passport',
    title: 'Visa Processing',
    description: 'Complete visa application assistance including document verification, embassy submissions, and follow-ups for all destination countries.',
  },
  {
    id: 'attestation',
    icon: 'fa-file-signature',
    title: 'Document Attestation',
    description: 'Professional attestation of educational certificates, experience letters, and personal documents from government and embassy authorities.',
  },
  {
    id: 'medical',
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Tests',
    description: 'Coordination of medical examinations at approved centers and trade tests to verify your skills for international standards.',
  },
  {
    id: 'orientation',
    icon: 'fa-chalkboard-user',
    title: 'Pre-Departure Orientation',
    description: 'Comprehensive sessions covering cultural awareness, labor laws, rights, and practical tips for success in your new country.',
  },
  {
    id: 'travel',
    icon: 'fa-plane',
    title: 'Travel & Ticketing',
    description: 'Affordable air ticketing with travel assistance, airport transfers, accommodation coordination, and 24/7 support.',
  },
  {
    id: 'verification',
    icon: 'fa-shield-halved',
    title: 'Employer Verification',
    description: 'Thorough verification of employers including company registration, contract validity, and working conditions for your safety.',
  },
  {
    id: 'manpower',
    icon: 'fa-people-group',
    title: 'Manpower Supply',
    description: 'Bulk recruitment for international employers — from construction workers to healthcare professionals and IT specialists.',
  },
];

const CARD_COLORS = [
  { bg: 'bg-[#1B4965]', icon: 'text-[#FF6B35]' },
  { bg: 'bg-[#0B3954]', icon: 'text-[#5FA8D3]' },
  { bg: 'bg-[#1B4965]', icon: 'text-[#FF6B35]' },
  { bg: 'bg-[#0B3954]', icon: 'text-[#5FA8D3]' },
  { bg: 'bg-[#1B4965]', icon: 'text-[#FF6B35]' },
  { bg: 'bg-[#0B3954]', icon: 'text-[#5FA8D3]' },
  { bg: 'bg-[#1B4965]', icon: 'text-[#FF6B35]' },
  { bg: 'bg-[#0B3954]', icon: 'text-[#5FA8D3]' },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="OUR SERVICES" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Comprehensive{' '}
            <span className="text-[#1B4965]">Recruitment Services</span>
          </h2>
          <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From first consultation to final departure — we handle every step of your overseas employment journey.
          </p>
        </div>

        {/* Masonry solid-color cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`${CARD_COLORS[i].bg} rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <i className={`fas ${service.icon} ${CARD_COLORS[i].icon} text-lg`} />
                </div>
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg text-center mb-2">{service.title}</h3>
              <p className="text-[#C9CCD5] text-xs sm:text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
