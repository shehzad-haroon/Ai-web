import React from 'react';
import './SolutionPage.css';

function AllIndustries() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">All Industries</h1>
      <div className="solution-desc">SlickTalk is trusted by a wide range of industries to handle calls, book appointments, and provide 24/7 support for their customers.</div>
      <div className="solution-section">
        <h2>Industries We Serve</h2>
        <ul>
          <li>Small Businesses</li>
          <li>Plumbing</li>
          <li>HVAC</li>
          <li>Construction</li>
          <li>Accounting</li>
          <li>Real Estate</li>
          <li>Law Firms</li>
          <li>Property Management</li>
          <li>Home Services</li>
          <li>Electricians</li>
        </ul>
      </div>
    </div>
  );
}

export default AllIndustries;
