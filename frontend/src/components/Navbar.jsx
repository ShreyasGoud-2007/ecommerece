
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function CartIcon({ count, onClick }) {
  return (
    <button
      type="button"
      className="cart-btn"
      onClick={onClick}
      aria-label={`Shopping cart, ${count} item${count !== 1 ? "s" : ""}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      {count > 0 && (
        <span className="cart-badge" aria-hidden="true">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "Contact", to: "/contact" },
  ];

  function handleCartClick() {
    closeMenu();
    navigate("/cart");
  }

  return (
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="SecureVision Home">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#173B66" />
            <circle cx="16" cy="14" r="5" fill="#0D9488" />
            <circle cx="16" cy="14" r="2.5" fill="white" />
            <rect
              x="6"
              y="22"
              width="20"
              height="2.5"
              rx="1.25"
              fill="#0D9488"
            />
          </svg>

          <span>
            Secure<strong>Vision</strong>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/login" className="btn btn--outline btn--sm">
            Login
          </Link>

          <CartIcon count={cartCount} onClick={handleCartClick} />

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`ham-bar${menuOpen ? " ham-bar--open" : ""}`} />
            <span className={`ham-bar${menuOpen ? " ham-bar--open" : ""}`} />
            <span className={`ham-bar${menuOpen ? " ham-bar--open" : ""}`} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}

        <Link
          to="/login"
          className="btn btn--primary btn--sm navbar__mobile-login"
          onClick={closeMenu}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
