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
          name: 'Usaha Tahu Bu Muji',
          description: 'Usaha tahu Pamuji yang dimiliki oleh Bu Muji berdiri sejak tahun 1992 dan hingga kini telah bertahan selama lebih dari 33 tahun. Perjalanan ini bermula ketika Bu Muji, yang saat itu memiliki anak berusia dua tahun, beliau memutuskan untuk memulai usaha tahu secara mandiri.',
          image:"/images/pabriktahu/bumuji.jpg ",
          detail: [
            {
              name: 'Usaha Tahu Bu Muji',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Usaha tahu Pamuji yang dimiliki oleh Bu Muji berdiri sejak tahun 1992 dan hingga kini telah bertahan selama lebih dari 33 tahun. Perjalanan ini bermula ketika Bu Muji, yang saat itu memiliki anak berusia dua tahun, beliau memutuskan untuk memulai usaha tahu secara mandiri. Keputusan tersebut bukan tanpa alasan. Sejak kecil, beliau telah akrab dengan usaha tahu karena sang ibu juga seorang penjual tahu. Awalnya, sang ibu berjualan di Karanganyar, sedangkan Bu Muji mencoba peruntungannya di Baturetno. Walaupun di daerahnya terdapat banyak pengrajin tahu, Bu Muji selalu berpegang pada prinsip persaingan sehat. Ia kerap mengajak rekan sesama pelaku usaha untuk mencari rezeki dengan cara yang baik, tanpa saling menjatuhkan. Bagi beliau, kunci bertahan dalam usaha adalah menjaga kebersihan dan kualitas tahu agar rasanya tetap segar dan tidak terlalu asam. Karakter tahu buatannya pun khas bagian dalamnya lembut, sementara ketika digoreng terasa sedikit kenyal.Perjalanan panjang usaha ini tak lepas dari tantangan. Namun, berkat kegigihan dan doa, Bu Muji merasa Allah selalu memberikan kelancaran. Usaha tahu ini telah membantu mewujudkan berbagai cita-citanya, mulai dari membiayai pendidikan anak hingga menunaikan ibadah umrah (2022) dan haji (2023). Bagi Bu Muji, rezeki dari usaha tahu bukan hanya untuk keluarga, tetapi juga untuk memberdayakan masyarakat sekitar. Beberapa pekerjanya adalah keluarga, tetangga, hingga warga dari luar daerah seperti Giriwoyo. Bagi Beliau, memberi pekerjaan adalah bentuk sedekah yang bermanfaat bagi sesama.Produksi tahu dilakukan dengan proses tradisional yang tetap terjaga kualitasnya. Kedelai direndam selama 2-3 jam, lalu digiling hingga keluar sarinya. Selanjutnya, sari kedelai direbus menggunakan uap, disaring, diberi bumbu air, kemudian dicetak. Setelah dicetak, tahu bisa dibiarkan setengah hingga satu jam sebelum dipotong. Jika dibutuhkan cepat, proses pemotongan bisa dilakukan hanya lima menit setelah pencetakan, dan tahu langsung siap digoreng.Awalnya, tempat produksi tahu ini sangat kecil. Seiring berkembangnya usaha, Bu Muji memperluas bangunan agar lebih leluasa. Meski lahan terbatas, ia tetap memilih lokasi dekat rumah agar mudah mengawasi proses produksi. Hingga kini, Usaha tahu yang dimiliki Bu Muji tetap menjadi salah satu usaha tahu yang bertahan lama di Desa Mlokomanis Wetan yang menjadi sumber penghidupan bagi keluarga dan memberi manfaat bagi warga sekitar.'}
              </div>
              ]
            }
          ]
        },
        {
          name: 'Pabrik Tahu Pak Mulato',
          description: 'Pak Mulato merupakan seorang pengrajin tahu asal Dusun Bakalan, lahir pada tahun 1956. Usaha tahu yang beliau jalankan saat ini bukanlah pabrik besar, melainkan industri rumahan yang telah berdiri sekitar tahun 1987.',
          image:"/images/pabriktahu/bumulato.jpg ",
          detail: [
            {
              name: 'Pabrik Tahu Pak Mulato',
              sejarah: [
              <div style={{ maxWidth: '100%', paddingRight: '0', textAlign: 'justify' }}>
                {'Pak Mulato merupakan seorang pengrajin tahu asal Dusun Bakalan, lahir pada tahun 1956. Usaha tahu yang beliau jalankan saat ini bukanlah pabrik besar, melainkan industri rumahan yang telah berdiri sekitar tahun 1987. Usaha tersebut merupakan warisan dari orang tuanya, yang sejak dahulu memang memproduksi tahu. Setelah orang tuanya meninggal, beliau meneruskan usaha tersebut agar tetap berjalan. Pada awal berdirinya, tahu masih jarang ditemui dan bahan baku kedelai lokal mudah didapat. Kedelai dibeli di pasar atau toko, dan pada masa itu hampir seluruhnya berasal dari petani lokal. Namun demikian, sekarang, kedelai lokal semakin langka karena petani beralih menanam komoditas lain, sehingga bahan baku berganti menggunakan kedelai impor dari Amerika dengan berbagai merek seperti Ship, Pagoda, dan lainnya.Persaingan dalam usaha tahu cukup banyak, karena ada beberapa pengrajin yang memasok ke pasar yang sama, seperti Karanganyar, Ngadirojo, Pacitan, dan Giriwoyo. Meskipun demikian, setiap pengrajin memiliki pelanggan dan pasarnya masing-masing. Bagi Pak Mulato, kunci bersaing adalah menjaga kualitas dan kebersihan tahu. Walaupun cara pembuatan hampir sama antar pengrajin, beliau berusaha menghasilkan tahu yang lezat dan bersih agar pembeli tetap setia. Selama puluhan tahun menjalankan usaha ini, Pak Mulato merasakan dampak ekonomi yang naik turun. Harga bahan baku dan minyak goreng sering kali naik, sementara harga jual tahu sulit dinaikkan karena khawatir pelanggan berkurang. Kondisi tersebut membuat keuntungan tidak selalu besar, tetapi cukup untuk membantu memenuhi kebutuhan keluarga. Bagi beliau, membuat tahu bukan sekadar pekerjaan, tetapi sudah menjadi bagian dari hidup. Ada rasa senang ketika usaha berjalan lancar, meski juga ada rasa berat saat menghadapi kerugian. Dari tempat yang dulunya tanah kosong, kini berdiri rumah, gudang, dan tempat produksi tahu yang dibangun sedikit demi sedikit dari hasil jerih payahnya. Meskipun pernah menjual peralatan usaha untuk biaya keluarga, Pak Mulato tetap berusaha bangkit dan membeli perlengkapan lagi demi mempertahankan usaha yang sudah turun-temurun. Hingga kini, beliau masih aktif memproduksi tahu, menjaga tradisi keluarga sekaligus menggerakkan ekonomi lokal.'},
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
          image:"/images/pabriktahu/5758.jpeg ",
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