import useInView from '../hooks/useInView';

export default function FadeUp({ children, className = '', delay = 0, threshold = 0.1 }) {
  const [ref, inView] = useInView({ threshold });

  const delayClass = delay > 0 ? `stagger-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
