import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg,#fff,var(--stone))' }}>
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Portfolio</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>A selection of recent weddings and couples sessions.</p>

      <div className="portfolio-grid">
        <div className="port-item"><img src="/images/hero.png" alt="p1"/></div>
        <div className="port-item"><img src="/images/hero.png" alt="p2"/></div>
        <div className="port-item"><img src="/images/hero.png" alt="p3"/></div>
        <div className="port-item"><img src="/images/hero.png" alt="p4"/></div>
        <div className="port-item"><img src="/images/hero.png" alt="p5"/></div>
        <div className="port-item"><img src="/images/hero.png" alt="p6"/></div>
      </div>
    </section>
  );
};

export default Portfolio;