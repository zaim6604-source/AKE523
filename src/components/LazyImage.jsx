import { useState, useRef, useEffect } from 'react';

const fallbackImg = '/fallback.svg';

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const handleError = () => {
    setImgSrc(fallbackImg);
    setLoaded(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image ${loaded ? 'loaded' : ''} ${className}`} {...props}>
      {inView && (
        <img
          src={imgSrc}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
}