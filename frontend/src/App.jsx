import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactPage from "./pages/ContactPage";

// Inner shell reads cart context (must be inside CartProvider)
function AppShell() {
  const { isCartOpen, setCartOpen } = useCart();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/products"      element={<ProductsPage />} />
        <Route path="/products/:id"  element={<ProductDetailPage />} />
        <Route path="/cart"          element={<CartPage />} />
        <Route path="/login"         element={<LoginPage />} />
        <Route path="/signup"        element={<SignupPage />} />
        <Route path="/contact"       element={<ContactPage />} />
        {/* Fallback — redirect unknown paths to home */}
        <Route path="*"              element={<HomePage />} />
      </Routes>

      <Footer />

      {/* Slide-in cart drawer — available on every page */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  );
}
