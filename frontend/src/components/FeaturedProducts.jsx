import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export function StarRating({ rating, count }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="stars" aria-label={`Rating: ${rating} out of 5 (${count} reviews)`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="star star--full" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27 5.22 15.7l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
      {half && (
        <svg key="h" className="star star--half" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27 5.22 15.7l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="star star--empty" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27 5.22 15.7l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
      <span className="stars__count">({count})</span>
    </div>
  );
}

export function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  function handleAdd(e) {
    e.preventDefault(); // don't trigger the Link wrapper
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="product-card" aria-label={product.name}>
      <Link to={`/products/${product.id}`} className="product-card__link" tabIndex={-1} aria-hidden="true">
        <div className="product-card__image-wrap">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="product-card__image"
            width="400"
            height="300"
            loading="lazy"
          />
          {product.badge && (
            <span className="product-card__badge">{product.badge}</span>
          )}
          {discount && (
            <span className="product-card__discount">-{discount}%</span>
          )}
        </div>
      </Link>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">
          <Link to={`/products/${product.id}`} className="product-card__name-link">
            {product.name}
          </Link>
        </h3>

        <ul className="product-card__specs" aria-label="Key specifications">
          {product.specs.map((s) => (
            <li key={s} className="product-card__spec">{s}</li>
          ))}
        </ul>

        <StarRating rating={product.rating} count={product.reviewCount} />

        <div className="product-card__footer">
          <div className="product-card__price-group">
            <span className="product-card__price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="product-card__original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          <button
            className={`btn btn--primary btn--sm${added ? " btn--added" : ""}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Added
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

// Used on Home page — shows first 3 products only
export default function FeaturedProducts({ onAddToCart, limit = 3 }) {
  const products = PRODUCTS.slice(0, limit);

  return (
    <section className="products section section--light" id="products" aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="products-heading" className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Sample catalogue — product data will be loaded from the database
          </p>
        </div>
        <ul className="products__grid" role="list">
          {products.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} onAddToCart={onAddToCart} />
            </li>
          ))}
        </ul>
        <div className="products__cta">
          <Link to="/products" className="btn btn--outline btn--lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
