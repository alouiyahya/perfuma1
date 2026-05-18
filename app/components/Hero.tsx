// components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, Menu, ShoppingBag, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BACKGROUND_IMAGES = [
  "/images/background1.jpeg",
  "/images/background2.jpg",
  "/images/background3.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setIsCartOpen, cartItems } = useCart();
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-900">
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transition-transform duration-[4000ms]`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/10" />

      {/* NAVBAR */}
      <nav className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 md:px-12 h-20 text-stone-900 bg-gradient-to-b from-white/40 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity cursor-pointer">
            <Menu size={16} strokeWidth={1.5} />
            <span className="hidden md:inline">Menu</span>
          </button>
          <div className="hidden sm:flex items-center space-x-2 text-xs font-light text-stone-700">
            <Search size={15} strokeWidth={1.5} />
            <input type="text" placeholder="Que recherchez-vous ?" className="bg-transparent border-none outline-none text-xs w-40 placeholder-stone-600 focus:placeholder-stone-400" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-serif text-xl md:text-3xl tracking-[0.3em] uppercase font-light text-stone-950 select-none">
            MAISON PARFUM
          </h1>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hidden lg:inline text-xs font-light hover:underline tracking-wider text-stone-800">Contactez-nous</a>
          <button className="hover:opacity-60 transition-opacity text-stone-900 cursor-pointer"><Heart size={18} strokeWidth={1.5} /></button>
          <button className="hover:opacity-60 transition-opacity text-stone-900 cursor-pointer"><User size={18} strokeWidth={1.5} /></button>
          <button onClick={() => setIsCartOpen(true)} className="relative hover:opacity-60 transition-opacity text-stone-900 cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1.5 bg-stone-950 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="absolute inset-x-0 bottom-20 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium text-stone-200 mb-3">Collection Privée</span>
        <h2 className="font-serif text-3xl md:text-6xl tracking-[0.15em] uppercase font-light text-white">IMAGINATION</h2>
        <p className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase font-light text-stone-200">L'essence de la liberté</p>
        <button className="mt-6 border border-white/60 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.3em] font-medium px-8 py-3 hover:bg-white hover:text-stone-950 transition-all duration-300 rounded-sm cursor-pointer">
          Découvrir le parfum
        </button>
      </div>
    </div>
  );
}