
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function EmptyCart({ onClose }) {
  return (
    <div className="cart__empty">
      <div className="cart__empty-icon" aria-hidden="true">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </div>

      <h3 className="cart__empty-title">Your cart is empty</h3>

      <p className="cart__empty-desc">
        Browse our cameras and security systems to find the right solution for you.
      </p>

      <Link
        to="/products"
        className="btn btn--primary btn--md"
        onClick={onClose}
      >
        Shop Now
      </Link>
    </div>
  );
}

function CartItem({ item, onRemove, onQtyChange }) {
  return (
    <li className="cart-item">
      <img
        src={item.image}
        alt={item.imageAlt || item.name}
        className="cart-item__image"
        width="64"
        height="64"
        loading="lazy"
      />

      <div className="cart-item__info">
        <p className="cart-item__name">{item.name}</p>

        <p className="cart-item__unit-price">
          ₹{Number(item.price).toLocaleString("en-IN")}
        </p>

        <div className="cart-item__controls">
          <div
            className="qty-control"
            role="group"
            aria-label={`Quantity for ${item.name}`}
          >
            <button
              type="button"
              className="qty-btn"
              onClick={() => onQtyChange(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              disabled={item.quantity <= 1}
            >
              −
            </button>

            <span className="qty-value" aria-live="polite">
              {item.quantity}
            </span>

            <button
              type="button"
              className="qty-btn"
              onClick={() => onQtyChange(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="cart-item__remove"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
            Remove
          </button>
        </div>
      </div>

      <p
        className="cart-item__subtotal"
        aria-label={`Subtotal for ${item.name}`}
      >
        ₹{(Number(item.price) * Number(item.quantity)).toLocaleString("en-IN")}
      </p>
    </li>
  );
}

export default function Cart({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
  } = useCart();

  const items = cartItems;
  const onRemove = removeFromCart;
  const onQtyChange = updateQuantity;
  const total = cartTotal;
  const itemCount = cartCount;

  // Lock body scrolling while the drawer is open.
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the drawer when Escape is pressed.
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  function handleCheckout() {
    onClose();
    navigate("/cart");
  }

  return (
    <>
      <div
        className={`cart-backdrop${isOpen ? " cart-backdrop--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        ref={drawerRef}
        className={`cart-drawer${isOpen ? " cart-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            Shopping Cart

            {itemCount > 0 && (
              <span
                className="cart-drawer__count"
                aria-label={`${itemCount} items`}
              >
                {itemCount}
              </span>
            )}
          </h2>

          <button
            type="button"
            ref={closeBtnRef}
            className="cart-drawer__close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <EmptyCart onClose={onClose} />
          ) : (
            <ul className="cart__items" aria-label="Cart items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onQtyChange={onQtyChange}
                />
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total-row">
              <span>
                Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})
              </span>

              <strong className="cart-drawer__total">
                ₹{Number(total).toLocaleString("en-IN")}
              </strong>
            </div>

            <p className="cart-drawer__tax-note">
              Taxes and shipping calculated at checkout
            </p>

            <button
              type="button"
              className="btn btn--primary btn--lg cart-drawer__checkout"
              onClick={handleCheckout}
            >
              View Cart &amp; Checkout
            </button>

            <button
              type="button"
              className="cart-drawer__continue"
              onClick={onClose}
            >
              ← Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
