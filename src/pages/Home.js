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
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    {
      q: "What is SlickTalk.ai and how does it work?",
      a: "SlickTalk.ai is an AI voice-automation agency that answers calls, routes requests, books appointments, and follows up—24/7—for any business that relies on the phone. Our conversational agents sound natural, handle FAQs and intake, capture leads, schedule and confirm bookings, and trigger workflows in your existing tools."
    },
    {
      q: "Can I try SlickTalk.ai for free?",
      a: "Yes! You can try SlickTalk.ai free for 7 days. No credit card required."
    },
    {
      q: "Is SlickTalk.ai easy to set up?",
      a: "Absolutely. Setup takes just a few minutes and no technical skills are needed."
    },
    {
      q: "Does SlickTalk.ai support multiple languages?",
      a: "Yes, SlickTalk.ai supports both English and Spanish out of the box."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section - Inspired by Screenshot */}
      <section className="hero-section" style={{
        background: 'linear-gradient(120deg, #f7f3ff 0%, #e9e3ff 100%)',
        minHeight: '540px',
        padding: '64px 0 56px 0',
        borderRadius: '2.5rem',
        boxShadow: '0 4px 32px rgba(124,58,237,0.10)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="hero-content" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '56px',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Left Side: Text */}
          <div className="hero-left" style={{ flex: 1.2, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '32px' }}>
            <div className="hero-badge-row" style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="hero-badge" style={{ background: '#f3eaff', color: '#7c3aed', fontWeight: 700, borderRadius: '1rem', padding: '7px 22px', fontSize: '1.08rem', boxShadow: '0 2px 12px #fff2' }}>NEW</span>
              <span className="hero-badge-text" style={{ color: '#7c3aed', fontWeight: 500, fontSize: '1.08rem', background: '#ede7ff', borderRadius: '1rem', padding: '7px 18px' }}>Unlimited minutes on all plans</span>
            </div>
            <h1 className="hero-main-title" style={{
              fontSize: '2.4rem',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: 20,
              letterSpacing: '-2px',
              color: '#2d174d',
              textShadow: '0 2px 24px #b47aff22',
              fontFamily: 'Inter, Arial, sans-serif',
            }}>
              AI answering service for your<br />business calls
            </h1>
            <p className="hero-main-desc" style={{
              fontSize: '1.08rem',
              color: '#6c4bb6',
              marginBottom: 32,
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: '520px',
              textShadow: '0 2px 12px #b47aff11',
              fontFamily: 'Inter, Arial, sans-serif',
            }}>
              SlickTalk.ai is your AI answering service — trained on your business and ready to field calls, answer questions, set appointments, and send you all the details 24/7.
            </p>
            <Link to="/booking" className="hero-main-btn" style={{
              background: 'linear-gradient(90deg, #7c3aed 0%, #b47aff 100%)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1.08rem',
              padding: '16px 40px',
              borderRadius: '2.5rem',
              boxShadow: '0 4px 32px #b47aff33',
              textDecoration: 'none',
              border: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
              onMouseOver={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.boxShadow = '0 8px 32px #7c3aed44'; }}
              onMouseOut={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 32px #b47aff33'; }}
            >Start Free Trial</Link>
          </div>
          {/* Right Side: Chat Mockup Card */}
          <div className="hero-image" style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '32px' }}>
            <div className="hero-image-card" style={{
              width: '100%',
              maxWidth: '420px',
              height: '350px',
              background: `url('https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg') center/cover no-repeat`,
              borderRadius: '2.2rem',
              boxShadow: '0 8px 32px #7c3aed33',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              position: 'relative',
              padding: '36px',
              gap: '22px',
              height: '100%',
              overflow: 'hidden',
            }}>
              {/* Soft overlay for readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #7c3aed88 0%, #b47aff88 100%)',
                borderRadius: '2.2rem',
                zIndex: 0,
              }}></div>
              {/* Chat bubbles */}
              <div style={{ background: '#fff', color: '#7c3aed', borderRadius: '1rem', padding: '18px 26px', fontWeight: 600, fontSize: '1.12rem', boxShadow: '0 2px 16px #b47aff22', marginBottom: '10px', maxWidth: '80%', position: 'relative', zIndex: 1 }}>
                How can I assist you today?
              </div>
              <div style={{ background: '#fff', color: '#2d174d', borderRadius: '1rem', padding: '18px 26px', fontWeight: 600, fontSize: '1.12rem', boxShadow: '0 2px 16px #7c3aed22', marginBottom: '10px', maxWidth: '90%', display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                <span>Your meeting is scheduled.<br />Would you like anything else?</span>
                <img src="https://i.ibb.co/4V2Qw1k/sample-logo3.png" alt="SlickTalk AI" style={{ width: '34px', height: '34px', borderRadius: '50%', boxShadow: '0 2px 12px #7c3aed22', border: '2px solid #fff' }} />
              </div>
            </div>
          </div>
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
     

  {/* ...existing code... */}
  {/* Customer Carousel Section */}
  <CustomerCarousel />

  {/* Features Section - moved below carousel */}
      <section className="features-section" style={{marginTop: '56px'}}>
        <h2 className="features-title" style={{
          textAlign: 'center',
          fontSize: '2.2rem',
          fontWeight: 800,
          color: '#2d174d',
          marginBottom: '38px',
          letterSpacing: '-1px',
          fontFamily: 'Inter, Arial, sans-serif',
        }}>Why SlickTalk.ai?</h2>
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

      {/* Hear SlickTalk.ai in Action Section */}
      <section className="hear-action-section" style={{marginTop: '32px', marginBottom: '32px'}}>
        <h2 className="hear-action-title" style={{textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, color: '#2d174d', marginBottom: '38px', letterSpacing: '-1px'}}>Hear SlickTalk.ai in Action...</h2>
        <div className="hear-action-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto'}}>
          {/* Card 1 */}
          <div className="hear-action-card" style={{background: '#f7eaff', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 2px 16px #b47aff22', display: 'flex', flexDirection: 'column', minHeight: '260px'}}>
            <img src="https://images.pexels.com/photos/5083215/pexels-photo-5083215.jpeg" alt="Move-out cleaning" style={{width: '100%', height: '120px', objectFit: 'cover'}} />
            <div style={{padding: '18px 18px 0 18px', fontWeight: 500, color: '#2d174d', fontSize: '1.08rem'}}>Requesting a move-out cleaning service.</div>
            <div style={{padding: '18px'}}>
              <audio controls style={{width: '100%'}}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          {/* Card 2 */}
          <div className="hear-action-card" style={{background: '#f7eaff', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 2px 16px #b47aff22', display: 'flex', flexDirection: 'column', minHeight: '260px'}}>
            <img src="https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg" alt="Haircut appointment" style={{width: '100%', height: '120px', objectFit: 'cover'}} />
            <div style={{padding: '18px 18px 0 18px', fontWeight: 500, color: '#2d174d', fontSize: '1.08rem'}}>Scheduling a haircut appointment.</div>
            <div style={{padding: '18px'}}>
              <audio controls style={{width: '100%'}}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          {/* Card 3 */}
          <div className="hear-action-card" style={{background: '#f7eaff', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 2px 16px #b47aff22', display: 'flex', flexDirection: 'column', minHeight: '260px'}}>
            <img src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg" alt="Hot tub cleaning" style={{width: '100%', height: '120px', objectFit: 'cover'}} />
            <div style={{padding: '18px 18px 0 18px', fontWeight: 500, color: '#2d174d', fontSize: '1.08rem'}}>Requesting a hot tub cleaning quote.</div>
            <div style={{padding: '18px'}}>
              <audio controls style={{width: '100%'}}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          {/* Card 4 */}
          <div className="hear-action-card" style={{background: '#f7eaff', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 2px 16px #b47aff22', display: 'flex', flexDirection: 'column', minHeight: '260px'}}>
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" alt="HOA Fees Advice" style={{width: '100%', height: '120px', objectFit: 'cover'}} />
            <div style={{padding: '18px 18px 0 18px', fontWeight: 500, color: '#2d174d', fontSize: '1.08rem'}}>Advice on the best way to pay HOA Fees.</div>
            <div style={{padding: '18px'}}>
              <audio controls style={{width: '100%'}}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>


  {/* Pricing Section */}






  {/* FAQ Section - Accordion */}
      <section className="faq-section-modern">
        <h2 className="faq-title-modern">Frequently Asked Questions</h2>
        <div className="faq-list-modern">
          {faqs.map((item, i) => (
            <div className="faq-item-modern" key={i}>
              <button
                className="faq-question-modern"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
                style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '24px 0', fontSize: '1.18rem', fontWeight: 600, color: '#2d174d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>{item.q}</span>
                <span className="faq-icon-modern" style={{ fontSize: '1.5rem', color: '#b97aff' }}>
                  {openFaq === i ? (
                    <svg width="24" height="24"><path d="M6 15l6-6 6 6" stroke="#2d174d" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  ) : (
                    <svg width="24" height="24"><path d="M6 9l6 6 6-6" stroke="#2d174d" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  )}
                </span>
              </button>
              {openFaq === i && (
                <div className="faq-answer-modern" style={{ marginTop: '12px', color: '#5b4a7a', fontSize: '1rem', fontWeight: 400, paddingBottom: '18px' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
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
