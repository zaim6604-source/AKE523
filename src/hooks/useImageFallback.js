import { useState } from 'react';

export default function useImageFallback(fallback) {
  const [errored, setErrored] = useState(false);

  const onError = () => setErrored(true);

  return { errored, onError, fallbackSrc: fallback };
}