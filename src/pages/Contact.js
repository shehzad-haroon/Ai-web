import React from 'react';
import './Home.css';

function Contact() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Contact Us</h1>
      <div className="solution-desc">We'd love to hear from you! Reach out to SlickTalk.ai using the information below:</div>
      <div className="solution-section">
        <h2>Contact Information</h2>
        <ul>
          <li><b>Email:</b> support@slicktalk.ai</li>
          <li><b>Phone:</b> (555) 123-4567</li>
          <li><b>Address:</b> 123 Main Street, Suite 400</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Other Inquiries</h2>
        <p>For partnership inquiries, media requests, or custom solutions, please email <b>hello@slicktalk.ai</b> and our team will get back to you within 24 hours.</p>
      </div>
      <div className="solution-section">
        <h2>Business Hours</h2>
        <p>Monday to Friday, 9am – 6pm PKT</p>
      </div>
      <div className="solution-section">
        <h2>Follow Us</h2>
        <ul>
          <li><b>Facebook:</b> facebook.com/slicktalkai</li>
          <li><b>Twitter:</b> twitter.com/slicktalkai</li>
          <li><b>LinkedIn:</b> linkedin.com/company/slicktalkai</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
