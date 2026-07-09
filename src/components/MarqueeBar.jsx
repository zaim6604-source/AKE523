export default function MarqueeBar() {
  const items = [
    'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany',
    'Poland', 'Greece', 'Romania', 'Malaysia',
    'License #2325/PWR',
    'Baby Shopping Center, Peshawar',
    ' Overseas Jobs ',
    ' Licensed ',
    ' Trusted ',
    " Let's Soar ",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="relative mt-16 sm:mt-20 bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white py-3 overflow-hidden shadow-md">
      <div className="marquee-track flex items-center gap-8">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            {item.includes('#') || item.includes('License') || item.includes('Baby') || item.includes('Overseas') || item.includes('Licensed') || item.includes('Trusted') || item.includes("Let's") ? (
              <><i className="fas fa-star text-[#00F5D4] text-[10px]" /> {item}</>
            ) : (
              <><i className="fas fa-plane text-[#00F5D4] text-[10px]" /> {item}</>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}