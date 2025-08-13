import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Instagram, MessageCircle, Clock, ShoppingCart, Heart, ExternalLink, Leaf, Users, ZoomIn, X, Star, Award, Sparkles, ChefHat, Package, Truck, ArrowRight, Flame, Zap, Timer, Utensils } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

// Product Showcase Component
function ProductShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-xl border border-gray-100">
      <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
        {/* Product Info */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200">
            <Sparkles className="w-4 h-4" />
            Produk Inovasi Unggulan
          </div>
          
          <h2 className="text-5xl font-black text-gray-800 leading-tight">
            Brownies Singkong
            <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Premium Coklat
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Revolusi cita rasa tradisional dengan sentuhan modern. Brownies lembut dari singkong pilihan yang dipadukan dengan coklat premium berkualitas tinggi.
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
        </div>

        {/* Product Visual */}
<div className="relative">
  <div className="relative bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <img
        src="/images/resep.png"
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
      title: "Persiapan Bahan", 
      description: "Menyiapkan semua bahan berkualitas premium sesuai takaran", 
      details: [
        "Bahan A: 4 butir telur, 10 sdm gula pasir, 1/2 sdm SP",
        "Bahan B: 1/2 sdm vanili, 1/4 sdm baking powder, 2 sdm coklat bubuk",
        "Bahan C: 125g coklat batang, 150ml minyak, 1,5 sdm SKM",
        "Bahan D: 250g singkong parut (diperas airnya)"
      ], 
      icon: <Leaf className="w-8 h-8" />, 
      color: "from-green-500 to-emerald-600"
    },
    { 
      title: "Melelehkan Coklat", 
      description: "Panaskan bahan C hingga coklat meleleh sempurna", 
      details: [
        "Masukkan coklat batang, minyak, dan SKM dalam mangkuk",
        "Panaskan dengan api kecil sambil diaduk",
        "Pastikan tekstur halus dan tidak menggumpal",
        "Dinginkan sebentar sebelum digunakan"
      ], 
      icon: <Flame className="w-8 h-8" />, 
      color: "from-orange-500 to-red-600"
    },
    { 
      title: "Mengocok Telur", 
      description: "Mixer bahan A hingga mengembang, putih dan lembut", 
      details: [
        "Mixer telur, gula pasir, dan SP dengan kecepatan maksimal",
        "Kocok hingga adonan mengembang dan berwarna putih",
        "Pastikan tekstur lembut dan volume bertambah 2-3 kali lipat",
        "Proses ini memakan waktu sekitar 10-15 menit"
      ], 
      icon: <Zap className="w-8 h-8" />, 
      color: "from-blue-500 to-cyan-600"
    },
    { 
      title: "Pencampuran Bertahap", 
      description: "Menambahkan singkong parut dan bahan lainnya secara bergantian", 
      details: [
        "Turunkan kecepatan mixer ke level 1 (paling rendah)",
        "Masukkan singkong parut sedikit demi sedikit",
        "Tambahkan bahan B dan C secara bergantian",
        "Mixer hingga rata tanpa overmixing"
      ], 
      icon: <ChefHat className="w-8 h-8" />, 
      color: "from-purple-500 to-indigo-600"
    },
    { 
      title: "Persiapan Kukus", 
      description: "Menyiapkan loyang dan kukusan untuk proses pengukusan", 
      details: [
        "Panaskan kukusan hingga beruap",
        "Olesi loyang dengan margarin tipis di semua sisi",
        "Tuang adonan ke loyang yang sudah disiapkan",
        "Hentak-hentakan loyang agar adonan padat dan rata"
      ], 
      icon: <Package className="w-8 h-8" />, 
      color: "from-gray-500 to-gray-600"
    },
    { 
      title: "Proses Mengukus", 
      description: "Mengukus brownies selama 30 menit dengan api kecil", 
      details: [
        "Setelah kukusan beruap, kecilkan api",
        "Masukkan loyang dan kukus selama 30 menit",
        "Jangan buka tutup kukusan selama proses",
        "Tes tusuk untuk memastikan kematangan"
      ], 
      icon: <Timer className="w-8 h-8" />, 
      color: "from-red-500 to-pink-600"
    },
    { 
      title: "Penyelesaian & Penyajian", 
      description: "Mendinginkan, memotong, dan menyajikan brownies yang sudah matang", 
      details: [
        "Angkat brownies setelah matang sempurna",
        "Keluarkan dari cetakan dengan hati-hati",
        "Dinginkan pada suhu ruang",
        "Potong-potong sesuai selera lalu sajikan"
      ], 
      icon: <Utensils className="w-8 h-8" />, 
      color: "from-amber-500 to-orange-600"
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
            Brownies Singkong Coklat
          </span>
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Setiap langkah dikerjakan dengan teliti untuk menghasilkan brownies singkong coklat yang lezat dan berkualitas.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
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
                    <ul className="space-y-2 mt-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
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
        
        <div className="flex justify-center gap-2 mt-8">
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
  );
}

function InteractiveGallery() {
  const images = [
    { src: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/images/2023/01/big/img_63c8c4c2088523-36692799-85309801.jpg' },
    { src: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/bisnisbandung/2018/04/bronis-1.jpg' },
    { src: 'https://img-global.cpcdn.com/recipes/508090b3959f7f5c/200x200cq80/fudgy-brownies-almond-foto-resep-utama.jpg' },
    { src: 'https://kioskcokelat.com/cdn/shop/articles/img-1738409391906_5d19c81c-dfae-41ae-bc6c-630ad7cbc847_1200x.jpg?v=1745814253' },
    { src: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1005/2024/03/18/brownies-singkong-pisang-kukus-3338205231.jpg' },
    { src: 'https://www.jagel.id/api/listimage/v/Brownies-Coklat-Toping-Almond-dan-Chocochips-1-3975e09fb712cdb5.jpg' }
  ];

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
          Lihat keindahan dan kualitas brownies singkong premium kami.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// Komponen Konten Utama Halaman
function InovasiProdukContent() {
  return (
      <div className="space-y-16">
          <ProductShowcase />
          <ProcessTimeline />
          <InteractiveGallery />
      </div>
  )
}


// --- Komponen Halaman Utama (Main Page Component) ---
function InovasiProduk() {
// State untuk mengelola tab yang aktif secara visual
const [activeTab, setActiveTab] = useState('brownis');

return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
    <Navbar />
    
    {/* Header */}
    <div className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto mt-16 px-6 py-8">
        <h1 className="text-4xl text-center font-bold text-green-800 mb-4">
          Inovasi Produk Unggulan
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          Menghadirkan inovasi brownies singkong coklat premium yang memadukan kearifan lokal dengan cita rasa modern untuk kemajuan ekonomi desa.
        </p>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* --- Logika Navigasi diletakkan langsung di sini --- */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { id: 'pertanian', label: 'Hasil Tani Unggulan', icon: <Leaf className="w-5 h-5" />, path: '/potensi/pertanian' },
          { id: 'brownis', label: 'Inovasi Produk', icon: <Heart className="w-5 h-5" />, path: '/potensi/InovasiProduk' },
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
              // onClick sengaja tidak ada agar tidak mengubah state saat navigasi
              // State 'activeTab' akan dikelola oleh halaman masing-masing
            >
              {tab.icon}
              {tab.label}
            </Link>
          );
        })}
      </div>
      
      {/* Konten Halaman */}
      <InovasiProdukContent />

    </main>

    <Footer />
  </div>
);
}

export default InovasiProduk;