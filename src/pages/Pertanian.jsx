import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, Instagram, MessageCircle, Clock, ShoppingCart } from 'lucide-react';
import Navbar from '../components/navbar';

function Pertanian() {
  
  const [activeTab, setActiveTab] = useState('potensi');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const hasilTani = [
    {
      name: 'Singkong',
      description: 'Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      benefit: 'Sumber karbohidrat, tahan lama, mudah diolah'
    },
    {
      name: 'Kakao',
      description: 'Kakao berkualitas tinggi yang menjadi ciri khas perkebunan desa',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
      benefit: 'Antioksidan tinggi, nilai ekonomi tinggi'
    },
    {
      name: 'Kacang Tanah',
      description: 'Protein nabati berkualitas yang tumbuh subur di tanah desa',
      image: 'https://images.unsplash.com/photo-1589927986089-35812388d1a4?w=400&h=300&fit=crop',
      benefit: 'Protein tinggi, mudah ditanam, hasil melimpah'
    },
    {
      name: 'Padi',
      description: 'Makanan pokok dengan sistem irigasi tradisional yang berkelanjutan',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      benefit: 'Makanan pokok, sistem tanam berkelanjutan'
    }
  ];

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

  const marketingStrategy = [
    {
      platform: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      strategy: [
        'Foto produk dengan pencahayaan natural',
        'Video proses pembuatan step-by-step',
        'Story highlight untuk testimoni pelanggan',
        'Hashtag #GethukDuwet #KakaLokal #OlahanSingkong',
        'Kolaborasi dengan food blogger lokal'
      ],
      color: 'bg-gradient-to-r from-pink-500 to-purple-600'
    },
    {
      platform: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      strategy: [
        'Grup pelanggan untuk update produk terbaru',
        'Katalog produk dengan WhatsApp Business',
        'Sistem pemesanan dan pembayaran via WA',
        'Broadcast promo dan diskon khusus',
        'Customer service responsif 24/7'
      ],
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar /> 
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Potensi Pertanian Desa Duwet</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mengembangkan potensi hasil tani lokal menjadi produk unggulan yang bernilai ekonomi tinggi
              dengan tetap mempertahankan kearifan lokal dan kelestarian lingkungan.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { id: 'potensi', label: 'Hasil Tani Unggulan', icon: <Leaf className="w-5 h-5" /> },
            { id: 'gethuk', label: 'Inovasi Gethuk Kakao', icon: <Heart className="w-5 h-5" /> },
            { id: 'marketing', label: 'Strategi Pemasaran', icon: <Users className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-green-600 hover:bg-green-50 shadow-md'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'potensi' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Hasil Tani Unggulan Desa Duwet</h2>
              <p className="text-gray-600 text-lg">Kekayaan alam yang melimpah dengan kualitas terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hasilTani.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-green-600 font-semibold">
                      <span className="text-sm">Lihat Detail</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                    
                    {selectedProduct === index && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 mb-2">Keunggulan:</h4>
                        <p className="text-sm text-green-700">{item.benefit}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gethuk' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Inovasi Gethuk Singkong Kakao</h2>
              <p className="text-gray-600 text-lg">Menghadirkan cita rasa tradisional dengan sentuhan modern</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {gethukProcess.map((process, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

            {/* Product Showcase */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Gethuk Singkong Kakao Premium</h3>
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
                </div>
                
                <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-amber-800 font-semibold">Gethuk Kakao Premium</p>
                    <p className="text-amber-600 text-sm">Cita Rasa Autentik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'marketing' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Strategi Pemasaran Digital</h2>
              <p className="text-gray-600 text-lg">Memanfaatkan platform digital untuk menjangkau pasar yang lebih luas</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {marketingStrategy.map((platform, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`${platform.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      {platform.icon}
                      <h3 className="text-2xl font-bold">{platform.platform}</h3>
                    </div>
                    <p className="opacity-90">Platform utama untuk menjangkau target market</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Strategi Implementasi:</h4>
                    <ul className="space-y-3">
                      {platform.strategy.map((strategy, strategyIndex) => (
                        <li key={strategyIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Siap Berkolaborasi?</h3>
              <p className="mb-6 opacity-90">Mari bersama-sama mengembangkan potensi pertanian Desa Duwet</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <Instagram className="w-5 h-5" />
                  <span>@gethuk_duwet</span>
                </div>
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  <span>0812-3456-7890</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pertanian;