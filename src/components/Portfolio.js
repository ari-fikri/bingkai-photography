import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg,#fff,var(--stone))' }}>
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Portfolio</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>A selection of recent weddings and couples sessions.</p>

      <div className="portfolio-grid">
        {/* Column 1 */}
        <div className="port-item">
          <h3 className="port-title">Event Title 1</h3>
          <img src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="p1"/>
          <p className="port-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="port-link">more &gt;&gt;</a>
        </div>
        {/* Column 2 */}
        <div className="port-item">
          <img src="https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b" alt="p2"/>
          <p className="port-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#" className="port-link">more &gt;&gt;</a>
          <h3 className="port-title">Event Title 2</h3>
        </div>
        {/* Column 3 */}
        <div className="port-item">
          <p className="port-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a href="#" className="port-link">more &gt;&gt;</a>
          <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="p3"/>
          <h3 className="port-title">Event Title 3</h3>
        </div>
        {/* Column 4 */}
        <div className="port-item">
          <h3 className="port-title">Event Title 4</h3>
          <p className="port-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#" className="port-link">more &gt;&gt;</a>
          <img src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4" alt="p4"/>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;