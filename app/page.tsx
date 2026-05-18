// app/page.tsx
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProductGrid />
      <CartDrawer />
    </main>
  );
}