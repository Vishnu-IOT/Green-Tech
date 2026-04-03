import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import napkin from '../assests/13.jpeg';
import incinerator from '../assests/2.png';
import vending from '../assests/3.png';
import baler from '../assests/4.png';
import lpgg from '../assests/132.jpeg';
import blow from '../assests/woodblower.jpg';
import mobilee from '../assests/135.jpeg';
import napkine from '../assests/131.jpeg';
import creme from '../assests/133.png';
import one from '../assests/1.jpeg';
import one2 from '../assests/1.png';
import two from '../assests/2.jpeg';
// import three from '../assests/3.jpeg';
import four from '../assests/4.jpeg';
import five from '../assests/great.jpeg';
import six from '../assests/6.jpeg';
// import seven from '../assests/7.jpeg';
import eight from '../assests/great1.jpeg';
import nine from '../assests/9.jpeg';
// import ten from '../assests/10.jpeg';
// import el from '../assests/great1.jpeg';
import eleven from '../assests/11.jpeg';
// import twel from '../assests/12.jpeg';

/* ─── useInView ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Auto-changing Image Carousel ─── */
function HeroCarousel() {
  const carouselImages = [
    one,
    one2,
    incinerator,
    baler,
    two,
    four,
    six,
    five,
    nine,
    eleven,
    eight,
    blow,
    vending,
    napkin,
    napkine,
    lpgg,
    creme,
    mobilee,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="pr-hero-carousel">
      <div className="pr-carousel-container">
        <div
          className={`pr-carousel-slide ${isTransitioning ? 'pr-transitioning' : ''}`}
        >
          <img
            src={carouselImages[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="pr-carousel-image"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          className="pr-carousel-nav pr-carousel-prev"
          onClick={prevImage}
        >
          ‹
        </button>
        <button
          className="pr-carousel-nav pr-carousel-next"
          onClick={nextImage}
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="pr-carousel-dots">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`pr-carousel-dot ${idx === currentIndex ? 'pr-active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsTransitioning(false);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div className="pr-carousel-counter">
        {currentIndex + 1} / {carouselImages.length}
      </div>
    </div>
  );
}

/* ─── Single Product Card ─── */
function ProductCard({ item, index, onDetails, onEnquire }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`pr-card${inView ? ' pr-in' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="pr-card-img">
        <img src={item.img} alt={item.title} />
        <div className="pr-card-overlay" />
        {/* index badge */}
        <span className="pr-card-num">
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* hover CTA on image */}
        <div className={`pr-card-img-cta${hovered ? ' pr-visible' : ''}`}>
          <button onClick={onEnquire}>Enquire Now</button>
        </div>
      </div>

      {/* Body */}
      <div className="pr-card-body">
        <h3 className="pr-card-title">{item.title}</h3>
        <p className="pr-card-desc">{item.desc}</p>
        <div className="pr-card-tags">
          {item.tags.map((t, i) => (
            <span key={i} className="pr-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="pr-card-footer">
          <button className="pr-btn-details" onClick={onDetails}>
            View Details →
          </button>
          <button className="pr-btn-enquire" onClick={onEnquire}>
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function Products() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      id: 'napkin-destroyer',
      img: napkin,
      title: 'Napkin Destroyer',
      category: 'Hygiene',
      tags: ['Hygienic', 'Eco-Safe', 'Institutional'],
      desc: 'Patented hygienic disposal for sanitary napkins — ideal for schools, offices, hospitals and public facilities. Reduces bio-hazard waste safely.',
    },
    {
      id: 'blower',
      img: five,
      title: 'Wood Stove Blower',
      category: 'Waste-to-Energy',
      tags: ['Hygienic', 'Eco-Safe', 'Institutional'],
      desc: 'Patented hygienic disposal for sanitary napkins — ideal for schools, offices, hospitals and public facilities. Reduces bio-hazard waste safely.',
    },
    {
      id: 'incinerator',
      img: incinerator,
      title: 'Eco-Friendly Incinerator',
      category: 'Waste-to-Energy',
      tags: ['Zero-Fuel', 'PCB Approved', 'Medical Waste'],
      desc: 'Patented zero-fuel incineration reducing waste mass by 80–85% and volume by 95–96%. By-product ash usable as fertiliser or lightweight bricks.',
    },
    {
      id: 'lpg',
      img: lpgg,
      title: 'LPG Crematorium',
      category: 'Waste Management',
      tags: ['LPG Powered', 'Hygienic', 'SmokeFree'],
      desc: 'LPG Crematorium is an eco-friendly system for clean and hygienic cremation using LPG fuel.It ensures low emissions, smoke-free operation, and fast, safe performance.',
    },
    {
      id: 'mobile-crematorium',
      img: mobilee,
      title: 'Mobile Crematorium',
      category: 'Hygiene',
      tags: ['Transportable', 'Efficient', 'Portable'],
      desc: 'Mobile Crematorium is a portable and eco-friendly cremation system designed for quick, hygienic, and on-site cremation in emergency or remote locations.',
    },
    {
      id: 'dosa-tawa',
      img: two,
      title: 'DOSA TAWA',
      category: 'Kitchen Equipment',
      tags: ['Durable', 'Even Heating', 'Non-Stick'],
      desc: 'Dosa Tawa is a high-quality flat cooking pan specially designed for making crispy dosas, uttapams, and other South Indian dishes.',
    },
  ];

  const filters = ['All', ...new Set(products.map((p) => p.category))];
  const filtered =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pr-page">
      {/* ══ HERO ══ */}
      <section className="pr-hero">
        <div className="pr-hero-overlay" />
        <div className="pr-hero-orb pr-orb1" />
        <div className="pr-hero-orb pr-orb2" />
        <div className="pr-hero-container">
          {/* Left side - Content */}
          <div className="pr-hero-content">
            <p className="pr-eyebrow">Eco-Machinery Range</p>
            <h1 className="pr-hero-title">
              Our <em>Products</em>
            </h1>
            <p className="pr-hero-sub">
              Precision-built, government-approved eco-machinery for solid waste
              management, hygiene, and recycling — designed for institutions,
              industries and municipalities across India.
            </p>
            <div className="pr-hero-stats">
              {[
                { n: '6', l: 'Product Lines' },
                { n: '300+', l: 'Installations' },
                { n: 'PCB', l: 'Approved' },
                { n: '1yr', l: 'Warranty' },
              ].map((s, i) => (
                <div key={i} className="pr-hero-stat">
                  <span className="pr-hero-stat-n">{s.n}</span>
                  <span className="pr-hero-stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Auto-changing Carousel */}
          <HeroCarousel />
        </div>
        <div className="pr-hero-scroll">
          <span>Scroll</span>
          <div className="pr-hero-scroll-line" />
        </div>
      </section>

      {/* ══ CATALOG ══ */}
      <section className="pr-catalog">
        {/* Header */}
        <div className="pr-catalog-head">
          <p className="pr-eyebrow" style={{ textAlign: 'center' }}>
            Product Catalog
          </p>
          <h2 className="pr-h2" style={{ textAlign: 'center' }}>
            Complete Eco-Machinery <em>Range</em>
          </h2>
          <p className="pr-catalog-sub">
            All products are designed for durability, ease of use and maximum
            eco-efficiency. Suitable for schools, hospitals, institutions and
            government facilities.
          </p>
        </div>

        {/* Filters */}
        <div className="pr-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`pr-filter-btn${activeFilter === f ? ' pr-filter-active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pr-grid">
          {filtered.map((item, i) => (
            <ProductCard
              key={item.id}
              item={item}
              index={i}
              onDetails={() => navigate(`/products/${item.id}`)}
              onEnquire={() => navigate('/getquote')}
            />
          ))}
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="pr-trust">
        {[
          {
            icon: '🏛️',
            title: 'Govt. Empanelled',
            body: 'Officially empanelled with & Kerala Agro Industries.',
          },
          {
            icon: '♻️',
            title: 'Eco-Certified',
            body: 'All machinery compliant with PCB environmental norms.',
          },
          {
            icon: '🔧',
            title: '1-Year Warranty',
            body: 'Onsite replacement warranty on every product.',
          },
          {
            icon: '🚛',
            title: 'Pan-India Delivery',
            body: 'Own trucks — no third-party logistics, no delays.',
          },
        ].map((t, i) => (
          <div key={i} className="pr-trust-card">
            <span className="pr-trust-icon">{t.icon}</span>
            <div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ══ CTA ══ */}
      <section className="pr-cta">
        <div className="pr-cta-orb pr-cta-orb1" />
        <div className="pr-cta-orb pr-cta-orb2" />
        <div className="pr-cta-inner">
          <p className="pr-eyebrow light" style={{ textAlign: 'center' }}>
            Ready to Order?
          </p>
          <h2 className="pr-h2 light" style={{ textAlign: 'center' }}>
            Get a <em>Free Quote</em> Today
          </h2>
          <p className="pr-cta-sub">
            Contact us for pricing, custom specifications, government
            procurement, or installation enquiries.
          </p>
          <div className="pr-cta-btns">
            <button
              className="pr-btn-primary"
              onClick={() => navigate('/getquote')}
            >
              Get a Free Quote
            </button>
            <button
              className="pr-btn-ghost"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
