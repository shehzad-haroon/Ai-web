import React from 'react';
import './SolutionPage.css';

function HVAC() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">HVAC</h1>
      <div className="solution-desc">SlickTalk supports HVAC companies by answering calls, booking appointments, and providing after-hours support for urgent repairs.</div>
      <div className="solution-section">
        <h2>Why HVAC Companies Trust SlickTalk</h2>
        <ul>
          <li>After-hours and emergency call answering</li>
          <li>Service request intake and scheduling</li>
          <li>Customer support for maintenance plans</li>
        </ul>
      </div>
    </div>
  );
}

export default HVAC;
