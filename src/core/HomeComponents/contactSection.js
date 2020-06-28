import React from "react";

export default function contactSection() {
  return (
    <section className="contact-section">
      <h3 className="big-text">Get in Touch</h3>
      <p className="text-muted">
        Tour function information without cross action media value quickly
        maximize timely deliverables.
      </p>
      <div className="input-group">
        <input type="text" className="input-field" placeholder="Your Name" />
        <input type="text" className="input-field" placeholder="Email" />

        <input
          type="text"
          className="input-field full-block"
          placeholder="Subject"
        />

        <textarea
          className="input-field full-block pt-20"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <span className="full-block primary-btn">Send Message</span>
      </div>
    </section>
  );
}
