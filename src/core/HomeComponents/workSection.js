import React from "react";

export default function workSection() {
  return (
    <section className="work-section">
      <div className="work-block">
        <div className="work-info">
          <h3 className="big-text">How we work</h3>
          <p>“Function information without cross action media value.</p>
          <p className="text-muted">
            Efficiently unleash cross-media tour function information without
            cross action media value. Quickly maximize timely deliverables for
            real-time schemas.
          </p>
          <div className="watch-video">
            <a
              href="https://www.youtube.com/watch?v=D7tF-cY2M9o"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-video-btn"
            >
              <i className="fas fa-play"></i>
            </a>
            <span>Watch Video</span>
          </div>
        </div>
      </div>
      <img src="/asserts/images/work/work.png" alt="" />
    </section>
  );
}
