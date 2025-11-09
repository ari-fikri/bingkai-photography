import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Terima kasih — pesan Anda telah kami terima (demo).');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  return (
    <section id="contact" className="section">
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Kontak</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>
        Hubungi kami untuk informasi ketersediaan dan paket harga.
      </p>

      <div className="contact-grid" style={{ marginTop: 18 }}>
        <div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                background: 'var(--blush)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              B
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Bingkai Photography</div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>
                hello@bingkaiphotography.com • +62 812-3456-7890
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--glass)', padding: 18, borderRadius: 12 }}>
            <h4 style={{ margin: 0 }}>Formulir Pernikahan</h4>
            <p style={{ color: 'var(--muted)', marginTop: 6 }}>
              Ceritakan sedikit tentang tanggal dan lokasi pernikahan Anda.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <div style={{ flex: 1 }}>📅 Tanggal</div>
              <div style={{ flex: 1 }}>📍 Lokasi</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nama Lengkap</label>
          <input
            required
            placeholder="Tuliskan nama lengkap Anda"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            required
            placeholder="nama@contoh.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">No. HP</label>
          <input
            required
            placeholder="08123456789"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="message">Pesan</label>
          <textarea
            placeholder="Ceritakan tentang rencana pernikahan Anda (tanggal, lokasi, gaya)"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" style={{ marginTop: 12 }}>
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;