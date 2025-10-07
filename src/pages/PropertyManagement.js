import React from 'react';
import './SolutionPage.css';

function PropertyManagement() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Property Management</h1>
      <div className="solution-desc">SlickTalk helps property managers handle tenant requests, schedule maintenance, and provide 24/7 support.</div>
      <div className="solution-section">
        <h2>Why Property Managers Use SlickTalk</h2>
        <ul>
          <li>Tenant request intake</li>
          <li>Maintenance scheduling</li>
          <li>24/7 emergency support</li>
        </ul>
      </div>
    </div>
  );
}

export default PropertyManagement;
