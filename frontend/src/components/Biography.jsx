import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          "Zeecare Medical Institute is a leading healthcare provider committed
          to excellence in patient care, medical education, and research. With a
          focus on innovation and compassion, we strive to improve health
          outcomes and promote wellness in our community. Trust Zeecare for
          comprehensive, cutting-edge medical solutions."
        </p>
        <p>"Zeecare: Innovating healthcare. Compassionate experts. Excellence in patient care. Community-focused. Leading-edge solutions."</p>
        <p>Zeecare is community-focused, providing personalized and comprehensive medical services.</p>
        <p>
        Zeecare Medical Institute is committed to excellence in patient care.
        </p>
        <p>
        Trust us for leading-edge medical solutions and a commitment to wellness.
        </p>
        <p>Our team consists of compassionate experts dedicated to improving outcomes.</p>
      </div>
    </div>
  );
};

export default Biography;
