import React from 'react';
import './SolutionPage.css';

export default function AfterHoursAnsweringService() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">After-Hours Answering Service</h1>
      <div className="solution-desc">SlickTalk answers your calls after business hours, so you never miss an important message or opportunity.</div>
      <div className="solution-section">
        <h2>Key Benefits</h2>
        <ul>
          <li>Capture leads and messages 24/7</li>
          <li>Custom after-hours scripts</li>
          <li>Instant notifications</li>
          <li>Emergency call escalation</li>
          <li>Detailed call logs and reporting</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>How It Works</h2>
        <p>SlickTalk takes over when your office closes, answering calls with a professional greeting, collecting messages, and escalating urgent issues to your team. You can set custom rules for different times and days.</p>
      </div>
      <div className="solution-section">
        <h2>Why Choose SlickTalk?</h2>
        <ul>
          <li>Never lose a customer after hours</li>
          <li>Peace of mind for business owners</li>
          <li>Flexible, easy-to-update scripts</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Testimonial</h2>
        <blockquote>“SlickTalk’s after-hours service means we’re always available for our clients, even when we’re not in the office.”<br /><b>- Samira T., Property Manager</b></blockquote>
      </div>
    </div>
  );
}
