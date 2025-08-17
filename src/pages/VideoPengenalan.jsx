import React, { useState } from 'react';
import { Leaf, Heart, Users, ExternalLink, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Komponen Konten: Detail Hasil Program Kerja
function HasilProkerContent() {
  const handlePromotion = (platform) => {
    if (platform === 'whatsapp') {
      window.open(
        'https://wa.me/6289646303500?text=Halo, saya tertarik untuk berkolaborasi dalam program kerja di Desa Mlokomanis Wetan.',
        '_blank'
      );
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Video Pengenalan Beberapa Pabrik </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Program kerja unggulan yang telah kami laksanakan untuk mengembangkan potensi pabrik tahu dan ekonomi desa.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Konten Video */}
        <div className="p-6 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Video Pengenalan Pabrik </h3>
          <p className="text-gray-600 mb-6">  
            Dokumentasi visual lengkap tentang potensi, inovasi produk, dan kehidupan masyarakat Desa Mlokomanis Wetan.
          </p>
          <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/sdc3EKCYUaQ?si=T44ejYqazKOTxQjl"
            title="Video Profil Desa"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


// Komponen Halaman Utama
function  VideoPengenalan() {
  const [activeTab, setActiveTab] = useState('VideoPengenalan'); // Diatur ke 'proker' agar tab ini aktif

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mt-16 mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Video Potensi Pabrik Desa Mlokomanis Wetan</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pengembangan potensi pabrik tahu sekaligus mendorong pertumbuhan ekonomi desa, sehingga mampu meningkatkan daya saing produk lokal dan kesejahteraan masyarakat.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: 'PabrikTahu', label: 'Pabrik Tahu', icon: <Leaf className="w-5 h-5" />, path: '/potensi/pabrik-tahu' },
            { id: 'NuggetTahu', label: 'Inovasi Produk Nugget Tahu', icon: <Heart className="w-5 h-5" />, path: '/potensi/NuggetTahu' },
            { id: 'VideoPengenalan', label: ' Video Pengenalan', icon: <Users className="w-5 h-5" />, path: '/potensi/VideoPengenalan' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </Link>
            );
          })}
        </div>
        
        {/* Konten akan ditampilkan di sini */}
        <HasilProkerContent />
        
      </main>

      <Footer />
    </div>
  );
}

export default  VideoPengenalan;