import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Customer Carousel Component and data
const testimonials = [
  {
    quote: "My colleagues in the industry call our number and talk to SlickTalk.ai and they can’t believe how good it is. I’ve already recommended two friends to SlickTalk.ai.",
    logo: "https://i.ibb.co/6b8Qw8F/classic-city-logo.png", // Placeholder logo, replace with your own
    name: "Classic City Transportation",
    role: "Owner"
  },
  {
    quote: "SlickTalk.ai has made our business so much more efficient. We never miss a call and our customers love the quick responses!",
    logo: "https://i.ibb.co/3yQw1kV/sample-logo2.png", // Dummy logo
    name: "Sunshine Plumbing Co.",
    role: "Manager"
  },
  {
    quote: "Setting up SlickTalk.ai was a breeze. The AI is smart, polite, and always gets the message right. Highly recommended!",
    logo: "https://i.ibb.co/4V2Qw1k/sample-logo3.png", // Dummy logo
    name: "GreenLeaf Landscaping",
    role: "Owner"
  }
];

function CustomerCarousel() {
  const [index, setIndex] = useState(0);
  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const t = testimonials[index];
  return (
    <section className="customer-carousel-section">
      <h2 className="customer-carousel-title">Here’s what small, local service<br/>business owners like you are saying...</h2>
      <div className="customer-carousel-quote-row">
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous testimonial">&#60;</button>
        <div className="customer-carousel-quote-block">
          <div className="customer-carousel-quote-icon">&#10077;</div>
          <div className="customer-carousel-quote">{`"${t.quote}"`}</div>
          <div className="customer-carousel-customer">
            <img src={t.logo} alt={t.name} className="customer-carousel-logo" />
            <div>
              <div className="customer-carousel-name">{t.name}</div>
              <div className="customer-carousel-role">{t.role}</div>
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next testimonial">&#62;</button>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="hero-badge">NEW</span>
            <span className="hero-badge-text">Unlimited minutes on all plans</span>
          </div>
          <h1 className="hero-main-title">AI Voice Automation for Every Business</h1>
          <p className="hero-main-desc">SlickTalk.ai is an AI voice-automation agency that answers calls, routes requests, books appointments, and follows up—24/7—for any business that relies on the phone. Our conversational agents sound natural, handle FAQs and intake, capture leads, schedule and confirm bookings, and trigger workflows in your existing tools. We design, deploy, and tune voice agents end-to-end (greetings, prompts, hand-offs, analytics) so you never miss a customer and your team gets time back.</p>
          <Link to="/booking" className="hero-main-btn">Book Now</Link>
        </div>
        <div className="hero-image">
          {/* Placeholder for chat mockup image */}
          <div className="hero-image-mockup"></div>
        </div>
      </section>

      {/* Three Bad Options Section */}
      <section className="bad-options-section">
        <h2 className="bad-options-title">Currently, you have three bad<br />options for tackling incoming calls:</h2>
        <div className="bad-options-grid">
          <div className="bad-option">
            <div className="bad-option-icon"><span className="bad-x">&#10005;</span></div>
            <div className="bad-option-title">Answer every call<br />yourself</div>
            <ul className="bad-option-list">
              <li><span className="bad-x-list">&#10005;</span> Constant interruptions during the day</li>
              <li><span className="bad-x-list">&#10005;</span> Wasted time on spam calls</li>
              <li><span className="bad-x-list">&#10005;</span> Always chasing people down</li>
            </ul>
          </div>
          <div className="bad-option">
            <div className="bad-option-icon"><span className="bad-x">&#10005;</span></div>
            <div className="bad-option-title">Send calls you can’t answer to<br />voicemail</div>
            <ul className="bad-option-list">
              <li><span className="bad-x-list">&#10005;</span> Most people don’t leave a message</li>
              <li><span className="bad-x-list">&#10005;</span> Hard to find time to call back</li>
              <li><span className="bad-x-list">&#10005;</span> Impossible to reach them again</li>
            </ul>
          </div>
          <div className="bad-option">
            <div className="bad-option-icon"><span className="bad-x">&#10005;</span></div>
            <div className="bad-option-title">Pay too much for an outsourced<br />service</div>
            <ul className="bad-option-list">
              <li><span className="bad-x-list">&#10005;</span> Every call costs $2/minute</li>
              <li><span className="bad-x-list">&#10005;</span> Long hold times for callers</li>
              <li><span className="bad-x-list">&#10005;</span> Inconsistent service from untrained receptionists</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SlickTalk never miss a call Section */}
      <section className="never-miss-section">
        <h2 className="never-miss-title">SlickTalk.ai makes sure you<br />never miss a call.</h2>
        <div className="never-miss-grid">
          <div className="never-miss-item">
            <div className="never-miss-icon"><span className="never-miss-check">&#10003;</span></div>
            <div className="never-miss-desc">Trained on your business and reviewed by you, SlickTalk.ai always provides accurate info to callers.</div>
          </div>
          <div className="never-miss-item">
            <div className="never-miss-icon"><span className="never-miss-check">&#10003;</span></div>
            <div className="never-miss-desc">Available 24/7/365 — taking calls and answering questions anytime you can’t.</div>
          </div>
          <div className="never-miss-item">
            <div className="never-miss-icon"><span className="never-miss-check">&#10003;</span></div>
            <div className="never-miss-desc">Only $49/month gets you a custom greeting, spam filtering, FAQs, and instant notifications of every call.</div>
          </div>
        </div>
      </section>


      {/* Features Grid Section */}
      <section className="features-grid-section">
  <h2 className="features-grid-title">SlickTalk.ai adapts to your business,<br />whether service-based or brick and mortar.</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">{/* SVG user check */}
              <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Zm7-2 2 2 3-3" stroke="#B47AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div>
              <div className="feature-card-title">Service existing customers</div>
              <div className="feature-card-desc">SlickTalk.ai answers questions about booking, hours, billing, and more.</div>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{/* SVG phone */}
              <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 17c-.6 0-1.2-.1-1.7-.3a1 1 0 0 0-1 .2l-2.2 2.2a15.1 15.1 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .2-1c-.2-.5-.3-1.1-.3-1.7A1 1 0 0 0 13 7h-4a1 1 0 0 0-1 1c0 8.3 6.7 15 15 15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" stroke="#B47AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div>
              <div className="feature-card-title">Handle incoming leads</div>
              <div className="feature-card-desc">SlickTalk.ai gives prospects the answers they need, books appointments, and keeps you in the loop.</div>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{/* SVG bell */}
              <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 28a4 4 0 0 0 4-4H12a4 4 0 0 0 4 4Zm8-8V14a8 8 0 1 0-16 0v6l-2 2v2h20v-2l-2-2Z" stroke="#B47AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div>
              <div className="feature-card-title">Minimize in-store disruptions</div>
              <div className="feature-card-desc">SlickTalk.ai answers FAQs and transfers calls to employees on the floor only when necessary.</div>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{/* SVG filter */}
              <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h24M8 14h16M12 22h8" stroke="#B47AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div>
              <div className="feature-card-title">Filter out sales calls & spam</div>
              <div className="feature-card-desc">SlickTalk.ai screens and blocks 1-800s, robocalls, and sales reps, only spending time on important calls.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why SlickTalk.ai?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>24/7 AI Voice Agents</h3>
            <p>Never miss a customer. SlickTalk.ai answers instantly, any time—no voicemail, no missed leads.</p>
          </div>
          <div className="feature-item">
            <h3>Seamless Integration</h3>
            <p>Deploy SlickTalk.ai on your phone lines or website in minutes. No code or IT team required.</p>
          </div>
          <div className="feature-item">
            <h3>Custom Workflows & Analytics</h3>
            <p>We design, deploy, and tune voice agents for your business—greetings, prompts, hand-offs, analytics, and more.</p>
          </div>
        </div>
      </section>


  {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="pricing-title">Pricing & Plans</h2>
        <div className="pricing-grid">
          {/* Professional */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-prof">PROFESSIONAL</div>
            <div className="pricing-price-row"><span className="pricing-price">$49</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Small business and solo owners who need SlickTalk.ai to answer calls and qualify leads 24/7.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
            </ul>
            <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Scale (Most Popular) */}
          <div className="pricing-card pricing-card-popular">
            <div className="pricing-popular-badge">Most Popular</div>
            <div className="pricing-badge pricing-badge-scale">SCALE</div>
            <div className="pricing-price-row"><span className="pricing-price">$149</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Growing businesses that want SlickTalk.ai to answer, route, and book appointments automatically.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
              <li>Appointment Links</li>
              <li>Call Transfers</li>
              <li>Send texts during call</li>
              <li>Warm Transfers (Coming Soon)</li>
            </ul>
            <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Growth */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-growth">GROWTH</div>
            <div className="pricing-price-row"><span className="pricing-price">$299</span><span className="pricing-per">/month</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> More complex businesses that require additional agent training and custom workflows.</div>
            <ul className="pricing-features">
              <li>Unlimited minutes</li>
              <li>Message taking with custom questions</li>
              <li>Smart spam detection</li>
              <li>Bilingual agent – English + Spanish</li>
              <li>Appointment Links</li>
              <li>Call Transfers</li>
              <li>Send texts during call</li>
              <li>Warm Transfers (Coming Soon)</li>
              <li>Training Files</li>
            </ul>
            <Link to="/booking" className="pricing-btn">Book Now</Link>
          </div>
          {/* Custom */}
          <div className="pricing-card">
            <div className="pricing-badge pricing-badge-custom">CUSTOM</div>
            <div className="pricing-price-row"><span className="pricing-price">Custom Price</span></div>
            <div className="pricing-desc"><b>Perfect for:</b> Multi-location or enterprise businesses needing advanced voice automation and integrations.</div>
            <ul className="pricing-features">
              <li>Multiple locations</li>
              <li>Multi-unit franchises</li>
              <li>Fully custom prompt</li>
              <li>Advanced agent training</li>
              <li>Dedicated account rep</li>
            </ul>
            <Link to="/contact" className="pricing-btn pricing-btn-custom">Contact Us</Link>
          </div>
        </div>
      </section>





      {/* Customer Carousel Section */}
      <CustomerCarousel />

        

     <section className="faq-section-modern">
  <h2 className="faq-title-modern">Frequently Asked Questions</h2>
  <div className="faq-list-modern">
    <div className="faq-item-modern">
      <div className="faq-question-modern">
        <span>What is SlickTalk.ai and how does it work?</span>
        <span className="faq-icon-modern">+</span>
      </div>
      <div className="faq-answer-modern">
        SlickTalk.ai is an AI voice-automation agency that answers calls, routes requests, books appointments, and follows up—24/7—for any business that relies on the phone. Our conversational agents sound natural, handle FAQs and intake, capture leads, schedule and confirm bookings, and trigger workflows in your existing tools.
      </div>
    </div>
    <div className="faq-item-modern">
      <div className="faq-question-modern">
        <span>Can I try SlickTalk.ai for free?</span>
        <span className="faq-icon-modern">+</span>
      </div>
      <div className="faq-answer-modern">
        Yes! You can try SlickTalk.ai free for 7 days. No credit card required.
      </div>
    </div>
    <div className="faq-item-modern">
      <div className="faq-question-modern">
        <span>Is SlickTalk.ai easy to set up?</span>
        <span className="faq-icon-modern">+</span>
      </div>
      <div className="faq-answer-modern">
        Absolutely. Setup takes just a few minutes and no technical skills are needed.
      </div>
    </div>
    <div className="faq-item-modern">
      <div className="faq-question-modern">
        <span>Does SlickTalk.ai support multiple languages?</span>
        <span className="faq-icon-modern">+</span>
      </div>
      <div className="faq-answer-modern">
        Yes, SlickTalk.ai supports both English and Spanish out of the box.
      </div>
    </div>
  </div>
</section>

      {/* Calendly Booking Section Above Footer - Homepage Styled */}
      <section className="calendly-home-section" style={{ background: '#f7f3ff', padding: '56px 0 64px 0', marginTop: '56px', borderRadius: '2rem', boxShadow: '0 2px 16px rgba(124,58,237,0.08)' }}>
        <div className="calendly-home-content" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#7c3aed', fontSize: '2.4rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '-1px' }}>Book a Demo or Get Started Instantly</h2>
          <p style={{ color: '#5b4a7a', fontSize: '1.18rem', marginBottom: '36px', fontWeight: 500 }}>
            Schedule a call with our team or get started with <span style={{color:'#b47aff', fontWeight:600}}>SlickTalk.ai</span> in minutes.<br />Pick a time that works for you below!
          </p>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(124,58,237,0.10)', background: '#fff', padding: '12px 0' }}>
            <iframe src="https://calendly.com/slicktalk-info/30min?month=2025-10" title="Book a Demo with SlickTalk.ai" width="100%" height="600" frameBorder="0" style={{ minWidth: '320px', border: 'none', borderRadius: '16px' }} allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
