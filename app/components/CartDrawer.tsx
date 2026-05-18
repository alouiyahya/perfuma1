// components/CartDrawer.tsx
'use client';

import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity" onClick={() => setIsCartOpen(false)} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white flex flex-col shadow-2xl h-full">
          <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between">
            <h2 className="text-sm font-medium tracking-widest uppercase text-stone-900 flex items-center space-x-2">
              <ShoppingBag size={15} /> <span>Votre Panier ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="text-stone-500 hover:text-stone-900 p-1 cursor-pointer"><X size={18} /></button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-xs tracking-wider uppercase text-stone-400 font-light">Votre panier est vide.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b border-stone-50 pb-4">
                  <div className="w-16 h-16 bg-stone-50 flex-shrink-0 flex items-center justify-center p-2"><img src={item.image} alt={item.name} className="h-full object-contain" /></div>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-xs font-medium text-stone-900 uppercase tracking-wide truncate">{item.name}</h3>
                    <p className="text-[10px] text-stone-500">Quantité : {item.quantity}</p>
                    <p className="text-xs font-light text-stone-700 mt-0.5">{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-stone-400 hover:text-red-600 p-1 cursor-pointer"><Trash2 size={14} /></button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-stone-100 px-6 py-6 bg-stone-50 space-y-4">
              <div className="flex justify-between text-xs tracking-wide"><span className="font-light text-stone-500 uppercase">Sous-total</span><span className="font-medium text-stone-950 text-sm">{getCartTotal()}</span></div>
              <button className="w-full bg-stone-950 text-white text-xs uppercase tracking-[0.2em] py-3.5 hover:bg-stone-800 transition-colors font-medium cursor-pointer">Passer la commande</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}