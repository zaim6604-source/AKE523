import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

export default function Hero() {
  const [ref, inView] = useInView();
  const scrollTo = (h) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-15 animate-blob pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0, 109, 119, 0.3) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] opacity-10 animate-blob pointer-events-none" style={{ background: "radial-gradient(circle, rgba(226, 149, 120, 0.25) 0%, transparent 70%)", animationDelay: "-4s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div ref={ref} className={`text-center lg:text-left transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span
              className="inline-flex items-center gap-1.5 mb-5 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border"
              style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.1)", borderColor: "rgba(0, 109, 119, 0.25)" }}
            >
              <FontAwesomeIcon icon={faGlobe} size="sm" /> Manpower • Visas • Immigration
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}
            >
              Your Complete Partner for{" "}
              <span style={{ color: "#006D77" }}>Jobs, Visas & Immigration</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: "#4a5568" }}>
              Etcom Manpower Promoters delivers overseas manpower, visa processing, and immigration and HR services
              — a licensed, all-in-one Islamabad team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923219115599"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 text-white font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "#E29578" }}
              >
                Get Started
              </a>
              <a
                href="https://wa.me/923219115599"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-full transition-all duration-200"
                style={{ color: "#006D77", border: "2px solid rgba(0, 109, 119, 0.3)" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative w-full max-w-md">
              <div className="img-hover-zoom rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/src/assets/images/hero-right.jpg"
                  alt="Professional team at work"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.className = "fallback-img w-full h-80 rounded-3xl";
                    e.target.parentElement.textContent = "Etcom Team";
                  }}
                />
              </div>
              {/* Floating stat chips */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl shadow-lg text-sm font-bold" style={{ backgroundColor: "#FFDD00", color: "#003844" }}>
                ★ 1000+ Placed
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-lg text-sm font-bold" style={{ backgroundColor: "#FFFFFF", color: "#006D77" }}>
                12+ Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
