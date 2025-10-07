import React from 'react';
import './SolutionPage.css';

export default function CallAnsweringService() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">24/7 Call Answering Service</h1>
      <div className="solution-desc">SlickTalk.ai ensures you never miss a call, day or night. Our AI-powered voice agents answer, qualify, and route every call for your business—24/7.</div>
      <div className="solution-section">
        <h2>Key Features</h2>
        <ul>
          <li>24/7 live call answering by AI voice agents</li>
          <li>Custom greetings, prompts, and scripts</li>
          <li>Instant message delivery and notifications</li>
          <li>Spam and robocall filtering</li>
          <li>Appointment scheduling and reminders</li>
          <li>Multi-language support</li>
          <li>Call routing and escalation</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>How It Works</h2>
        <p>When a customer calls your business, SlickTalk.ai answers with a natural, branded greeting, collects important information, and delivers messages to you instantly. You can customize scripts, FAQs, and escalation rules to fit your workflow.</p>
      </div>
      <div className="solution-section">
        <h2>Benefits</h2>
        <ul>
          <li>Never miss a sales opportunity or urgent call</li>
          <li>Reduce interruptions and focus on your work</li>
          <li>Improve customer satisfaction with fast, professional responses</li>
          <li>Save money compared to traditional answering services</li>
        </ul>
      </div>
      <div className="solution-section">
        <h2>Customer Testimonials</h2>
        <blockquote>“SlickTalk.ai has transformed how we handle calls. Our customers love the quick response, and we never lose business after hours.”<br /><b>- Jane D., Small Business Owner</b></blockquote>
      </div>
    </div>
  );
}
