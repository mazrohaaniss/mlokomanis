import React, { useState } from 'react';
import { Leaf, Heart, Users, ExternalLink, MessageCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Komponen Konten: Detail Hasil Program Kerja
function HasilProkerContent() {
  const handlePromotion = (platform) => {
    if (platform === 'whatsapp') {
      window.open('https://wa.me/6289646303500?text=Halo, saya tertarik untuk berkolaborasi dalam program kerja di Desa Mlokomanis Wetan.', '_blank');
    }
  };

  // Dummy image placeholders for maps (replace with actual map image URLs)
  const mapImages = [
    { src: '/path/to/map1.jpg', alt: 'Peta Lahan Pertanian', caption: 'Peta Sebaran Lahan Pertanian' },
    { src: '/path/to/map2.jpg', alt: 'Peta Zona Budidaya', caption: 'Peta Zona Budidaya' },
    { src: '/path/to/map3.jpg', alt: 'Peta Lokasi Pemasaran', caption: 'Peta Lokasi Pemasaran' },
    { src: '/path/to/map4.jpg', alt: 'Peta Infrastruktur Desa', caption: 'Peta Infrastruktur Desa' },
  ];

  // Dummy gallery images (replace with actual gallery image URLs)
  const galleryImages = [
    { src: '/path/to/gallery1.jpg', alt: 'Kegiatan Pertanian 1', caption: 'Kegiatan Panen Raya' },
    { src: '/path/to/gallery2.jpg', alt: 'Kegiatan Pertanian 2', caption: 'Pelatihan Petani' },
    { src: '/path/to/gallery3.jpg', alt: 'Kegiatan Pertanian 3', caption: 'Inovasi Produk Tani' },
    { src: '/path/to/gallery4.jpg', alt: 'Kegiatan Pertanian 4', caption: 'Pameran Hasil Tani' },
    { src: '/path/to/gallery5.jpg', alt: 'Kegiatan Pertanian 5', caption: 'Kunjungan Lapangan' },
    { src: '/path/to/gallery6.jpg', alt: 'Kegiatan Pertanian 6', caption: 'Pemeliharaan Lahan' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">🌱 Hasil Program Kerja Tani</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Program kerja unggulan yang telah kami laksanakan untuk mengembangkan potensi pertanian dan ekonomi desa.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: Video Company Profile */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Video Profil Desa</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Dokumentasi visual lengkap tentang potensi, inovasi produk, dan kehidupan masyarakat Desa Mlokomanis Wetan.
            </p>
            <button 
              onClick={() => window.open('https://youtu.be/HLJQLt98dOQ?si=RDysefjhviWgCeg9', '_blank')} // Ganti dengan link video YouTube Anda
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
          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 15c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 15c1.255 0 2.443-.29 3.5-.804V4.804A7.968 7.968 0 0014.5 4z" /></svg>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Buku Masterplan</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
             Panduan ini menjadi acuan praktis bagi petani untuk meningkatkan produktivitas dan nilai tambah hasil tani melalui teknik budidaya dan pengolahan yang tepat guna..
            </p>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/dokumen/masterplan.pdf'; // Ganti dengan path file PDF Anda
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
          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 15c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 15c1.255 0 2.443-.29 3.5-.804V4.804A7.968 7.968 0 0014.5 4z" /></svg>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Pertanian Sebagai Bidang Ilmu Serta Profesi yang Memiliki Nilai Luhur</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Pertanian adalah profesi bernilai luhur yang menopang ekonomi, melestarikan alam, menjaga budaya, dan membuka peluang inovasi hingga pasar global.
            </p>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/dokumen/kays.pdf'; // Ganti dengan path file PDF Anda
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

        {/* Card: Peta Digital */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-48 bg-gradient-to-br from-green-100 to-teal-200 flex items-center justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-green-800 mb-3">Peta Potensi Pertanian</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Peta digital interaktif yang menunjukkan sebaran lahan, zona budidaya, dan lokasi pemasaran di Desa Mlokomanis Wetan.
            </p>
            <button 
              onClick={() => window.open('https://www.google.com/maps', '_blank')} // Ganti dengan link Google Maps/GIS Anda
              className="mt-auto w-full bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              <span>Lihat Peta</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Section: 4 Map Images */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">🗺️ Peta Tematik Desa</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Koleksi peta tematik yang menggambarkan berbagai aspek potensi pertanian dan infrastruktur di Desa Mlokomanis Wetan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mapImages.map((map, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img
                src={map.src}
                alt={map.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm text-center">{map.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Gallery */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">📸 Galeri Kegiatan</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Dokumentasi kegiatan pertanian, pelatihan, dan inovasi yang dilakukan oleh masyarakat Desa Mlokomanis Wetan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Komponen Halaman Utama
function HasilProkerKami() {
  const [activeTab, setActiveTab] = useState('proker'); // Diatur ke 'proker' agar tab ini aktif

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
        <HasilProkerContent />
        
      </main>

      <Footer />
    </div>
  );
}

export default HasilProkerKami;