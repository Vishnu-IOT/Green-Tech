import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";
import install1 from "../assests/13.jpeg";
import install2 from "../assests/incineratorr.webp";
import product1 from "../assests/waste.jpg";
import product2 from "../assests/electric.avif";
import project1 from "../assests/hospital.jpg";
import project2 from "../assests/recycle.jpg";
import org1 from "../assests/original1.jpg";
import org2 from "../assests/original2.jpg";
import org3 from "../assests/original3.jpg";
import org4 from "../assests/orginal4.jpg";
import org5 from "../assests/original5.jpg";
import org6 from "../assests/original6.jpg";
import one from "../assests/1.jpeg";
import two from "../assests/2.jpeg";
import three from "../assests/3.jpeg";
import four from "../assests/4.jpeg";
import five from "../assests/great.jpeg";
import six from "../assests/6.jpeg";
import seven from "../assests/7.jpeg";
import eight from "../assests/8.jpeg";
import nine from "../assests/9.jpeg";
import ten from "../assests/10.jpeg";
import el from "../assests/great1.jpeg";
import twel from "../assests/12.jpeg";
import thri from "../assests/134.jpeg";
import fourth from "../assests/135.jpeg";

/* ─── useInView ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const GALLERY_ITEMS = [
  { id: 1, category: "installations", title: "Napkin Destroyer — School Installation", location: "Kerala", image: install1 },
  { id: 2, category: "products", title: "ATM Model Incinerator", location: "Kerala", image: product1 },
  { id: 3, category: "projects", title: "Waste Management Project", location: "Karnataka", image: project1 },
  { id: 4, category: "products", title: "Electric Incinerator", location: "Kerala", image: product2 },
  { id: 5, category: "installations", title: "Hospital Incinerator Installation", location: "Kerala", image: install2 },
  { id: 6, category: "projects", title: "Eco Recycling System", location: "Hyderabad", image: project2 },
  { id: 7, category: "Original Products", title: "Incinerator", location: "Kerala", image: org1 },
  { id: 8, category: "Original Products", title: "Incinerator", location: "Kerala", image: org2 },
  { id: 9, category: "Original Products", title: "Crematorium", location: "Kerala", image: org3 },
  { id: 10, category: "Original Products", title: "Eco-Friendly Incinerator", location: "Kerala", image: org4 },
  { id: 11, category: "Original Products", title: "Incinerator", location: "Kerala", image: org5 },
  { id: 12, category: "Original Products", title: "Multi-Fuel Incinerator", location: "Kerala", image: org6 },
  { id: 13, category: "products", location: "Kerala", image: one },
  { id: 14, category: "products", location: "Kerala", image: two },
  { id: 15, category: "projects", location: "Karnataka", image: three },
  { id: 16, category: "products", location: "Kerala", image: four },
  { id: 17, category: "products", location: "Kerala", image: five },
  { id: 18, category: "projects", location: "Hyderabad", image: six },
  { id: 19, category: "products", location: "Kerala", image: seven },
  { id: 20, category: "products", location: "Kerala", image: eight },
  { id: 21, category: "products", location: "Kerala", image: nine },
  { id: 22, category: "products", location: "Kerala", image: ten },
  { id: 23, category: "products", location: "Kerala", image: el },
  { id: 24, category: "products", location: "Kerala", image: twel },
  { id: 25, category: "products", location: "Kerala", image: thri },
  { id: 26, category: "products", location: "Kerala", image: fourth },
];

const FILTERS = [
  { key: "all", label: "All", count: GALLERY_ITEMS.length },
  { key: "products", label: "Products", count: GALLERY_ITEMS.filter(i => i.category === "products").length },
  { key: "installations", label: "Installations", count: GALLERY_ITEMS.filter(i => i.category === "installations").length },
  { key: "projects", label: "Projects", count: GALLERY_ITEMS.filter(i => i.category === "projects").length },
  { key: "Original Products", label: "Core Creations", count: GALLERY_ITEMS.filter(i => i.category === "Original Products").length },
];

/* ─── Gallery Card ─── */
function GalleryCard({ item, index, onOpen }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`gl-card${inView ? " gl-in" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
      onClick={() => onOpen(item)}
    >
      <div className="gl-card-img">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="gl-card-img-overlay" />
      </div>
      <div className="gl-card-info">
        <span className="gl-card-cat">{item.category}</span>
        <p className="gl-card-title">{item.title}</p>
        <span className="gl-card-loc">📍 {item.location}</span>
      </div>
      <div className="gl-card-cta">
        <span>View ↗</span>
      </div>
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({ item, items, onClose, onPrev, onNext }) {
  /* close on Escape, navigate on arrow keys */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const idx = items.findIndex(i => i.id === item.id);

  return (
    <div className="gl-lightbox" onClick={onClose}>
      {/* close */}
      <button className="gl-lb-close" onClick={onClose} aria-label="Close">✕</button>

      {/* counter */}
      <span className="gl-lb-counter">{idx + 1} / {items.length}</span>

      {/* prev */}
      <button className="gl-lb-nav gl-lb-prev" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Previous">‹</button>

      {/* image */}
      <div className="gl-lb-content" onClick={e => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <div className="gl-lb-caption">
          <span className="gl-lb-cat">{item.category}</span>
          <h3>{item.title}</h3>
          <span className="gl-lb-loc">📍 {item.location}</span>
        </div>
      </div>

      {/* next */}
      <button className="gl-lb-nav gl-lb-next" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Next">›</button>
    </div>
  );
}

/* ─── Main ─── */
export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null); // item or null
  const [animating, setAnimating] = useState(false);

  const filtered = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === filter);

  /* filter change with quick fade transition */
  const handleFilter = (key) => {
    if (key === filter) return;
    setAnimating(true);
    setTimeout(() => { setFilter(key); setAnimating(false); }, 220);
  };

  /* lightbox navigation within filtered set */
  const openLightbox = useCallback((item) => setLightbox(item), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigateLightbox = useCallback((dir) => {
    if (!lightbox) return;
    const arr = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);
    const idx = arr.findIndex(i => i.id === lightbox.id);
    const next = (idx + dir + arr.length) % arr.length;
    setLightbox(arr[next]);
  }, [lightbox, filter]);

  return (
    <div className="gl-page">

      {/* ══ HERO ══ */}
      <section className="gl-hero">
        <div className="gl-hero-overlay" />
        <div className="gl-hero-orb gl-orb1" />
        <div className="gl-hero-orb gl-orb2" />
        <div className="gl-hero-content">
          <p className="gl-eyebrow">Photo Gallery</p>
          <h1 className="gl-hero-title">Our Work in <em>Action</em></h1>
          <p className="gl-hero-sub">
            Installation photos, product imagery and government project documentation
            from across India.
          </p>
          <div className="gl-hero-stats">
            {[
              { n: `${GALLERY_ITEMS.length}+`, l: "Photos" },
              { n: "300+", l: "Installations" },
              { n: "15+", l: "States" },
            ].map((s, i) => (
              <div key={i} className="gl-hero-stat">
                <span className="gl-hero-stat-n">{s.n}</span>
                <span className="gl-hero-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gl-hero-scroll">
          <span>Scroll</span>
          <div className="gl-hero-scroll-line" />
        </div>
      </section>

      {/* ══ CATALOG ══ */}
      <section className="gl-catalog">

        {/* Header */}
        <div className="gl-catalog-head">
          <p className="gl-eyebrow dark">Browse</p>
          <h2 className="gl-h2">Installation &amp; <em>Product Gallery</em></h2>
        </div>

        {/* Filter tabs */}
        <div className="gl-filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`gl-filter-btn${filter === f.key ? " gl-filter-active" : ""}`}
              onClick={() => handleFilter(f.key)}
            >
              {f.label}
              <span className="gl-filter-count">{f.count}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`gl-grid${animating ? " gl-grid-out" : ""}`}>
          {filtered.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={i}
              onOpen={openLightbox}
            />
          ))}
        </div>

      </section>

      {/* ══ CTA ══ */}
      <section className="gl-cta">
        <div className="gl-cta-orb gl-cta-orb1" />
        <div className="gl-cta-orb gl-cta-orb2" />
        <div className="gl-cta-inner">
          <p className="gl-eyebrow" style={{ textAlign: "center" }}>Interested?</p>
          <h2 className="gl-h2 light" style={{ textAlign: "center" }}>
            Ready to install at<br /><em>your facility?</em>
          </h2>
          <p className="gl-cta-sub">
            Get a free consultation and custom quote for your institution.
          </p>
          <div className="gl-cta-btns">
            <a href="/getquote" className="gl-btn-primary">Get a Free Quote</a>
            <a href="/products" className="gl-btn-ghost">Browse Products</a>
          </div>
        </div>
      </section>

      {/* ══ LIGHTBOX ══ */}
      {lightbox && (
        <Lightbox
          item={lightbox}
          items={filtered}
          onClose={closeLightbox}
          onPrev={() => navigateLightbox(-1)}
          onNext={() => navigateLightbox(1)}
        />
      )}

    </div>
  );
}