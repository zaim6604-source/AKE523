export default function MarqueeBar() {
  return (
    <div className="relative top-16 sm:top-18 w-full overflow-hidden py-2.5 sm:py-3" style={{ backgroundColor: '#FF6FB5' }}>
      <div className="flex whitespace-nowrap animate-marquee" style={{ animation: 'marquee 28s linear infinite' }}>
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#3D0A22' }}>
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#00BFA6' }} />
          A Refreshingly Simple Path Abroad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Hiring for Saudi Arabia • UAE • Qatar • Malaysia • South Korea
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Govt. Licensed OEP 2178/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Commercial Market, Rawalpindi
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#00BFA6' }} />
        </span>
        {/* Duplicate for seamless loop */}
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#3D0A22' }}>
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#00BFA6' }} />
          A Refreshingly Simple Path Abroad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Hiring for Saudi Arabia • UAE • Qatar • Malaysia • South Korea
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Govt. Licensed OEP 2178/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#00BFA6' }} />
          Commercial Market, Rawalpindi
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#00BFA6' }} />
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}