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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Video Company Profile */}
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img src="/images/pasha.jpg" alt="Video Profil Desa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 left-3 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              Video
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Video Profil Desa</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Dokumentasi visual lengkap tentang potensi, inovasi produk, dan kehidupan masyarakat Desa Mlokomanis Wetan.
            </p>
            <button 
              onClick={() => window.open('https://youtu.be/HLJQLt98dOQ?si=RDysefjhviWgCeg9', '_blank')}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              Tonton Video
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Masterplan */}
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img src="/images/masterplan.jpg" alt="Buku Masterplan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 left-3 bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              Dokumen
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Buku Masterplan</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Panduan ini menjadi acuan praktis bagi petani untuk meningkatkan produktivitas dan nilai tambah hasil tani melalui teknik budidaya dan pengolahan yang tepat guna.
            </p>
            <button 
              onClick={() => window.open('/dokumen/masterplan.pdf', '_blank')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              Lihat Dokumen
            </button>
          </div>
        </div>

        {/* Kays */}
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img src="/images/pertanian.jpg" alt="Pertanian Sebagai Bidang Ilmu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 left-3 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              Publikasi
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Pertanian Sebagai Bidang Ilmu Serta Profesi yang Memiliki Nilai Luhur</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Pertanian adalah profesi bernilai luhur yang menopang ekonomi, melestarikan alam, menjaga budaya, dan membuka peluang inovasi hingga pasar global.
            </p>
            <button 
              onClick={() => window.open('/dokumen/kays.pdf', '_blank')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              Lihat Dokumen
            </button>
          </div>
        </div>

        {/* Imam */}
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img src="/images/imam.png" alt="Folklor Pertanian" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 left-3 bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              E-Book
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Folklor Pertanian Desa Mlokomanis Wetan</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Tentang cerita, kepercayaan, dan tradisi khususnya di pertanian yang diwariskan secara turun temurun lewat lisan
            </p>
            <button 
              onClick={() => window.open('/dokumen/imam.pdf', '_blank')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd" />
              </svg>
              Lihat Dokumen
            </button>
          </div>
        </div>
      </div>

      
            {/* Section: Peta & Dokumentasi Visual */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="t7uyext-3xl font-bold text-green-800 mb-4">🗺 Dokumentasi Visual & Peta Tematik</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kumpulan peta tematik dan infografis yang menggambarkan potensi pertanian serta perkembangan infrastruktur di Desa Mlokomanis Wetan.
          </p>
        </div>

        {/* Grid Layout untuk Peta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Peta Ayesha */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
            <div className="relative cursor-pointer overflow-hidden rounded-t-xl" onClick={() => openModal('/images/eca2.png', 'Pemetaan Data UMKM', 'Pemetaan Data UMKM')}>
              <img
                src="/images/eca2.png"
                alt="Pemetaan Data UMKM"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Klik untuk memperbesar</p>
              </div>
              <div className="absolute top-3 left-3 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Peta
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Pemetaan Data UMKM</h3>
              <p className="text-gray-600 text-sm">
                Pemetaan petani singkong dan kakao digunakan sebagai basis data untuk mendukung pembentukan UMKM brownies yang dikelola oleh ibu-ibu PKK
              </p>
            </div>
          </div>

          {/* Peta Tesa */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
            <div className="relative cursor-pointer overflow-hidden rounded-t-xl" onClick={() => openModal('/images/tesi2.jpg', 'Peta Persebaran UMKM Desa Mlokomanis Wetan', 'Peta Persebaran UMKM Desa Mlokomanis Wetan')}>
              <img
                src="/images/tesi2.jpg"
                alt="Peta Persebaran UMKM Desa Mlokomanis Wetan"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Klik untuk memperbesar</p>
              </div>
              <div className="absolute top-3 left-3 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Peta
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Peta Persebaran UMKM Desa Mlokomanis Wetan</h3>
              <p className="text-gray-600 text-sm">
                Peta Persebaran UMKM Desa Mlokomanis Wetan menampilkan lokasi berbagai usaha untuk mengenalkan potensi ekonomi desa dan mendukung pengembangan UMKM.
              </p>
            </div>
          </div>

          {/* Peta Gabungan */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
            <div className="relative cursor-pointer overflow-hidden rounded-t-xl" onClick={() => openModal('/images/ayeca1.jpg', 'Peta Tematik Tesa dan Ayesha', 'Peta Tematik Tesa dan Ayesha')}>
              <img
                src="/images/ayeca1.jpg"
                alt="Peta Tematik Tesa dan Ayesha"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Klik untuk memperbesar</p>
              </div>
              <div className="absolute top-3 left-3 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Peta
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Peta Tematik Tesa dan Ayesha</h3>
              <p className="text-gray-600 text-sm">
                Peta persebaran komoditas petani dan potensi desa Mlokomanis Wetan, memetakan persebaran petani dan komoditas dalam hal pertanian untuk mengetahui potensi yang ada di desa, seperti hasil pertanian yang melimpah terutama di bagian jagung dan singkong
              </p>
            </div>
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
            <div className="group max-w-2xl bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
              <div className="relative cursor-pointer overflow-hidden rounded-t-xl">
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
                <div className="absolute top-3 left-3 bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Infografis
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Statistik & Data Desa</h4>
                <p className="text-gray-600 text-sm">
                  Infografis yang menyajikan data demografis, produksi pertanian, dan indikator pembangunan desa secara visual dan mudah dipahami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

// Komponen Halaman Utama
function HasilProkerKami() {
  const [activeTab, setActiveTab] = useState('proker');
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