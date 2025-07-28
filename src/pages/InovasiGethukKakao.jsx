import React, { useState } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Clock, 
  ShoppingCart, 
  Heart, 
  ExternalLink,
  Leaf,
  Users
} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

// Komponen Konten: Detail Inovasi Gethuk Kakao
function InovasiGethukContent() {
  const gethukProcess = [
    {
      step: 1,
      title: 'Persiapan Bahan',
      items: [
        '2 kg singkong segar pilihan',
        '200g coklat bubuk kakao lokal',
        '150g gula merah/putih',
        '100ml santan kental',
        'Garam secukupnya',
        'Daun pisang untuk pembungkus'
      ]
    },
    {
      step: 2,
      title: 'Persiapan Alat',
      items: [
        'Kukusan/dandang',
        'Parutan singkong',
        'Wajan besar',
        'Sendok kayu',
        'Cetakan gethuk',
        'Timbangan'
      ]
    },
    {
      step: 3,
      title: 'Proses Pembuatan',
      items: [
        'Kupas dan cuci bersih singkong',
        'Kukus singkong hingga empuk (30-40 menit)',
        'Haluskan singkong yang sudah dikukus',
        'Campurkan kakao bubuk dan gula',
        'Masak adonan dengan api sedang sambil diaduk',
        'Tambahkan santan sedikit demi sedikit',
        'Masak hingga kalis dan tidak lengket',
        'Cetak dalam bentuk yang diinginkan',
        'Bungkus dengan daun pisang',
        'Siap untuk dipasarkan'
      ]
    }
  ];

  const handlePromotion = (platform) => {
    if (platform === 'instagram') {
      window.open('https://instagram.com/kknmlokomaniswetan2025', '_blank');
    } else if (platform === 'whatsapp') {
      window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan Gethuk Kakao Premium dari Desa Mlokomanis Wetan', '_blank');
    }
  };

  return (
    <div className="space-y-12">
      {/* Product Showcase Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Gethuk Singkong Kakao Premium</h3>
            <p className="text-gray-600 mb-6">
              Perpaduan sempurna antara singkong segar pilihan dan kakao berkualitas tinggi dari kebun lokal,
              menghasilkan camilan tradisional dengan cita rasa yang tak terlupakan.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-green-800">Tahan 3-5 Hari</p>
                <p className="text-sm text-gray-600">Tanpa Pengawet</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-green-800">Rp 15.000</p>
                <p className="text-sm text-gray-600">Per Kemasan</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => handlePromotion('whatsapp')} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5" />
                <span>Pesan via WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button onClick={() => handlePromotion('instagram')} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Instagram className="w-5 h-5" />
                <span>Lihat di Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl flex items-center justify-center p-4">
             <img src="/images/gethuk-kakao.png" alt="Gethuk Kakao Premium" className="max-h-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {gethukProcess.map((process, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {process.step}
              </div>
              <h3 className="text-xl font-bold text-green-800 ml-4">{process.title}</h3>
            </div>
            
            <ul className="space-y-3">
              {process.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-green-800 mb-2">Galeri Promosi Gethuk</h3>
          <p className="text-gray-600">Dokumentasi visual dari produk unggulan kami.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571197119282-5c73ba20cbe2?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop',
          ].map((imgSrc, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img src={imgSrc} alt={`Galeri Gethuk ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Komponen Halaman Utama
function InovasiGethukKakao() {
  const [activeTab, setActiveTab] = useState('gethuk'); // Diatur ke 'gethuk' agar tab ini aktif

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
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
            { id: 'gethuk', label: 'Inovasi Gethuk Kakao', icon: <Heart className="w-5 h-5" />, path: '/potensi/InovasiGethukKakao' },
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
        <InovasiGethukContent />
        
      </main>

      <Footer />
    </div>
  );
}

export default InovasiGethukKakao;