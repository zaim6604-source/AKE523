import { useState } from "react";

function CountryImage({ name, flag, src, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    const gradients = {
      Qatar: "from-red-700 to-white/10",
      UAE: "from-red-600 to-green-600",
      "Saudi Arabia": "from-green-900 to-green-700",
      Oman: "from-red-700 to-green-700",
      Germany: "from-yellow-500 to-red-600",
      Poland: "from-white/10 to-red-600",
      Italy: "from-green-600 to-white/10",
      Greece: "from-blue-600 to-white/10",
      Hungary: "from-red-600 to-green-600",
    };
    return (
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${gradients[name] || "from-primary to-accent"}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-60">{flag}</span>
        </div>
      </div>
    );
  }
  return <img src={src} alt={name} className={className} onError={() => setFailed(true)} />;
}

const countries = [
  {
    name: "Qatar",
    roles: "Construction, Hospitality",
    flag: "🇶🇦",
    img: "https://plus.unsplash.com/premium_photo-1697730281608-e3d8986c1cef?w=800&q=80",
  },
  {
    name: "UAE",
    roles: "Hospitality, Construction",
    flag: "🇦🇪",
    img: "https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?w=800&q=80",
  },
  {
    name: "Saudi Arabia",
    roles: "Construction, Drivers",
    flag: "🇸🇦",
    img: "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=800&q=80",
  },
  {
    name: "Oman",
    roles: "Security, Hospitality",
    flag: "🇴🇲",
    img: "https://plus.unsplash.com/premium_photo-1699557068739-5009ef14724a?w=600&q=80",
  },
  {
    name: "Germany",
    roles: "Nurses, Trades",
    flag: "🇩🇪",
    img: "https://plus.unsplash.com/premium_photo-1677486562712-d03d3d9ac23d?w=600&q=80",
  },
  {
    name: "Poland",
    roles: "Welders, Factory",
    flag: "🇵🇱",
    img: "https://plus.unsplash.com/premium_photo-1690921288020-1556d0868ff5?w=800&q=80",
  },
  {
    name: "Italy",
    roles: "Agriculture",
    flag: "🇮🇹",
    img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80",
  },
  {
    name: "Greece",
    roles: "Agriculture, Tourism",
    flag: "🇬🇷",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be48277b?w=600&q=80",
  },
  {
    name: "Hungary",
    roles: "Logistics",
    flag: "🇭🇺",
    img: "https://plus.unsplash.com/premium_photo-1680721310298-832f3558523d?w=800&q=80",
  },
];

export default function CountryGuide() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            DESTINATIONS
          </span>
        </div>

        {/* Landmark cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {countries.slice(0, 6).map((c) => (
            <div
              key={c.name}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-52"
            >
              <CountryImage
                name={c.name}
                flag={c.flag}
                src={c.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-xl">{c.flag}</span> {c.name}
                </h3>
                <p className="text-white/80 text-sm mt-1">{c.roles}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chip grid for all countries */}
        <div className="flex flex-wrap justify-center gap-3">
          {countries.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-ink/80 border border-primary/15 hover:bg-primary hover:text-white transition-all duration-200 cursor-default shadow-sm"
            >
              <span>{c.flag}</span>
              {c.name}
              <span className="text-xs opacity-60">— {c.roles}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}