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
            <li>Home</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="list-items">
          <ul>
            <li className="social-media-item">F</li>
            <li className="social-media-item">T</li>
            <li className="social-media-item">I</li>
            <li className="social-media-item">G</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>copyright 2020 All rights reserved</p>
      </div>
    </footer>
  );
}
