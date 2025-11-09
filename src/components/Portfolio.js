import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg,#fff,var(--stone))' }}>
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, margin: 0 }}>Portofolio</h2>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>
        Kumpulan kisah pernikahan dan sesi pasangan terbaru — setiap momen kami abadikan dengan kehangatan dan kejujuran visual.
      </p>

      <div className="portfolio-grid">
        {/* Kolom 1 */}
        <div className="port-item">
          <div className="scroll-content">
            <h3 className="port-title">Raka & Dinda — Bali</h3>
            <img src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d" alt="p1" className="port-img"/>
            <div className="port-description">
              <p>Pernikahan di tepi pantai yang dipenuhi cahaya senja dan tawa keluarga. Sentuhan alami dan warna hangat menjadi inti dokumentasi hari bahagia mereka.</p>
              <p>Matahari terbenam di Bali memberikan latar belakang yang magis, menciptakan siluet romantis dan palet warna keemasan yang memperkaya setiap foto ... <a href="#" className="port-link">detail &gt;&gt;</a> </p>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="port-item">
          <div className="scroll-content">
            <h3 className="port-title">Ari & Livia — Bandung</h3>
            <img src="https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b" alt="p2" className="port-img"/>
            <div className="port-description">
              <p>Sesi prewedding intim di tengah kebun teh Bandung — suasana tenang, gerimis ringan, dan emosi yang tulus terpancar alami.</p>
              <p>Kami memilih lokasi yang jauh dari keramaian untuk menciptakan suasana yang santai dan personal. Gerimis yang turun tiba-tiba justru menambahkan sentuhan puitis pada setiap frame, dengan butiran air yang berkilauan di dedaunan teh dan rambut pasangan.</p>
              <p>Ari dan Livia sangat menikmati prosesnya, berjalan-jalan santai sambil berbagi cerita dan tawa. Kami membiarkan interaksi alami mereka menjadi fokus utama, menghasilkan potret-potret yang jujur, hangat, dan penuh perasaan. Hasilnya adalah seri foto yang tidak hanya indah secara visual, tetapi juga kaya ... <a href="#" className="port-link">detail &gt;&gt;</a></p>
            </div>            
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="port-item">
          <div className="scroll-content">
            <h3 className="port-title">Rafi & Elma — Jakarta</h3>
            <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="p3" className="port-img"/>
            <div className="port-description">
              <p>Di antara nuansa klasik gedung tua Jakarta, kami menangkap ekspresi sederhana yang bercerita banyak tentang cinta tanpa kata.</p>
              <p>Arsitektur kolonial dengan pilar-pilar megah dan jendela-jendela besar menjadi saksi bisu dari kisah cinta Rafi dan Elma. Kami memanfaatkan cahaya alami yang masuk melalui jendela untuk menciptakan efek dramatis dan bayangan yang lembut, menonjolkan keanggunan pasangan ini.</p>
              <p>Setiap sudut gedung bersejarah ini kami jelajahi untuk menemukan spot-spot unik yang dapat menceritakan kisah mereka dengan cara yang berbeda. Sesi foto ini adalah perpaduan antara keindahan arsitektur masa lalu dan keintiman cinta ...<a href="#" className="port-link">detail &gt;&gt;</a></p>
            </div>
          </div>
        </div>

        {/* Kolom 4 */}
        <div className="port-item">
          <div className="scroll-content">
            <h3 className="port-title">Farhan & Inez — Yogyakarta</h3>
            <img src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4" alt="p4" className="port-img"/>
            <div className="port-description">
              <p>Tradisi, warna, dan emosi berpadu dalam pernikahan adat Jawa yang elegan. Setiap detail kami abadikan dengan rasa hormat dan keindahan artistik.</p>
              <p>Prosesi pernikahan yang kaya akan simbol dan makna kami dokumentasikan dengan pendekatan jurnalistik, menangkap setiap ritual penting dari siraman hingga panggih. Warna-warni pakaian adat, dekorasi yang megah, dan ekspresi bahagia dari keluarga besar menjadi elemen visual yang kuat.</p>
              <p>Kami bekerja dengan senyap untuk tidak mengganggu kekhidmatan upacara, namun tetap berhasil ...<a href="#" className="port-link">detail &gt;&gt;</a></p>
            </div>
          </div>
        </div>
        {/* Kolom 5 */}
        <div className="port-item">
          <div className="scroll-content">
            <h3 className="port-title">Bima & Sarah — Lombok</h3>
            <img src="https://images.unsplash.com/photo-1730138624683-636624d71a85" alt="p5" className="port-img"/>
            <div className="port-description">
              <p>Pernikahan tropis yang santai di Gili Trawangan, di mana pasir putih dan air laut biru menjadi saksi cinta mereka. Suasana yang ceria dan penuh tawa kami abadikan dengan gaya dokumenter yang ringan.</p>
              <p>Kami mengikuti Bima dan Sarah sepanjang hari, dari persiapan di vila tepi pantai hingga pesta malam yang meriah. Momen-momen spontan seperti saat mereka berlarian di pantai atau menari di bawah bintang-bintang menjadi fokus utama kami, menghasilkan foto-foto yang <a href="#" className="port-link">detail &gt;&gt;</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;