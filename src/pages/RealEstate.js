import React from 'react';
import './SolutionPage.css';

function RealEstate() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Real Estate</h1>
      <div className="solution-desc">SlickTalk helps real estate professionals capture leads, schedule showings, and provide instant answers to buyers and sellers.</div>
      <div className="solution-section">
        <h2>Why Real Estate Pros Use SlickTalk</h2>
        <ul>
          <li>Lead capture and qualification</li>
          <li>Appointment scheduling</li>
          <li>24/7 call answering</li>
          <li>Instant message delivery to agents</li>
          <li>Custom scripts for property types</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Industry Challenges</h2>
        <p>Real estate agents are always on the move and can’t answer every call. SlickTalk ensures no lead is missed and every inquiry is handled professionally, even after hours or during showings.</p>
      </div>
      <div className="solution-section">
        <h2>How SlickTalk Helps</h2>
        <ul>
          <li>Integrates with your CRM</li>
          <li>Delivers messages via SMS, email, or app</li>
          <li>Customizable for residential or commercial real estate</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Client Testimonial</h2>
        <blockquote>“SlickTalk has helped us capture more leads and respond faster. Our clients notice the difference!”<br /><b>- Jordan M., Realtor</b></blockquote>
      </div>
    </div>
  );
}

export default RealEstate;
