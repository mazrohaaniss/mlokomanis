import React, { useState } from 'react';
import { ChevronRight, Leaf, Heart, Users, X, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
          name: 'Sejarah Pabrik Tempe 5758',
          description: 'Industri Tempe Kripik Kedelai dan Benguk 5758 yang dikelola oleh Ibu Tri Hartini telah berdiri sekitar 15 tahun yang lalu, dimulai ketika anak beliau masih duduk di bangku Taman Kanak-Kanak. ',
          image: 'https://asset.kompas.com/crops/KPQ8xViX8vvPx2wkO3ReDN8viDA=/100x67:900x600/1200x800/data/photo/2022/12/24/63a6193568e2e.jpg',
          detail: [
            {
              name: 'Sejarah Pabrik Tempe 5758',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {"Industri Tempe Kripik Kedelai dan Benguk 5758 yang dikelola oleh Ibu Tri Hartini telah berdiri sekitar 15 tahun yang lalu, dimulai ketika anak beliau masih duduk di bangku Taman Kanak-Kanak. Pada masa itu, usaha ini masih sangat sederhana. Suami Ibu Tri Hartini masih merantau, dan beliau hanya melayani seorang sales yang mengambil produk tempe kripik untuk dijual kembali. Bangunan yang sekarang dibuat industri keripik tempe dulunya adalah usaha tahu yang sekarang dijadikan tempe keripik tempe sedangkan pabrik tahu dipindah di adik beliau.Keunikan dari usaha ini adalah pada produk tempe kripik benguk, yang pada awalnya jarang ditemukan di lingkungan Desa Mlokomanis Wetan. Ketertarikan Ibu Tri Hartini bermula ketika ia mencoba tempe kripik benguk milik ibu dari teman anaknya. Karena rasanya yang enak dan berbeda, beliau kemudian termotivasi untuk mempelajari cara membuatnya dan mengembangkannya menjadi produk olahan yang lebih serius.Pada tahap awal, bahan baku kedelai dan benguk diperoleh dari pasar Ngadirojo. Proses pembuatan tempe benguk ini membutuhkan waktu lebih lama dibandingkan tempe kedelai biasa. Jika tempe kedelai dapat selesai dalam empat hari, tempe benguk memerlukan waktu hingga lima hari karena melalui tahap perebusan, perendaman, dan fermentasi yang lebih panjang. Setelah jadi, tempe benguk dipotong secara manual dengan ukuran yang disesuaikan agar sesuai dengan kemasan mika yang digunaka Selama 15 tahun menjalankan usaha, berbagai tantangan telah dihadapi, mulai dari keterbatasan dana hingga kendala proses produksi saat pergantian musim. Pada musim dingin, penggunaan ragi harus ditambah, sedangkan pada musim panas harus dikurangi agar tempe tidak busuk atau terlalu matang. Jika tidak tepat menggunakan ragi tersebut kerap menimbulkan kerugian karena bahan terbuang. Meski demikian, Ibu Tri Hartini tetap menjaga kualitas produk dengan konsisten menimbang bumbu sebelum menggoreng agar rasa tetap sama. Konsistensi rasa inilah yang membuat pelanggan tetap setia.Pemasaran dilakukan melalui berbagai cara, mulai dari penjualan di pasar, melayani sales dari berbagai daerah, hingga memperluas pasar ke Pacitan, Wonogiri, Jatipuro, dan Ngadirojo. Kini, pemasaran juga dilakukan secara online melalui Shopee yang dikelola oleh anaknya, sedangkan administrasi dipegang oleh sang suami.UMKM ini tidak hanya membantu perekonomian keluarga tetapi juga memberikan dampak sosial yang positif. Dari keuntungan usaha, Ibu Tri Hartini rutin menyisihkan sebagian rezekinya untuk sedekah, seperti membantu pembayaran listrik dan air masjid di kampungnya. Bahkan, pada masa sulit seperti pandemi Covid-19, beliau tetap berusaha untuk terus berbagi dengan masyarakat. Ibu Tri Hartini memiliki harapan besar agar usaha tempe kripik ini dapat diperluas lagi sehingga dapat menjangkau pasar yang lebih luas. Salah satu keberhasilan besar yang diraih adalah berhasil menjaring pelanggan dari Pacitan, termasuk memasok produk ke kawasan wisata Pantai Klayar yang ramai pengunjung. Dengan ketekunan dan niat baik yang selalu dipupuk melalui sedekah, Ibu Tri Hartini optimis usaha ini akan terus berkembang dan membawa manfaat yang lebih besar bagi keluarga dan masyarakat sekitarnya."}
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
            { id: 'PabrikTahu', label: 'Pabrik Tahu', icon: <Building2 className="w-5 h-5" />, path: '/potensi/pabrik-tahu' },
            { id: 'NuggetTahu', label: 'Inovasi Produk Nugget Tahu', icon: <Heart className="w-5 h-5" />, path: '/potensi/NuggetTahu' },
            { id: 'VideoPengenalan', label: ' Video Pengenalan', icon: <Users className="w-5 h-5" />, path: '/potensi/VideoPengenalan' }
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