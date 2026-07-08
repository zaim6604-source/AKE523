export default function MarqueeBar() {
  const items = [
    'Visa Processing',
    'Airline Tickets',
    'Gulf Visas',
    'Quick Approvals',
    'Offices in Karachi & Rawalpindi',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="relative mt-16 sm:mt-20 bg-[#0496FF] text-white py-3 overflow-hidden shadow-md">
      <div className="marquee-track flex items-center gap-8">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            <i className="fas fa-plane text-[#FFBE0B] text-[10px]" /> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
