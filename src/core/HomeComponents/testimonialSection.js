import React from "react";

export default function testimonialSection() {
  return (
    <section>
      <div className="testimonial-container">
        <img
          className="testimonial-banner"
          src="/asserts/images/testimonial/banner.png"
          alt="banner"
        />
        <div className="testimonial-overlay">
          <img
            className="fit-img"
            src="/asserts/images/testimonial/quote.svg"
            alt="quote"
          />
          <div className="testimonial-content">
            <p>
              Donec imperdiet congue orci consequat mattis. Donec rutrum
              porttitor sollicitudin. Pellentesque id dolor tempor sapien
              feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget
              ornare dui.{" "}
            </p>
          </div>

          <div className="profile-info">
            <img
              className="fit-img"
              src="/asserts/images/testimonial/thumb.png"
              alt="profile pic"
            />
            <h3>Robert Thomson</h3>
            <p>business owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
