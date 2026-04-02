import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "../assests/about-machine.webp";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Animated Counter ─── */
function useCounter(target, duration = 1000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function ImpactCard({ value, suffix, label, started }) {
  const count = useCounter(value, 2000, started);
  return (
    <div className="ab-impact-card">
      <span className="ab-impact-num">
        {count}
        {suffix}
      </span>
      <span className="ab-impact-label">{label}</span>
    </div>
  );
}

const products = [
  {
    icon: "🔥",
    name: "Incinerators",
    desc: "No-fuel, patented combustion technology reducing waste mass by 80–85%.",
  },
  {
    icon: "🚻",
    name: "Napkin Destroyer",
    desc: "Hygienic, eco-friendly sanitary napkin disposal for institutions.",
  },
  {
    icon: "📦",
    name: "LPG crimitorium",
    desc: "Automated dispensing for public restrooms and healthcare facilities.",
  },
  {
    icon: "🔩",
    name: "Mobile crimitorium ",
    desc: "Compact baling for easy transport and recycling of waste material.",
  },
  {
    icon: "🪵",
    name: "Wood Stove Blower",
    desc: "Efficient forced-draft combustion for biomass and wood fuel systems.",
  },
];

const techSteps = [
  {
    num: "01",
    title: "Primary Chamber",
    desc: "Burns waste at up to 1200°C, eliminating pathogens and toxins entirely.",
  },
  {
    num: "02",
    title: "Secondary Chamber",
    desc: "Incinerates harmful gases produced by the primary burn cycle.",
  },
  {
    num: "03",
    title: "Water Cooler",
    desc: "Reduces secondary chamber gas temperatures before filtration.",
  },
  {
    num: "04",
    title: "Wet Scrubber",
    desc: "Filters dust particles, collects ash slurry and cools exhaust air.",
  },
  {
    num: "05",
    title: "Re-circulation",
    desc: "Hot air is looped through a cooling tank and atmospheric exchange system.",
  },
  {
    num: "06",
    title: "Clean Stack",
    desc: "Filtered clean air is released to atmosphere per PCB norms. Ash residue: 4–5% by volume.",
  },
];

function About() {
  const [storyRef, storyInView] = useInView(0);
  const [impactRef, impactInView] = useInView(0.25);
  const [vmRef, vmInView] = useInView(0.15);
  const [techRef, techInView] = useInView(0.1);
  const [prodsRef, prodsInView] = useInView(0.1);
  const [supplyRef, supplyInView] = useInView(0.15);
  const [warrantyRef, warrantyInView] = useInView(0.15);

  return (
    <div className="ab-page">
      {/* ══════════ HERO ══════════ */}
      <section className="ab-hero">
        <div className="ab-hero-overlay" />
        <div className="ab-hero-content">
          <p className="ab-hero-tag">Kerala Agro Industries · Empanelled</p>
          <h1 className="ab-hero-title">
            About <em>GreenTech</em>
          </h1>
          <p className="ab-hero-sub">
            Eco-Machinery Manufacturer · Waste-to-Energy Pioneer · Government
            Empanelled
          </p>
        </div>
        <div className="ab-hero-scroll">
          <img src="/assets/gts.png"/>
          <span>Scroll</span>
          <div className="ab-hero-scroll-line" />
        </div>
      </section>

      {/* ══════════ STORY SPLIT ══════════ */}
      <section
        ref={storyRef}
        className={`ab-story ${storyInView ? "ab-in" : ""}`}
      >
        <div className="ab-story-image">
          <img src={aboutImg} alt="GreenTech Machinery" />
          <div className="ab-story-badge">
            <span className="ab-badge-n">15+</span>
            <span className="ab-badge-l">
              Years of
              <br />
              Innovation
            </span>
          </div>
        </div>
        <div className="ab-story-text">
          <p className="ab-eyebrow">Who We Are</p>
          <h2 className="ab-section-title">
            Engineering a<br />
            <em>Cleaner Tomorrow</em>
          </h2>
          <div className="about-body">
            <p className="ab-body">
              Green Tech Industries is based on a revolutionary/patented
              technology which requires on additional fuel. Green Tech Industries
              is increasingly recognized as the perfect solution for solid waste
              management ans waste to energy and heals conversion. Green Tech
              Industries is a commercially implemented solution to easily manage
              municipal waste, waste from small-scale units and industries,
              auditorium, Residential Apartments, Villas, Railway Station etc. It
              helps dispose- off the waste easily with minimum Investments and
              absolutely no recurring costs it requires very little space and can
              even be installed on the rooftops. The by-products is ash which can
              be used as fertilizer or for making ash based light weight bricks
              Incineration produces fly ash bottom ash just ash is the case when
              coal is combusted. The total amount of produced by municipal solid
              waste incineration ranges from 4 to 5% by volume and 15-20% by
              weight of the original quality of waste and the fly ash amourits to
              about 3-5% of the total ash. Incineration reduce the solid mass of
              the original waste by 80-85% and the volume by 95-96%, depending on
              composition and degree of recovery of materials such as meals from
              the ash for recycling Incineration has particularly strong benefits
              for the treatment of certain waste where pathogens and toxins can be
              destroyed by high temperatures. And hot air is cooled by using Cold
              water.
            </p>
            <p className="ab-body">
              The cool water is placed around the hot air pipe in a separate
              cylinder. Which is placed on the way of oven to wet scrubber? Then
              hot air is send to the re-circulation tank and it will be get cooled
              from atmospheric air. Then it again passed to the tank
            </p>
            <p className="ab-body">
              for cooling the hot air. This circulation system is show in figure
              the hot air with ash will pass to the wet scrubber for scrubbing.
              The main work of the wet scrubber is to filter the dust particles
              and to reduce the heat. The water will be stored in the bottom tank,
              and single water sprayer will be placed just above the polluted hot
              air inlet in scrubber. When the water is sprayed the bit size ash
              particles will be collected and the air directly hit the water so
              that also few. More ash will be collected, When hat air move more
              number of water sprayer are used for spraying in high amount of
              pressure. At this stage polluted air will collected and hot air also
              get cooled. The each particles which is collected will be store in
              the bottom tank in the sludge form. The polluted heavy particles
              will move downwards and pure water will move upwards. Clean air will
              pass through the filter and mix with the atmosphere.
            </p>
          </div>
          <div className="ab-story-badges">
            <span>♻ Eco-Certified</span>
            <span>🏛 Govt. Empanelled</span>
            <span>🔧 1 Yr Warranty</span>
          </div>
        </div>
      </section>

      <section
        ref={storyRef}
        className={`ab-story ${storyInView ? "ab-in" : ""}`}
      >
        {/* ══════════ TECHNOLOGIES / INCINERATOR DETAILS ══════════ */}
        <section className="ab-technologies">
          <div className="ab-tech-inner">
            <h2>TECHNOLOGIES</h2>
            <p>
              The utility value of "Green Tech Industries" in the market is due to its
              Intrinsic Quality, Reliability, Long life and Extensive Advertisement.
            </p>

            <h3>SUPPLY, ERECTION & HANDLING</h3>
            <p>
              Green Tech Industries is installed only after assessing the proposed spot
              and the surroundings. Our technologies evaluate diverse factors like
              nature and volume of waste, climate aspects, elevation of the building
              and adjacent buildings, technique of erection mechanized or manual etc.
              Skilled experts handle heavy duty erections preserving all safety standards.
              We have our own trucks for shipment all over India. No second-party involvement.
            </p>

            <h3>AFTER SALES, SERVICE & WARRANTY</h3>
            <p>
              Every Green Tech Industries machine is supplied with 1-year onsite
              replacement warranty. As part of the warranty, the following amenities
              are provided to the customer for unperturbed operation.
            </p>

            <h3>WITH FUEL INCINERATOR</h3>
            <ul>
              <li><strong>🔥&nbsp;PRIMARY CHAMBER:</strong> Burns waste up to 1200°C.</li>
              <li><strong>♻&nbsp;SECONDARY CHAMBER:</strong> Burns harmful gases from primary chamber.</li>
              <li><strong>💧&nbsp;WATER COOLER:</strong> Reduces secondary chamber gas temperature.</li>
              <li><strong>🌫&nbsp;WET SCRUBBER:</strong> Pollution control technology.</li>
              <li><strong>⚙&nbsp;BY-PASS CHAMBER:</strong> Emergency damper for safety.</li>
              <li><strong>🏭&nbsp;STACK:</strong> Designed as per PCB norms.</li>
              <li><strong>⛽&nbsp;DIESEL BURNER:</strong> PCB-compliant design.</li>
              <li><strong>🪵&nbsp;CHARCOAL BOX:</strong> PCB-compliant design.</li>
            </ul>
          </div>
        </section>

      </section>

      {/* ══════════ IMPACT COUNTERS ══════════ */}
      <section ref={impactRef} className="ab-impact">
        <div className="ab-impact-inner">
          <ImpactCard
            value={300}
            suffix="+"
            label="Machines Installed"
            started={impactInView}
          />
          <ImpactCard
            value={50}
            suffix="+"
            label="Institutions Served"
            started={impactInView}
          />
          <ImpactCard
            value={25}
            suffix="+"
            label="Government Projects"
            started={impactInView}
          />
          <ImpactCard
            value={15}
            suffix="+"
            label="States Covered"
            started={impactInView}
          />
          <ImpactCard
            value={98}
            suffix="%"
            label="Client Satisfaction"
            started={impactInView}
          />
        </div>
      </section>

      {/* ══════════ MISSION & VISION ══════════ */}
      <section ref={vmRef} className={`ab-vm ${vmInView ? "ab-in" : ""}`}>
        <div className="ab-vm-header">
          <p className="ab-eyebrow" style={{ textAlign: "center" }}>
            Our Foundation
          </p>
          <h2 className="ab-section-title" style={{ textAlign: "center" }}>
            What drives <em>everything</em> we do
          </h2>
        </div>
        <div className="ab-vm-cards">
          <div className="ab-vm-card ab-vm-mission">
            <div className="ab-vm-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, efficient, and eco-conscious machinery that
              addresses modern sanitary and waste management challenges —
              delivering solutions that work for both people and the planet. We
              strive to make every school, clinic, and government facility a
              cleaner, greener space.
            </p>
          </div>
          <div className="ab-vm-card ab-vm-vision">
            <div className="ab-vm-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be India's most trusted name in eco-technology and waste
              management equipment — driving measurable environmental change
              through engineering excellence, government empanelment, and a deep
              commitment to sustainable manufacturing practices.
            </p>
          </div>
          <div className="ab-vm-card ab-vm-promise">
            <div className="ab-vm-icon">🤝</div>
            <h3>Our Promise</h3>
            <p>
              Every installation is backed by rigorous site assessment, skilled
              erection teams, and one full year of onsite replacement warranty.
              No sub-contractors. No second-party involvement. Complete
              accountability — directly from GreenTech.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ TECHNOLOGY PROCESS ══════════ */}
      <section ref={techRef} className={`ab-tech ${techInView ? "ab-in" : ""}`}>
        <div className="ab-tech-header">
          <p className="ab-eyebrow light">How It Works</p>
          <h2 className="ab-section-title light">
            Patented <em>Zero-Fuel</em> Technology
          </h2>
          <p className="ab-tech-intro">
            GreenTech's incineration system is a commercially implemented,
            pollution-controlled solution recognized as perfect for municipal
            solid waste, small-scale units, auditoriums, residential apartments,
            railway stations and more. The process produces only ash — 4–5% by
            volume, 15–20% by weight of original waste — usable as fertilizer or
            for manufacturing lightweight bricks.
          </p>
        </div>
        <div className="ab-tech-steps">
          {techSteps.map((step, i) => (
            <div
              key={i}
              className="ab-tech-step"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="ab-tech-num">{step.num}</span>
              <div className="ab-tech-line" />
              <div className="ab-tech-body">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ PRODUCTS GRID ══════════ */}
      <section
        ref={prodsRef}
        className={`ab-products ${prodsInView ? "ab-in" : ""}`}
      >
        <div className="ab-products-header">
          <p className="ab-eyebrow" style={{ textAlign: "center" }}>
            What We Build
          </p>
          <h2 className="ab-section-title" style={{ textAlign: "center" }}>
            Our <em>Product Range</em>
          </h2>
        </div>
        <div className="ab-products-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="ab-prod-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="ab-prod-icon">{p.icon}</span>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ SUPPLY & ERECTION ══════════ */}
      <section
        ref={supplyRef}
        className={`ab-supply ${supplyInView ? "ab-in" : ""}`}
      >
        <div className="ab-supply-inner">
          <div className="ab-supply-text">
            <p className="ab-eyebrow light">Our Process</p>
            <h2 className="ab-section-title light">
              Supply, Erection
              <br />
              <em>& Handling</em>
            </h2>
            <p className="ab-supply-body">
              Every GreenTech installation begins with a thorough site
              assessment — evaluating waste nature and volume, climate factors,
              building elevation, and erection technique. Our skilled experts
              handle all heavy-duty erections following strict safety procedures
              and standards.
            </p>
            <p className="ab-supply-body">
              We operate our own fleet of trucks for nationwide shipment. Every
              phase of installation is executed directly by our company —{" "}
              <strong>no second-party involvement at any stage.</strong>
            </p>
          </div>
          <div className="ab-supply-cards">
            {[
              {
                icon: "📍",
                title: "Site Assessment",
                body: "Nature & volume of waste, climate, elevation and erection method evaluated.",
              },
              {
                icon: "🚛",
                title: "Direct Shipment",
                body: "Own trucks for all-India delivery. No third-party logistics.",
              },
              {
                icon: "👷",
                title: "Expert Erection",
                body: "Skilled teams handle mechanical and manual erection with full safety compliance.",
              },
              {
                icon: "🛡️",
                title: "1-Year Warranty",
                body: "Onsite replacement warranty with full after-sales service support.",
              },
            ].map((c, i) => (
              <div key={i} className="ab-supply-card">
                <span>{c.icon}</span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WARRANTY & AFTER-SALES ══════════ */}
      <section
        ref={warrantyRef}
        className={`ab-warranty ${warrantyInView ? "ab-in" : ""}`}
      >
        <div className="ab-warranty-header">
          <p className="ab-eyebrow" style={{ textAlign: "center" }}>
            After-Sales
          </p>
          <h2 className="ab-section-title" style={{ textAlign: "center" }}>
            Service &amp; <em>Warranty</em>
          </h2>
          <p className="ab-warranty-intro">
            Every GreenTech machine comes with a 1-year onsite replacement
            warranty. Our after-sales commitment ensures uninterrupted
            performance from day one.
          </p>
        </div>
        <div className="ab-warranty-grid">
          {[
            {
              icon: "⚙️",
              label: "Installation Support",
              desc: "Full on-site installation managed by our own engineers.",
            },
            {
              icon: "🎓",
              label: "Operator Training",
              desc: "Hands-on training for operators included at no extra charge.",
            },
            {
              icon: "🔁",
              label: "Parts Replacement",
              desc: "All parts replaced under warranty — no hidden costs.",
            },
            {
              icon: "📞",
              label: "Technical Helpline",
              desc: "Dedicated support team reachable throughout the warranty period.",
            },
          ].map((w, i) => (
            <div key={i} className="ab-warranty-card">
              <span className="ab-warranty-icon">{w.icon}</span>
              <h4>{w.label}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="ab-cta">
        <div className="ab-cta-overlay" />
        <div className="ab-cta-content">
          <p className="ab-eyebrow light" style={{ textAlign: "center" }}>
            Get In Touch
          </p>
          <h2
            className="ab-section-title light"
            style={{ textAlign: "center" }}
          >
            Ready to go <em>green?</em>
          </h2>
          <p className="ab-cta-body">
            Contact us for product quotations, government procurement, or
            installation enquiries.
          </p>
          <div className="ab-cta-btns">
            <a href="/getquote" className="ab-btn-primary">
              Get a Free Quote
            </a>
            <a href="/products" className="ab-btn-ghost">
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
