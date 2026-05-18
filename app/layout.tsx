// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Preloader from "./components/Preloader";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Maison Parfum | Haute Parfumerie",
  description: "Boutique en ligne de parfums de luxe",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-white text-stone-900">
        <CartProvider>
          <Preloader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}