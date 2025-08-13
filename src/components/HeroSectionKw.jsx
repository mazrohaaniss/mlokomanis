import React from 'react';
import { PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative text-white font-sans min-h-[60vh] sm:min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/images/dokum/latianls.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      {/* Overlay gradasi lembut hijau ke hitam */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-black/50"></div>

      {/* Konten Teks */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
          Mulyo Laras Karawitan&apos;s Group
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md text-green-50 leading-relaxed">
          Menghidupkan kembali irama gamelan dan semangat kebudayaan di Desa Mlokomanis Wetan,
          bersama para maestro dan generasi muda pelestari budaya.
        </p>

        <a
          href="https://wa.me/6285740824185"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <PhoneCall size={20} />
          Hubungi Kami
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
