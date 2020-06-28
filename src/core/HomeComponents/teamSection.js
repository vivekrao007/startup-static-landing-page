import React from "react";

export default function teamSection() {
  return (
    <section className="team-section">
      <h3 className="big-text">Our Creative Team</h3>
      <p className="text-muted">
        Tour function information without cross action media value quickly
        maximize timely deliverables.
      </p>
      <div className="team-group">
        <div className="team-member">
          <img src="/asserts/images/team/1.png" alt="" />
          <h3>Brandon Yeald</h3>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="/asserts/images/team/2.png" alt="" />
          <h3>Calvin Anderson</h3>
          <p className="text-muted">Graphics Designer</p>
        </div>
        <div className="team-member">
          <img src="/asserts/images/team/3.png" alt="" />
          <h3>Roman Solo</h3>
          <p className="text-muted">Wordpress Developer</p>
        </div>
        <div className="team-member">
          <img src="/asserts/images/team/4.png" alt="" />
          <h3>Yeald Kin</h3>
          <p className="text-muted">Software Engineer</p>
        </div>
      </div>
    </section>
  );
}
