import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo footer-logo" style={{ marginBottom: '10px' }}>
              Sagun <span>Education</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500', marginBottom: '10px', fontSize: '0.9rem' }}>
              Empowering Ambitions, Engineering Futures.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '20px', fontSize: '0.85rem' }}>
              Bridging local students to global institutions. Your success is our mission.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/18xX865mvD/?mibextid=wwXIfr" title="Facebook Japan" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i><small>JP</small></a>
              <a href="https://www.facebook.com/share/14auxj9osmr/?mibextid=wwXIfr" title="Facebook UK" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i><small>UK</small></a>
              <a href="https://www.facebook.com/share/1LF86wpZ9n/?mibextid=wwXIfr" title="Facebook Finland" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i><small>FI</small></a>
              <a href="https://www.instagram.com/saguneducation/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.youtube.com/@Sagunedu" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://wa.me/9779803094437" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/services#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>Gajuri-1, Dhading Nepal</li>
              <li>010-402004</li>
              <li>9803094437</li>
              <li>info@sagunedu.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Sagun Education Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
