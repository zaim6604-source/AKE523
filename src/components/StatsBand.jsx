import useInView from "../hooks/useInView";

const stats = [
  { value: "1000+", label: "Workers Deployed" },
  { value: "12+", label: "Countries" },
  { value: "5000+", label: "Visas Processed" },
  { value: "10+", label: "Years of Service" },
];

export default function StatsBand() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{ backgroundColor: "#003844" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <p
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ fontFamily: "Plus Jakarta Sans", color: "#FFDD00" }}
              >
                {s.value}
              </p>
              <p className="text-sm font-medium" style={{ color: "#83C5BE" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
