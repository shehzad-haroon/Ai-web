import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Pricing() {
  return (
    <div className="home">
      <section className="pricing-section">
        <h2 className="pricing-title">Pricing & Plans</h2>
        <div className="pricing-grid">
          {/* Professional */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-prof">PROFESSIONAL</div>
            <div className="pricing-price-row"><span className="pricing-price">$49</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Small business and solo owners who need SlickTalk.ai to answer calls and qualify leads 24/7.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
            </ul>
              <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Scale (Most Popular) */}
          <div className="pricing-card pricing-card-popular">
            <div className="pricing-popular-badge">Most Popular</div>
            <div className="pricing-badge pricing-badge-scale">SCALE</div>
            <div className="pricing-price-row"><span className="pricing-price">$149</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Growing businesses that want SlickTalk.ai to answer, route, and book appointments automatically.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
              <li>Appointment Links</li>
              <li>Call Transfers</li>
              <li>Send texts during call</li>
              <li>Warm Transfers (Coming Soon)</li>
            </ul>
              <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Growth */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-growth">GROWTH</div>
            <div className="pricing-price-row"><span className="pricing-price">$299</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> More complex businesses that require additional agent training and custom workflows.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
              <li>Appointment Links</li>
              <li>Call Transfers</li>
              <li>Send texts during call</li>
              <li>Warm Transfers (Coming Soon)</li>
              <li>Training Files</li>
            </ul>
              <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Custom */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-custom">CUSTOM</div>
            <div className="pricing-price-row"><span className="pricing-price">Custom Price</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Multi-location or enterprise businesses needing advanced voice automation and integrations.</div>
            <ul className="pricing-features">
              <li>Multiple locations</li>
              <li>Multi-unit franchises</li>
              <li>Fully custom prompt</li>
              <li>Advanced agent training</li>
              <li>Dedicated account rep</li>
            </ul>
              <Link to="/contact" className="pricing-btn pricing-btn-custom">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
