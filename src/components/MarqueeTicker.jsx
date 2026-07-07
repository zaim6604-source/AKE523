const items = [
  'Saudi Arabia',
  'UAE',
  'Qatar',
  'Oman (Muscat)',
  'Germany',
  'Romania',
  'Greece',
  'Croatia (Dubrovnik)',
  'Malaysia (KL)',
  'License 2201/MLK',
  'G.T Road, Mingora, Swat',
  'Government Licensed',
  'Gulf & Europe Jobs',
];

export default function MarqueeTicker() {
  return (
    <div className="relative mt-20 z-40" style={{ background: 'var(--color-primary)' }}>
      <div className="overflow-hidden py-2.5">
        <div className="marquee-animate">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-6 text-white text-sm font-medium whitespace-nowrap">
              <i className="fas fa-circle text-[0.35rem] opacity-60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}