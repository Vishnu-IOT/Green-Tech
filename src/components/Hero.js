import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const bgRef = useRef(null);

  /* Ken-Burns on mount */
  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.style.transform = "scale(1.08)";
      const t = setTimeout(() => {
        if (bgRef.current) bgRef.current.style.transform = "scale(1)";
      }, 100);
      return () => clearTimeout(t);
    }
  }, []);

  const words = ["Cleaner.", "Greener.", "Smarter."];

  return (
    <section className="hero-root">

      {/* ── Background ── */}
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />

      {/* ── Ambient orbs ── */}
      <div className="hero-orb hero-orb1" />
      <div className="hero-orb hero-orb2" />

      {/* ── Content ── */}
      <div className="hero-content">

        {/* Certification badges */}
        <div className="hero-certs">
          <div className="hero-cert-pill">
            <img src="/assets/agro.avif" alt="KERALA AGRO INDUSTRIES EMPANELING COMPANY" />
          </div>
          <div className="hero-cert-divider" />
          <div className="hero-cert-pill">
            <img src="/assets/iso.jpg" alt="ISO Certified" />
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Engineering 
          <span className="hero-title-cycle">
            {words.map((w, i) => (
              <span key={i} className="hero-word" style={{ "--wi": i }}>{w}</span>
            ))}
          </span>
        </h1>

        <p className="hero-sub">
          Patented zero-fuel eco-machinery for solid waste management,
          trusted by government institutions and industries across India.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <button className="hero-btn-primary" onClick={() => navigate("/getquote")}>
            Get a Free Quote
          </button>
          <button className="hero-btn-ghost" onClick={() => navigate("/products")}>
            View Products
          </button>
        </div>

        {/* Trust strip */}
        <div className="hero-trust">
          {[
            "🏛 Govt. Empanelled",
            "♻ Eco-Certified",
            "🔧 1-Yr Warranty",
            "🚛 Pan-India Delivery",
          ].map((t, i) => (
            <span key={i} className="hero-trust-pill">{t}</span>
          ))}
        </div>

      </div>

      {/* ── Scroll cue ── */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}

export default Hero;