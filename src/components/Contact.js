import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // demo behaviour — replace with real submit later
    alert('Thanks — your message has been queued (demo).');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact" className="section">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Contact</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>Get in touch to check availability and pricing.</p>

      <div className="contact-grid" style={{ marginTop: 18 }}>
        <div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 10, background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>B</div>
            <div>
              <div style={{ fontWeight: 700 }}>Bingkai Photography</div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>hello@bingkaiphotography.com • +62 812-3456-7890</div>
            </div>
          </div>

          <div style={{ background: 'var(--glass)', padding: 18, borderRadius: 12 }}>
            <h4 style={{ margin: 0 }}>Wedding Inquiry</h4>
            <p style={{ color: 'var(--muted)', marginTop: 6 }}>Tell us about your wedding date and venue.</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <div style={{ flex: 1 }}>📅 Date</div>
              <div style={{ flex: 1 }}>📍 Location</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            required
            placeholder="Full name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            required
            placeholder="you@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Tell us about your wedding (date, venue, style)"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" style={{ marginTop: 12 }}>Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;