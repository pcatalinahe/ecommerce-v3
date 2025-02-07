import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
<footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <p className="copyright">&copy; {new Date().getFullYear()} Enamoré. All rights reserved.</p>
          <p className="tagline">Your trusted source for timeless treasures and elegant accessories.</p>
        </div>
        
        <div className="footer-links">
          <p className="contact-info">Contact us: <a href="mailto:support@enamore.com">support@enamore.com</a> | <a href="tel:+18001234567">+1 (800) 123-4567</a></p>
          <p className="address">Address: 123 Sparkle Lane, Charlotte, NC 28269</p>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/icons/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://github.com/pcatalinahe" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/icons/github.png" alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
