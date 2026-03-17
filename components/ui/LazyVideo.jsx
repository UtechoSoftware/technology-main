"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video that only loads when in (or near) viewport — saves bandwidth and improves LCP.
 * Use for non–above-the-fold videos (page section banners, logo, etc.).
 */
export default function LazyVideo({
  src,
  poster,
  className,
  preload = "none",
  rootMargin = "200px",
  ...props
}) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin, threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src, rootMargin]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      preload={shouldLoad ? preload : "none"}
      playsInline
      {...props}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
