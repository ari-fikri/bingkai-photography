import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Fotografi Pernikahan Abadi yang Mengabadikan Cerita Anda</h1>
        <p className="lead">
          Kami menangkap momen tulus, potret lembut, dan detail kecil yang menjadikan pernikahan Anda kisah yang abadi. 
          Berbasis di Indonesia — siap untuk liputan pernikahan lokal maupun destinasi.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary">Jadwalkan Konsultasi</button>
          <a href="#portfolio" className="btn btn-outline">Lihat Portofolio</a>
        </div>

        <div className="services" style={{ marginTop: 28 }}>
          <div className="svc">
            <div style={{ fontSize: 28 }}>✨</div>
            <h4>Full-day coverage</h4>
            <p>Dari persiapan hingga tarian terakhir, setiap momen berharga terekam indah.</p>
          </div>
          <div className="svc">
            <div style={{ fontSize: 28 }}>📸</div>
            <h4>Fine art portraits</h4>
            <p>Pose elegan dengan pencahayaan alami yang menghadirkan keanggunan dan ketulusan.</p>
          </div>
          <div className="svc">
            <div style={{ fontSize: 28 }}>📦</div>
            <h4>Albums &amp; prints</h4>
            <p>Album buatan tangan berkualitas tinggi untuk menjaga kenangan Anda tetap abadi.</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo">
          <img 
            src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" 
            alt="foto pernikahan" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;