import React from 'react';
import './Footer.css';
import brand1 from '../components/brand1.png';
import brand2 from '../components/brand2.png';
import brand3 from '../components/brand3.png';
import brand4 from '../components/brand4.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brands">
          <p>BRANDS THAT TRUST US</p>
          <div className="brand-logos">
            <img src={brand1} alt="Brand 1" />
            <img src={brand2} alt="Brand 2" />
            <img src={brand3} alt="Brand 3" />
            <img src={brand4} alt="Brand 4" />
          </div>
        </div>
        <div className="newsletter">
      
          <input type="email" placeholder="YOUR EMAIL ADDRESS" />
          <button>Sign up to our newsletter</button>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-links">
          <div className="column">
            <h4>Navigate</h4>
            <ul>
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Our Artistes</li>
              <li>Community</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h4>Navigate</h4>
            <ul>
              <li>Work With Us</li>
              <li>Resources / Articles</li>
              <li>Blog Section</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h4>Socials</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="footer-quote">
          <h2>WANNA BE<br />STARTING SOMETHING?</h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 TASCKCREATIVEAGENCY</p>
        <p>Terms & Conditions</p>
        <p>Website by TASCK</p>
      </div>
    </footer>
  );
}

export default Footer;
