import React from 'react';
import './SolutionPage.css';

export default function BilingualAnsweringService() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Bilingual Answering Service</h1>
      <div className="solution-desc">SlickTalk’s bilingual agents answer calls in English and Spanish, helping you serve a wider customer base.</div>
      <div className="solution-section">
        <h2>Key Features</h2>
        <ul>
          <li>English and Spanish call answering</li>
          <li>Custom scripts for both languages</li>
          <li>Instant message delivery</li>
          <li>Multi-language support for FAQs</li>
          <li>Seamless language switching</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>How It Works</h2>
        <p>SlickTalk detects the caller’s language and responds accordingly, ensuring every customer feels comfortable and understood. You can provide custom scripts and FAQs in both languages.</p>
      </div>
      <div className="solution-section">
        <h2>Benefits</h2>
        <ul>
          <li>Expand your customer base</li>
          <li>Improve customer satisfaction</li>
          <li>Professional, friendly service in any language</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Testimonial</h2>
        <blockquote>“SlickTalk’s bilingual service helped us connect with more customers and grow our business.”<br /><b>- Maria L., Business Owner</b></blockquote>
      </div>
    </div>
  );
}
