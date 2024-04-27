import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          "Zeecare Medical Institute: Empowering Health Through Excellence. Our
          comprehensive approach combines cutting-edge research, compassionate
          care, and innovative technology. Dedicated to advancing medical
          knowledge and improving patient outcomes. Join us in shaping the
          future of healthcare."
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
