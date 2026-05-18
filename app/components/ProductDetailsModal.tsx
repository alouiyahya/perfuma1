// components/ProductDetailsModal.tsx
'use client';

import { X, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string; price: string; image: string; } | null;
}

export default function ProductDetailsModal({ isOpen, onClose, product }: ProductDetailsProps) {
  const { addToCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full md:max-w-3xl rounded-t-2xl md:rounded-lg overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row z-10 transition-transform duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-stone-100 p-1.5 rounded-full text-stone-700 hover:text-stone-950 cursor-pointer">
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="w-full md:w-1/2 bg-[#f6f6f6] flex items-center justify-center p-6 aspect-square md:aspect-auto">
          <img src={product.image} alt={product.name} className="h-full max-h-[200px] md:max-h-[350px] object-contain" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium">Maison Parfum Luxury</span>
            <h2 className="text-lg md:text-2xl font-serif tracking-wide text-stone-950 uppercase mt-1">{product.name}</h2>
            <p className="text-sm text-stone-600 mt-1 font-light">À partir de <span className="font-medium text-stone-950 text-base">{product.price}</span></p>
            <hr className="border-stone-100 my-4" />
            <p className="text-xs text-stone-600 font-light leading-relaxed">Une création olfactive d’exception. Les notes de tête fusantes laissent place à un cœur intense et magnétique.</p>
            <div className="mt-4">
              <span className="text-[10px] tracking-wider uppercase text-stone-500 font-medium">Format</span>
              <div className="flex space-x-2 mt-1.5">
                <button className="border border-stone-950 text-stone-950 text-[11px] px-3 py-1.5 bg-stone-50 font-medium">100 ML</button>
                <button className="border border-stone-200 text-stone-400 text-[11px] px-3 py-1.5">200 ML</button>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button onClick={() => { addToCart(product); onClose(); }} className="w-full bg-stone-950 text-white text-xs uppercase tracking-[0.2em] py-3.5 rounded-sm hover:bg-stone-800 transition-colors font-medium flex items-center justify-center space-x-2 cursor-pointer">
              <ShoppingBag size={14} /> <span>Ajouter au Panier</span>
            </button>
            <div className="grid grid-cols-2 gap-2 text-[9px] text-stone-500 font-light pt-1">
              <div className="flex items-center space-x-1"><Truck size={12} /> <span>Livraison Gratuite (24h)</span></div>
              <div className="flex items-center space-x-1"><ShieldCheck size={12} /> <span>Paiement à la livraison</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}