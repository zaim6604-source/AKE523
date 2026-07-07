export default function Marquee() {
  return (
    <>
      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
      <div className="bg-primary overflow-hidden py-3 border-t border-b border-white/10">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite] w-max">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-12">
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                ◆ <span className="text-accent">Community Welfare</span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                • <span className="text-accent">Relief & Aid</span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                • <span className="text-accent">Support for the Needy</span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                • <span className="text-accent">Awareness</span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                ◆ <span className="text-accent">Larama, Peshawar</span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white/85 flex items-center gap-3">
                • <span className="text-accent">Every Voice Counts</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
