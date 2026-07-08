export default function MarqueeBar() {
  return (
    <div className="relative top-16 sm:top-18 w-full overflow-hidden py-2.5 sm:py-3" style={{ backgroundColor: '#006D77' }}>
      <div className="flex whitespace-nowrap animate-marquee" style={{ animation: 'marquee 28s linear infinite' }}>
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide text-white">
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#FFDD00' }} />
          Islamabad's Trusted Source for Skilled Manpower Abroad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Hiring for Saudi Arabia • UAE • Qatar • Oman • Europe
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Govt. Licensed OEP 2208/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          I-10 Markaz, Islamabad
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#FFDD00' }} />
        </span>
        {/* Duplicate for seamless loop */}
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide text-white">
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#FFDD00' }} />
          Islamabad's Trusted Source for Skilled Manpower Abroad
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Hiring for Saudi Arabia • UAE • Qatar • Oman • Europe
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Govt. Licensed OEP 2208/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          I-10 Markaz, Islamabad
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#FFDD00' }} />
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