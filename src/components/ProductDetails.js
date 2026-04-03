import React from "react";
import "./ProductDetail.css";
import { useParams, Link } from "react-router-dom";

import napkin from "../assests/131.jpeg";
import incinerator from "../assests/orginal4.jpg";
import vending from "../assests/vending.jpg";
import baler from "../assests/hydraulic.jpg";
import blow from "../assests/5.jpeg";
import lpggg from "../assests/133.png";
import mobilec from "../assests/134.jpeg";
import two from "../assests/2.jpeg";

function ProductDetail() {
  const { id } = useParams();

  const productData = {
    "napkin-destroyer": {
      title: "Napkin Destroyers",
      img: napkin,
      desc: "Safe & hygienic disposal of sanitary napkins",
      text: "Our Napkin Destroyers offer a safe, hygienic, and efficient method of destroying used sanitary napkins. Designed for installation in schools, offices, hospitals, and public restrooms, they help promote menstrual hygiene management in a discreet and eco-responsible way.",

      specifications: [
        "Electric incinerator technology",
        "Odour-free, smoke-free operation",
        "Compact wall-mount design",
        "Easy to maintain & clean",
        "Low power consumption",
        "Suitable for indoor installation",
      ],
      features: [
        "Complete incineration — no residual waste",
        "Hygienic touch-free operation",
        "Stainless steel interior",
        "Auto shut-off safety mechanism",
      ],
      applications: [
        "Schools & colleges",
        "Hospitals & clinics",
        "Corporate offices",
        "Public restrooms",
      ],
    },

    lpg: {
      title: "LPG Crematorium",
      img: lpggg,
      desc: "Eco-friendly LPG crematorium for clean, efficient, and safe cremation.",
      text: "LPG cremation is an eco-friendly method of body disposal that serves as a modern alternative to traditional burial. It reduces the body to ash by exposing it to high-temperature flames within a controlled furnace. Unlike the common misconception of simply burning the body, LPG cremation is a precise, technical process carried out with full care and respect, ensuring efficiency, hygiene, and minimal environmental impact.",

      specifications: [
        "High-efficiency LPG burner system",
        "Fully enclosed combustion chamber",
        "Temperature control up to 900–1100°C",
        "Low emission and smoke-free operation",
        "Automated safety and monitoring systems",
      ],
      features: [
        "Rapid and uniform cremation process",
        "Eco-friendly with minimal emissions",
        "Hygienic and fully enclosed system",
        "Easy operation with automated controls",
        "Compact design suitable for limited spaces",
      ],
      applications: [
        "Hospitals and healthcare facilities",
        "Municipal crematoriums",
        "Religious institutions and temples",
        "Funeral service providers",
        "Residential and community memorial centers",
      ],
    },

    incinerator: {
      title: "Eco-Friendly Incinerator",
      img: incinerator,
      desc: "High temperature waste disposal",
      text: "We manufacture high-performance incinerators for efficient and environmentally responsible waste disposal. Our incinerators feature advanced combustion systems, robust construction, and emissions control technology, ensuring safe and reliable operation. Ideal for hospitals, industries, and municipalities, our incinerators minimize waste volume and environmental impact. Trust us for tailored solutions and reliable support. Contact us to explore our range of incinerators and disposal solutions.",

      specifications: [
        "High-temperature chamber",
        "Pollution control system",
        "Minimal ash output",
        "Digital temperature control",
      ],
      features: [
        "Two-chamber design",
        "Automatic ignition",
        "Stainless steel lining",
        "CPCB compliant",
      ],
      applications: [
        "Hospitals",
        "Clinics",
        "Laboratories",
        "Medical waste units",
      ],
    },

    "vending-machine": {
      title: "Napkin Vending Machine",
      img: vending,
      desc: "Automatic sanitary napkin dispenser",
      text: "Our Sanitary Napkin Vending Machines provide easy, private access to sanitary napkins for women and girls in schools, colleges, and public spaces. Available in coin-operated and token-operated variants.",

      specifications: [
        "Coin/token operated",
        "High storage capacity",
        "Tamper-proof body",
        "Wall-mounted/free-standing",
      ],
      features: [
        "Dispenses standard napkins",
        "Custom branding panel",
        "Lockable refill door",
        "Durable coating",
      ],
      applications: [
        "Schools & colleges",
        "Railway stations",
        "Airports",
        "Corporate offices",
      ],
    },

    blower: {
      title: "Wood Stove Blower",
      img: blow,
      desc: "Enhances stove efficiency by circulating warm air evenly, providing faster and more consistent heating.",
      text: "Our Agglo Machines convert waste plastic films, bags, and thin plastic sheets into dense, homogenous granules that are ready for re-processing. A critical piece of equipment for any plastic recycling operation.",

      specifications: [
        "Powerful blower motor",
        "Efficient heat circulation",
        "Compact & durable design",
      ],
      features: [
        "Boosts stove heat output",
        "Even heat distribution",
        "Energy-efficient operation",
        "Durable & long-lasting",
      ],
      applications: [
        "Residential wood stoves",
        "Commercial heating systems",
        "Small workshops and cabins",
      ],
    },

    "baling-machine": {
      title: "Hydraulic Baling Machine",
      img: baler,
      desc: "Compress recyclable materials",
      text: "A Hydraulic Baling Machine is used to compress recyclable waste such as plastic, paper, cardboard, and metal into compact bundles. It helps reduce storage space and makes transportation easier, making it ideal for recycling centers, industries, and waste management facilities.",

      specifications: [
        "Heavy-duty hydraulic system",
        "High compression force",
        "Easy operation",
        "Low maintenance",
      ],
      features: [
        "Efficient compaction",
        "Durable build",
        "Safe operation",
        "Energy efficient",
      ],
      applications: ["Recycling plants", "Warehouses", "Industrial units"],
    },

    "mobile-crematorium": {
      title: "Mobile Crematorium",
      img: mobilec,
      desc: "Portable, eco-friendly crematorium for efficient, safe, and hygienic cremation.",
      text: "The Mobile Crematorium is a portable, eco-friendly solution for respectful body disposal. It uses high-temperature controlled flames within a compact furnace to reduce the body to ash efficiently and hygienically. Designed for convenience, it allows cremation at different locations while minimizing environmental impact, ensuring safe, clean, and dignified handling.",

      specifications: [
        "Portable high-temperature furnace",
        "LPG-powered combustion system",
        "Compact transportable design",
        "Low emission operation",
      ],
      features: [
        "Quick body cremation",
        "Eco-friendly process",
        "Hygienic enclosed system",
      ],
      applications: [
        "Hospitals and clinics",
        "Funeral service providers",
        "Religious institutions",
        "Disaster relief areas",
      ],
    },

    "bottle-crusher": {
      title: "Bottle Crusher",
      img: "",
      desc: "Compact machine crushing bottles into small, recyclable pieces efficiently.",
      text: "The Bottle Crusher is a compact and efficient machine designed to crush glass bottles into small, recyclable pieces. It reduces storage space, facilitates easy handling, and supports sustainable recycling practices. Ideal for industries, bars, restaurants, and recycling centers, it ensures safe, hygienic, and eco-friendly waste management.",

      specifications: [
        "Heavy-duty steel",
        "High-capacity hopper",
        "Powerful crushing motor",
        "Compact durable design",
        "Low energy consumption",
      ],
      features: [
        "Crushes glass bottles",
        "Reduces storage space",
        "Easy to operate",
        "Safe and hygienic",
      ],
      applications: [
        "Recycling plants",
        "Restaurants and bars",
        "Industrial waste units",
        "Municipal collection centers",
        "Beverage manufacturing units",
      ],
    },

    "dosa-tawa": {
      title: "Dosa Tawa",
      img: two,
      desc: "High-quality flat pan designed for making crispy dosas and South Indian dishes.",
      text: "The Dosa Tawa is a premium cooking pan specially designed for preparing crispy dosas, uttapams, chapatis, and other South Indian delicacies. Made with high-grade material, it ensures uniform heat distribution for perfect cooking results. Its durable construction and smooth cooking surface make it ideal for both home kitchens and commercial food preparation.",

      specifications: [
        "Heavy-duty cast iron / non-stick surface",
        "Even heat distribution technology",
        "Heat-resistant handle",
        "Scratch-resistant coating",
        "Suitable for gas and induction (variant dependent)"
      ],

      features: [
        "Perfect for crispy dosas and uttapams",
        "Durable and long-lasting build",
        "Easy to clean surface",
        "Fast heating and energy efficient"
      ],

      applications: [
        "Home kitchens",
        "Restaurants",
        "Hotels",
        "South Indian food stalls",
        "Commercial kitchens"
      ],
    },
  };

  const product = productData[id];

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-hero">
        <h1>{product.title}</h1>
        <p>{product.desc}</p>
      </div>

      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="product-info">
          <Link to="/products" className="back-btn">
            ← Back to Products
          </Link>

          <h2>{product.title}</h2>
          <p>{product.text}</p>

          <div className="product-buttons">
            <Link to="/getquote">
              <button className="enquiry-btn">Send Enquiry</button>
            </Link>

            <Link to="/getquote">
              <button className="contact-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-extra">
        <div className="box">
          <h3>⚙️ Specifications</h3>

          {product.specifications.map((item, i) => (
            <p key={i}>✔️ {item}</p>
          ))}
        </div>

        <div className="box">
          <h3>✨ Key Features</h3>

          {product.features.map((item, i) => (
            <p key={i}>✔️ {item}</p>
          ))}
        </div>

        <div className="box">
          <h3>🏢 Applications</h3>

          {product.applications.map((item, i) => (
            <p key={i}>✔️ {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
