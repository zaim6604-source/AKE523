import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faPeopleGroup, faScaleBalanced, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const features = [
  { icon: faBuildingColumns, title: "Manpower + Visas in One Place", desc: "Everything you need under one roof — from recruitment to visa processing and deployment." },
  { icon: faPeopleGroup, title: "Experienced Team", desc: "Decades of combined experience in manpower, immigration, and HR services." },
  { icon: faScaleBalanced, title: "Transparent Process", desc: "Clear communication, honest timelines, and no hidden fees at any stage." },
  { icon: faCircleCheck, title: "End-to-End Support", desc: "We support you from the first consultation to post-arrival follow-up." },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            WHY ETCOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>Why Choose Us</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: "#EDF6F9",
                border: "1px solid rgba(0, 109, 119, 0.1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl" style={{ backgroundColor: "#006D77", color: "#FFDD00" }}>
                <FontAwesomeIcon icon={f.icon} />
              </div>
              <h4 className="font-extrabold text-sm mb-2" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>{f.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#4a5568" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
