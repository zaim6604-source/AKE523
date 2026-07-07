import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFilePen, faPassport, faStethoscope, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const steps = [
  { icon: faComments, title: "Consultation", desc: "Discuss your goals and explore opportunities with our team." },
  { icon: faFilePen, title: "Documents & Application", desc: "Submit required documents and complete your application." },
  { icon: faPassport, title: "Visa / Processing", desc: "We handle visa filing, tracking, and follow-ups." },
  { icon: faStethoscope, title: "Medical & Trade Test", desc: "Coordinate medical exams and skill assessments if required." },
  { icon: faPlaneDeparture, title: "Deployment & Departure", desc: "Pre-departure briefing, ticketing, and final travel arrangements." },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section id="process" className="relative py-20 overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0 origin-bottom-left pointer-events-none" style={{ background: "linear-gradient(170deg, #006D77 0%, #E29578 100%)", transform: "skewY(-3deg)", height: "110%", top: "-5%" }} />
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,221,0,0.1) 0%, transparent 50%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#FFDD00", backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.25)" }}>
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "Plus Jakarta Sans" }}>Our Process</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative text-center p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-extrabold" style={{ backgroundColor: i % 2 === 0 ? "#FFDD00" : "#FFFFFF", color: i % 2 === 0 ? "#003844" : "#006D77" }}>
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold" style={{ backgroundColor: "#FFDD00", color: "#003844" }}>
                {i + 1}
              </div>
              <h4 className="text-white font-extrabold text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans" }}>{s.title}</h4>
              <p className="text-xs opacity-85 text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
