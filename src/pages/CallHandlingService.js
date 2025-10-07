import React from 'react';
import './SolutionPage.css';

export default function CallHandlingService() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Call Handling Service</h1>
      <p className="solution-desc">SlickTalk manages your calls, routes them to the right person, and takes messages when you’re unavailable. Stay organized and never lose track of important calls.</p>
      <div className="solution-section">
        <h2>What SlickTalk Can Do</h2>
        <ul>
          <li>Route calls to the right team member</li>
          <li>Take detailed messages</li>
          <li>Screen for spam and robocalls</li>
        </ul>
      </div>
    </div>
  );
}
