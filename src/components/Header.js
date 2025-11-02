import React from 'react';

const Header = () => {
  return (
    <header className="nav">
      <div className="brand">
        <div className="logo">B</div>
        <div>
          <div style={{ fontWeight: 700 }}>Bingkai Photography</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>wedding &amp; couples</div>
        </div>
      </div>
      <nav className="navlinks">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#about">About</a>
        <a href="#contact" className="cta">Contact</a>
      </nav>
    </header>
  );
};

export default Header;