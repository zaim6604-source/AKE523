export default function SectionBadge({ text, color = 'bg-[#1B4965]' }) {
  return (
    <span className={`inline-block ${color} text-white text-xs font-semibold tracking-[0.15em] px-4 py-1.5 rounded-full mb-4`}>
      {text}
    </span>
  );
}
