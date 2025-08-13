import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, X } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function HasilTaniContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const groupedHasilTani = [
    {
      categoryName: 'Tanaman Pangan',
      products: [
        { name: 'Singkong', description: 'Hasil utama yang melimpah, menjadi bahan dasar berbagai olahan tradisional.', image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg', recipes: [ { name: 'Gethuk Singkong', ingredients: ['1 kg singkong', '200g gula merah', '100ml santan', 'Garam secukupnya'], steps: ['Kukus singkong hingga empuk.', 'Haluskan singkong selagi panas.', 'Campurkan dengan gula merah dan santan.', 'Bentuk dan sajikan.'] }, { name: 'Keripik Singkong', ingredients: ['1 kg singkong', 'Minyak goreng', 'Garam', 'Bumbu balado (opsional)'], steps: ['Iris tipis singkong.', 'Rendam air garam, tiriskan.', 'Goreng hingga renyah.', 'Taburi bumbu.'] } ] },
        { name: 'Padi', description: 'Makanan pokok dengan sistem irigasi tradisional yang berkelanjutan.', image: 'https://cdn.hariansib.com/uploads/images/2024/02/_568_Pendapatan-Petani-Padi-Sawah-di-Kecamatan-Bandar-Kurang-Memadai.jpg', recipes: [ { name: 'Nasi Liwet', ingredients: ['2 cangkir beras', '400ml santan', '2 lbr daun salam', '1 btg serai'], steps: ['Cuci beras.', 'Rebus santan dan rempah.', 'Masukkan beras, masak hingga meresap.', 'Kukus hingga matang.'] }, { name: 'Kerupuk Nasi', ingredients: ['2 cangkir nasi dingin', 'Garam & ketumbar', 'Minyak goreng'], steps: ['Haluskan nasi.', 'Bumbui dan bentuk tipis.', 'Jemur hingga kering.', 'Goreng hingga mengembang.'] } ] },
        { name: 'Jagung', description: 'Hasil pertanian serbaguna, komponen karbohidrat alami dalam olahan.', image: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/padek/2020/11/jagung.jpeg', recipes: [ { name: 'Bakwan Jagung', ingredients: ['2 buah jagung', 'Tepung terigu', 'Daun bawang', 'Bumbu halus'], steps: ['Pipil dan ulek kasar jagung.', 'Campur semua bahan.', 'Goreng adonan per sendok.'] }, { name: 'Jagung Bakar', ingredients: ['Jagung manis', 'Mentega', 'Saus sambal', 'Kecap manis'], steps: ['Olesi jagung dengan mentega.', 'Bakar sambil diolesi saus.', 'Sajikan selagi hangat.'] } ] },
      ]
    },
    {
      categoryName: 'Hortikultura',
      products: [
        { name: 'Bawang Merah', description: 'Bumbu esensial yang memberikan cita rasa khas pada masakan.', image: 'https://allofresh.id/blog/wp-content/uploads/2023/06/cara-menanam-bawang-merah-2.jpg', recipes: [{name: 'Bawang Goreng', ingredients: ['Bawang Merah', 'Minyak Goreng'], steps: ['Iris tipis', 'Goreng hingga renyah']}] },
        { name: 'Kacang Panjang', description: 'Sayuran hijau segar yang kaya nutrisi untuk masakan tradisional.', image: 'https://asset-2.tstatic.net/pontianak/foto/bank/images/gerak-membelit-sulur-tanaman-kacang-panjang-pada-kayu-tempat-tumbuhnya-disebut-gerak.jpg', recipes: [ { name: 'Tumis Kacang Panjang', ingredients: ['1 ikat kacang panjang', 'Tempe', 'Bawang merah & putih', 'Cabai'], steps: ['Potong-potong bahan.', 'Tumis bumbu hingga harum.', 'Masukkan kacang & tempe.', 'Masak hingga matang.'] }, { name: 'Urap Sayur', ingredients: ['Kacang panjang', 'Tauge', 'Bayam', 'Kelapa parut & bumbu urap'], steps: ['Rebus semua sayuran.', 'Campur kelapa dengan bumbu urap.', 'Aduk rata sayuran dan bumbu kelapa.'] } ] },
        { name: 'Kedelai', description: 'Sumber protein nabati utama untuk pembuatan tahu dan tempe.', image: 'https://tanilink.com/uploads/berita/2024-06-19/cover_kedelai.jpg', recipes: [{name: 'Susu Kedelai', ingredients: ['Kedelai', 'Air', 'Gula'], steps: ['Rendam kedelai', 'Blender & saring', 'Rebus hingga matang']}] },
        { name: 'Kacang Tanah', description: 'Protein nabati berkualitas yang tumbuh subur di tanah desa.', image: 'https://cdn.rri.co.id/berita/Entikong/o/1723039423494-kacang_tanah/2omyl66i6ozbx28.jpeg', recipes: [ { name: 'Selai Kacang', ingredients: ['500g kacang tanah sangrai', '3 sdm minyak', '2 sdm gula', '1 sdt garam'], steps: ['Blender kacang hingga halus.', 'Tambahkan minyak, gula, garam.', 'Blender lagi hingga merata.'] }, { name: 'Kacang Bawang', ingredients: ['500g kacang tanah', '5 siung bawang putih', 'Garam', 'Minyak goreng'], steps: ['Rendam kacang, tiriskan.', 'Goreng bawang putih hingga harum.', 'Goreng kacang hingga matang.', 'Campur semua bahan.'] } ] },
      ]
    },
    {
      categoryName: 'Perkebunan',
      products: [
        { name: 'Kakao', description: 'Kakao berkualitas tinggi yang menjadi ciri khas perkebunan desa.', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-cocoa-pods-or-cocoa-fruits-on-cocoa-farm-image_15739574.jpg', recipes: [ { name: 'Bubuk Kakao Murni', ingredients: ['Biji kakao kering', 'Alat sangrai', 'Penggiling'], steps: ['Sangrai biji kakao.', 'Kupas kulitnya.', 'Giling hingga halus.', 'Ayak bubuk kakao.'] }, { name: 'Minuman Coklat', ingredients: ['3 sdm bubuk kakao', '2 sdm gula aren', '200ml air panas'], steps: ['Campur kakao dan gula.', 'Tuang air panas, aduk rata.', 'Sajikan hangat.'] } ] },
        { name: 'Tebu', description: 'Tanaman utama penghasil gula dan minuman menyegarkan.', image: 'https://news.majalahhortus.com/wp-content/uploads/2019/10/tebu-1.jpg', recipes: [{name: 'Es Tebu Murni', ingredients: ['Batang Tebu Segar', 'Es Batu'], steps: ['Giling tebu', 'Sajikan dengan es']}] },
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
    <div className="space-y-12">
      {groupedHasilTani.map((categoryGroup) => (
        <section key={categoryGroup.categoryName}>
          <h2 className="text-3xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-200">
            {categoryGroup.categoryName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryGroup.products.map((product) => (
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
        </section>
      ))}

      {/* --- POPUP DENGAN DESAIN SIMPEL DAN RAPI --- */}
      {showPopup && popupContent && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Header Popup */}
            <div className="flex-shrink-0 p-5 flex items-center justify-between border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Menu Olahan {popupContent.name}</h2>
              <button onClick={closePopup} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Konten Popup (Bisa di-scroll) */}
            <div className="flex-grow p-6 space-y-8 overflow-y-auto">
              {popupContent.recipes.map((recipe, index) => (
                <div key={recipe.name} className={index > 0 ? 'border-t border-gray-200 pt-6' : ''}>
                  <h3 className="text-xl font-bold text-green-800 mb-4">{recipe.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {/* Kolom Bahan */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Bahan-bahan:</h4>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Kolom Cara Membuat */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Cara Membuat:</h4>
                      <ol className="space-y-3">
                        {recipe.steps.map((step, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 font-bold text-sm rounded-full flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
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
      )}
    </div>
  );
}


// --- Komponen Halaman Utama (TIDAK ADA PERUBAHAN) ---
function Pertanian() {
  const [activeTab, setActiveTab] = useState('pertanian');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto mt-16 px-6 py-8">
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
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </Link>
            );
          })}
        </div>
        {activeTab === 'pertanian' && <HasilTaniContent />}
      </main>
      <Footer />
    </div>
  );
}

export default Pertanian;