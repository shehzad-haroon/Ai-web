import React from 'react';
import './SolutionPage.css';

function Construction() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Construction</h1>
      <div className="solution-desc">SlickTalk helps construction companies manage calls, schedule jobs, and keep clients informed, even when crews are on site.</div>
      <div className="solution-section">
        <h2>Why Construction Companies Use SlickTalk</h2>
        <ul>
          <li>Job scheduling and reminders</li>
          <li>24/7 call answering</li>
          <li>Instant message delivery</li>
          <li>Lead capture for new projects</li>
          <li>Custom scripts for project types</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Industry Challenges</h2>
        <p>Construction teams are often on-site and can’t answer every call. SlickTalk ensures no opportunity is missed and every client receives timely updates and information.</p>
      </div>
      <div className="solution-section">
        <h2>How SlickTalk Helps</h2>
        <ul>
          <li>Integrates with project management tools</li>
          <li>Delivers messages via SMS, email, or app</li>
          <li>Customizable for residential or commercial construction</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Client Testimonial</h2>
        <blockquote>“SlickTalk keeps our clients informed and our team focused on the job. We never miss a lead!”<br /><b>- David S., Contractor</b></blockquote>
      </div>
    </div>
  );
}

export default Construction;
