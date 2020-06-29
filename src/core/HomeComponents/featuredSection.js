import React from "react";

export default function featuredSection() {
  return (
    // TODO: add overlay for images.
    <section className="featured-section">
      <h3 className="big-text">Featured Works</h3>
      <p className="text-muted">
        Tour function information without cross action media value quickly
        maximize timely deliverables.
      </p>
      <div className="featured-grid">
        <div className="image-1">
          <div className="image-container">
            <img src="/asserts/images/portfolio/1.png" alt="mobile" />
            <div className="image-overlay">
              <div className="text">
                <span>App Design</span>
                <h3>Colorlib Mobile App</h3>
                <div className="primary-btn">View</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/asserts/images/portfolio/2.png" alt="mobile" />
            <div className="image-overlay">
              <div className="text">
                <span>App Design</span>
                <h3>Colorlib Mobile App</h3>
                <div className="primary-btn">View</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/asserts/images/portfolio/3.png" alt="mobile" />
            <div className="image-overlay">
              <div className="text">
                <span>App Design</span>
                <h3>Colorlib Mobile App</h3>
                <div className="primary-btn">View</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/asserts/images/portfolio/4.png" alt="mobile" />
            <div className="image-overlay">
              <div className="text">
                <span>App Design</span>
                <h3>Colorlib Mobile App</h3>
                <div className="primary-btn">View</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/asserts/images/portfolio/5.png" alt="mobile" />
            <div className="image-overlay">
              <div className="text">
                <span>App Design</span>
                <h3>Colorlib Mobile App</h3>
                <div className="primary-btn">View</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
