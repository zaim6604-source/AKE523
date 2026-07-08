const BADGE_COLORS = [
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
  'bg-[#C9CCD5] text-[#1B4965]',
];

export default function PillBadge({ text, index = 0 }) {
  const colorClass = BADGE_COLORS[index % BADGE_COLORS.length];
  return (
    <span className={`inline-block ${colorClass} text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-sm`}>
      {text}
    </span>
  );
}
