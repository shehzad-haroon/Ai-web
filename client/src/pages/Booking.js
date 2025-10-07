import React, { useState } from 'react';
import './Home.css';

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBookings([...bookings, form]);
    setForm({ name: '', email: '', date: '', time: '' });
  };

  return (
    <div className="home">
      <section className="contact-section" style={{maxWidth: 600, margin: '48px auto', background: '#fff', borderRadius: '2rem', boxShadow: '0 2px 16px rgba(108,71,255,0.07)', padding: '48px 32px'}}>
        <h2 className="solution-title" style={{marginBottom: 24}}>Book a Consultation</h2>
        <div className="solution-desc" style={{marginBottom: 32}}>
          Instantly book a 30-minute consultation with SlickTalk.ai. Choose your time below and get started with AI voice automation for your business.
        </div>
        <div style={{margin: '0 auto', maxWidth: 600}}>
          <iframe src="https://calendly.com/slicktalk-info/30min?month=2025-10" width="100%" height="600" frameBorder="0" style={{borderRadius: '1rem', border: 'none'}} title="SlickTalk.ai Booking" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
}

export default Booking;
