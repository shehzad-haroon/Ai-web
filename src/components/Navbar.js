import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
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
          <li><Link to="/pricing">Pricing</Link></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div className="navbar-right-group">
          <a href="tel:4125690026" className="navbar-phone">+412-569-0026</a>
          <Link to="/booking" className="navbar-btn navbar-cta-btn">Book Now</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
