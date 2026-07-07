import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPassport, faPlane, faFileContract, faFileSignature, faHandshake, faStethoscope, faTicket } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const services = [
  { icon: faUsers, title: "Overseas Manpower Promotion", desc: "Sourcing and deploying skilled workers for global employers across industries.", color: "#006D77" },
  { icon: faPassport, title: "Visa Processing", desc: "End-to-end visa application assistance for work, visit, and family categories.", color: "#83C5BE" },
  { icon: faPlane, title: "Immigration Services", desc: "Comprehensive immigration guidance and support for individuals and families.", color: "#FFDD00" },
  { icon: faFileContract, title: "Work Permit Assistance", desc: "Helping businesses secure work permits and labor approvals for foreign hires.", color: "#E29578" },
  { icon: faFileSignature, title: "Document Attestation", desc: "Verification and attestation of educational, professional, and personal documents.", color: "#003844" },
  { icon: faHandshake, title: "HR & Recruitment Services", desc: "Tailored recruitment solutions for companies seeking qualified talent.", color: "#006D77" },
  { icon: faStethoscope, title: "Medical & Trade Test Coordination", desc: "Arranging medical examinations and trade tests for overseas candidates.", color: "#83C5BE" },
  { icon: faTicket, title: "Air Ticketing & Travel Support", desc: "Flight bookings, travel coordination, and pre-departure briefings.", color: "#E29578" },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-20" style={{ backgroundColor: "#EDF6F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>
            What We Offer
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}
              style={{
                backgroundColor: s.color,
                color: s.color === "#FFDD00" ? "#003844" : "#FFFFFF",
                transitionDelay: `${i * 0.06}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <h3 className="font-bold text-sm mb-2 leading-snug" style={{ fontFamily: "Plus Jakarta Sans" }}>{s.title}</h3>
              <p className="text-xs leading-relaxed opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
