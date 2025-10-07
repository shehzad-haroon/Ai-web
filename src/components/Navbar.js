import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar nav-rounded" ref={navRef}>
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="navbar-logo-icon">S</span>
          <span className="navbar-logo-text">Slicktalk</span>
        </Link>
        {/* Hamburger icon for mobile */}
        <button className="navbar-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
        </button>
        {/* Desktop menu */}
        <ul className="navbar-links navbar-center-menu">
          <li className="navbar-dropdown">
            <span
              className="navbar-dropdown-label"
              onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'solutions'}
            >
              Solutions <span className="navbar-arrow">▼</span>
            </span>
            <ul className="navbar-dropdown-menu" style={{display: openDropdown === 'solutions' ? 'block' : 'none'}}>
              <li><Link to="/call-answering-service" onClick={() => setOpenDropdown(null)}>24/7 Call Answering Service</Link></li>
              <li><Link to="/bilingual-answering-service" onClick={() => setOpenDropdown(null)}>Bilingual Answering Service</Link></li>
              <li><Link to="/call-handling-service" onClick={() => setOpenDropdown(null)}>Call Handling Service</Link></li>
              <li><Link to="/after-hours-answering-service" onClick={() => setOpenDropdown(null)}>After Hours Answering Service</Link></li>
              <li><Link to="/ai-receptionist" onClick={() => setOpenDropdown(null)}>AI Receptionist</Link></li>
            </ul>
          </li>
          <li className="navbar-dropdown">
            <span
              className="navbar-dropdown-label"
              onClick={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'industries'}
            >
              Industries <span className="navbar-arrow">▼</span>
            </span>
            <ul className="navbar-dropdown-menu" style={{display: openDropdown === 'industries' ? 'block' : 'none'}}>
              <li><Link to="/small-businesses" onClick={() => setOpenDropdown(null)}>Small Businesses</Link></li>
              <li><Link to="/plumbing" onClick={() => setOpenDropdown(null)}>Plumbing</Link></li>
              <li><Link to="/hvac" onClick={() => setOpenDropdown(null)}>HVAC</Link></li>
              <li><Link to="/construction" onClick={() => setOpenDropdown(null)}>Construction</Link></li>
              <li><Link to="/accounting" onClick={() => setOpenDropdown(null)}>Accounting</Link></li>
              <li><Link to="/real-estate" onClick={() => setOpenDropdown(null)}>Real Estate</Link></li>
              <li><Link to="/law-firms" onClick={() => setOpenDropdown(null)}>Law Firms</Link></li>
              <li><Link to="/property-management" onClick={() => setOpenDropdown(null)}>Property Management</Link></li>
              <li><Link to="/home-services" onClick={() => setOpenDropdown(null)}>Home Services</Link></li>
              <li><Link to="/electricians" onClick={() => setOpenDropdown(null)}>Electricians</Link></li>
              <li><Link to="/all-industries" onClick={() => setOpenDropdown(null)}>All Industries</Link></li>
            </ul>
          </li>
          <li><Link to="/blogs">Resources</Link></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div className="navbar-right-group">
          <a href="tel:4125690026" className="navbar-phone">+412-569-0026</a>
          <Link to="/booking" className="navbar-btn navbar-cta-btn">Book Now</Link>
        </div>
        {/* Mobile menu overlay */}
        <div className={`navbar-mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
          <ul>
            <li className="navbar-dropdown">
              <span
                className="navbar-dropdown-label"
                onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'solutions'}
              >
                Solutions <span className="navbar-arrow">▼</span>
              </span>
              {openDropdown === 'solutions' && (
                <ul className="navbar-dropdown-menu" style={{display: 'block', position: 'static', boxShadow: 'none', background: 'transparent', padding: 0}}>
                  <li><Link to="/call-answering-service" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>24/7 Call Answering Service</Link></li>
                  <li><Link to="/bilingual-answering-service" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Bilingual Answering Service</Link></li>
                  <li><Link to="/call-handling-service" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Call Handling Service</Link></li>
                  <li><Link to="/after-hours-answering-service" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>After Hours Answering Service</Link></li>
                  <li><Link to="/ai-receptionist" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>AI Receptionist</Link></li>
                </ul>
              )}
            </li>
            <li className="navbar-dropdown">
              <span
                className="navbar-dropdown-label"
                onClick={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'industries'}
              >
                Industries <span className="navbar-arrow">▼</span>
              </span>
              {openDropdown === 'industries' && (
                <ul className="navbar-dropdown-menu" style={{display: 'block', position: 'static', boxShadow: 'none', background: 'transparent', padding: 0}}>
                  <li><Link to="/small-businesses" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Small Businesses</Link></li>
                  <li><Link to="/plumbing" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Plumbing</Link></li>
                  <li><Link to="/hvac" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>HVAC</Link></li>
                  <li><Link to="/construction" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Construction</Link></li>
                  <li><Link to="/accounting" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Accounting</Link></li>
                  <li><Link to="/real-estate" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Real Estate</Link></li>
                  <li><Link to="/law-firms" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Law Firms</Link></li>
                  <li><Link to="/property-management" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Property Management</Link></li>
                  <li><Link to="/home-services" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Home Services</Link></li>
                  <li><Link to="/electricians" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>Electricians</Link></li>
                  <li><Link to="/all-industries" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>All Industries</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Resources</Link></li>
            <li><a href="contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
            <li><a href="tel:4125690026" className="navbar-phone" onClick={() => setMobileMenuOpen(false)}>+412-569-0026</a></li>
            <li><Link to="/booking" className="navbar-btn navbar-cta-btn" onClick={() => setMobileMenuOpen(false)}>Book Now</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
