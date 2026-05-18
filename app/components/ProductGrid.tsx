// components/ProductGrid.tsx
'use client';

import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';

const MOCK_PERFUMES = [
  { id: 1, name: "IMAGINATION", price: "300,00€", image: "/images/perfume1.png" },
  { id: 2, name: "L'IMMENSETÉ", price: "300,00€", image: "/images/perfume2.png" },
  { id: 3, name: "LV Lovers", price: "300,00€", image: "/images/perfume3.png" },
  { id: 4, name: "MÉTÉORE", price: "300,00€", image: "/images/perfume4.png" },
  { id: 5, name: "BOSS", price: "300,00€", image: "/images/perfume5.png" },
  { id: 6, name: "XIYOS", price: "300,00€", image: "/images/perfume6.png" },
  { id: 7, name: "DULCE GABANA", price: "300,00€", image: "/images/perfume7.png" },
  { id: 8, name: "TIYUNO", price: "300,00€", image: "/images/perfume8.png" },
];

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  product: any; // Redha 'any' ghir bsh ndozo l-build blati machakil d type strict
}

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<PerfumeType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-white px-4 md:px-12 py-8 md:py-12">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-6 md:mb-8">
        <div className="flex items-center space-x-1 text-[11px] md:text-xs tracking-wide text-stone-800">
          <span className="font-medium">Parfums masculins</span>
          <span className="text-stone-400 text-[9px]">▼</span>
        </div>
        <button className="flex items-center space-x-2 border border-stone-300 rounded-full px-4 md:px-5 py-1 md:py-1.5 text-[11px] md:text-xs tracking-wide text-stone-800 hover:border-stone-900 transition-colors cursor-pointer">
          <span>Filtrer</span>
          <SlidersHorizontal strokeWidth={1.5} className="w-3 h-3 md:w-3.5 md:h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-8 md:gap-y-12">
        {MOCK_PERFUMES.map((perfume) => (
          <ProductCard key={perfume.id} name={perfume.name} price={perfume.price} image={perfume.image} onOpenDetails={() => { setSelectedProduct(perfume); setIsModalOpen(true); }} />
        ))}
      </div>

      <ProductDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
    </section>
  );
}