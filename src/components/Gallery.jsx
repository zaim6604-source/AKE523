const images = [
  { src: '/images/hero-team.jpg', alt: 'Team collaboration' },
  { src: '/images/office-interview.jpg', alt: 'Interview session' },
  { src: '/images/meeting.jpg', alt: 'Client meeting' },
  { src: '/images/consulting.jpg', alt: 'HR consulting' },
];

export default function Gallery() {
  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-camera text-primary/70 text-xs" /> GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading">A Glimpse of Our Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.src = '/images/fallback.svg'; }} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
