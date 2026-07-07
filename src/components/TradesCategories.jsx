const trades = [
  { title: "Welder (3G/6G)", icon: "fa-welding", color: "bg-primary" },
  { title: "Electrician", icon: "fa-bolt", color: "bg-secondary" },
  { title: "Plumber", icon: "fa-faucet-drip", color: "bg-accent" },
  { title: "Mason", icon: "fa-hammer", color: "bg-primary" },
  { title: "Steel Fixer", icon: "fa-chains", color: "bg-secondary" },
  { title: "Shuttering Carpenter", icon: "fa-saw", color: "bg-accent" },
  { title: "HVAC / AC Technician", icon: "fa-snowflake", color: "bg-primary" },
  { title: "Heavy & Light Driver", icon: "fa-truck", color: "bg-secondary" },
  { title: "Auto Mechanic", icon: "fa-car", color: "bg-accent" },
  { title: "Pipe Fitter", icon: "fa-pipe-valve", color: "bg-primary" },
  { title: "Painter", icon: "fa-paint-roller", color: "bg-secondary" },
  { title: "Duct Man", icon: "fa-wind", color: "bg-accent" },
];

export default function TradesCategories() {
  return (
    <section id="trades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            TRADE CATEGORIES
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {trades.map((t) => (
            <div
              key={t.title}
              className={`${t.color} text-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                <i className={`fas ${t.icon} text-lg`}></i>
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}