import React from 'react';
import './SolutionPage.css';

export default function AIReceptionist() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">AI Receptionist</h1>
      <div className="solution-desc">SlickTalk’s AI Receptionist greets callers, answers FAQs, and routes calls to the right person or department, all with a human touch.</div>
      <div className="solution-section">
        <h2>What SlickTalk’s AI Receptionist Can Do</h2>
        <ul>
          <li>Answer and route calls automatically</li>
          <li>Provide instant answers to common questions</li>
          <li>Take messages and deliver them instantly</li>
          <li>Schedule appointments and callbacks</li>
          <li>Screen and filter spam calls</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>How It Works</h2>
        <p>SlickTalk’s AI Receptionist uses advanced natural language processing to understand caller intent, answer questions, and connect them to the right person. You can customize greetings, FAQs, and call flows to match your business needs.</p>
      </div>
      <div className="solution-section">
        <h2>Why Choose SlickTalk?</h2>
        <ul>
          <li>Reduce wait times and missed calls</li>
          <li>Professional, friendly experience for every caller</li>
          <li>Seamless integration with your existing systems</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Testimonial</h2>
        <blockquote>“SlickTalk’s AI Receptionist is like having a real team member. Our clients are impressed, and we save hours every week.”<br /><b>- Priya S., Law Firm Manager</b></blockquote>
      </div>
    </div>
  );
}
