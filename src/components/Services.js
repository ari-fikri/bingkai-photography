import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Layanan</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>
        Paket dokumentasi yang dirancang bagi pasangan yang menginginkan hasil foto abadi — alami, elegan, dan penuh makna.
      </p>

      <div className="services-grid" style={{ marginTop: 20 }}>
        <div className="service-item">
          <img className="service-img" src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="service"/>
        </div>
        <div className="service-item">
          <img className="service-img" src="https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b" alt="service"/>
        </div>
        <div className="service-item">
          <img className="service-img" src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="service"/>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 18, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, background: 'var(--accent)', padding: 18, borderRadius: 12 }}>
          <h4 style={{ margin: 0 }}>Paket Signature Wedding</h4>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>
            Liputan penuh selama 8 jam oleh dua fotografer profesional. Termasuk galeri daring beresolusi tinggi dan panduan pra-acara untuk memastikan setiap detail terekam sempurna.
          </p>
        </div>

        <div style={{ flex: 1, background: 'var(--accent)', padding: 18, borderRadius: 12 }}>
          <h4 style={{ margin: 0 }}>Paket Intimate Elopement</h4>
          <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>
            Dokumentasi privat selama 2–3 jam, ideal untuk pernikahan kecil atau destinasi romantis. Fokus pada keintiman, emosi, dan keindahan momen alami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;