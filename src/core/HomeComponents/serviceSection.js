import React from "react";

export default function serviceSection() {
  return (
    <section className="service-section">
      <div className="title">
        <span className="text-purple">services</span>
        <h2>
          With more than 20 years of experience we can deliver the best product
          design.
        </h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-head">
            <img src="/asserts/images/svg_icon/1.svg" alt="graphic design" />
          </div>
          <div className="card-title">
            <h3>Graphic design</h3>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor.
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="/asserts/images/svg_icon/2.svg" alt="Web design" />
          </div>
          <div className="card-title">
            <h3>Web design</h3>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor.
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="/asserts/images/svg_icon/3.svg" alt="Mobile app" />
          </div>
          <div className="card-title">
            <h3>Mobile app</h3>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor.
          </div>
        </div>
      </div>
    </section>
  );
}
