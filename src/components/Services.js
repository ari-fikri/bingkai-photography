import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Services</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>Tailored packages for couples who want timeless, natural photos.</p>

      <div className="portfolio-grid" style={{ marginTop: 20 }}>
        <div className="port-item"><img src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="service"/></div>
        <div className="port-item"><img src="https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b" alt="service"/></div>
        <div className="port-item"><img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="service"/></div>
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 18 }}>
        <div style={{ flex: 1, background: 'var(--accent)', padding: 18, borderRadius: 12 }}>
          <h4 style={{ margin: 0 }}>Signature Wedding</h4>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>8 hours coverage, two photographers, online gallery.</p>
        </div>
        <div style={{ flex: 1, background: 'var(--accent)', padding: 18, borderRadius: 12 }}>
          <h4 style={{ margin: 0 }}>Intimate Elopement</h4>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>2–3 hours, romantic portraits, travel friendly.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;