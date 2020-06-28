import React from "react";

export default function aboutSection() {
  return (
    <section className="about-section">
      <div className="about-img">
        <img src="/asserts/images/about/about.png" alt="" />
      </div>
      <div className="about-block">
        <div className="about-info">
          <span>About Us</span>
          <h3 className="big-text">Empowering individuals </h3>
          <p>
            Efficiently unleash cross-media tour function information without
            cross action media value. Quickly maximize timely deliverables for
            real-time schemas.
          </p>
          <p className="font-highlight">
            “Function information without cross action media value."
          </p>
          <button className="about-btn">About Us</button>
        </div>
      </div>
    </section>
  );
}
