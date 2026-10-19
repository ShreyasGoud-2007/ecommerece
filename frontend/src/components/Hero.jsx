import { Link } from "react-router-dom";
import heroPng from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Smart Security Solutions</span>
          <h1 className="hero__heading" id="hero-heading">
            Protect What<br />
            <span className="hero__accent">Matters Most</span>
          </h1>
          <p className="hero__desc">
            Discover our range of professional-grade CCTV cameras, recording
            systems and security accessories — built to keep your home and
            business safe around the clock.
          </p>
          <div className="hero__cta-row">
            <Link to="/products" className="btn btn--primary btn--lg">
              Shop Cameras
            </Link>
            <Link to="/products" className="btn btn--outline btn--lg">
              Browse Categories
            </Link>
          </div>
          <ul className="hero__badges" aria-label="Key features">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              HD &amp; 4K Surveillance
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Night Vision Ready
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Manufacturer Warranty
            </li>
          </ul>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-bg" aria-hidden="true" />
          <img
            src={heroPng}
            alt="Professional CCTV security camera mounted on a wall, providing wide-angle surveillance coverage"
            className="hero__image"
            width="540"
            height="420"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
