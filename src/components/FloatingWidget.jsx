import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Etcom Manpower!%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service || "Not specified"}`
    );
    window.open(`https://wa.me/923219115599?text=${text}`, "_blank");
    setOpen(false);
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <>
      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: "#E29578" }}
      >
        {open ? (
          <FontAwesomeIcon icon={faXmark} size="lg" style={{ color: "#FFFFFF" }} />
        ) : (
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "#FFFFFF" }} />
        )}
      </button>

      {/* Widget panel */}
      <div
        className="fixed bottom-24 right-6 z-40 w-72 rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
          backgroundColor: "#FFFFFF",
          border: open ? "1px solid rgba(0, 109, 119, 0.12)" : "none",
        }}
      >
        <div className="p-4" style={{ backgroundColor: "#006D77" }}>
          <p className="text-white font-extrabold text-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>Quick Inquiry</p>
          <p className="text-white/70 text-xs">We'll reply on WhatsApp instantly</p>
        </div>
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required
            className="w-full px-3 py-2.5 rounded-xl text-xs transition"
            style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)", color: "#003844", outline: "none" }}
            onFocus={(e) => e.target.style.borderColor = "#006D77"}
            onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.1)"} />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required
            className="w-full px-3 py-2.5 rounded-xl text-xs transition"
            style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)", color: "#003844", outline: "none" }}
            onFocus={(e) => e.target.style.borderColor = "#006D77"}
            onBlur={(e) => e.target.style.borderColor = "rgba(0, 109, 119, 0.1)"} />
          <select value={service} onChange={(e) => setService(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl text-xs transition"
            style={{ backgroundColor: "#EDF6F9", border: "1px solid rgba(0, 109, 119, 0.1)", color: "#003844", outline: "none" }}>
            <option value="">Select Service</option>
            <option>Manpower</option>
            <option>Visa</option>
            <option>Immigration</option>
            <option>HR</option>
          </select>
          <button type="submit" className="w-full py-2.5 text-white text-xs font-bold rounded-xl transition-all duration-200 shadow"
            style={{ backgroundColor: "#E29578" }}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Send
          </button>
        </form>
      </div>
    </>
  );
}
