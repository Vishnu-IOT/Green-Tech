import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import "./Home.css";
import sowmi from "../assests/napkin.png";
import inci from "../assests/incinerator.jpg";
import blower from "../assests/woodblower.jpg";
// import lpg from "../assests/lpgcrematorium.avif";
import mobile from "../assests/mobilecrematorium.avif";
import aboutimg from "../assests/about.jpg";
import one from "../assests/13.jpeg";
import five from "../assests/great.jpeg";
import org from "../assests/orginal4.jpg";
// import three from "../assests/3.jpeg";

/* ─── Hooks ─── */
function useInView(threshold = 0.15) {
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

function useCounter(target, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Sub-components ─── */
function StatCard({ value, suffix, label, started }) {
  const n = useCounter(value, 2200, started);
  return (
    <div className="hm-stat">
      <span className="hm-stat-num">{n}{suffix}</span>
      <span className="hm-stat-label">{label}</span>
    </div>
  );
}

function ProductCard({ img, title, desc, index, onClick }) {
  const [ref, inView] = useInView(0.12);
  return (
    <div
      ref={ref}
      className={`hm-prod-card${inView ? " hm-in" : ""}`}
      style={{ transitionDelay: `${index * 0.09}s` }}
      onClick={onClick}
    >
      <div className="hm-prod-img">
        <img src={img} alt={title} />
        <div className="hm-prod-overlay" />
        <div className="hm-prod-badge">{String(index + 1).padStart(2, "0")}</div>
      </div>
      <div className="hm-prod-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="hm-prod-link">View Details →</span>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, desc, index }) {
  const [ref, inView] = useInView(0.18);
  return (
    <div
      ref={ref}
      className={`hm-why-card${inView ? " hm-in" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="hm-why-icon">{icon}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

/* ─── Main ─── */
export default function Home() {
  const navigate = useNavigate();

  const [featureRef, featureInView] = useInView(0.2);
  const [aboutRef, aboutInView] = useInView(0.15);
  const [statsRef, statsInView] = useInView(0.3);
  const [prodsRef, prodsInView] = useInView(0.08);
  const [clientRef, clientInView] = useInView(0.2);
  const [whyRef, whyInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.2);

  const parallaxRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const products = [
    { id: "napkin-destroyer", img: one, title: "Napkin Destroyer", desc: "Eco-friendly hygienic napkin disposal for institutions." },
    { id: "blower", img: five, title: "Wood Stove Blower", desc: "Eco-friendly wood stove blower for efficient and sustainable heat circulation." },
    { id: "incinerator", img: org, title: "Incinerator", desc: "Patented zero-fuel technology reducing waste by 80–85%." },
    // { id: "lpg", img: lpg, title: "LPG Crematorium", desc: "Eco-friendly LPG crematorium designed for clean and efficient cremation with reduced pollution." },
    // { id: "mobile-crematorium", img: mobile, title: "Mobile Crematorium", desc: "Mobile crematorium designed for portable, efficient, and eco-friendly cremation." },
    // { id: "vending-machine", img: vend, title: "Napkin Vending Machine", desc: "Automated dispensing for restrooms & healthcare facilities." },
    // { id: "bottle-crusher", img: bottl, title: "Bottle Crusher", desc: "Compact crushing turning bottles into recyclable pieces." },
    // { id: "baling-machine", img: hydra, title: "Hydraulic Baling Machine", desc: "Compress and bale waste for easy storage and transport." },
  ];

  const whyCards = [
    { icon: "🏛️", title: "Govt. Empanelled", desc: "Officially empanelled with Kerala Agro Industries for government procurement." },
    { icon: "♻️", title: "Eco-Certified", desc: "All machinery meets PCB environmental compliance norms — certified and tested." },
    // { icon: "⚙️", title: "Patented Technology", desc: "Zero-fuel incineration technology reducing waste volume by up to 95–96%." },
    { icon: "🛡️", title: "Full After-Sales", desc: "1-year onsite replacement warranty, operator training and dedicated support." },
  ];

  const clients = [
    "Caps Restaurant, Koduvayur",
    "Keerthy Auditorium, Pallassena",
    "Moolayil Auditorium, Pudussery",
    "Green Eco Systems",
    "ABC Industries",
    "City Hospital, Hyderabad",
    "Govt. School, Palakkad",
    "Railway Station, Ernakulam",
  ];

  return (
    <div className="hm-root">
      <Hero />

      {/* ══ FEATURE TICKER ══ */}
      <div
        ref={featureRef}
        className={`hm-ticker${featureInView ? " hm-in" : ""}`}
      >
        {["✦ Government Approved", "✦ ISO Quality Standards",
          "✦ After-Sales Support", "✦ Pan India Delivery", "✦ Eco-Certified Machinery"].map((f, i) => (
            <span key={i} className="hm-tick-item">{f}</span>
          ))}
      </div>

      {/* ══ ABOUT SPLIT ══ */}
      <section
        ref={aboutRef}
        className={`hm-about${aboutInView ? " hm-in" : ""}`}
      >

        {/* TOP ROW */}
        <div className="hm-about-top">

          {/* LEFT TEXT */}
          <div className="hm-about-text">
            <p className="hm-eyebrow">Who We Are</p>

            <h2 className="hm-h2">
              Pioneers in<br /><em>Green Engineering</em>
            </h2>

            <p className="hm-body">
              At GreenTech, we don't just build machines — we engineer a cleaner tomorrow.
              Our patented incineration technology requires <strong>no additional fuel</strong>,
              reducing solid waste mass by up to <strong>85%</strong> and volume by <strong>95–96%</strong>.
              The by-product ash can be reused as fertiliser or for lightweight brick manufacturing.
            </p>

            <p className="hm-body">
              Trusted by government bodies, hospitals, schools, residential complexes and industries
              across India — we deliver sustainable waste management at minimal investment with
              absolutely zero recurring costs.
            </p>

            <button
              className="hm-btn-primary"
              onClick={() => navigate("/about")}
            >
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hm-about-image">
            <img src={aboutimg} alt="Green Engineering" />
          </div>

        </div>

        {/* BOTTOM 4 CONTAINERS */}
        <div className="hm-accent-strip-row">
          {[
            { n: "300+", label: "Successful Installations" },
            { n: "6 ", label: "Product Categories" },
            { n: "15+", label: "States Covered" },
          ].map((a, i) => (
            <div
              key={i}
              className="hm-accent-card"
              data-aos="slide-right"
              data-aos-delay={i * 200}
            >
              <span className="hm-accent-num">{a.n}</span>
              <span className="hm-accent-label">{a.label}</span>
            </div>
          ))}
        </div>

        <div
          className="hm-accent-banner"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          ♻ Eco-Certified Machinery
        </div>

      </section>

      {/* ══ STATS STRIP ══ */}
      <section ref={statsRef} className="hm-stats">
        <div className="hm-stats-inner">
          <StatCard value={300} suffix="+" label="Installations" started={statsInView} />
          <StatCard value={6} suffix="" label="Product Lines" started={statsInView} />
          <StatCard value={15} suffix="+" label="States Served" started={statsInView} />
          <StatCard value={98} suffix="%" label="Client Satisfaction" started={statsInView} />
        </div>
      </section>

      {/* ══ PARALLAX BAND ══ */}
      <div className="hm-parallax" ref={parallaxRef}>
        <div className="hm-parallax-overlay" />
        <div className="hm-parallax-content">
          <p className="hm-eyebrow light">Our Mission</p>
          <h2>Engineering a Cleaner Tomorrow</h2>
          <p>Bridging the gap between industrial power and eco-preservation</p>
        </div>
      </div>

      {/* ══ PRODUCTS ══ */}
      <section
        ref={prodsRef}
        className={`hm-products${prodsInView ? " hm-section-in" : ""}`}
      >
        <div className="hm-section-head">
          <p className="hm-eyebrow">Our Products</p>
          <h2 className="hm-h2">Complete Eco-Machinery <em>Catalog</em></h2>
          <p className="hm-section-sub">Precision-built machines for a sustainable future</p>
        </div>
        <div className="hm-prod-grid">
          {products.map((p, i) => (
            <ProductCard
              key={i} index={i} {...p}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
        <div className="hm-prod-footer">
          <button className="hm-btn-primary" onClick={() => navigate("/products")}>
            View All Products →
          </button>
        </div>
      </section>

      {/* ══ YOUTUBE VIDEO SHOWCASE - Alternative with iframe ══ */}
      <section
        className="hm-video-showcase"
        data-aos="fade-up"
      >
        <div className="hm-section-head">
          <p className="hm-eyebrow">Video Showcase</p>
          <h2 className="hm-h2">See Our <em>Incinerators</em> in Action</h2>
          <p className="hm-section-sub">Witness the power of eco-friendly waste management technology</p>
        </div>

        {/* Full Screen Video */}
        <div className="hm-featured-video" data-aos="zoom-in" data-aos-delay="100">
          <div className="hm-video-wrapper featured">
            <iframe
              src="https://www.youtube.com/embed/hYYDpRAL2io?modestbranding=1&rel=0&showinfo=0"
              title="Lead College Incinerator Installation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hm-featured-caption">
            <h3>Lead College Incinerator Installation</h3>
            <p>50kg capacity incinerator setup at Lead College of Management - Complete installation demonstration</p>
          </div>
        </div>

        {/* Three YouTube Videos in a Row */}
        <div className="hm-video-grid">
          {[
            {
              id: "LwiqO4fDs_o",
              title: "CM Hospital Waste Management",
              description: "Medical waste incinerator installation at hospital facility",
              duration: "4:20"
            },
            {
              id: "FO7o5Pxo3-0",
              title: "NEMMAR HOSPITAL Waste Management",
              description: "Hospital infrastructure upgrade with medical waste incinerator system",
              duration: "1:36"
            },
            {
              id: "Xovpt35R5So",
              title: "Incinerator Operation Demo",
              description: "Safe biomedical waste disposal system installation at hospital",
              duration: "1:22"
            }
          ].map((video, index) => (
            <div
              key={index}
              className="hm-video-card"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="hm-video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="hm-video-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <span className="hm-video-duration">{video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CLIENTS MARQUEE ══ */}
      <section
        ref={clientRef}
        className={`hm-clients${clientInView ? " hm-section-in" : ""}`}
      >
        <div className="hm-section-head">
          <p className="hm-eyebrow">Our Clients</p>
          <h2 className="hm-h2">Trusted Across <em>India</em></h2>
        </div>
        <div className="hm-marquee">
          <div className="hm-marquee-fade hm-marquee-fade-l" />
          <div className="hm-marquee-fade hm-marquee-fade-r" />
          <div className="hm-marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="hm-client">
                <span className="hm-client-dot">◆</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section
        ref={whyRef}
        className={`hm-why${whyInView ? " hm-section-in" : ""}`}
      >
        <div className="hm-section-head">
          <p className="hm-eyebrow">Why Choose Us</p>
          <h2 className="hm-h2">Trusted. Certified. <em>Reliable.</em></h2>
        </div>
        <div className="hm-why-grid">
          {whyCards.map((c, i) => (
            <WhyCard key={i} index={i} {...c} />
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        ref={ctaRef}
        className={`hm-cta${ctaInView ? " hm-cta-in" : ""}`}
      >
        <div className="hm-cta-orb hm-cta-orb1" />
        <div className="hm-cta-orb hm-cta-orb2" />
        <div className="hm-cta-inner">
          <p className="hm-eyebrow light" style={{ textAlign: "center" }}>Get In Touch</p>
          <h2 className="hm-h2 light" style={{ textAlign: "center" }}>
            Ready to <em>Go Green?</em>
          </h2>
          <p className="hm-cta-sub">
            Contact us for product quotations, government procurement, or installation enquiries.
          </p>
          <div className="hm-cta-btns">
            <button className="hm-btn-primary" onClick={() => navigate("/getquote")}>
              Get a Free Quote
            </button>
            <button className="hm-btn-ghost" onClick={() => navigate("/products")}>
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}