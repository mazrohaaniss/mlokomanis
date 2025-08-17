import React, { useState, useRef, useEffect } from 'react';
import { Instagram, MessageCircle, Clock, ShoppingCart, Heart, ExternalLink, Leaf, Users, ZoomIn, X, Star, Award, Sparkles, ChefHat, Package, Truck, ArrowRight, Building2, DrumstickIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Product Showcase Component
function ProductShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-xl border border-gray-100">
      <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
        {/* Product Info */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200">
            <Sparkles className="w-4 h-4" />
            Produk Inovasi Nugget Tahu
          </div>
          
          <h2 className="text-5xl font-black text-gray-800 leading-tight">
            Nugget Tahu
            <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              The Naghu Bites
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Kandungan gizinya cukup tinggi, harga terjangkau, mudah untuk dibuat, disukai berbagai kalangan usia, dan camilan sehat yang kaya akan protein dan serat yang bermanfaat bagi kesehatan.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">100% Natural</h4>
                  <p className="text-sm text-gray-600">Tanpa Pengawet</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Bahan Pilihan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-4xl font-black text-gray-900">
                  Rp 20.000
                  <span className="text-lg font-normal text-gray-500">/box</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">Tahan 7-10 Hari</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Truck className="w-4 h-4" />
                  <span className="text-sm font-semibold">Free Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Pesan Sekarang
              </button>
              <button className="px-6 py-4 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <Instagram className="w-6 h-6" />
                Ikuti
              </button>
            </div>
          </div>
        </div>

        {/* Product Visual */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1587668178277-295251f432ce?w=500&h=400&fit=crop"
                alt="Brownies Singkong Premium"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-white font-black text-sm">BARU!</span>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-orange-500" />
              <div>
                <div className="font-bold text-gray-900">Chef's Choice</div>
                <div className="text-sm text-gray-600">Resep Rahasia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Process Timeline
function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
  { 
    title: "Packaging - Visualisasi Logo “Naghu Bites”", 
    description: 
      "Dalam upaya memperkuat citra dan daya tarik Naghu Bites, setiap elemen kemasan dirancang tidak hanya untuk melindungi produk, tetapi juga menyampaikan makna di baliknya. Konsep visual menggabungkan unsur budaya lokal, kearifan pangan Indonesia, serta nilai keberlanjutan lingkungan. Setiap komponen memiliki makna simbolis yang merepresentasikan identitas Naghu Bites.", 
    details: [
      "Tampah (Bingkai Anyaman): digunakan untuk menaruh hasil cetakan nugget ampas tahu sebelum dikukus, mengangkat identitas budaya lokal, serta mencerminkan nilai sustainable dan eco friendly",
      "Daun Pisang: digunakan sebagai alas mengukus nugget ampas tahu, melambangkan local wisdom serta makanan ramah lingkungan dan alami",
      "Visual Nugget: simbol identitas visual yang merepresentasikan bahan utama produk nugget ampas tahu"
    ], 
    icon: <Leaf className="w-8 h-8" />, 
    color: "from-green-500 to-emerald-600", 
    image: "https://images.unsplash.com/photo-1582169296801-56e4eaa3d9cc?w=400&h=300&fit=crop" 
  },
  { 
    title: "Copywriting Logo “Naghu Bites”", 
    description: 
      "Identitas merek Naghu Bites dibangun melalui pemilihan kata dan pesan yang mampu menggugah rasa penasaran sekaligus menegaskan karakter produknya. Setiap elemen copywriting pada logo menyampaikan makna yang jelas, ringkas, dan menarik, sekaligus menonjolkan keunggulan produk.", 
    details: [
      "“Naghu Bites”: Naghu artinya nugget tahu, Bites menggambarkan produk praktis dan renyah",
      "Tagline: “From Soy to Joy”, singkat, padat, mencerminkan identitas produk",
      "Keterangan: “Homemade, Healthy, Local Product” menegaskan kualitas dan keunggulan"
    ], 
    icon: <ChefHat className="w-8 h-8" />, 
    color: "from-blue-500 to-cyan-600", 
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" 
  },
  { 
    title: "Label Kemasan “Naghu Bites”", 
    description: 
      "Label kemasan Naghu Bites berfungsi sebagai media informasi yang memudahkan konsumen mengenal produk secara menyeluruh. Setiap detail label memperkuat identitas, menjelaskan komposisi, variasi, hingga keamanan konsumsi.", 
    details: [
      "Logo: memperkuat brand awareness dan identitas visual",
      "Komposisi: bahan utama yaitu ampas tahu beserta bahan tambahan",
      "Variasi: terdapat pilihan rasa wortel dan ayam dengan checklist",
      "Netto: keterangan berat bersih, misalnya 250gr, 300gr, 1kg",
      "More Information: QR code berisi latar belakang produk",
      "Expired Date: panduan batas aman konsumsi"
    ], 
    icon: <Package className="w-8 h-8" />, 
    color: "from-amber-500 to-orange-600", 
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop" 
  },
  { 
    title: "Kemasan “Naghu Bites”", 
    description: 
      "Pemilihan kemasan Naghu Bites mengutamakan estetika, fungsionalitas, dan dampak lingkungan. Menggunakan bahan thinwall yang dapat digunakan kembali, mudah didaur ulang, serta menjaga kualitas nugget ampas tahu di dalamnya.", 
    details: [
      "Thinwall: lebih ramah lingkungan dibanding plastik tebal sekali pakai",
      "Ringan, praktis, dan tetap menjaga kualitas produk",
      "Mendukung pengurangan sampah plastik dan gaya hidup berkelanjutan"
    ], 
    icon: <Award className="w-8 h-8" />, 
    color: "from-gray-500 to-gray-600", 
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-black text-gray-800 mb-4">
          Proses Pembuatan
          <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            The NAGHU BITES
          </span>
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Setiap langkah dikerjakan dengan teliti untuk menghasilkan Nugget Tahu terbaik.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-500 ${activeStep === index ? 'scale-105' : 'hover:scale-102'}`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`flex items-start gap-6 p-6 rounded-2xl border-2 transition-all duration-300 ${activeStep === index ? 'bg-amber-50/50 border-amber-500 shadow-xl' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${activeStep === index ? 'text-amber-700' : 'text-gray-900'}`}>
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  {activeStep === index && (
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-96 object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{steps[activeStep].title}</h4>
                <p className="text-gray-700">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-amber-500 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Gallery
function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua', icon: <Heart className="w-4 h-4" /> },
    { id: 'product', label: 'Produk', icon: <Package className="w-4 h-4" /> },
    { id: 'process', label: 'Proses', icon: <ChefHat className="w-4 h-4" /> },
    { id: 'packaging', label: 'Kemasan', icon: <Award className="w-4 h-4" /> }
  ];

  const images = [
    { src: 'https://images.unsplash.com/photo-1587668178277-295251f432ce?w=400&h=400&fit=crop', category: 'product', title: 'Brownies Singkong Premium' },
    { src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop', category: 'product', title: 'Tekstur Lembut' },
    { src: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop', category: 'process', title: 'Proses Pencampuran' },
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', category: 'process', title: 'Tahap Pengolahan' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', category: 'packaging', title: 'Kemasan Premium' },
    { src: 'https://images.unsplash.com/photo-1582169296801-56e4eaa3d9cc?w=400&h=400&fit=crop', category: 'process', title: 'Bahan Baku Singkong' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-black text-gray-800 mb-4">
          Galeri
          <span className="block bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Produk Kami
          </span>
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Lihat keindahan dan kualitas Nugget Tahu premium kami.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-green-800 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
            }`}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-bold text-sm mb-2">{image.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-xs capitalize">{image.category}</span>
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain" 
            />
            <div className="p-6 bg-gray-50 border-t">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h4>
              <p className="text-gray-600 capitalize">Kategori: {selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Component
function NuggetTahu() {
  const [activeTab, setActiveTab] = useState('NuggetTahu'); // Diubah agar sesuai dengan id tab

  const tabs = [
  { id: 'PabrikTahu', label: 'Pabrik Tahu', icon: <Building2 className="w-5 h-5" />, path: '/potensi/pabrik-tahu' },
  { id: 'NuggetTahu', label: 'Inovasi Produk Nugget Tahu', icon: <Heart className="w-5 h-5" />, path: '/potensi/NuggetTahu' },
  { id: 'VideoPengenalan', label: ' Video Pengenalan', icon: <Users className="w-5 h-5" />, path: '/potensi/VideoPengenalan' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      
      {/* --- HEADER BARU YANG DISESUAIKAN --- */}
            {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mt-16 mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Inovasi Produk Nugget Tahu</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md'
                }`}
              >
                {tab.icon}
                {tab.label}
              </Link>
            );
          })}
        </div>

        <div className="space-y-16">
          <ProductShowcase />
          <ProcessTimeline />
          <InteractiveGallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NuggetTahu;
