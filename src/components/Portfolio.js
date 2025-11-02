import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg,#fff,var(--stone))' }}>
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Portfolio</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>A selection of recent weddings and couples sessions.</p>

      <div className="portfolio-grid">
        <div className="port-item"><img src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="p1"/></div>
        <div className="port-item"><img src="https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b" alt="p2"/></div>
        <div className="port-item"><img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="p3"/></div>
        <div className="port-item"><img src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4" alt="p4"/></div>
        <div className="port-item"><img src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="p5"/></div>
        <div className="port-item"><img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="p6"/></div>
      </div>
    </section>
  );
};

export default Portfolio;