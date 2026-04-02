import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const productLinks = [
  { label: 'Napkin Destroyer', to: '/products/napkin-destroyer' },
  { label: 'Wood Stove Blower', to: '/products/blower' },
  { label: 'Eco-Friendly Incinerator', to: '/products/incinerator' },
  { label: 'LPG Crematorium', to: '/products/lpg' },
  { label: 'Mobile Crematorium', to: '/products/mobile-crematorium' },
  { label: 'Dosa Tawa', to: '/products/dosa-tawa' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Gov. Projects', to: '/government' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Get a Quote', to: '/getquote' },
];

const socials = [
  {
    icon: 'f',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18KviMfjwn/',
  },
  {
    icon: 'in',
    label: 'Instagram',
    href: 'https://www.instagram.com/green_tech.industries?igsh=MWp2djI2M3R6YWVuMg==',
  },
  // { icon: "li", label: "LinkedIn", href: "https://maps.app.goo.gl/yqj26rRhdyWNpHMS6" },
  {
    icon: 'yt',
    label: 'YouTube',
    href: "https://www.youtube.com/@greentechsolutionincinerat9870"
  },
  {
    icon: 'map',
    label: 'Google Maps',
    href: 'https://maps.app.goo.gl/WX33qmG3jYzWcnKc7',
  },
];

export default function Footer() {
  return (
    <footer className="ft-root">
      {/* ── Top accent line ── */}
      <div className="ft-accent-line" />

      {/* ── Main grid ── */}
      <div className="ft-grid">
        {/* Brand column */}
        <div className="ft-brand">
          <div className="ft-logo">
            <span className="ft-logo-icon">♻</span>
            <div className="ft-logo-text">
              <span className="ft-logo-name">GreenTech</span>
              <span className="ft-logo-sub">Industries · India Pvt Ltd</span>
            </div>
          </div>

          <p className="ft-brand-desc">
            Kerala Agro Industries empanalled manufacturer of eco-friendly waste
            management machinery. Delivering patented zero-fuel incineration and
            sustainable solutions to institutions across India.
          </p>

          {/* Social icons */}
          <div className="ft-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="ft-social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                {s.icon === 'f' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
                {s.icon === 'in' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
                {s.icon === 'li' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {s.icon === 'yt' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="#0f3d2e"
                    />
                  </svg>
                )}
                {s.icon === 'map' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Cert badge */}
          <div className="ft-cert">
            <span className="ft-cert-dot">✦</span>
            KERALA AGRO INDUSTRIES EMPANELING COMPANY
          </div>
        </div>

        {/* Products */}
        <div className="ft-col">
          <h4 className="ft-col-title">Products</h4>
          <ul className="ft-list">
            {productLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="ft-link">
                  <span className="ft-link-arrow">→</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="ft-col">
          <h4 className="ft-col-title">Company</h4>
          <ul className="ft-list">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="ft-link">
                  <span className="ft-link-arrow">→</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="ft-col">
          <h4 className="ft-col-title">Contact</h4>
          <ul className="ft-list ft-contact-list">
            <li className="ft-contact-item">
              <span className="ft-contact-icon">📍</span>
              <span>Kerala, India</span>
            </li>
            <li className="ft-contact-item">
              <span className="ft-contact-icon">📞</span>
              <a href="tel:+91XXXXXXXXXX" className="ft-link-plain">
                +91 99475 03371
              </a>
            </li>
            <li className="ft-contact-item">
              <span className="ft-contact-icon">✉️</span>
              <a
                href="mailto:greentechindustrieskerala@gmail.com"
                className="ft-link-plain"
              >
                greentechindustrieskerala@gmail.com
              </a>
            </li>
            <li className="ft-contact-item">
              <span className="ft-contact-icon">🕐</span>
              <span>Mon – Sat, 9 AM – 6 PM</span>
            </li>
          </ul>

          <a href="/getquote" className="ft-quote-btn">
            Get a Free Quote →
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © 2025 GreenTech Industries India Pvt Ltd. All rights reserved.
        </p>
        <div className="ft-bottom-links">
          <a href="/privacy" className="ft-bottom-link">
            Privacy Policy
          </a>
          <span className="ft-bottom-sep">·</span>
          <a href="/terms" className="ft-bottom-link">
            Terms of Use
          </a>
          <span className="ft-bottom-sep">·</span>
          <a href="/sitemap" className="ft-bottom-link">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
