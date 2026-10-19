import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPageItem({ item, onRemove, onQtyChange }) {
  const discount = item.originalPrice
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : null;

  return (
    <li className="cart-page-item">
      <Link to={`/products/${item.id}`} className="cart-page-item__image-link">
        <img
          src={item.image}
          alt={item.imageAlt || item.name}
          className="cart-page-item__image"
          width="100"
          height="100"
          loading="lazy"
        />
      </Link>
      <div className="cart-page-item__info">
        <p className="cart-page-item__category">{item.category}</p>
        <h3 className="cart-page-item__name">
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </h3>
        <div className="cart-page-item__specs">
          {item.specs?.map((s) => (
            <span key={s} className="product-card__spec">{s}</span>
          ))}
        </div>
      </div>
      <div className="cart-page-item__middle">
        <div className="qty-control" role="group" aria-label={`Quantity for ${item.name}`}>
          <button
            className="qty-btn"
            onClick={() => onQtyChange(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            disabled={item.quantity <= 1}
          >−</button>
          <span className="qty-value" aria-live="polite">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onQtyChange(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >+</button>
        </div>
      </div>
      <div className="cart-page-item__price-col">
        <span className="cart-page-item__unit">
          ₹{Number(item.price).toLocaleString("en-IN")}
          {discount && <span className="product-card__discount" style={{ position: "static", marginLeft: 6 }}>-{discount}%</span>}
        </span>
        <span className="cart-page-item__subtotal">
          ₹{(Number(item.price) * Number(item.quantity)).toLocaleString("en-IN")}
        </span>
        <button
          className="cart-item__remove"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
          Remove
        </button>
      </div>
    </li>
  );
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cartItems.reduce((s, i) => s + (Number(i.price) * Number(i.quantity)), 0);
  const itemCount = cartItems.reduce((s, i) => s + Number(i.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <main className="page cart-page" id="main-content">
        <div className="container">
          <h1 className="page-title">Your Cart</h1>
          <div className="cart__empty" style={{ padding: "80px 0" }}>
            <div className="cart__empty-icon" aria-hidden="true">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h2 className="cart__empty-title">Your cart is empty</h2>
            <p className="cart__empty-desc">
              Browse our CCTV cameras and security systems to find the right solution.
            </p>
            <Link to="/products" className="btn btn--primary btn--lg" style={{ marginTop: "8px" }}>
              Shop Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page cart-page" id="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Your Cart</h1>
          <p className="page-subtitle">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
        </div>

        <div className="cart-page__layout">
          {/* Items */}
          <section aria-label="Cart items">
            {/* Column headers */}
            <div className="cart-page__col-headers" aria-hidden="true">
              <span>Product</span>
              <span>Qty</span>
              <span>Price / Total</span>
            </div>
            <ul className="cart-page__list">
              {cartItems.map((item) => (
                <CartPageItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onQtyChange={updateQuantity}
                />
              ))}
            </ul>
            <div className="cart-page__list-footer">
              <button className="btn btn--outline btn--sm" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/products" className="btn btn--outline btn--sm">
                ← Continue Shopping
              </Link>
            </div>
          </section>

          {/* Order summary */}
          <aside className="cart-page__summary" aria-label="Order summary">
            <h2 className="cart-page__summary-heading">Order Summary</h2>

            <div className="cart-page__summary-row">
              <span>Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="cart-page__summary-row">
              <span>Shipping</span>
              <span className="cart-page__free">Calculated at checkout</span>
            </div>
            <div className="cart-page__summary-row cart-page__summary-row--total">
              <strong>Total</strong>
              <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>

            <p className="cart-page__tax-note">Taxes and shipping calculated at checkout</p>

            <button
              className="btn btn--primary btn--lg cart-page__checkout-btn"
              onClick={() => alert("Checkout will be connected when the payment backend is ready.")}
            >
              Proceed to Checkout
            </button>

            <div className="cart-page__trust">
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Secure checkout
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                Multiple payment options
              </span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
