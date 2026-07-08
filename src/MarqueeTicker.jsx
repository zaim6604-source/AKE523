import { MARQUEE_TEXT } from './constants';

export default function MarqueeTicker() {
  return (
    <div className="bg-[#9C27B0] py-2.5 mt-[72px] md:mt-[84px] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="inline-flex items-center gap-1 text-sm md:text-base font-medium text-white/90 px-4">
          {MARQUEE_TEXT}
        </span>
        <span className="inline-flex items-center gap-1 text-sm md:text-base font-medium text-white/90 px-4">
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  );
}