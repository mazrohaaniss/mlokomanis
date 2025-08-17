import React from 'react';

const posterImages = [
  '/images/acara/1.png',
  '/images/acara/3.png',
  '/images/acara/4.png',
  '/images/acara/5.png'
];

const PosterSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#f0fdf4' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-green-800 mb-8 sm:mb-10 lg:mb-12 text-center max-w-4xl mx-auto">
          Hubungi Kami Untuk
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {posterImages.map((src, index) => (
            <div
              key={index}
              className="group w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              {/* Gunakan aspect ratio biar proporsional */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
