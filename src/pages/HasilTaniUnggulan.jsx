import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function HasilTaniUnggulan() {
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

  const handleCardClick = (product, index) => {
    setPopupContent(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  return (
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

export default HasilTaniUnggulan;