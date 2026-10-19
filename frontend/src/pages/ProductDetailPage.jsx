import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import { StarRating } from "../components/FeaturedProducts";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="page" id="main-content">
        <div className="container">
          <div className="not-found">
            <h1>Product not found</h1>
            <p>The product you are looking for does not exist or has been removed.</p>
            <Link to="/products" className="btn btn--primary btn--md" style={{ marginTop: "20px" }}>
              ← Back to Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  function handleBuyNow() {
    for (let i = 0; i < qty; i++) addToCart(product);
    navigate("/cart");
  }

  return (
    <main className="page product-detail-page" id="main-content">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb__link">Home</Link>
          <span className="breadcrumb__sep" aria-hidden="true">›</span>
          <Link to="/products" className="breadcrumb__link">Products</Link>
          <span className="breadcrumb__sep" aria-hidden="true">›</span>
          <span className="breadcrumb__current" aria-current="page">{product.name}</span>
        </nav>

        <div className="product-detail">
          {/* Image panel */}
          <div className="product-detail__image-panel">
            <div className="product-detail__image-wrap">
              {product.badge && (
                <span className="product-card__badge">{product.badge}</span>
              )}
              {discount && (
                <span className="product-card__discount">-{discount}%</span>
              )}
              <img
                src={product.image}
                alt={product.imageAlt}
                className="product-detail__image"
                width="600"
                height="450"
                loading="eager"
              />
            </div>
          </div>

          {/* Info panel */}
          <div className="product-detail__info">
            <p className="product-card__category">{product.category}</p>
            <h1 className="product-detail__name">{product.name}</h1>

            <div className="product-detail__rating-row">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="product-detail__price-row">
              <span className="product-detail__price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="product-card__original-price">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="product-detail__saving">
                    Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")} ({discount}% off)
                  </span>
                </>
              )}
            </div>

            <p className="product-detail__desc">{product.description}</p>

            {/* Specs */}
            <div className="product-detail__specs-row">
              {product.specs.map((s) => (
                <span key={s} className="product-card__spec">{s}</span>
              ))}
            </div>

            {/* Features */}
            <div className="product-detail__features">
              <h2 className="product-detail__features-heading">Key Features</h2>
              <ul className="product-detail__features-list">
                {product.features.map((f) => (
                  <li key={f}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Qty + CTA */}
            <div className="product-detail__actions">
              <div
                className="qty-control product-detail__qty"
                role="group"
                aria-label="Product quantity"
              >
                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={qty <= 1}
                >−</button>
                <span className="qty-value">{qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>

              <button
                className={`btn btn--primary btn--lg${added ? " btn--added" : ""}`}
                onClick={handleAddToCart}
                aria-label={`Add ${product.name} to cart`}
              >
                {added ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Added to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>

              <button
                className="btn btn--outline btn--lg"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            <p className="product-detail__note">
              Sample product — prices and availability are for demonstration only.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
