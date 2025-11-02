import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about">
        <div>
          <h3>About — Bingkai Photography</h3>
          <p style={{ color: 'var(--muted)' }}>Founded by a wedding photographer with a fine-art approach. We focus on natural light, candid storytelling, and curated heirloom albums.</p>

          <ul style={{ color: 'var(--muted)', marginTop: 12 }}>
            <li>10+ years wedding photography</li>
            <li>Fine-art album design</li>
            <li>Available for destination weddings</li>
          </ul>
        </div>

        <div className="profile">
          <img src="/images/hero.png" alt="owner" style={{ width: '100%', borderRadius: 14, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }} />
        </div>
      </div>
    </section>
  );
};

export default About;