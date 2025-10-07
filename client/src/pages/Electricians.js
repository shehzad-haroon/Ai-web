import React from 'react';
import './SolutionPage.css';

function Electricians() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Electricians</h1>
      <div className="solution-desc">SlickTalk helps electricians manage emergency calls, schedule jobs, and provide fast responses to customers.</div>
      <div className="solution-section">
        <h2>Why Electricians Use SlickTalk</h2>
        <ul>
          <li>Emergency call handling</li>
          <li>Job scheduling and reminders</li>
          <li>Instant customer notifications</li>
        </ul>
      </div>
    </div>
  );
}

export default Electricians;
