import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("customer");

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">SECURE<span>VISION</span></h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="hero" id="home">
        <section className="hero-content">
          <p className="eyebrow">SMART SECURITY. TOTAL CONTROL.</p>
          <h1>Your Safety.<br />Our <span>Priority.</span></h1>
          <p className="description">
            Discover reliable CCTV cameras and professional safety
            equipment designed to protect what matters most.
          </p>

          <div className="features">
            <span>✓ HD Surveillance</span>
            <span>✓ Trusted Equipment</span>
            <span>✓ Reliable Support</span>
          </div>
        </section>

        <section className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in to your SecureVision account</p>

          <div className="role-switch">
            <button
              className={role === "customer" ? "active" : ""}
              onClick={() => setRole("customer")}
            >
              Customer
            </button>
            <button
              className={role === "owner" ? "active" : ""}
              onClick={() => setRole("owner")}
            >
              Store Owner
            </button>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Login backend will be connected in the next step.");
          }}>
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button className="login-button" type="submit">
              Sign In as {role === "customer" ? "Customer" : "Owner"}
            </button>
          </form>

          <p className="signup-text">
            New here? <button onClick={() => alert("Signup page will be added next.")}>
              Create an account
            </button>
          </p>
          <p className="security-note">Your security is our priority.</p>
        </section>
      </main>

      <footer id="contact">
        © 2026 SecureVision · CCTV & Safety Solutions
      </footer>
    </div>
  );
}

export default App;