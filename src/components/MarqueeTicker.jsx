const tickerItems = [
  'Recruitment', 'Executive Search', 'Staffing', 'Payroll',
  'HR Consulting', 'Compliance', 'Based in Lahore', 'Free Consultation',
];

export default function MarqueeTicker() {
  return (
    <div className="relative mt-16 md:mt-20 bg-primary overflow-hidden py-3">
      <div className="flex whitespace-nowrap marquee-track">
        <div className="flex shrink-0 gap-8 items-center">
          {tickerItems.map((item, i) => (
            <span key={i} className="text-background/80 font-medium text-sm sm:text-base tracking-wide">
              <i className="fa-regular fa-star text-cta mr-2 text-xs" /> {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 gap-8 items-center ml-8">
          {tickerItems.map((item, i) => (
            <span key={`dup-${i}`} className="text-background/80 font-medium text-sm sm:text-base tracking-wide">
              <i className="fa-regular fa-star text-cta mr-2 text-xs" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
