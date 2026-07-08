const DIVIDER_VARIANTS = {
  accent: { fill: '#FFD23F' },
  secondary: { fill: '#FF7F11' },
  primary: { fill: '#FF4500' },
  cta: { fill: '#00B4D8' },
  highlight: { fill: '#E63600' },
};

export default function SectionDivider({ variant = 'accent', flip = false }) {
  const colors = DIVIDER_VARIANTS[variant] || DIVIDER_VARIANTS.accent;

  return (
    <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden -mb-1">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute bottom-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C360,96 1080,0 1440,64 L1440,120 L0,120 Z"
          fill={colors.fill}
          opacity="1"
        />
        <path
          d="M0,48 C240,96 1200,16 1440,80 L1440,120 L0,120 Z"
          fill={colors.fill}
          opacity="0.3"
        />
      </svg>
    </div>
  );
}