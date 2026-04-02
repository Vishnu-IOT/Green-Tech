import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeRect, setActiveRect] = useState(null);
  const navRef   = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  /* ── Shrink on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Sliding pill indicator (desktop) ── */
  useEffect(() => {
    const activeLink = navRef.current?.querySelector(".nav-links a.active-link");
    if (activeLink) {
      const navRect  = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setActiveRect({
        left:  linkRect.left  - navRect.left,
        width: linkRect.width,
      });
    } else {
      setActiveRect(null);
    }
  }, [location.pathname]);

  const links = [
    { to: "/",             label: "Home" },
    { to: "/about",        label: "About" },
    { to: "/products",     label: "Products" },
    // { to: "/government",   label: "Gov Projects" },
    // { to: "/certifications", label: "Certifications" },
    { to: "/gallery",      label: "Gallery" },
  ];

  return (
    <>
      <nav className={`gv-nav ${scrolled ? "gv-nav--scrolled" : ""}`} ref={navRef}>

        {/* ── Logo ── */}
        <NavLink to="/" className="gv-logo" onClick={() => setMenuOpen(false)}>
          {/* <span className="gv-logo-icon">♻</span> */}
          <div className="gv-logo-text">
            {/* <span className="gv-logo-name">GreenTech Industries</span>
            <span className="gv-logo-sub">INDIA PVT LTD</span> */}
            <img src="/assets/logocopy.png"/>
          </div>
        </NavLink>

        {/* ── Desktop links ── */}
        <ul className="gv-links">
          {/* sliding pill behind active link */}
          {activeRect && (
            <span
              className="gv-pill"
              style={{ left: activeRect.left, width: activeRect.width }}
            />
          )}

          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `gv-link${isActive ? " active-link" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA button (desktop) ── */}
        <NavLink
          to="/getquote"
          className={({ isActive }) =>
            `gv-cta${isActive ? " gv-cta--active" : ""}`
          }
        >
          Get Quote &nbsp;

          <span style={{borderLeft: "1px solid white"}}>&nbsp; +91 99475 03371</span>
        </NavLink>

        {/* ── Hamburger ── */}
        <button
          className={`gv-burger ${menuOpen ? "gv-burger--open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`gv-overlay ${menuOpen ? "gv-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div className={`gv-drawer ${menuOpen ? "gv-drawer--open" : ""}`}>

        <div className="gv-drawer-header">
          <span className="gv-logo-icon">♻</span>
          <div className="gv-logo-text">
            <span className="gv-logo-name">GreenTech</span>
            <span className="gv-logo-sub">INDIA PVT LTD</span>
          </div>
        </div>

        <ul className="gv-drawer-links">
          {[...links, { to: "/getquote", label: "Get Quote" }].map(({ to, label }, i) => (
            <li key={to} style={{ "--di": i }}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `gv-drawer-link${isActive ? " active-link" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className="gv-drawer-link-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
                <span className="gv-drawer-arrow">→</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="gv-drawer-footer">
          <p>Engineering a Cleaner Tomorrow</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;