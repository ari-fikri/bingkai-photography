import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Kind Words</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', width: '100%', justifyContent: 'center' }}>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Tom" className="test-photo" />
          <p className="quote">"Absolutely stunning photos! They captured our day perfectly. We couldn't be happier with the results."</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Sarah & Tom</p>
        </div>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Emily" className="test-photo" />
          <p className="quote">"The most beautiful wedding album we have ever seen. The attention to detail is incredible. Thank you!"</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Emily & James</p>
        </div>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Jessica" className="test-photo" />
          <p className="quote">"Professional, friendly, and immensely talented. The photos are a treasure we will cherish forever."</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Jessica & Michael</p>
        </div>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Olivia" className="test-photo" />
          <p className="quote">"We are so grateful for the beautiful memories captured. The team was a joy to work with from start to finish."</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Olivia & Daniel</p>
        </div>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Sophia" className="test-photo" />
          <p className="quote">"The photos exceeded our expectations in every way. We can't stop looking at them. Highly recommended!"</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Sophia & Liam</p>
        </div>
        <div className="test-card">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Ava" className="test-photo" />
          <p className="quote">"An amazing experience with a talented team. They made us feel so comfortable and the results are breathtaking."</p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>- Ava & Noah</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;