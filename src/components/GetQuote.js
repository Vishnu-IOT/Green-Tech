import React, { useState } from "react";
import "./GetQuote.css";

const PRODUCTS = [
  "Napkin Destroyer",
  // "Plastic Shredder",
  "Eco-Friendly Incinerator",
  "Dosa Tawa",
  "Wood Stove Blower",
  "LPG Crematorium",
  "Mobile Crematorium",
  // "Napkin Vending Machine",
  // "Agglomerator Machine",
  // "Hydraulic Baling Machine",
];

const INITIAL = {
  fullName: "", phoneNumber: "", emailAddress: "",
  organization: "", product: "", quantity: "", message: "",
};

const validate = (data) => {
  const e = {};
  if (!data.fullName.trim()) e.fullName = "Full name is required.";
  if (!/^[6-9]\d{9}$/.test(data.phoneNumber))
    e.phoneNumber = "Enter a valid 10-digit Indian number.";
  if (!/\S+@\S+\.\S+/.test(data.emailAddress))
    e.emailAddress = "Enter a valid email address.";
  if (!data.product) e.product = "Please select a product.";
  if (!data.message.trim()) e.message = "Please describe your requirements.";
  return e;
};

export default function GetQuote() {
  const [formData, setFormData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    /* clear individual error on type */
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate(formData);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      setLoading(true);

      const phone = "919947503371"; // replace with your whatsapp number

      const message =
        `*New Quote Request*

          *Name:* ${formData.fullName}
          *Phone:* ${formData.phoneNumber}
          *Email:* ${formData.emailAddress}
          *Organization:* ${formData.organization}
          *Product:* ${formData.product}
          *Quantity:* ${formData.quantity}

          *Requirements:*
          ${formData.message}
          `;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");

      setSubmitted(true);
      setFormData(INITIAL);
      setErrors({});

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gq-page">

      {/* ══ HERO ══ */}
      <section className="gq-hero">
        <div className="gq-hero-overlay" />
        <div className="gq-hero-orb gq-orb1" />
        <div className="gq-hero-orb gq-orb2" />
        <div className="gq-hero-content">
          <p className="gq-eyebrow">Free Consultation</p>
          <h1 className="gq-hero-title">Get a <em>Free Quote</em></h1>
          <p className="gq-hero-sub">
            Fill in your details and one of our specialists will reach out
            within 24 hours with a custom quotation for your requirements.
          </p>
        </div>
      </section>

      {/* ══ MAIN SPLIT ══ */}
      <section className="gq-main">

        {/* ── Left: info panel ── */}
        <div className="gq-info">
          <p className="gq-eyebrow dark">Why Choose GreenTech</p>
          <h2 className="gq-info-title">
            Trusted by institutions<br /><em>across India</em>
          </h2>

          <div className="gq-info-list">
            {[
              {icon: "🏆", title: "Address", body: "Alamaram, Kanjikode, Palakad, Kerala" },
              { icon: "🏛️", title: "Govt. Empanelled", body: "TN & Kerala Agro Industries empanelled manufacturer." },
              { icon: "♻️", title: "Patented Technology", body: "Zero-fuel incineration — 80–85% mass reduction." },
              { icon: "🎧", title: "Expert Support", body: "Free installation, training and 1-year onsite warranty." },
              { icon: "🚛", title: "Pan-India Delivery", body: "Own fleet — direct delivery, no third-party delays." },
              { icon: "⚙️", title: "Custom Solutions", body: "Specifications tailored to your institution's exact needs." },
            ].map((item, i) => (
              <div key={i} className="gq-info-item">
                <span className="gq-info-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact quick-links */}
          <div className="gq-contact-quick">
            <a href="tel:+919947503371" className="gq-quick-link">
              <span>📞</span> +91 99475 03371
            </a>
            <a href="mailto:greentechindustrieskerala@gmail.com" className="gq-quick-link">
              <span>✉️</span> greentechindustrieskerala@gmail.com
            </a>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="gq-form-wrap">

          {submitted ? (
            /* ── Success state ── */
            <div className="gq-success">
              <div className="gq-success-icon">✓</div>
              <h3>Quote Request Sent!</h3>
              <p>
                Thank you for your enquiry. Our team will contact you within
                <strong> 24 hours</strong> with a custom quotation.
              </p>
              <button className="gq-btn-primary" onClick={() => setSubmitted(false)}>
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form className="gq-form" onSubmit={handleSubmit} noValidate>
              <div className="gq-form-head">
                <h3>Enquiry Details</h3>
                <p>All fields marked <span className="gq-req">*</span> are required.</p>
              </div>

              {/* Row 1 */}
              <div className="gq-row">
                <Field
                  label="Full Name" name="fullName" type="text"
                  value={formData.fullName} onChange={handleChange}
                  error={errors.fullName} required
                />
                <Field
                  label="Phone Number" name="phoneNumber" type="tel"
                  value={formData.phoneNumber} onChange={handleChange}
                  error={errors.phoneNumber} required
                />
              </div>

              {/* Row 2 */}
              <div className="gq-row">
                <Field
                  label="Email Address" name="emailAddress" type="email"
                  value={formData.emailAddress} onChange={handleChange}
                  error={errors.emailAddress} required
                />
                <Field
                  label="Organization / Institution" name="organization" type="text"
                  value={formData.organization} onChange={handleChange}
                />
              </div>

              {/* Row 3 */}
              <div className="gq-row">
                {/* Product select */}
                <div className="gq-field">
                  <label className="gq-label">
                    Product <span className="gq-req">*</span>
                  </label>
                  <div className={`gq-select-wrap${errors.product ? " gq-field-error" : ""}`}>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="gq-select"
                    >
                      <option value="">Select a product…</option>
                      {PRODUCTS.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <span className="gq-select-arrow">↓</span>
                  </div>
                  {errors.product && <p className="gq-error">{errors.product}</p>}
                </div>

                <Field
                  label="Quantity Required" name="quantity" type="text"
                  value={formData.quantity} onChange={handleChange}
                  placeholder="e.g. 2 units"
                />
              </div>

              {/* Message */}
              <div className="gq-field gq-field-full">
                <label className="gq-label">
                  Requirements <span className="gq-req">*</span>
                </label>
                <textarea
                  name="message"
                  className={`gq-textarea${errors.message ? " gq-input-error" : ""}`}
                  placeholder="Describe your requirements, installation site, quantities, or any specific needs…"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
                {errors.message && <p className="gq-error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={`gq-btn-primary gq-submit${loading ? " gq-loading" : ""}`}
                disabled={loading}
              >
                {loading
                  ? <><span className="gq-spinner" /> Submitting…</>
                  : "Submit Enquiry →"
                }
              </button>

              <p className="gq-privacy">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          )}
        </div>

      </section>
    </div>
  );
}

/* ─── Field sub-component with floating label ─── */
function Field({ label, name, type, value, onChange, error, required, placeholder }) {
  return (
    <div className="gq-field">
      <label className="gq-label">
        {label} {required && <span className="gq-req">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={`gq-input${error ? " gq-input-error" : ""}`}
      />
      {error && <p className="gq-error">{error}</p>}
    </div>
  );
}