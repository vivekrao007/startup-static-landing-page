import React from "react";
import Base from "./base";

export default function Home() {
  return (
    <Base>
      <section className="service-section">
        <h2>
          With more than 20 years of experience we can deliver the best product
          design.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="card-title">
              <h1>Graphic design</h1>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Web design</h1>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Mobile app</h1>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}
