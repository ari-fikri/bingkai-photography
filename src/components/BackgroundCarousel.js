import React, { useState, useEffect } from 'react';

const images = [
  'https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d',
  'https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff',
  'https://images.unsplash.com/photo-1481653125770-b78c206c59d4',
];

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`background-${index}`}
          className={index === currentImageIndex ? 'visible' : ''}
        />
      ))}
    </div>
  );
};

export default BackgroundCarousel;