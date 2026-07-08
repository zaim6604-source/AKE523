import { useState, useRef, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, icon, aspectRatio }) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setErrored(false);
    setLoaded(false);
  }, [src]);

  // Check if image is already cached (onLoad may not fire for cached images)
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [src]);

  const handleError = () => {
    setErrored(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  const iconClass = typeof icon === 'string' ? icon : 'fas fa-image';

  if (errored || !src) {
    return (
      <div className={`img-fallback ${className || ''}`} style={aspectRatio ? { aspectRatio } : {}}>
        <i className={`${iconClass} text-4xl sm:text-5xl opacity-40`} />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={aspectRatio ? { aspectRatio } : {}}>
      {/* Fallback placeholder shown until image loads */}
      {!loaded && (
        <div className="absolute inset-0 img-fallback" style={{ zIndex: 1 }}>
          <i className={`${iconClass} text-4xl sm:text-5xl opacity-40`} />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt || ''}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 2, position: 'relative' }}
      />
    </div>
  );
}