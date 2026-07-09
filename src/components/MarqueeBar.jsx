export default function MarqueeBar() {
  const text = "✦ Govt. Licensed 2315/RWP ✦ Hiring for Saudi Arabia • UAE • Qatar • Oman • Germany • Poland • Romania • Cyprus • Malaysia ✦ 6th Road, Rawalpindi ✦ Call 051-4846430 ✦";

  return (
    <div className="mt-[60px] bg-primary text-white overflow-hidden py-2.5 border-y border-accent/20">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="inline-flex gap-8 mx-4 text-sm md:text-base font-medium tracking-wide">
          {text}
        </span>
        <span className="inline-flex gap-8 mx-4 text-sm md:text-base font-medium tracking-wide">
          {text}
        </span>
      </div>
    </div>
  );
}
