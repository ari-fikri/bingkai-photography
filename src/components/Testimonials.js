import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Kesan Klien</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '18px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
            alt="Tom"
            className="test-photo"
          />
          <p className="quote">
            “Foto-fotonya benar-benar menakjubkan! Setiap momen terekam begitu alami dan indah. Kami sangat puas dengan hasil akhirnya.”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Sarah & Tom</p>
        </div>

        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
            alt="Emily"
            className="test-photo"
          />
          <p className="quote">
            “Album pernikahan kami luar biasa indah. Detail dan komposisinya sangat rapi — benar-benar karya seni.”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Emily & James</p>
        </div>

        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
            alt="Jessica"
            className="test-photo"
          />
          <p className="quote">
            “Profesional, ramah, dan sangat berbakat. Foto-fotonya menjadi kenangan berharga yang akan kami simpan selamanya.”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Jessica & Michael</p>
        </div>

        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80"
            alt="Olivia"
            className="test-photo"
          />
          <p className="quote">
            “Kami sangat berterima kasih atas kenangan indah yang diabadikan. Timnya bekerja dengan hati dan penuh perhatian.”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Olivia & Daniel</p>
        </div>

        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            alt="Sophia"
            className="test-photo"
          />
          <p className="quote">
            “Hasil foto melebihi ekspektasi kami. Tiap gambar terasa hidup dan penuh emosi. Sangat direkomendasikan!”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Sophia & Liam</p>
        </div>

        <div className="test-card">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
            alt="Ava"
            className="test-photo"
          />
          <p className="quote">
            “Pengalaman yang luar biasa bersama tim Bingkai Photography. Prosesnya menyenangkan, dan hasilnya begitu menawan.”
          </p>
          <p style={{ marginTop: 10, fontWeight: 'bold' }}>– Ava & Noah</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
