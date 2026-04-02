import React from "react";
import "./Government.css";
import { Link } from "react-router-dom";

function Government() {
  return (
    <div className="govPage">
      <section className="govHero">
        <h1>Government & Institutional Projects</h1>
        <p>Trusted by schools, hospitals, and government bodies across India</p>
      </section>

      <section className="govServingSection">
        <div className="govServingText">
          <p className="govSmallTitle">OUR REACH</p>

          <h2>
            Serving Institutions <br />
            Across Kerala & Beyond
          </h2>

          <div className="govLine"></div>

          <p>
            Green Tech Industries has an established track record of supplying
            eco-friendly machinery to government schools, healthcare centres,
            and public institutions.
          </p>

          <p>
            From installation of napkin destroyers in rural government schools
            to incinerators in district hospitals — our products are making a
            measurable difference to hygiene, safety and sustainability.
          </p>

          <Link to="/getquote">
            <button className="govEnquireBtn">
              Enquire for Government Projects
            </button>
          </Link>
        </div>

        <div className="govServingImage">🏛️</div>
      </section>

      <section className="govCardsSection">
        <div className="govCard">
          <h3>🏫 School Installations</h3>
          <p>
            Napkin destroyers and vending machines installed in government and
            aided schools promoting menstrual hygiene management.
          </p>
        </div>

        <div className="govCard">
          <h3>🏥 Healthcare Facilities</h3>
          <p>
            Medical waste incinerators and bio-waste management solutions
            deployed at PHCs, hospitals and health centres.
          </p>
        </div>

        <div className="govCard">
          <h3>🏛️ Government Tenders</h3>
          <p>
            We actively participate in government tenders and are empanelled
            with multiple public procurement systems.
          </p>
        </div>

        <div className="govCard">
          <h3>📑 Case Studies & Success</h3>
          <p>
            Successful deployments with documented impact on waste reduction,
            sanitary hygiene awareness and sustainability.
          </p>
        </div>

        <div className="govCard">
          <h3>🏘️ Panchayat Projects</h3>
          <p>
            Eco-machinery installations for local self-government bodies
            supporting clean village initiatives.
          </p>
        </div>

        <div className="govCard">
          <h3>📚 Awareness & Training</h3>
          <p>
            Awareness sessions on menstrual hygiene and waste management for
            students and institutional staff.
          </p>
        </div>
      </section>

      <section className="govCTASection">
        <h2>Looking to Procure for Government Institutions?</h2>

        <p>
          We handle bulk orders, tender requirements and installation across
          multiple locations.
        </p>

        <div className="govCTAButtons">
          <Link to="/getquote">
            <button className="govPrimaryBtn">Get in Touch</button>
          </Link>

          <Link to="/certifications">
            <button className="govSecondaryBtn">View Certifications</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Government;
