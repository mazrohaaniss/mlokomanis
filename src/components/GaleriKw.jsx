import React, { useEffect } from 'react';

const GaleriKegiatanSection = () => {
  useEffect(() => {
    // Load Elfsight script jika belum ada
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-[#f0fdf4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Judul */}
        <h2 className="text-4xl sm:text-4xl font-bold text-green-800 text-center mb-4">
          Galeri Kegiatan Kami
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Kumpulan momen dan kegiatan terbaik kami yang dibagikan langsung dari media sosial.
        </p>

        {/* Wrapper Embed */}
        <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-6 overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
          <div
            className="elfsight-app-daf1b0f3-2509-4391-a349-d04766defaa2"
            data-elfsight-app-lazy
            style={{
              width: '100%',
              minHeight: '500px',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GaleriKegiatanSection;
