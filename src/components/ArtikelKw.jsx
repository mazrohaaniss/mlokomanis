import React from 'react';
import { ChevronRight } from 'lucide-react';

const ArtikelKarawitanSection = () => {
  return (
    <section className="py-20 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-200">
          Tahu Lebih Lanjut Tentang Karawitan
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-800 leading-relaxed mb-4">
            Karawitan adalah seni memainkan musik gamelan yang sarat akan nilai-nilai luhur
            dan filosofi mendalam. Lebih dari sekadar hiburan, karawitan mengajarkan keselarasan,
            kehalusan budi, gotong royong, dan spiritualitas yang menjadi bagian dari budaya
            masyarakat Jawa. Seiring perkembangan zaman, karawitan beradaptasi dengan industri
            kreatif, tampil di panggung internasional, dan bahkan diakui UNESCO sebagai Warisan
            Budaya Takbenda Dunia pada tahun 2021.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Sejarah karawitan mencakup perjalanan panjang dari masa kerajaan hingga modern,
            berkembang di berbagai daerah dengan ciri khas masing-masing, seperti gaya Surakarta,
            Yogyakarta, Bali, dan Sunda. Setiap gaya memiliki keunikan, namun semuanya berpijak
            pada prinsip harmoni dan kebersamaan.
          </p>

          <a
            href="/artikel/karawitan"
            className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            <span>Baca Selengkapnya</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArtikelKarawitanSection;
