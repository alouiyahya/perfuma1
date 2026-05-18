// components/ProductCard.tsx
'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductProps {
  name: string;
  price: string;
  image: string;
  tagline?: string;
  onOpenDetails: () => void;
}

export default function ProductCard({ name, price, image, tagline = "Personnalisable et rechargeable", onOpenDetails }: ProductProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={onOpenDetails} className="group relative flex flex-col bg-white p-1 md:p-2 transition-all duration-300 cursor-pointer select-none">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f6f6f6] flex items-center justify-center rounded-sm">
        <img src={image} alt={name} className="h-[80%] md:h-[85%] object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        <button 
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-2 right-2 md:top-4 md:right-4 p-1 text-stone-900 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
        >
          <Heart size={16} strokeWidth={1.2} className={isLiked ? "fill-stone-900 text-stone-900" : "text-stone-700 hover:text-stone-900"} />
        </button>
      </div>

      <div className="mt-3 flex flex-col space-y-0.5 text-left px-1">
        <p className="text-[9px] md:text-[11px] font-light text-stone-500 tracking-wide truncate">{tagline}</p>
        <h3 className="text-xs md:text-sm font-medium tracking-wide text-stone-900 uppercase truncate">{name}</h3>
        <p className="text-[11px] md:text-xs font-light text-stone-600 mt-0.5">À partir de {price}</p>
      </div>
    </div>
  );
}