const BENEFITS = [
  {
    id: "genuine",
    title: "Genuine Products",
    desc: "Every item is sourced directly from authorised distributors and brand channels.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "warranty",
    title: "Manufacturer Warranty",
    desc: "All cameras and recording systems come with official manufacturer warranty coverage.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "payments",
    title: "Secure Payments",
    desc: "Checkout safely with industry-standard encryption protecting every transaction.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "Customer Support",
    desc: "Our technical team is on hand to help with product selection and installation queries.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.48 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="about" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="benefits-heading" className="section-title">Why Shop with SecureVision</h2>
          <p className="section-subtitle">
            We stand behind every product we sell
          </p>
        </div>
        <ul className="benefits__grid" role="list">
          {BENEFITS.map((b) => (
            <li key={b.id} className="benefit-card">
              <div className="benefit-card__icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
