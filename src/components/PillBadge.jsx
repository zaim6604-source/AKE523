const BADGE_COLORS = [
  'bg-[#FFD23F] text-[#2B1200]',
  'bg-[#00B4D8] text-white',
  'bg-[#FF4500] text-white',
  'bg-[#FF7F11] text-white',
  'bg-[#E63600] text-white',
];

export default function PillBadge({ text, index = 0 }) {
  const colorClass = BADGE_COLORS[index % BADGE_COLORS.length];
  return (
    <span className={`inline-block ${colorClass} text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-sm`}>
      {text}
    </span>
  );
}