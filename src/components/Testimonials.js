import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Testimonials</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>What couples say about working with Bingkai Photography.</p>

      <div className="testimonials" style={{ marginTop: 18 }}>
        <div className="test-card">
          <div style={{ fontWeight: 600 }}>Alya &amp; Rizal</div>
          <p className="quote">"Bingkai captured every moment beautifully — we cried seeing our photos."</p>
        </div>
        <div className="test-card">
          <div style={{ fontWeight: 600 }}>Sinta &amp; Dedi</div>
          <p className="quote">"Professional, kind, and the album is stunning. Highly recommended."</p>
        </div>
        <div style={{ width: 120, textAlign: 'center', color: 'var(--muted)' }}>More reviews on our Instagram</div>
      </div>
    </section>
  );
};

export default Testimonials;