export default function MarqueeBar() {
  const items = [
    '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇴🇲 Oman', '🇦🇪 UAE',
    '🇵🇱 Poland', '🇷🇴 Romania', '🇬🇷 Greece', '🇰🇷 South Korea',
    '🇭🇷 Croatia',
    '📜 License 2169/DGK',
    '📍 Pathar Bazar, D.G. Khan',
    '🛩️  Gulf & Europe Recruitment',
    '📞 0303-6784034',
  ];

  return (
    <div className="bg-primary text-white text-sm font-semibold py-2 overflow-hidden mt-16 md:mt-20">
      <div className="marquee-track">
        {/* Duplicate for seamless loop */}
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 px-4">
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="inline-flex items-center gap-1.5">
                <i className="fas fa-circle text-[6px] text-accent opacity-70" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}