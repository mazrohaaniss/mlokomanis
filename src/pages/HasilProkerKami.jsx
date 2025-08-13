import React, { useState } from 'react';
import { Leaf, Heart, Users, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Komponen Modal untuk Popup Gambar dengan Background Blur
function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl max-h-full bg-white/95 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-white/90 backdrop-blur-sm px-6 py-4 border-b border-gray-200/50 flex justify-between items-center">
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200 hover:bg-gray-100/50 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>
        
        {/* Image Container */}
        <div className="p-4 max-h-[80vh] overflow-auto">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        
        {/* Footer Modal */}
        <div className="bg-gray-50/90 backdrop-blur-sm px-6 py-4 border-t border-gray-200/50">
          <p className="text-sm text-gray-600 text-center">Klik di luar gambar untuk menutup</p>
        </div>
      </div>
    </div>
  );
}

// Komponen Konten: Detail Hasil Program Kerja
function HasilProkerContent({ openModal }) {
  const handlePromotion = (platform) => {
    if (platform === 'whatsapp') {
      window.open('https://wa.me/6289646303500?text=Halo, saya tertarik untuk berkolaborasi dalam program kerja di Desa Mlokomanis Wetan.', '_blank');
    }
  };

  return (
    <div className="space-y-16">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">🌱 Hasil Program Kerja Tani</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Program kerja unggulan yang telah kami laksanakan untuk mengembangkan potensi pertanian dan ekonomi desa.</p>
      </div>

      {/* Program Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: Video Company Profile */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-48 flex items-center justify-center">
            <img src="/images/resep.png" alt="Video Profil Desa" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Video Profil Desa</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Dokumentasi visual lengkap tentang potensi, inovasi produk, dan kehidupan masyarakat Desa Mlokomanis Wetan.
            </p>
            <button 
              onClick={() => window.open('https://youtu.be/HLJQLt98dOQ?si=RDysefjhviWgCeg9', '_blank')}
              className="mt-auto w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              <span>Tonton Video</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Masterplan */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-48 flex items-center justify-center">
            <img src="/images/masterplan.jpg" alt="Buku Masterplan" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Buku Masterplan</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Panduan ini menjadi acuan praktis bagi petani untuk meningkatkan produktivitas dan nilai tambah hasil tani melalui teknik budidaya dan pengolahan yang tepat guna.
            </p>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/dokumen/masterplan.pdf';
                link.download = 'Buku-Masterplan-Petani-Milenial.pdf';
                link.click();
              }}
              className="mt-auto w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              <span>Download Buku</span>
            </button>
          </div>
        </div>

        {/* kays */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-48 flex items-center justify-center">
            <img src="/images/pertanian.jpg" alt="Pertanian Sebagai Bidang Ilmu" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Pertanian Sebagai Bidang Ilmu Serta Profesi yang Memiliki Nilai Luhur</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Pertanian adalah profesi bernilai luhur yang menopang ekonomi, melestarikan alam, menjaga budaya, dan membuka peluang inovasi hingga pasar global.
            </p>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/dokumen/kays.pdf';
                link.download = 'Buku-Masterplan-Petani-Milenial.pdf';
                link.click();
              }}
              className="mt-auto w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              <span>Download Buku</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section: Peta & Dokumentasi Visual */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🗺 Dokumentasi Visual & Peta Tematik</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kumpulan peta tematik dan infografis yang menggambarkan potensi pertanian serta perkembangan infrastruktur di Desa Mlokomanis Wetan.
          </p>
        </div>

        {/* Grid Layout untuk Peta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Peta Ayesha */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative cursor-pointer" onClick={() => openModal('/images/pertanian.jpg', 'Peta Tematik Ayesha', 'Peta Tematik Ayesha')}>
                <img
                  src="/images/pertanian.jpg"
                  alt="Peta Tematik Ayesha"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Klik untuk memperbesar</p>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Peta Tematik Ayesha</h3>
                <p className="text-gray-600 text-sm">
                  Peta yang menampilkan distribusi lahan pertanian dan potensi pengembangan sektor agrikultur di wilayah bagian timur desa.
                </p>
              </div>
            </div>
          </div>

          {/* Peta Tesa */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative cursor-pointer" onClick={() => openModal('/images/pertanian.jpg', 'Peta Tematik Tesa', 'Peta Tematik Tesa')}>
                <img
                  src="/images/pertanian.jpg"
                  alt="Peta Tematik Tesa"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Klik untuk memperbesar</p>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Peta Tematik Tesa</h3>
                <p className="text-gray-600 text-sm">
                  Visualisasi infrastruktur dan jalur distribusi hasil pertanian yang mendukung kegiatan ekonomi masyarakat desa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Peta Gabungan - Full Width */}
        <div className="group">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative cursor-pointer" onClick={() => openModal('/images/pertanian.jpg', 'Peta Tematik Tesa dan Ayesha', 'Peta Tematik Komprehensif - Tesa dan Ayesha')}>
              <img
                src="/images/pertanian.jpg"
                alt="Peta Tematik Tesa dan Ayesha"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Peta Tematik Komprehensif</h3>
                <p className="text-sm">Klik untuk melihat detail lengkap</p>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-6 right-6 bg-white/80 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Peta Tematik Tesa dan Ayesha</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Peta komprehensif yang menggabungkan data dari kedua wilayah, menampilkan keseluruhan potensi pertanian, 
                infrastruktur, dan rencana pengembangan strategis Desa Mlokomanis Wetan. Peta ini menjadi acuan utama 
                dalam perencanaan program pemberdayaan masyarakat dan pengembangan ekonomi desa.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Infografis */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">📊 Infografis Desa</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data dan statistik penting yang menggambarkan perkembangan dan potensi Desa Mlokomanis Wetan.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="group max-w-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative cursor-pointer" onClick={() => openModal('/images/pertanian.jpg', 'Infografis Desa', 'Infografis Data dan Statistik Desa')}>
                  <img
                    src="/images/pertanian.jpg"
                    alt="Infografis Desa"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Klik untuk memperbesar</p>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-2">Statistik & Data Desa</h4>
                  <p className="text-gray-600 text-sm">
                    Infografis yang menyajikan data demografis, produksi pertanian, dan indikator pembangunan desa secara visual dan mudah dipahami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen Halaman Utama
function HasilProkerKami() {
  const [activeTab, setActiveTab] = useState('proker'); // Diatur ke 'proker' agar tab ini aktif
  const [modalData, setModalData] = useState({ isOpen: false, imageSrc: '', imageAlt: '', title: '' });

  const openModal = (imageSrc, imageAlt, title) => {
    setModalData({ isOpen: true, imageSrc, imageAlt, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, imageSrc: '', imageAlt: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mt-16 mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Potensi Pertanian Desa Mlokomanis Wetan</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Menjelajahi kekayaan hasil tani, inovasi produk, dan program kerja yang kami kembangkan untuk kemajuan bersama.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: 'pertanian', label: 'Hasil Tani Unggulan', icon: <Leaf className="w-5 h-5" />, path: '/potensi/pertanian' },
            { id: 'gethuk', label: 'Inovasi Produk', icon: <Heart className="w-5 h-5" />, path: '/potensi/InovasiProduk' },
            { id: 'proker', label: 'Hasil Proker Kami', icon: <Users className="w-5 h-5" />, path: '/potensi/HasilProkerKami' }
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
        <HasilProkerContent openModal={openModal} />
        
        {/* Modal Component */}
        <ImageModal 
          isOpen={modalData.isOpen}
          onClose={closeModal}
          imageSrc={modalData.imageSrc}
          imageAlt={modalData.imageAlt}
          title={modalData.title}
        />
        
      </main>

      <Footer />
    </div>
  );
}

export default HasilProkerKami;