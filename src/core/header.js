import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="brand">
          <img src="/asserts/images/logo/logo.png" alt="logo" />
        </div>
        <div className="list-items nav-list">
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>
              <div className="pages">
                <div tabIndex="1">
                  Pages <i className="fas fa-chevron-down fa-xs"></i>
                </div>
                <ul>
                  <li>Portfolio details</li>
                  <li>about</li>
                  <li>element</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="blog">
                <div tabIndex="1">
                  Blog <i className="fas fa-chevron-down fa-xs"></i>
                </div>
                <ul>
                  <li>simple blog</li>
                  <li>blog</li>
                </ul>
              </div>
            </li>
            <li>contact</li>
          </ul>
        </div>
        <div className="nav-text">
          <a>Say hello</a>
        </div>
      </nav>
    </header>
  );
}
