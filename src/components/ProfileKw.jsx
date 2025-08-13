import React from 'react';

const TentangKamiSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom teks */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Tentang Kami</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Paguyuban Karawitan Mulyo Laras adalah wadah pelestarian seni tradisional Jawa,
            khususnya gamelan dan karawitan, yang beranggotakan warga dari berbagai kalangan dan generasi.
            Kami rutin mengadakan latihan dan pentas seni sebagai upaya menjaga warisan budaya leluhur
            agar tetap hidup dan dikenal oleh generasi muda.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Dengan semangat kebersamaan, kami ingin menjadikan karawitan sebagai media pendidikan karakter,
            kebudayaan, dan mempererat kebersamaan masyarakat.
          </p>
        </div>

        {/* Kolom logo */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-green-500 transform hover:scale-105 transition-all duration-300">
            <img
              src="/images/logoML.jpg"
              alt="Logo Mulyo Laras"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKamiSection;
