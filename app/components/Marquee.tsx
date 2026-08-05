'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function Marquee({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = track?.parentElement;
    if (!track || !container) return;
    const unit = track.innerHTML;

    function fillMarquee() {
      track!.style.animation = 'none';
      track!.innerHTML = unit;
      while (track!.scrollWidth < container!.offsetWidth) {
        track!.innerHTML += unit;
      }
      track!.innerHTML += track!.innerHTML;
      track!.style.animation = '';
    }

    fillMarquee();
    let resizeTimer: ReturnType<typeof setTimeout>;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fillMarquee, 200);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {children}
      </div>
    </div>
  );
}
