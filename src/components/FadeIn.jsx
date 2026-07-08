import useInView from '../hooks/useInView';

export default function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView(0.1);
  const delayClass = delay ? `fade-up-delay-${delay}` : '';
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}