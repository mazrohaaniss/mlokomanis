import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, X, Building2 } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function PabrikTahuContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const groupedPabrikTahu = [
    {
      categoryName: 'Pabrik Tahu',
      products: [
        {
          name: 'Pabrik A',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik B',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik C',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik D',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik E',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik F',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
      ]
    },
    {
      categoryName: 'Pabrik Tempe',
      products: [
          {
          name: 'Pabrik Tempe 5657',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik A',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sem nec justo imperdiet, nec luctus nisi tincidunt. Sed tincidunt magna et ligula faucibus, ac tempus velit efficitur. Pellentesque dignissim neque ut justo accumsan, id iaculis lorem lacinia. Integer id dui porttitor, euismod elit in, fermentum mi. Duis nec luctus libero. Aenean vitae libero non nulla sollicitudin porttitor. Mauris scelerisque, ligula vel sagittis tincidunt, nisi nulla dignissim ipsum, ut rutrum felis tellus ut leo. Donec tristique justo sed risus pharetra, vel fermentum nisl lobortis.'}
              </div>
              ]
            }
          ]
        },
      ]
    },
  ];

  const handleCardClick = (product) => {
    if (product.detail && product.detail.length > 0) {
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
      {groupedPabrikTahu.map((categoryGroup) => (
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
                    <span className="text-sm">Lihat Selengkapnya</span>
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
              <h2 className="text-2xl font-bold text-gray-800">Detail {popupContent.name}</h2>
              <button onClick={closePopup} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Konten Popup (Bisa di-scroll) */}
            <div className="flex-grow p-6 space-y-8 overflow-y-auto">
              {popupContent.detail.map((details, index) => (
                <div key={details.name} className={index > 0 ? 'border-t border-gray-200 pt-6' : ''}>
                  <h3 className="text-xl font-bold text-green-800 mb-4">{details.name}</h3>
                  <div className="grid grid-cols-1">
                    {/* Kolom Bahan */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Bagaimana Pabrik Ini bisa berdiri?</h4>
                      <ul className="space-y-2">
                        {details.sejarah.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
function PabrikTahu() {
  const [activeTab, setActiveTab] = useState('PabrikTahu');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto mt-16 px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Potensi Pabrik Tahu Desa Mlokomanis Wetan</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mengembangkan potensi Pabrik Tahu agar mejadi lebih baik lagi dan membangkitkan UMKM dengan merilis produk unggulan yang bernilai ekonomi tinggi
              dengan tetap mempetimbangkan gizi dan lingkungan.
            </p>
          </div>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: 'PabrikTahu', label: 'Tentang Pabrik', icon: <Building2 className="w-5 h-5" />, path: '/potensi/PabrikTahu' },
            { id: 'nuggettahu', label: 'Inovasi Produk', icon: <Heart className="w-5 h-5" />, path: '/potensi/NuggetTahu' },
            { id: 'proker', label: 'Hasil Proker Kami', icon: <Users className="w-5 h-5" />, path: '/potensi/ProkerKelompok2' }
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
        {activeTab === 'PabrikTahu' && <PabrikTahuContent />}
      </main>
      <Footer />
    </div>
  );
}

export default PabrikTahu;