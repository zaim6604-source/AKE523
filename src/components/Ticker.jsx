const items = [
  'Advocate Supreme Court of Pakistan',
  'Practicing 25+ Years',
  'Appears before all High Courts & the Supreme Court',
  'F-8 Markaz, Islamabad',
  'Constitutional & Civil Litigation',
  'Bar Leader & Former PEMRA Member',
];

export default function Ticker() {
  return (
    <div className="relative mt-20 z-40" style={{ background: 'var(--color-primary)' }}>
      <div className="overflow-hidden py-2.5" style={{ borderTop: '1px solid rgba(201,162,39,.15)', borderBottom: '1px solid rgba(201,162,39,.15)' }}>
        <div className="marquee-track">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-6 text-[#C9A227] text-sm font-medium whitespace-nowrap">
              <i className="fas fa-circle text-[0.25rem] opacity-60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}