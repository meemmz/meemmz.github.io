'use client';

import { useEffect, useRef } from 'react';

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;
    function handleMouseMove(e: MouseEvent) {
      blob!.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="blob" ref={blobRef} />;
}
