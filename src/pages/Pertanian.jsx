import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, X } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

// Komponen Konten: Hasil Tani Unggulan
function HasilTaniContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const hasilTani = [
    {
      name: 'Singkong',
      description: 'Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional.',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      recipes: [
        { name: 'Gethuk Singkong', ingredients: ['1 kg singkong', '200g gula merah', '100ml santan', 'Garam secukupnya'], steps: ['Kukus singkong hingga empuk.', 'Haluskan singkong selagi panas.', 'Campurkan dengan gula merah dan santan.', 'Bentuk dan sajikan.'] },
        { name: 'Keripik Singkong', ingredients: ['1 kg singkong', 'Minyak goreng', 'Garam', 'Bumbu balado (opsional)'], steps: ['Iris tipis singkong.', 'Rendam air garam, tiriskan.', 'Goreng hingga renyah.', 'Taburi bumbu.'] }
      ]
    },
    {
      name: 'Kakao',
      description: 'Kakao berkualitas tinggi yang menjadi ciri khas perkebunan desa.',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
      recipes: [
        { name: 'Bubuk Kakao Murni', ingredients: ['Biji kakao kering', 'Alat sangrai', 'Penggiling'], steps: ['Sangrai biji kakao.', 'Kupas kulitnya.', 'Giling hingga halus.', 'Ayak bubuk kakao.'] },
        { name: 'Minuman Coklat', ingredients: ['3 sdm bubuk kakao', '2 sdm gula aren', '200ml air panas'], steps: ['Campur kakao dan gula.', 'Tuang air panas, aduk rata.', 'Sajikan hangat.'] }
      ]
    },
    {
      name: 'Kacang Tanah',
      description: 'Protein nabati berkualitas yang tumbuh subur di tanah desa.',
      image: 'https://images.unsplash.com/photo-1589927986089-35812388d1a4?w=400&h=300&fit=crop',
      recipes: [
        { name: 'Selai Kacang', ingredients: ['500g kacang tanah sangrai', '3 sdm minyak', '2 sdm gula', '1 sdt garam'], steps: ['Blender kacang hingga halus.', 'Tambahkan minyak, gula, garam.', 'Blender lagi hingga merata.'] },
        { name: 'Kacang Bawang', ingredients: ['500g kacang tanah', '5 siung bawang putih', 'Garam', 'Minyak goreng'], steps: ['Rendam kacang, tiriskan.', 'Goreng bawang putih hingga harum.', 'Goreng kacang hingga matang.', 'Campur semua bahan.'] }
      ]
    },
    {
      name: 'Padi',
      description: 'Makanan pokok dengan sistem irigasi tradisional yang berkelanjutan.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      recipes: [
        { name: 'Nasi Liwet', ingredients: ['2 cangkir beras', '400ml santan', '2 lbr daun salam', '1 btg serai'], steps: ['Cuci beras.', 'Rebus santan dan rempah.', 'Masukkan beras, masak hingga meresap.', 'Kukus hingga matang.'] },
        { name: 'Kerupuk Nasi', ingredients: ['2 cangkir nasi dingin', 'Garam & ketumbar', 'Minyak goreng'], steps: ['Haluskan nasi.', 'Bumbui dan bentuk tipis.', 'Jemur hingga kering.', 'Goreng hingga mengembang.'] }
      ]
    },
    {
        name: 'Jagung',
        description: 'Hasil pertanian serbaguna, komponen karbohidrat alami dalam olahan.',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
        recipes: [
            { name: 'Bakwan Jagung', ingredients: ['2 buah jagung', 'Tepung terigu', 'Daun bawang', 'Bumbu halus'], steps: ['Pipil dan ulek kasar jagung.', 'Campur semua bahan.', 'Goreng adonan per sendok.'] },
            { name: 'Jagung Bakar', ingredients: ['Jagung manis', 'Mentega', 'Saus sambal', 'Kecap manis'], steps: ['Olesi jagung dengan mentega.', 'Bakar sambil diolesi saus.', 'Sajikan selagi hangat.'] }
        ]
    },
    {
        name: 'Kacang Panjang',
        description: 'Sayuran hijau segar yang kaya nutrisi untuk masakan tradisional.',
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop',
        recipes: [
            { name: 'Tumis Kacang Panjang', ingredients: ['1 ikat kacang panjang', 'Tempe', 'Bawang merah & putih', 'Cabai'], steps: ['Potong-potong bahan.', 'Tumis bumbu hingga harum.', 'Masukkan kacang & tempe.', 'Masak hingga matang.'] },
            { name: 'Urap Sayur', ingredients: ['Kacang panjang', 'Tauge', 'Bayam', 'Kelapa parut & bumbu urap'], steps: ['Rebus semua sayuran.', 'Campur kelapa dengan bumbu urap.', 'Aduk rata sayuran dan bumbu kelapa.'] }
        ]
    }
  ];

  const handleCardClick = (product) => {
    if (product.recipes && product.recipes.length > 0) {
      setPopupContent(product);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasilTani.map((product) => (
          <div key={product.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105" onClick={() => handleCardClick(product)}>
            <div className="h-48 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center text-green-600 font-semibold">
                <span className="text-sm">Lihat Menu Olahan</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 flex items-center justify-between border-b">
              <h2 className="text-2xl font-bold text-green-800">Menu Olahan {popupContent.name}</h2>
              <button onClick={closePopup} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {popupContent.recipes.map((recipe) => (
                <div key={recipe.name} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">{recipe.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Bahan:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Cara Membuat:</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        {recipe.steps.map((step) => <li key={step}>{step}</li>)}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Komponen Halaman Utama
function Pertanian() {
  // State untuk melacak tab mana yang aktif
  const [activeTab, setActiveTab] = useState('pertanian'); // Diatur ke 'pertanian' agar cocok dengan id tab pertama

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Potensi Pertanian Desa Mlokomanis Wetan</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mengembangkan potensi hasil tani lokal menjadi produk unggulan yang bernilai ekonomi tinggi
              dengan tetap mempertahankan kearifan lokal dan kelestarian lingkungan.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Navigation Tabs dengan gaya kondisional */}
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
                // Terapkan gaya berdasarkan apakah tab ini aktif atau tidak
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'bg-green-600 text-white shadow-lg scale-105' // Gaya untuk tab aktif (hijau)
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md' // Gaya untuk tab inaktif (putih)
                }`}
                // Perbarui state saat tombol diklik
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Konten akan ditampilkan berdasarkan tab yang aktif */}
        {/* Saat ini, hanya konten untuk 'pertanian' yang ditampilkan */}
        {activeTab === 'pertanian' && <HasilTaniContent />}
        {/* Anda bisa menambahkan konten lain di sini */}
        {/* {activeTab === 'gethuk' && <InovasiGethukContent />} */}

      </main>

      <Footer />
    </div>
  );
}

export default Pertanian;