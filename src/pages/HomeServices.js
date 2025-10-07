import React from 'react';
import './SolutionPage.css';

function HomeServices() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Home Services</h1>
      <div className="solution-desc">SlickTalk supports home service providers by answering calls, booking jobs, and providing instant customer support.</div>
      <div className="solution-section">
        <h2>Why Home Service Providers Use SlickTalk</h2>
        <ul>
          <li>Job booking and scheduling</li>
          <li>Customer support 24/7</li>
          <li>Spam call filtering</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeServices;
