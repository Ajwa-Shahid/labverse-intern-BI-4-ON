import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Promo Banner */}
      <div className="promo-banner">
        <p>
          July Sale: <strong>FOREVER</strong> discount of <strong>40% OFF</strong> regular price!
        </p>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          {/* Left side: logo + nav */}
          <div className="left-section">
            <div className="logo">
              <a href="/">
                <img src="/images/fluentu-logo.png" alt="FluentU Logo" />
              </a>
            </div>

            <nav className="nav">
              <ul>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/schools">Schools</a></li>
              </ul>
            </nav>
          </div>

          {/* Right side: auth buttons */}
          <div className="auth-buttons">
            <button className="btn btn-login">Log In</button>
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Small "Courses" bar */}
      <div className="mini-header">
        <a href="/courses">Courses</a>
      </div>
    </>
  );
};

export default Header;
