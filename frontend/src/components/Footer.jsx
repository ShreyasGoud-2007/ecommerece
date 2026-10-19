import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  shop: [
    { label: "Dome Cameras",    to: "/products?category=Dome+Camera" },
    { label: "Bullet Cameras",  to: "/products?category=Bullet+Camera" },
    { label: "PTZ Cameras",     to: "/products?category=PTZ+Camera" },
    { label: "DVR & NVR Systems", to: "/products?category=DVR+System" },
    { label: "Accessories",     to: "/products?category=Accessories" },
  ],
  company: [
    { label: "Contact",         to: "/contact" },
    { label: "Privacy Policy",  to: "#" },
    { label: "Terms of Service",to: "#" },
    { label: "Return Policy",   to: "#" },
  ],
  support: [
    { label: "FAQ",               to: "#" },
    { label: "Installation Guide",to: "#" },
    { label: "Warranty Claims",   to: "#" },
    { label: "Track Order",       to: "#" },
  ],
};

function SocialIcon({ label, href, children }) {
  return (
    <a
      href={href}
      className="footer__social-link"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function FooterLink({ to, children }) {
  // External / placeholder links stay as <a>, internal use Link
  if (to === "#") {
    return <a href="#" className="footer__link">{children}</a>;
  }
  return <Link to={to} className="footer__link">{children}</Link>;
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="SecureVision Home">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#173B66" />
                <circle cx="16" cy="14" r="5" fill="#0D9488" />
                <circle cx="16" cy="14" r="2.5" fill="white" />
                <rect x="6" y="22" width="20" height="2.5" rx="1.25" fill="#0D9488" />
              </svg>
              <span>Secure<strong>Vision</strong></span>
            </Link>
            <p className="footer__tagline">
              Professional CCTV cameras and security systems for homes and businesses.
            </p>
            {/* Contact placeholders — real details to be added by the store owner */}
            <address className="footer__contact" aria-label="Contact information">
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                City, State — India
              </p>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.48 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +91 XXXXX XXXXX
              </p>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                hello@securevision.in
              </p>
            </address>

            <div className="footer__social" aria-label="Social media links">
              <SocialIcon label="Facebook" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </SocialIcon>
              <SocialIcon label="YouTube" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </SocialIcon>
              <SocialIcon label="WhatsApp" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          <div className="footer__links-col">
            <h3 className="footer__col-heading">Shop</h3>
            <ul>
              {FOOTER_LINKS.shop.map((l) => (
                <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__col-heading">Company</h3>
            <ul>
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__col-heading">Support</h3>
            <ul>
              {FOOTER_LINKS.support.map((l) => (
                <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} SecureVision. All rights reserved.
          </p>
          <p className="footer__legal">
            Product images and prices are for illustration only. Contact us for current availability.
          </p>
        </div>
      </div>
    </footer>
  );
}
