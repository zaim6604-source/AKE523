import useInView from "../hooks/useInView";

const photos = [
  { src: "/src/assets/images/gallery-1.jpg", alt: "Our team at work" },
  { src: "/src/assets/images/gallery-2.jpg", alt: "Travel and airport assistance" },
  { src: "/src/assets/images/gallery-3.jpg", alt: "Client consultation meeting" },
  { src: "/src/assets/images/gallery-4.jpg", alt: "Office workspace" },
];

export default function Gallery() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border" style={{ color: "#006D77", backgroundColor: "rgba(0, 109, 119, 0.08)", borderColor: "rgba(0, 109, 119, 0.2)" }}>
            GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans", color: "#003844" }}>Our Work in Action</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className="img-hover-zoom rounded-2xl shadow-sm transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-52 object-cover rounded-2xl"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; e.target.parentElement.className = "fallback-img h-52 rounded-2xl"; e.target.parentElement.textContent = "ETCOM"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
