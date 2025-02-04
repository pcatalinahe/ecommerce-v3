import React from "react";
import "../About.css";

export const About = () => {
  return (
    <div className="about-container">
      {/* <div id="hero">
        <video autoPlay muted loop>
          <source src="src/assets/hero.mp4" type="video/mp4" />
        </video>
      </div> */}

      <div className="about-section" id="about">
        <div className="about-content">
          <h2 className="about-title">Love, Forever Enchanted</h2>
          <p className="about-description">
            At Enamoré, we believe love should always sparkle. Whether it’s a
            grand gesture or a heartfelt token, let our collection bring
            brilliance to your most cherished moments.
          </p>
          <img className="about-image" width="300px" height="300px" />
        </div>
      </div>

      <div className="faq-section" id="faq">
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-items">
          <div className="faq-item">
        <h6 className="faq-question">1. What materials are your ornaments made from?</h6>
        <p className="faq-answer">
          At Enamoré, our jewelry is crafted from premium crystals, designed to
          exude elegance and sophistication. Each piece is thoughtfully created
          to capture the delicate beauty of love and the magic of this
          Valentine’s season.
        </p>
        </div>
        <div className="faq-item">
        <h6 className="faq-question">2. Do you offer Valentine’s Day specials?</h6>
        <p className="faq-answer">
          Yes! We have exclusive discounts and limited-edition pieces available
          during the Valentine’s season. Check our Specials page for more
          details.
        </p>
        </div>
        <div className="faq-item">
        <h6 className="faq-question" >3. How can I find the perfect gift?</h6>
        <p className="faq-answer">
          Visit our Valentine’s Collection section to explore curated pieces for
          every type of love story. Need more help? Contact our customer service
          team for personalized recommendations.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};
