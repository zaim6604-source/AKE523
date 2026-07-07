import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPlane, faUsers, faGraduationCap, faGlobe, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const visaServices = [
  { icon: faBriefcase, title: "Work Visas" },
  { icon: faPlane, title: "Visit & Tourist Visas" },
  { icon: faUsers, title: "Family / Dependent Visas" },
  { icon: faGraduationCap, title: "Study Visa Guidance" },
  { icon: faGlobe, title: "Immigration Consultancy" },
  { icon: faFileSignature, title: "Documentation & Attestation" },
];

export default function VisaImmigration() {
  const [ref, inView] = useInView();

  return (
    <section id="visa" className="py-20" style={{ backgroundColor: "#EDF6F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            VISA & IMMIGRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>
            Visa & Immigration Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {visaServices.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0, 109, 119, 0.1)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: "rgba(0, 109, 119, 0.1)", color: "#006D77" }}>
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <p className="text-xs font-bold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>{v.title}</p>
              </div>
            ))}
          </div>

          <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="leading-relaxed mb-6" style={{ color: "#4a5568" }}>
              From work permits to family sponsorships, our experienced team handles every aspect of the visa and immigration
              process. We stay current with changing regulations to ensure smooth, timely outcomes for our clients.
            </p>
            <a
              href="https://wa.me/923219115599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#E29578" }}
            >
              Check Your Visa Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
