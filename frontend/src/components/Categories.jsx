import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    id: "dome",
    label: "Dome Cameras",
    desc: "Discreet, vandal-resistant indoor & outdoor surveillance",
    to: "/products?category=Dome+Camera",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#EFF6FF" />
        <circle cx="32" cy="32" r="14" fill="#173B66" />
        <circle cx="32" cy="32" r="7" fill="#0D9488" />
        <circle cx="32" cy="32" r="3" fill="white" />
        <path d="M32 4 A28 28 0 0 1 60 32" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "bullet",
    label: "Bullet Cameras",
    desc: "Long-range outdoor cameras with weatherproof housing",
    to: "/products?category=Bullet+Camera",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#F0FDF4" />
        <rect x="16" y="26" width="28" height="12" rx="6" fill="#173B66" />
        <rect x="42" y="28" width="8" height="8" rx="2" fill="#0D9488" />
        <circle cx="23" cy="32" r="4" fill="#0D9488" />
        <circle cx="23" cy="32" r="2" fill="white" />
      </svg>
    ),
  },
  {
    id: "ptz",
    label: "PTZ Cameras",
    desc: "Pan-tilt-zoom cameras for wide-area monitoring",
    to: "/products?category=PTZ+Camera",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#FFF7ED" />
        <circle cx="32" cy="32" r="12" fill="#173B66" />
        <circle cx="32" cy="32" r="6" fill="#0D9488" />
        <circle cx="32" cy="32" r="2.5" fill="white" />
        <line x1="32" y1="8" x2="32" y2="16" stroke="#173B66" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="48" x2="32" y2="56" stroke="#173B66" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="32" x2="16" y2="32" stroke="#173B66" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="32" x2="56" y2="32" stroke="#173B66" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "dvr-nvr",
    label: "DVR & NVR Systems",
    desc: "High-capacity recording systems for any installation size",
    to: "/products?category=DVR+System",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#EFF6FF" />
        <rect x="14" y="22" width="36" height="20" rx="4" fill="#173B66" />
        <rect x="17" y="25" width="14" height="10" rx="2" fill="#0D9488" />
        <circle cx="39" cy="30" r="3" fill="#38BDF8" />
        <circle cx="47" cy="30" r="3" fill="#64748B" />
        <rect x="17" y="38" width="30" height="2" rx="1" fill="#0D9488" />
      </svg>
    ),
  },
  {
    id: "accessories",
    label: "Accessories",
    desc: "Mounts, cables, power supplies and installation kits",
    to: "/products?category=Accessories",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#F0FDF4" />
        <path d="M20 32 L32 20 L44 32 L32 44 Z" fill="#173B66" />
        <circle cx="32" cy="32" r="5" fill="#0D9488" />
        <circle cx="32" cy="32" r="2" fill="white" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="categories section" id="categories" aria-labelledby="categories-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="categories-heading" className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find the right security solution for every environment
          </p>
        </div>
        <ul className="categories__grid" role="list">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <Link
                to={cat.to}
                className="category-card"
                aria-label={`Browse ${cat.label}`}
              >
                <div className="category-card__icon">{cat.icon}</div>
                <h3 className="category-card__label">{cat.label}</h3>
                <p className="category-card__desc">{cat.desc}</p>
                <span className="category-card__arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
