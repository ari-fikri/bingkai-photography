import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Timeless wedding photography that frames your story</h1>
        <p className="lead">We capture candid moments, soft portraits, and the little details that turn a wedding into a lifetime of memories. Based in Indonesia — available for local and destination weddings.</p>
        <div className="hero-cta">
          <button className="btn btn-primary">Book a consultation</button>
          <a href="#portfolio" className="btn btn-outline">View portfolio</a>
        </div>

        <div className="services" style={{ marginTop: 28 }}>
          <div className="svc">
            <div style={{ fontSize: 28 }}>✨</div>
            <h4>Full-day coverage</h4>
            <p>From getting ready to the last dance.</p>
          </div>
          <div className="svc">
            <div style={{ fontSize: 28 }}>📸</div>
            <h4>Fine art portraits</h4>
            <p>Elegant posing and natural light direction.</p>
          </div>
          <div className="svc">
            <div style={{ fontSize: 28 }}>📦</div>
            <h4>Albums &amp; prints</h4>
            <p>Handcrafted albums to keep your memories safe.</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo">
          {/* Use /public/images/hero.png or replace with your image import */}
          <img src="/images/hero.png" alt="hero photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;