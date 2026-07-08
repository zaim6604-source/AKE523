export default function MarqueeBar() {
  return (
    <div className="bg-[#FFD23F] border-y border-[#FFD23F]/50 overflow-hidden">
      <div className="flex marquee-animate whitespace-nowrap py-2.5 lg:py-3">
        {/* First copy */}
        <div className="flex items-center gap-8 shrink-0">
          <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-[#2B1200]">
            <span>🔥</span> Turn Ambition Into Action <span>🔥</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#2B1200]/80">
            <i className="fas fa-briefcase text-[#FF4500] text-xs" /> Hiring for Saudi Arabia • UAE • Qatar • Germany • Poland
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-semibold text-[#FF4500]">
            <i className="fas fa-certificate text-xs" /> Govt. Licensed OEP 2174/RWP
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#2B1200]/80">
            <i className="fas fa-location-dot text-[#FF4500] text-xs" /> Saddar, Rawalpindi
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-8 shrink-0">
          <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-[#2B1200]">
            <span>🔥</span> Turn Ambition Into Action <span>🔥</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#2B1200]/80">
            <i className="fas fa-briefcase text-[#FF4500] text-xs" /> Hiring for Saudi Arabia • UAE • Qatar • Germany • Poland
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-semibold text-[#FF4500]">
            <i className="fas fa-certificate text-xs" /> Govt. Licensed OEP 2174/RWP
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
          <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#2B1200]/80">
            <i className="fas fa-location-dot text-[#FF4500] text-xs" /> Saddar, Rawalpindi
          </span>
          <span className="w-1 h-1 rounded-full bg-[#FF4500]/40 shrink-0" />
        </div>
      </div>
    </div>
  );
}