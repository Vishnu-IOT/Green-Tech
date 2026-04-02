import React from "react";
import "./Certidications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Kerala Agro Industries Empanelment",
      desc: "Officially empanelled vendor under Kerala Agro Industries, qualifying Green Tech Industries for government supply contracts and institutional procurement across Kerala.",
      icon: "🏅",
    },
    {
      title: "Quality Manufacturing Standards",
      desc: "Our manufacturing processes and finished products comply with applicable quality standards, ensuring reliability, durability, and consistent performance across all product lines.",
      icon: "📜",
    },
    {
      title: "Environmental Compliance",
      desc: "All incineration and waste management machinery adheres to pollution control norms and environmental safety regulations set by the Central Pollution Control Board (CPCB).",
      icon: "🌿",
    },
    {
      title: "Safety Approvals",
      desc: "Products undergo rigorous safety testing and carry necessary approvals for installations in schools, hospitals, and public institutions across India.",
      icon: "🔒",
    },
    {
      title: "Company Registration",
      desc: "Green Tech Industries India Pvt Ltd is a registered company under the Companies Act, India, with all regulatory filings up to date.",
      icon: "🏢",
    },
    {
      title: "Government Vendor Approval",
      desc: "Approved vendor for government tender participation at the state level enabling procurement under hygiene and waste management schemes.",
      icon: "🤝",
    },
  ];

  return (
    <div className="certifications-page">
      <section className="cert-hero">
        <h1>Certifications & Approvals</h1>
        <p>Our credentials validate quality, safety, and eco-compliance</p>
      </section>

      <section className="cert-container">
        <h4 className="sub-title">OUR CREDENTIALS</h4>
        <h2 className="main-title">Certified, Approved & Trusted</h2>

        <div className="cert-grid">
          {certifications.map((item, index) => (
            <div key={index} className="cert-card">
              <div className="icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h2>100+</h2>
          <p>Installations</p>
        </div>

        <div className="stat-box">
          <h2>Govt.</h2>
          <p>Empanelled</p>
        </div>

        <div className="stat-box">
          <h2>6+</h2>
          <p>Product Lines</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
