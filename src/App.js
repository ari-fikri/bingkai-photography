import React, { useEffect } from 'react';
import './App.css';
import About from './components/About';
import BackgroundCarousel from './components/BackgroundCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    document.title = 'Bingkai Photography — Wedding Photography';
    // inject Google Fonts (id-guarded so it won't be appended multiple times)
    if (!document.getElementById('bingkai-google-fonts')) {
      const link = document.createElement('link');
      link.id = 'bingkai-google-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <BackgroundCarousel />
      </div>
      <div className="parallax__layer parallax__layer--base">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;