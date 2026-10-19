export default function PromoBanner() {
  return (
    <section className="promo-banner" aria-labelledby="promo-heading">
      <div className="container promo-banner__inner">
        <div className="promo-banner__content">
          <span className="promo-banner__eyebrow">Limited Time Offer</span>
          <h2 id="promo-heading" className="promo-banner__heading">
            Upgrade Your Security System Today
          </h2>
          <p className="promo-banner__desc">
            Explore our latest bundles — complete camera kits with recording
            units, cables and mounting hardware. Everything you need, in one box.
          </p>
          <div className="promo-banner__cta-row">
            <a href="#products" className="btn btn--white btn--lg">
              Shop Security Bundles
            </a>
            <a href="#categories" className="btn btn--outline-white btn--lg">
              See All Categories
            </a>
          </div>
        </div>

        <div className="promo-banner__graphic" aria-hidden="true">
          {/* Decorative SVG camera illustration */}
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="promo-banner__svg">
            {/* Camera body */}
            <rect x="30" y="55" width="140" height="80" rx="14" fill="white" fillOpacity="0.12" />
            <rect x="30" y="55" width="140" height="80" rx="14" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
            {/* Lens */}
            <circle cx="110" cy="95" r="30" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
            <circle cx="110" cy="95" r="18" fill="white" fillOpacity="0.12" />
            <circle cx="110" cy="95" r="9" fill="white" fillOpacity="0.25" />
            {/* Top knob */}
            <rect x="98" y="38" width="24" height="20" rx="6" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
            {/* Side ports */}
            <rect x="160" y="78" width="18" height="8" rx="3" fill="white" fillOpacity="0.15" />
            <rect x="160" y="92" width="18" height="8" rx="3" fill="white" fillOpacity="0.15" />
            {/* Status light */}
            <circle cx="55" cy="75" r="5" fill="#0D9488" />
            {/* IR LEDs */}
            <circle cx="48" cy="95" r="4" fill="white" fillOpacity="0.2" />
            <circle cx="48" cy="110" r="4" fill="white" fillOpacity="0.2" />
            {/* Scan lines decoration */}
            <line x1="68" y1="140" x2="152" y2="140" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
            <line x1="78" y1="148" x2="142" y2="148" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
