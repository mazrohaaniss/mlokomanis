import React, { useState } from "react";
import { ChevronRight, Music, Users, Calendar, X, ChevronLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const testimonials = [
  {
    quote: "Karawitan bukan sekadar musik, tetapi jiwa dari peradaban Jawa. Setiap nada membawa cerita leluhur, setiap irama mengajarkan kesabaran dan keharmonisan hidup.",
    author: "Mbah Karimo",
    role: "PEMBINA & MAESTRO",
    image:"/images/tokoh karawitan/Mbah Karimo.png"
  },
  {
    quote: "Musik gamelan adalah jembatan antara tradisi dan modernitas, menghubungkan generasi dengan keindahan budaya.",
    author: "Sri",
    role: "PENYANYI",
    image:"/images/tokoh karawitan/BuSri.png"
  },
  {
    quote: "Jadi Gini.",
    author: "Kak Arsyad",
    role: "DPL",
    image:"/images/tokoh karawitan/arsyad.jpg"
  },
];

const instruments = [
  { 
    name: "Bonang", 
    image: "https://www.shutterstock.com/image-photo/one-traditional-javanese-musical-instruments-600nw-2505551935.jpg",
    description: "Bonang adalah salah satu instrumen gamelan yang terdiri dari sejumlah gong kecil yang disusun dalam dua baris. Instrumen ini memiliki peran penting dalam menentukan melodi dan ritme dalam pertunjukan gamelan.",
    caraBermain: "Dimainkan dengan menggunakan dua pemukul (tabuh) yang terbuat dari kayu dengan ujung yang dilapisi kain atau kulit. Teknik pemukulan dilakukan dengan gerakan pergelangan tangan yang lembut dan tepat pada pusat gong untuk menghasilkan nada yang jernih."
  },
  { 
    name: "Gong", 
    image: "https://static.republika.co.id/uploads/member/images/news/s6pms4kztq.jpg",
    description: "Gong adalah instrumen perkusi logam besar yang menjadi inti dari orkestra gamelan. Gong menghasilkan suara bass yang dalam dan resonan, memberikan fondasi ritmis untuk seluruh ensemble.",
    caraBermain: "Dimainkan dengan pemukul khusus yang memiliki kepala bulat dan empuk. Pukulan dilakukan di bagian tengah gong dengan tekanan yang tepat untuk menghasilkan suara yang bergema panjang dan dalam."
  },
  { 
    name: "Kendang", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Traditional_indonesian_drums.jpg/1200px-Traditional_indonesian_drums.jpg",
    description: "Kendang adalah drum dua sisi yang berfungsi sebagai pemimpin ritme dalam gamelan. Instrumen ini mengatur tempo dan memberikan sinyal perubahan dalam komposisi musik gamelan.",
    caraBermain: "Dimainkan dengan kedua tangan menggunakan telapak tangan dan jari. Sisi yang berbeda menghasilkan nada yang berbeda - sisi kecil untuk nada tinggi dan sisi besar untuk nada rendah. Teknik bermain melibatkan kombinasi pukulan cepat dan lambat."
  },
  { 
    name: "Saron", 
    image: "https://jabar.parto.id/asset/foto_produk/master_1q11ODCt70_1988_cara_memainkan_alat_musik_saron.jpg",
    description: "Saron adalah instrumen metallophone dengan bilah-bilah logam yang disusun di atas resonator kayu. Saron berperan dalam memainkan melodi utama dalam musik gamelan dengan nada yang jernih dan tegas.",
    caraBermain: "Dimainkan dengan satu pemukul (tabuh) yang terbuat dari kayu atau tanduk. Teknik bermain melibatkan pukulan yang tepat pada bilah logam sambil meredam bilah sebelumnya dengan tangan kiri untuk mengontrol resonansi."
  },
  { 
    name: "Kempul", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Traditional_indonesian_instruments04.jpg/1200px-Traditional_indonesian_instruments04.jpg",
    description: "Kempul adalah gong berukuran sedang yang digantung pada rangka kayu. Instrumen ini menghasilkan nada yang lebih tinggi dari gong besar dan berperan dalam memberikan aksen melodi dalam gamelan.",
    caraBermain: "Dimainkan dengan pemukul berlapis kain yang lembut. Pukulan dilakukan di bagian tengah dengan tekanan sedang untuk menghasilkan suara yang resonan namun tidak terlalu keras, menjaga keseimbangan dengan instrumen lain."
  },
  { 
    name: "Kenong", 
    image: "https://2.bp.blogspot.com/_L30hCZSn5Ls/TAha1_uM9dI/AAAAAAAAACM/APDHUe8vC7k/s1600/kenong.jpg",
    description: "Kenong adalah serangkaian gong kecil yang diletakkan horizontal pada tali dalam bingkai kayu. Kenong berperan penting dalam menandai bagian-bagian struktur musik gamelan.",
    caraBermain: "Dimainkan dengan dua pemukul kecil yang dilapisi kain. Setiap kenong menghasilkan nada yang berbeda, dan dimainkan dengan teknik pukulan yang presisi untuk menandai frase-frase musik dengan jelas."
  },
  { 
    name: "Demung", 
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_sLkFKBIFlyYvOuyrljUJDF3fiKGmseGSpjPnorAeljLFGlfDdc0gAT-MCN7SjzKGwih5YILyZEtfeIDjyt9QpacHqSAEwzq0ki1IOxDTL5nTyqazvp04kA6k2k5ZQG8JxjqDjoE8RXY/s1600/saron-1.jpg",
    description: "Demung adalah instrumen metallophone dengan bilah logam yang lebih besar dan tebal dari saron. Demung menghasilkan nada yang lebih rendah dan dalam, memberikan fondasi melodi untuk gamelan.",
    caraBermain: "Dimainkan dengan pemukul kayu yang lebih besar dari saron. Teknik bermain mirip dengan saron namun dengan gerakan yang lebih lambat dan tenang, sesuai dengan karakter suara yang dihasilkan."
  },
  { 
    name: "Gleng", 
    image: "https://media.istockphoto.com/id/1814688290/id/foto/gamelan-adalah-alat-musik-tradisional-jawa-dan-bali.jpg?s=612x612&w=0&k=20&c=k1rTxoEniixUohgkwkX8FH76UYTGHYwFXrDE5N7vTPI=",
    description: "Gleng adalah instrumen perkusi kecil yang terbuat dari logam kuningan. Meskipun berukuran kecil, gleng memiliki peran penting dalam memberikan aksen dan ornamen dalam musik gamelan.",
    caraBermain: "Dimainkan dengan cara dipukul menggunakan pemukul kecil atau bahkan dengan kuku jari. Teknik bermain memerlukan ketepatan timing yang tinggi karena suara yang dihasilkan singkat namun tajam."
  },
  { 
    name: "Gender", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Traditional_indonesian_instruments03.jpg/1200px-Traditional_indonesian_instruments03.jpg",
    description: "Gender adalah instrumen metallophone dengan bilah logam tipis yang digantung di atas tabung resonator bambu. Gender menghasilkan suara yang lembut dan berperan dalam memainkan melodi ornamental.",
    caraBermain: "Dimainkan dengan dua pemukul yang dilapisi kain halus. Kedua tangan bekerja independen untuk memainkan melodi yang kompleks dengan teknik tremolo dan ornamentasi yang halus dan mengalir."
  },
  { 
    name: "Gambang", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/COLLECTIE_TROPENMUSEUM_Xylofoon_met_twintig_toetsen_onderdeel_van_gamelan_Slendro_TMnr_500-9.jpg/640px-COLLECTIE_TROPENMUSEUM_Xylofoon_met_twintig_toetsen_onderdeel_van_gamelan_Slendro_TMnr_500-9.jpg",
    description: "Gambang adalah xylophone kayu dengan bilah-bilah kayu yang disusun dalam satu atau dua oktaf. Gambang memberikan warna musik yang khas dengan timbre kayu yang hangat dalam gamelan.",
    caraBermain: "Dimainkan dengan dua pemukul kayu kecil. Teknik bermain melibatkan gerakan cepat kedua tangan untuk memainkan melodi yang rumit, sering kali dengan pola-pola ritmis yang kompleks."
  },
  { 
    name: "Rebab", 
    image: "https://cdn1.katadata.co.id/media/images/thumb/2021/11/29/Alat_Musik_Rebab-2021_11_29-22_11_00_4bf73971b57e5470ab6fe0b633671f50_960x640_thumb.jpg",
    description: "Rebab adalah instrumen gesek berdawai dua yang terbuat dari kayu dengan resonator dari tempurung kelapa. Rebab berperan sebagai pemimpin melodi dan memberikan nuansa ekspresif dalam gamelan.",
    caraBermain: "Dimainkan dengan menggunakan busur (penggesek) yang terbuat dari bambu dan rambut kuda. Teknik bermain melibatkan gerakan gesek yang halus dengan kontrol dinamika yang ekspresif untuk menghasilkan melodi yang mengalir."
  },
  { 
    name: "Siter", 
    image: "https://alatmusiksiter.wordpress.com/wp-content/uploads/2015/12/siter.jpg",
    description: "Siter adalah instrumen petik dengan dawai-dawai logam yang direntangkan di atas kotak resonator kayu. Siter menghasilkan suara yang jernih dan kristal, memberikan ornamentasi melodi dalam gamelan.",
    caraBermain: "Dimainkan dengan cara dipetik menggunakan kuku jari atau pick kecil. Kedua tangan bekerja bersama - satu tangan memetik dawai sementara tangan lain dapat meredam atau mengatur nada untuk menghasilkan efek yang diinginkan."
  },
];

const documentationItems = [
  { title: "Latihan Sanggar Larasswara", image: "/images/dokum/latianls.png" },
  { title: "Latihan Karawitan Kelompok 3 KKNT 6", image: "/images/dokum/taliank3.png" },
  { title: "Workshop Pengenalan Karawitan Kepada Murid SD Negeri 2 Mlokowetan", image: "/images/workshopsd.png" },
  { title: "Diskusi Persiapan Malam Puncak", image: "/images/PembahasanMalpun.png" },
  { title: "Latihan Karawitan Murid SD", image: "/images/latiansd.png" },
  { title: "Workshop Kesehatan Psikis dalam Karawitan", image: "/images/Kesehatan.png" },
];

function TestimonialsContent() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextTestimonial = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsSliding(false);
    }, 150);
  };

  const prevTestimonial = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsSliding(false);
    }, 150);
  };

  const goToTestimonial = (index) => {
    if (isSliding || index === currentTestimonialIndex) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(index);
      setIsSliding(false);
    }, 150);
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-8 pb-2 border-b-2 border-green-200 text-center">
          Suara-Suara Maestro Karawitan
        </h2>
        
        {/* Main Carousel Card with Side Navigation */}
        <div className="relative max-w-7xl mx-auto mb-8 flex items-center gap-6">
          {/* Previous Button - Left Side */}
          <button 
            className="group bg-white hover:bg-green-50 p-4 rounded-full shadow-lg hover:shadow-xl text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            onClick={prevTestimonial}
            disabled={isSliding}
          >
            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          {/* Main Card Container */}
          <div className="flex-1 overflow-hidden">
            <div 
              className={`transition-all duration-500 ease-in-out ${
                isSliding ? 'opacity-60 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
              }`}
            >
              <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-2xl shadow-2xl overflow-hidden border border-green-100">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-200/30 to-transparent rounded-full translate-x-20 translate-y-20"></div>
                
                <div className="relative p-8 md:p-12">
                  {/* Profile Section */}
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                      <img
                        src={testimonials[currentTestimonialIndex].image}
                        alt={testimonials[currentTestimonialIndex].author}
                        className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
                        {testimonials[currentTestimonialIndex].author}
                      </h3>
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <p className="text-green-800 font-semibold text-sm md:text-base uppercase tracking-wider">
                          {testimonials[currentTestimonialIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-8xl text-green-300/50 font-serif leading-none select-none">
                      &ldquo;
                    </div>
                    <div className="absolute -bottom-8 -right-4 text-8xl text-green-300/50 font-serif leading-none select-none">
                      &rdquo;
                    </div>
                    
                    <blockquote className="relative text-center text-gray-800 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium italic px-8 py-4">
                      {testimonials[currentTestimonialIndex].quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button - Right Side */}
          <button 
            className="group bg-white hover:bg-green-50 p-4 rounded-full shadow-lg hover:shadow-xl text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            onClick={nextTestimonial}
            disabled={isSliding}
          >
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Navigation Indicators */}
        <div className="flex flex-col items-center gap-6">
          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentTestimonialIndex
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 scale-125 shadow-lg'
                    : 'bg-green-200 hover:bg-green-300'
                }`}
                onClick={() => goToTestimonial(index)}
                disabled={isSliding}
              />
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

function InstrumentsContent() {
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleCardClick = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const closeModal = () => {
    setSelectedInstrument(null);
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-200">
          Alat Musik Gamelan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument) => (
            <div 
              key={instrument.name} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105" 
              onClick={() => handleCardClick(instrument)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={instrument.image} 
                  alt={instrument.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{instrument.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{instrument.description}</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="text-sm">Lihat Detail & Cara Bermain</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedInstrument && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Header Modal */}
            <div className="flex-shrink-0 p-5 flex items-center justify-between border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{selectedInstrument.name}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Konten Modal */}
            <div className="flex-grow p-6 space-y-6 overflow-y-auto">
              {/* Gambar */}
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={selectedInstrument.image}
                  alt={selectedInstrument.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Deskripsi */}
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mr-3 flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  Deskripsi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedInstrument.description}
                </p>
              </div>

              {/* Cara Bermain */}
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mr-3 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Cara Bermain
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedInstrument.caraBermain}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DocumentationContent() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-200">
          Dokumentasi Kegiatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationItems.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-2 line-clamp-2">
                  {doc.title}
                </h3>
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="text-sm">Lihat Detail</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Lihat Semua Dokumentasi
          </button>
        </div>
      </section>
    </div>
  );
}

export default function KarawitanPage() {
  const [activeTab, setActiveTab] = useState('tokoh');

  const tabs = [
    { id: 'tokoh', label: 'Tokoh Karawitan', icon: <Users className="w-5 h-5" /> },
    { id: 'instrumen', label: 'Alat Musik Gamelan', icon: <Music className="w-5 h-5" /> },
    { id: 'dokumentasi', label: 'Dokumentasi', icon: <Calendar className="w-5 h-5" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tokoh':
        return <TestimonialsContent />;
      case 'instrumen':
        return <InstrumentsContent />;
      case 'dokumentasi':
        return <DocumentationContent />;
      default:
        return <TestimonialsContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section - matching Pertanian style */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto mt-16 px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Potensi Karawitan Desa Mlokomanis Wetan
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Melestarikan warisan budaya gamelan Jawa melalui pembelajaran tradisional 
              yang menghubungkan generasi dengan keindahan seni musik nusantara.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation - matching Pertanian style */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md hover:shadow-lg'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}