import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-top">
        <div className="footer-newsletter">
          <div className="footer-news-title">Stay Connected with SlickTalk</div>
          <div className="footer-news-static" style={{margin: '16px 0', color: '#7c3aed', fontWeight: 500}}>
            Follow us for updates, tips, and news:
          </div>
          <div className="footer-social-row" style={{display: 'flex', gap: '18px', marginBottom: '8px'}}>
            <a href="#" className="footer-social-link" aria-label="Facebook" style={{color: '#7c3aed'}}>Facebook</a>
            <a href="#" className="footer-social-link" aria-label="Twitter" style={{color: '#7c3aed'}}>Twitter</a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn" style={{color: '#7c3aed'}}>LinkedIn</a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-link-title">Solutions</div>
            <Link to="/call-answering-service">24/7 Call Answering Service</Link>
            <Link to="/bilingual-answering-service">Bilingual Answering Service</Link>
            <Link to="/call-handling-service">Call Handling Service</Link>
            <Link to="/after-hours-answering-service">After Hours Answering Service</Link>
            <Link to="/ai-receptionist">AI Receptionist</Link>
          </div>
          <div>
            <div className="footer-link-title">Industries</div>
            <Link to="/small-businesses">Small Businesses</Link>
            <Link to="/plumbing">Plumbing</Link>
            <Link to="/hvac">HVAC</Link>
            <Link to="/construction">Construction</Link>
            <Link to="/accounting">Accounting</Link>
            <Link to="/real-estate">Real Estate</Link>
            <Link to="/law-firms">Law Firms</Link>
            <Link to="/property-management">Property Management</Link>
            <Link to="/home-services">Home Services</Link>
            <Link to="/electricians">Electricians</Link>
            <Link to="/all-industries">All Industries</Link>
          </div>
          <div>
            <div className="footer-link-title">Company</div>
            <Link to="/pricing">Pricing</Link>
            <Link to="/booking">Book Now</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-row">
          <span className="footer-logo-circle">
            <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#b97aff"/><text x="50%" y="60%" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold" fontFamily="Inter, Arial">s</text></svg>
          </span>
          <span className="footer-logo-text">SlickTalk</span>
        </div>
        <div className="footer-legal">
         
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} SlickTalk
        </div>
      </div>
    </footer>
  );
}

export default Footer;
