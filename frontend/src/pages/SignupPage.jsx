import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
    alert("Signup backend will be connected in a future update.");
  }

  return (
    <main className="page auth-page" id="main-content">
      <div className="auth-card">
        {/* Logo */}
        <Link to="/" className="auth-card__logo" aria-label="SecureVision Home">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#173B66" />
            <circle cx="16" cy="14" r="5" fill="#0D9488" />
            <circle cx="16" cy="14" r="2.5" fill="white" />
            <rect x="6" y="22" width="20" height="2.5" rx="1.25" fill="#0D9488" />
          </svg>
          <span>Secure<strong>Vision</strong></span>
        </Link>

        <h1 className="auth-card__heading">Create an account</h1>
        <p className="auth-card__sub">Join SecureVision to shop and track your orders</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="signup-name" className="form-label">Full name</label>
            <input
              id="signup-name"
              type="text"
              className="form-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email" className="form-label">Email address</label>
            <input
              id="signup-email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password" className="form-label">Password</label>
            <input
              id="signup-password"
              type="password"
              className="form-input"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-confirm" className="form-label">Confirm password</label>
            <input
              id="signup-confirm"
              type="password"
              className="form-input"
              placeholder="Re-enter your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="btn btn--primary btn--lg auth-form__submit">
            Create Account
          </button>
        </form>

        <p className="auth-card__switch">
          Already have an account?{" "}
          <Link to="/login" className="auth-card__link">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
