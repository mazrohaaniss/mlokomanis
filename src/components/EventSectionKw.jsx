import React from 'react';

const posterImages = [
  '/images/acara/1.png',
  '/images/acara/2.png',
  '/images/acara/3.png',
  '/images/acara/4.png',
  '/images/acara/5.png'
];

const PosterSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Hubungi Kami Untuk
        </h2>

        {/* Horizontal scroll section */}
        <div className="flex space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar">
          {posterImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[22rem] h-[32rem] rounded-2xl overflow-hidden shadow-xl bg-white transition-transform duration-500 hover:scale-105"
            >
              <img
                src={src}
                alt={`Poster ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
