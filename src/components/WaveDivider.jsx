export default function WaveDivider({ color = '#1B4965', flip = false }) {
  return (
    <div className="wave-divider relative -mb-1">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <path
          d="M0 40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
