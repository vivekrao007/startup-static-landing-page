import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="list-items nav-list">
          <ul>
            <li>
              <img src="/asserts/images/logo/logo.png" alt="logo" />
            </li>
            <li className="over-background">About</li>
            <li className="over-background">Service</li>
            <li className="over-background">Portfolio</li>
            <li className="over-background">Pages</li>
            <li className="over-background">Blog</li>
            <li className="over-background">contact</li>
          </ul>
        </div>
        <div className="list-items">
          <ul>
            <li className="social-media-item">
              <i className="fab fa-facebook-f fa-xs"></i>
            </li>
            <li className="social-media-item">
              <i className="fab fa-twitter fa-xs"></i>
            </li>
            <li className="social-media-item">
              <i className="fab fa-instagram fa-xs"></i>
            </li>
            <li className="social-media-item">
              <i className="fab fa-google-plus-g fa-xs"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>copyright 2020 All rights reserved</p>
      </div>
    </footer>
  );
}
