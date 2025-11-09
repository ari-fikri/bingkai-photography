import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about">
        <div>
          <h3>Tentang — Bingkai Photography</h3>
          <p style={{ color: 'var(--muted)' }}>
            Bingkai Photography hadir untuk menghadirkan dokumentasi pernikahan yang elegan dan autentik. Kami percaya setiap momen berharga layak diabadikan dengan sentuhan profesional, pencahayaan alami, dan gaya visual yang modern namun tetap hangat.
          </p>

          <ul style={{ color: 'var(--muted)', marginTop: 12 }}>
            <li>Lebih dari 10 tahun pengalaman di fotografi pernikahan</li>
            <li>Desain album dengan estetika fine-art dan storytelling</li>
            <li>Tersedia untuk sesi pernikahan dalam dan luar negeri</li>
          </ul>
        </div>

        <div className="profile">
          <img 
            src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" 
            alt="owner" 
            style={{ 
              width: '100%', 
              borderRadius: 14, 
              boxShadow: '0 12px 30px rgba(0,0,0,0.06)' 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default About;