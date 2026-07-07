import { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    alt: "Professional team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    alt: "Office environment",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    alt: "Team discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Team meeting",
  },
];

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center rounded-xl`}>
        <i className="fas fa-image text-gray-300 text-3xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ImgWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}