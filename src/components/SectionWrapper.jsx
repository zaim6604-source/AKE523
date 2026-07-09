import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function SectionWrapper({ id, badge, badgeColor, children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const colorMap = {
    primary: 'bg-primary text-white',
    highlight: 'bg-highlight text-white',
    accent: 'bg-accent text-ink',
    cta: 'bg-cta text-ink',
    ink: 'bg-ink text-white',
    secondary: 'bg-secondary text-ink',
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
      <div ref={ref} className={`max-w-7xl mx-auto ${inView ? 'fade-up in-view' : 'fade-up'}`}>
        {badge && (
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 ${colorMap[badgeColor] || 'bg-primary text-white'}`}>
            {badge}
          </span>
        )}
        {children}
      </div>
    </section>
  );
}
