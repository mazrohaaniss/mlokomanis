import React from 'react';
import { PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative text-white font-sans flex items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/images/dokum/latianls.png')",
      }}
    >
      {/* Overlay gradasi lembut hijau ke hitam */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-black/50"></div>

      {/* Konten Teks */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
          Mulyo Laras Karawitan&apos;s Group
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md text-green-50 leading-relaxed">
          Menghidupkan kembali irama gamelan dan semangat kebudayaan di Desa Mlokomanis Wetan,
          bersama para maestro dan generasi muda pelestari budaya.
        </p>

        <a
          href="https://wa.me/6282325183661"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 
                     px-4 py-2 sm:px-6 sm:py-3 
                     rounded-full font-bold 
                     text-base sm:text-lg 
                     hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <PhoneCall size={20} />
          Hubungi Kami
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
