export default function WavyDivider({ color = '#FFF0F0', flip = false }) {
  return (
    <div className="wavy-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}