import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faStar, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const trust = [
  { icon: faBuilding, text: "All-in-One Service" },
  { icon: faStar, text: "Experienced Team" },
  { icon: faShieldHeart, text: "Trusted Process" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>
            About Etcom Manpower
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`img-hover-zoom rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <img
              src="/src/assets/images/about-office.jpg"
              alt="Our office"
              className="w-full h-72 sm:h-80 object-cover"
              onError={(e) => { e.target.style.display = "none"; e.target.parentElement.className = "fallback-img w-full h-72 sm:h-80 rounded-2xl"; e.target.parentElement.textContent = "ETCOM OFFICE"; }}
            />
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <p className="leading-relaxed mb-4" style={{ color: "#4a5568" }}>
              Etcom Manpower Promoters (Pvt) Ltd is a licensed manpower promoter based in G-11 Markaz, Islamabad,
              providing comprehensive visa & immigration and human-resource services under one roof.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#4a5568" }}>
              We specialize in overseas manpower promotion, visa processing, immigration services, and HR support
              — delivering end-to-end solutions for individuals and businesses seeking employment, recruitment, and
              global mobility.
            </p>
            <div className="flex flex-wrap gap-3">
              {trust.map((t) => (
                <span key={t.text} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full" style={{ backgroundColor: "#EDF6F9", color: "#006D77" }}>
                  <FontAwesomeIcon icon={t.icon} size="sm" /> {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
