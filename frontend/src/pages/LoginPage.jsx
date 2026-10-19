import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login backend will be connected in a future update.");
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

        <h1 className="auth-card__heading">Welcome back</h1>
        <p className="auth-card__sub">Sign in to your SecureVision account</p>

        {/* Role toggle */}
        <div className="role-switch" role="group" aria-label="Account type">
          <button
            type="button"
            className={`role-switch__btn${role === "customer" ? " role-switch__btn--active" : ""}`}
            onClick={() => setRole("customer")}
            aria-pressed={role === "customer"}
          >
            Customer
          </button>
          <button
            type="button"
            className={`role-switch__btn${role === "owner" ? " role-switch__btn--active" : ""}`}
            onClick={() => setRole("owner")}
            aria-pressed={role === "owner"}
          >
            Store Owner
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="login-email" className="form-label">Email address</label>
            <input
              id="login-email"
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
            <label htmlFor="login-password" className="form-label">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn--primary btn--lg auth-form__submit">
            Sign In as {role === "customer" ? "Customer" : "Store Owner"}
          </button>
        </form>

        <p className="auth-card__switch">
          New here?{" "}
          <Link to="/signup" className="auth-card__link">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
