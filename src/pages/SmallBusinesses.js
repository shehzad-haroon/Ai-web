import React from 'react';
import './SolutionPage.css';

function SmallBusinesses() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Small Businesses</h1>
      <div className="solution-desc">SlickTalk helps small businesses never miss a call, manage appointments, and provide instant answers to customers 24/7.</div>
      <div className="solution-section">
        <h2>Why Small Businesses Choose SlickTalk</h2>
        <ul>
          <li>24/7 call answering and message taking</li>
          <li>Spam and robocall filtering</li>
          <li>Customizable greetings and FAQs</li>
          <li>Lead capture and qualification</li>
          <li>Appointment scheduling and reminders</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Industry Challenges</h2>
        <p>Small businesses often struggle to answer every call, especially after hours or during busy periods. Missed calls can mean lost revenue and unhappy customers. SlickTalk solves this by providing a reliable, always-on answering solution that works for any business size.</p>
      </div>
      <div className="solution-section">
        <h2>How SlickTalk Integrates</h2>
        <ul>
          <li>Works with your existing phone number</li>
          <li>Easy setup—no technical skills required</li>
          <li>Custom scripts and FAQs tailored to your business</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Success Story</h2>
        <blockquote>“Since using SlickTalk, we’ve seen a 30% increase in customer satisfaction and never miss important calls.”<br /><b>- Alex P., Retail Shop Owner</b></blockquote>
      </div>
    </div>
  );
}

export default SmallBusinesses;
