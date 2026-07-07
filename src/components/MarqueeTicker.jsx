export default function MarqueeTicker() {
  const items = [
    "◆ Overseas Manpower",
    "Visa Processing",
    "Immigration Services",
    "HR Services",
    "◆ G-11 Markaz, Islamabad",
    "Free Consultation",
  ];

  return (
    <div className="relative top-16 md:top-20 overflow-hidden py-2.5" style={{ backgroundColor: "#006D77" }}>
      <div className="flex animate-ticker whitespace-nowrap gap-12">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-sm font-medium tracking-wide"
            style={{ color: i % 6 === 4 ? "#FFDD00" : "#83C5BE" }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
