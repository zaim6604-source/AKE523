export default function MarqueeTicker() {
  const items = [
    'Recruitment',
    'Staffing',
    'Consultancy',
    'Professional Services',
    'Nowshera',
    'Free Consultation',
  ];

  return (
    <div className="bg-[#D7263D] py-2.5 overflow-hidden mt-16 md:mt-20">
      <div className="flex whitespace-nowrap marquee-content">
        <span className="inline-flex items-center gap-8 mx-4">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0F3] inline-block" />
              <span className="text-sm font-medium text-[#FFF0F3] tracking-wide">
                {item}
              </span>
            </span>
          ))}
        </span>
        <span className="inline-flex items-center gap-8 mx-4">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0F3] inline-block" />
              <span className="text-sm font-medium text-[#FFF0F3] tracking-wide">
                {item}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
