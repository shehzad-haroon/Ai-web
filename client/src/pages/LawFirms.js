import React from 'react';
import './SolutionPage.css';

function LawFirms() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Law Firms</h1>
      <div className="solution-desc">SlickTalk helps law firms manage client calls, schedule consultations, and ensure no important message is missed.</div>
      <div className="solution-section">
        <h2>Why Law Firms Trust SlickTalk</h2>
        <ul>
          <li>Confidential call handling</li>
          <li>Appointment scheduling</li>
          <li>After-hours support</li>
          <li>Legal intake and lead capture</li>
          <li>Custom scripts for legal compliance</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Industry Challenges</h2>
        <p>Law firms must maintain confidentiality and professionalism at all times. Missed calls can mean lost clients or missed deadlines. SlickTalk ensures every call is answered promptly and securely, with detailed message delivery and appointment booking.</p>
      </div>
      <div className="solution-section">
        <h2>How SlickTalk Helps</h2>
        <ul>
          <li>Secure message delivery to attorneys</li>
          <li>Integration with legal practice management software</li>
          <li>24/7 availability for urgent matters</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Client Testimonial</h2>
        <blockquote>“SlickTalk’s service is a game-changer for our firm. We never miss a client call, and our intake process is seamless.”<br /><b>- Michael R., Attorney</b></blockquote>
      </div>
    </div>
  );
}

export default LawFirms;
