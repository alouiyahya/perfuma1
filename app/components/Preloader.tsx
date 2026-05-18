// components/Preloader.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 600);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950 text-stone-100 transition-all duration-1000 ease-in-out ${isLoaded ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className="text-center space-y-2 animate-pulse">
        <h1 className="font-serif text-3xl sm:text-5xl tracking-[0.4em] uppercase font-light text-stone-200">
          Maison Parfum
        </h1>
        <p className="text-[10px] tracking-[0.6em] uppercase text-stone-500 font-medium">
          Haute Parfumerie
        </p>
      </div>
      <div className="absolute bottom-24 w-40 sm:w-56 h-[1px] bg-stone-800 overflow-hidden">
        <div className="h-full bg-stone-300 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}