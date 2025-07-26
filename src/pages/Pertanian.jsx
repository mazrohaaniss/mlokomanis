import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, Instagram, MessageCircle, Clock, ShoppingCart, X, ExternalLink } from 'lucide-react';
import Navbar from '../components/navbar';

function Pertanian() {
  
  const [activeTab, setActiveTab] = useState('potensi');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const hasilTani = [
    {
      name: 'Singkong',
      description: 'Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      benefit: 'Sumber karbohidrat, tahan lama, mudah diolah',
      recipes: [
        {
          name: 'Gethuk Singkong',
          ingredients: ['1 kg singkong', '200g gula merah', '100ml santan', 'Garam secukupnya'],
          steps: [
            'Kukus singkong hingga empuk (30-40 menit)',
            'Haluskan singkong yang sudah dikukus',
            'Campurkan gula merah yang sudah dihaluskan',
            'Tambahkan santan sedikit demi sedikit',
            'Aduk rata dan bentuk sesuai selera',
            'Siap disajikan'
          ]
        },
        {
          name: 'Keripik Singkong',
          ingredients: ['1 kg singkong', 'Minyak goreng', 'Garam', 'Bumbu balado (opsional)'],
          steps: [
            'Kupas dan iris tipis singkong',
            'Rendam dalam air garam selama 30 menit',
            'Tiriskan dan keringkan',
            'Goreng dalam minyak panas hingga kuning keemasan',
            'Angkat dan tiriskan',
            'Taburi bumbu sesuai selera'
          ]
        },
        {
          name: 'Tape Singkong',
          ingredients: ['2 kg singkong', '2 butir ragi tape', 'Daun pisang'],
          steps: [
            'Kukus singkong hingga empuk',
            'Dinginkan singkong hingga suhu ruang',
            'Haluskan ragi dan taburkan merata',
            'Bungkus dengan daun pisang',
            'Simpan dalam tempat hangat selama 2-3 hari',
            'Tape siap dinikmati'
          ]
        }
      ]
    },
    {
      name: 'Kakao',
      description: 'Kakao berkualitas tinggi yang menjadi ciri khas perkebunan desa',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
      benefit: 'Antioksidan tinggi, nilai ekonomi tinggi',
      recipes: [
        {
          name: 'Bubuk Kakao Murni',
          ingredients: ['Biji kakao kering', 'Alat sangrai', 'Blender/penggiling'],
          steps: [
            'Sangrai biji kakao hingga harum (15-20 menit)',
            'Dinginkan biji kakao',
            'Kupas kulit biji kakao',
            'Giling hingga halus menjadi bubuk',
            'Ayak untuk mendapatkan tekstur yang halus',
            'Simpan dalam wadah kedap udara'
          ]
        },
        {
          name: 'Minuman Coklat Tradisional',
          ingredients: ['3 sdm bubuk kakao', '2 sdm gula aren', '200ml air panas', '50ml susu'],
          steps: [
            'Campurkan bubuk kakao dengan gula aren',
            'Tuang air panas sedikit demi sedikit sambil diaduk',
            'Aduk hingga tidak ada yang menggumpal',
            'Tambahkan susu sesuai selera',
            'Aduk rata dan sajikan hangat',
            'Bisa ditambah es untuk minuman dingin'
          ]
        },
        {
          name: 'Brownies Kakao',
          ingredients: ['200g tepung terigu', '100g bubuk kakao', '3 butir telur', '150g gula', '100ml minyak'],
          steps: [
            'Kocok telur dan gula hingga mengembang',
            'Campurkan tepung terigu dan bubuk kakao',
            'Masukkan campuran tepung ke adonan telur',
            'Tambahkan minyak dan aduk rata',
            'Tuang ke loyang yang sudah diolesi mentega',
            'Panggang 180°C selama 25-30 menit'
          ]
        }
      ]
    },
    {
      name: 'Kacang Tanah',
      description: 'Protein nabati berkualitas yang tumbuh subur di tanah desa',
      image: 'https://images.unsplash.com/photo-1589927986089-35812388d1a4?w=400&h=300&fit=crop',
      benefit: 'Protein tinggi, mudah ditanam, hasil melimpah',
      recipes: [
        {
          name: 'Selai Kacang Homemade',
          ingredients: ['500g kacang tanah', '3 sdm minyak', '2 sdm gula', '1 sdt garam'],
          steps: [
            'Sangrai kacang tanah hingga matang dan harum',
            'Dinginkan dan kupas kulitnya',
            'Blender kacang tanah hingga halus',
            'Tambahkan minyak sedikit demi sedikit',
            'Masukkan gula dan garam, blender lagi',
            'Simpan dalam toples kedap udara'
          ]
        },
        {
          name: 'Kacang Bawang',
          ingredients: ['500g kacang tanah', '5 siung bawang putih', '1 sdt garam', 'Minyak goreng'],
          steps: [
            'Rendam kacang tanah 2 jam, tiriskan',
            'Iris tipis bawang putih',
            'Goreng bawang putih hingga harum',
            'Goreng kacang tanah hingga matang',
            'Campur kacang dengan bawang goreng',
            'Taburi garam dan aduk rata'
          ]
        },
        {
          name: 'Gudeg Kacang',
          ingredients: ['300g kacang tanah', '200ml santan', '3 lembar daun salam', 'Bumbu halus (bawang merah, putih, ketumbar)'],
          steps: [
            'Rebus kacang tanah hingga empuk',
            'Tumis bumbu halus hingga harum',
            'Masukkan kacang tanah dan aduk rata',
            'Tuang santan dan daun salam',
            'Masak dengan api kecil hingga bumbu meresap',
            'Sajikan dengan nasi hangat'
          ]
        }
      ]
    },
    {
      name: 'Padi',
      description: 'Makanan pokok dengan sistem irigasi tradisional yang berkelanjutan',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      benefit: 'Makanan pokok, sistem tanam berkelanjutan',
      recipes: [
        {
          name: 'Beras Organik Premium',
          ingredients: ['Gabah padi berkualitas', 'Mesin penggilingan', 'Ayakan halus'],
          steps: [
            'Jemur gabah hingga kadar air 14%',
            'Giling gabah untuk memisahkan kulit',
            'Ayak untuk memisahkan beras dan sekam',
            'Sortir beras berdasarkan kualitas',
            'Kemas dalam kemasan kedap udara',
            'Label dan siap untuk dipasarkan'
          ]
        },
        {
          name: 'Nasi Liwet Tradisional',
          ingredients: ['2 cangkir beras', '400ml santan', '2 lembar daun salam', '1 batang serai', 'Garam secukupnya'],
          steps: [
            'Cuci beras hingga bersih',
            'Rebus santan dengan daun salam dan serai',
            'Masukkan beras ke santan mendidih',
            'Aduk rata dan tambahkan garam',
            'Masak hingga santan menyusut',
            'Pindah ke dandang dan kukus 20 menit'
          ]
        },
        {
          name: 'Kerupuk Nasi',
          ingredients: ['2 cangkir nasi dingin', '1 sdt garam', '1 sdt ketumbar bubuk', 'Minyak goreng'],
          steps: [
            'Haluskan nasi yang sudah dingin',
            'Tambahkan garam dan ketumbar bubuk',
            'Bentuk adonan tipis di atas daun pisang',
            'Jemur hingga benar-benar kering',
            'Goreng dalam minyak panas hingga mengembang',
            'Tiriskan dan siap disajikan'
          ]
        }
      ]
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

  const handleCardClick = (product, index) => {
    setPopupContent(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  const handlePromotion = (platform) => {
    if (platform === 'instagram') {
      window.open('https://instagram.com', '_blank');
    } else if (platform === 'whatsapp') {
      window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan Gethuk Kakao Premium dari Desa Duwet', '_blank');
    }
  };

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
            { id: 'proker', label: 'Hasil Proker Tani', icon: <Users className="w-5 h-5" /> }
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
              <h2 className="text-3xl font-bold text-green-800 mb-4">Hasil Tani Unggulan</h2>
              <p className="text-gray-600 text-lg">Kekayaan alam yang melimpah dengan kualitas terbaik</p>
            </div>
            
            {/* Grid Layout dengan 6 produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Singkong */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                   onClick={() => handleCardClick(hasilTani[0], 0)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"
                    alt="Singkong"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Singkong</h3>
                  <p className="text-gray-600 text-sm mb-4">Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Kakao */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                   onClick={() => handleCardClick(hasilTani[1], 1)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop"
                    alt="Kakao"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Kakao</h3>
                  <p className="text-gray-600 text-sm mb-4">Kakao berkualitas tinggi yang menjadi ciri khas perkebunan desa</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Kacang Tanah */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                   onClick={() => handleCardClick(hasilTani[2], 2)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589927986089-35812388d1a4?w=400&h=300&fit=crop"
                    alt="Kacang Tanah"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Kacang Tanah</h3>
                  <p className="text-gray-600 text-sm mb-4">Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Jagung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
                    alt="Jagung"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Jagung</h3>
                  <p className="text-gray-600 text-sm mb-4">Hasil pertanian melimpah yang serbaguna, menjadi komponen karbohidrat alami dalam olahan</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Padi */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                   onClick={() => handleCardClick(hasilTani[3], 3)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
                    alt="Padi"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Padi</h3>
                  <p className="text-gray-600 text-sm mb-4">Makanan pokok dengan sistem irigasi tradisional yang berkelanjutan</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Kacang Panjang */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop"
                    alt="Kacang Panjang"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Kacang Panjang</h3>
                  <p className="text-gray-600 text-sm mb-4">Sayuran hijau segar yang kaya nutrisi, menjadi bahan dasar berbagai olahan tradisional sehat</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-sm">Lihat Menu Olahan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
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

                  {/* Promotion Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => handlePromotion('instagram')}
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Instagram className="w-5 h-5" />
                      Promosi di Instagram
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handlePromotion('whatsapp')}
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Pesan via WhatsApp
                      <ExternalLink className="w-4 h-4" />
                    </button>
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

            {/* Galeri Promosi Gethuk */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Galeri Promosi Gethuk</h3>
                <p className="text-gray-600">Dokumentasi visual produk unggulan kami</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  {
                    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
                    title: 'Gethuk Kakao Segar'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop',
                    title: 'Proses Pembungkusan'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1571197119282-5c73ba20cbe2?w=300&h=300&fit=crop',
                    title: 'Kemasan Premium'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop',
                    title: 'Siap Dipasarkan'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?w=300&h=300&fit=crop',
                    title: 'Singkong Fresh'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop',
                    title: 'Kakao Premium'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop',
                    title: 'Hasil Jadi'
                  },
                  {
                    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop',
                    title: 'Bahan Berkualitas'
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Ingin melihat lebih banyak konten promosi kami?</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handlePromotion('instagram')}
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    Follow Instagram
                  </button>
                  <button
                    onClick={() => handlePromotion('whatsapp')}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'proker' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">🌱 Hasil Proker Tani</h2>
              <p className="text-gray-600 text-lg">Program kerja unggulan untuk mengembangkan potensi pertanian desa</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Video Company Profile */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-blue-700 font-semibold">Video Profile</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Video Company Profile</h3>
                  <p className="text-gray-600 mb-4">
                    Dokumentasi visual lengkap tentang potensi pertanian dan inovasi produk Desa Duwet dalam format video profesional.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Profil lengkap Desa Duwet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Proses produksi gethuk kakao</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Testimoni petani lokal</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => window.open('https://youtube.com', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Tonton Video
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Download Book Online */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-amber-700 font-semibold">E-Book</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Buku Panduan Digital</h3>
                  <p className="text-gray-600 mb-4">
                    Panduan lengkap budidaya dan pengolahan hasil tani yang dapat diunduh secara gratis untuk meningkatkan pengetahuan petani.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Teknik budidaya modern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Resep olahan tradisional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Tips pemasaran produk</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => {
                      // Simulasi download
                      const link = document.createElement('a');
                      link.href = '#';
                      link.download = 'Panduan-Pertanian-Desa-Duwet.pdf';
                      link.click();
                    }}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Buku
                  </button>
                </div>
              </div>

              {/* Peta Digital */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-green-700 font-semibold">Peta Digital</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Peta Potensi Pertanian</h3>
                  <p className="text-gray-600 mb-4">
                    Peta digital interaktif yang menunjukkan sebaran lahan pertanian, zona budidaya, dan lokasi pemasaran produk di Desa Duwet.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Peta lahan pertanian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Zona budidaya unggulan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Titik distribusi produk</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Lihat Peta
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Programs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Program Kerja Lainnya</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pelatihan & Workshop */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Pelatihan & Workshop
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Workshop pengolahan gethuk kakao</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Pelatihan budidaya organik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Seminar pemasaran digital</span>
                    </li>
                  </ul>
                </div>

                {/* Kemitraan & Kolaborasi */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Kemitraan & Kolaborasi
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Kerjasama dengan toko online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Kolaborasi dengan UMKM lokal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Program mentoring petani muda</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Tertarik bergabung dalam program kerja kami?</p>
                <button
                  onClick={() => handlePromotion('whatsapp')}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Kami
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-emerald-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                Desa Duwet
              </h3>
              <p className="text-green-100 mb-4 leading-relaxed">
                Mengembangkan potensi pertanian lokal dengan inovasi produk berkualitas tinggi untuk kesejahteraan masyarakat desa.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => handlePromotion('instagram')}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handlePromotion('whatsapp')}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Produk Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Produk Unggulan</h4>
              <ul className="space-y-2 text-green-100">
                <li className="hover:text-white transition-colors cursor-pointer">Gethuk Kakao Premium</li>
                <li className="hover:text-white transition-colors cursor-pointer">Singkong Olahan</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kakao Berkualitas</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kacang Tanah</li>
                <li className="hover:text-white transition-colors cursor-pointer">Beras Organik</li>
              </ul>
            </div>

            {/* Layanan Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-green-100">
                <li className="hover:text-white transition-colors cursor-pointer">Konsultasi Pertanian</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pelatihan Pengolahan</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kemitraan Usaha</li>
                <li className="hover:text-white transition-colors cursor-pointer">Distribusi Produk</li>
                <li className="hover:text-white transition-colors cursor-pointer">Quality Control</li>
              </ul>
            </div>

            {/* Kontak Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-3 text-green-100">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Desa Duwet, Kecamatan Wonosari, Kabupaten Klaten, Jawa Tengah</p>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <p>+62 812-3456-7890</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p>info@desaduwet.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-green-200 text-sm">
                © 2024 Desa Duwet. Semua hak cipta dilindungi undang-undang.
              </p>
              <div className="flex gap-6 text-sm text-green-200">
                <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-800">Menu Olahan {popupContent.name}</h2>
              <button
                onClick={closePopup}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid gap-8">
                {popupContent.recipes.map((recipe, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">{recipe.name}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Bahan-bahan:</h4>
                        <ul className="space-y-2">
                          {recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Cara Membuat:</h4>
                        <ol className="space-y-2">
                          {recipe.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pertanian;