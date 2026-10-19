import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Benefits from "../components/Benefits";
import PromoBanner from "../components/PromoBanner";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();
  return (
    <main id="main-content">
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={addToCart} limit={3} />
      <Benefits />
      <PromoBanner />
    </main>
  );
}
