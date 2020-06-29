import React from "react";

export default function bannerSection() {
  return (
    <div className="banner-container">
      <img
        className="home-banner"
        src="/asserts/images/banner/banner.png"
        alt=""
      />
      <div className="banner-overlay">
        <div className="banner-content">
          <h3>
            Startup you can build a website online using the Bootstrap builder.
          </h3>
          <div className="banner-button">
            <span className="primary-btn">Visit Our Works</span>
          </div>
        </div>
      </div>
    </div>
  );
}
