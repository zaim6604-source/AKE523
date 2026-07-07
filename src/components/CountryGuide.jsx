import useInView from "../hooks/useInView";

const countries = [
  {
    name: "Saudi Arabia",
    img: "/src/assets/images/saudi.jpg",
    roles: ["Construction", "Drivers", "Hospitality"],
    flagColor: "#006D77",
  },
  {
    name: "UAE",
    img: "/src/assets/images/uae.jpg",
    roles: ["Hospitality", "Retail"],
    flagColor: "#E29578",
  },
  {
    name: "Qatar",
    img: "/src/assets/images/qatar.jpg",
    roles: ["Construction"],
    flagColor: "#83C5BE",
  },
  {
    name: "Oman",
    img: "/src/assets/images/gallery-4.jpg",
    roles: ["Security", "Drivers"],
    flagColor: "#FFDD00",
  },
  {
    name: "Germany",
    img: "/src/assets/images/germany.jpg",
    roles: ["Nurses", "Trades", "Skilled Visas"],
    flagColor: "#006D77",
  },
  {
    name: "Poland",
    img: "/src/assets/images/poland.jpg",
    roles: ["Welders", "Factory"],
    flagColor: "#E29578",
  },
  {
    name: "Italy",
    img: "/src/assets/images/italy.jpg",
    roles: ["Agriculture", "Work Visas"],
    flagColor: "#83C5BE",
  },
  {
    name: "Greece",
    img: "/src/assets/images/greece.jpg",
    roles: ["Tourism", "Farming"],
    flagColor: "#FFDD00",
  },
  {
    name: "Malaysia",
    img: "/src/assets/images/gallery-2.jpg",
    roles: ["Electronics"],
    flagColor: "#003844",
  },
];

const chipLabels = ["Saudi Arabia", "UAE", "Qatar", "Oman", "Kuwait", "Bahrain", "Germany", "Poland", "Italy", "Greece", "Malaysia", "Singapore", "South Korea", "Japan", "UK", "Romania", "Hungary", "Turkey"];

export default function CountryGuide() {
  const [ref, inView] = useInView();

  return (
    <section id="countries" className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>
            Countries We Serve
          </h2>
        </div>

        {/* Landmark cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {countries.slice(0, 6).map((c, i) => (
            <div
              key={c.name}
              className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="img-hover-zoom h-36">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; e.target.parentElement.className = "fallback-img h-36"; e.target.parentElement.textContent = c.name; }} />
              </div>
              <div className="p-4" style={{ backgroundColor: "#EDF6F9" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.flagColor }} />
                  <h4 className="font-extrabold text-sm" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>{c.name}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.roles.map((r) => (
                    <span key={r} className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact chip grid */}
        <div>
          <p className="text-sm font-bold mb-3" style={{ color: "#003844" }}>All Destinations</p>
          <div className="flex flex-wrap gap-2">
            {chipLabels.map((c) => (
              <span key={c} className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: "#EDF6F9", color: "#006D77", border: "1px solid rgba(0, 109, 119, 0.15)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
