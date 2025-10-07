import React from 'react';
import './SolutionPage.css';

function Accounting() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Accounting</h1>
      <div className="solution-desc">SlickTalk assists accounting firms by handling client calls, booking consultations, and providing information about services.</div>
      <div className="solution-section">
        <h2>Why Accountants Choose SlickTalk</h2>
        <ul>
          <li>Client intake and appointment booking</li>
          <li>Service information and FAQs</li>
          <li>Secure message taking</li>
        </ul>
      </div>
    </div>
  );
}

export default Accounting;
