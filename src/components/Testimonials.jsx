import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const testimonials = [
  { name: "Ahmed R.", destination: "Saudi Arabia — Construction", quote: "Etcom made the entire process smooth and stress-free. From paperwork to departure, they handled everything professionally.", stars: 5 },
  { name: "Fatima K.", destination: "UAE — Hospitality", quote: "I was nervous about working abroad, but the team guided me at every step. Truly grateful for their support.", stars: 5 },
  { name: "Usman M.", destination: "Germany — Skilled Worker", quote: "Excellent visa processing and pre-departure briefing. I felt fully prepared before traveling. Highly recommended!", stars: 5 },
  { name: "Sana T.", destination: "Qatar — Healthcare", quote: "They found the right opportunity for my skills and managed all the documentation. A trusted partner indeed.", stars: 5 },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20" style={{ backgroundColor: "#EDF6F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>What Our Clients Say</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0, 109, 119, 0.08)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.stars)].map((_, si) => (
                  <FontAwesomeIcon key={si} icon={faStar} size="sm" style={{ color: "#FFDD00" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#4a5568" }}>"{t.quote}"</p>
              <div>
                <p className="font-extrabold text-sm" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "#006D77" }}>{t.destination}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
