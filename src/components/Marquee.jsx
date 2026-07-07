export default function Marquee() {
  const trades = [
    '★ Welder',
    'Electrician',
    'Plumber',
    'Mason',
    'Steel Fixer',
    'AC Technician',
    'Heavy Driver',
    'Pipe Fitter',
    'Painter',
    'Duct Man',
    'Auto Mechanic',
    'Shuttering Carpenter',
  ];

  return (
    <div
      style={{
        background: '#FF206E',
        padding: '10px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 5,
        marginTop: '5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 32s linear infinite',
          gap: 0,
        }}
      >
        {[...Array(2)].map((_, dup) => (
          <div
            key={dup}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              flexShrink: 0,
            }}
          >
            {trades.map((trade, i) => (
              <span
                key={`${dup}-${i}`}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  color: i % 2 === 0 ? '#fff' : '#FBFF12',
                  marginRight: 40,
                  letterSpacing: '0.03em',
                }}
              >
                {trade}
              </span>
            ))}
            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#FBFF12',
                marginRight: 40,
              }}
            >
              ★ Training & Trade Testing
            </span>
            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#fff',
                marginRight: 40,
              }}
            >
              ★ Mardan
            </span>
            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#FBFF12',
                marginRight: 40,
              }}
            >
              ★ Certificates Issued
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}