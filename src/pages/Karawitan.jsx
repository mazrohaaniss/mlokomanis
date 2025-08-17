import React, { useState } from "react";
import { ChevronRight, Music, Users, Calendar, X, ChevronLeft, User, Camera } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSectionKw";
import PosterSection from "../components/EventSectionKw";
import TentangKamiSection from "../components/ProfileKw";
import GaleriKegiatanSection from "../components/GaleriKw";


const testimonials = [
  {
    quote: "Swara gamelan merdu mendayu, serasa menambah kemuliaan, seakan-akan menambah usia yg bergelimang anugerah....",
    author: "Mbah Karimo",
    role: "Pembina",
    image:"/images/tokoh karawitan/Mbah Karimo.png"
  },
  {
    quote: "Yang disebut karawitan, yaitu gamelan yang ditabuh para niaga, menghasilkan titilaras dan suara yang bisa membawa suasana damai, tentram, dan salah satu musik pengantar tidur.",
    author: "Pak Moko",
    role: "Penabuh",
    image:"/images/tokoh karawitan/PakMoko.png"
  },
  {
    quote: "Dengan mendengarkan alunan Karawitan serasa muda kembali nan menambah umur lebih panjang.",
    author: "Bu Sri",
    role: "Penyanyi/Sekretaris",
    image:"/images/tokoh karawitan/BuSri.png"
  },
  {
    quote: "Orang luar negri saja mau dan senang belajar menabuh gamelan, mari anak-anak bangsa kita belajar nguri budaya tinggalan leluhur kita jangan sampeii kalah sama orang luar.",
    author: "Bu Sarmi",
    role: "Penyanyi/Bendahara",
    image:"/images/tokoh karawitan/BuSarmi.png"
  },
  {
    quote: "Lestarikan budaya adi luhung ini jangan sampai kalah dengan bangsa lain.",
    author: "Pak Imam",
    role: "Penabuh",
    image:"/images/tokoh karawitan/PakImam.png"
  },
  {
    quote: "Setiap gamelan berbicara, karawitanlah yang menyatukan rasa.",
    author: "Mbak Putri",
    role: "Hubungan Masyarakat",
    image:"/images/tokoh karawitan/MbakPutri.png"
  },
];

const ArtikelItems = [
  {
    title: "Latihan Sanggar Larasswara",
    image: "/images/latihan1.jpg",
    pdfUrl: "/dokumen/rizki/Karawitan dari Sejarah, Filosofi, hingga Panggung Dunia_Rizki Ahmad Febrian.pdf"
  },
  {
    title: "Latihan Karawitan Kelompok 3 KKNT 6",
    image: "/images/latihan2.jpg",
    pdfUrl: "/dokumen/rizki/Karawitan Lebih dari Sekedar Musik Tradisional_Rizki Ahmad Febrian.pdf"
  },
  {
    title: "Workshop Pengenalan Karawitan Kepada Murid SD Negeri 2",
    image: "/images/workshop.jpg",
    pdfUrl: "/dokumen/rizki/Makna dan Peran di Balik Setiap Instrumen Gamelan_Rizki Ahmad Febrian.pdf"
  }
];

const instruments = [
  { 
    name: "Bonang", 
    image: "/images/Gamelan/bonang.jpg",
    description: "Bonang adalah salah satu instrumen gamelan yang terdiri dari sejumlah gong kecil yang disusun dalam dua baris. Instrumen ini memiliki peran penting dalam menentukan melodi dan ritme dalam pertunjukan gamelan.",
    caraBermain: "Dimainkan dengan menggunakan dua pemukul (tabuh) yang terbuat dari kayu dengan ujung yang dilapisi kain atau kulit. Teknik pemukulan dilakukan dengan gerakan pergelangan tangan yang lembut dan tepat pada pusat gong untuk menghasilkan nada yang jernih."
  },
  { 
    name: "Gong", 
    image: "/images/Gamelan/gong.png",
    description: "Gong adalah instrumen perkusi logam besar yang menjadi inti dari orkestra gamelan. Gong menghasilkan suara bass yang dalam dan resonan, memberikan fondasi ritmis untuk seluruh ensemble.",
    caraBermain: "Dimainkan dengan pemukul khusus yang memiliki kepala bulat dan empuk. Pukulan dilakukan di bagian tengah gong dengan tekanan yang tepat untuk menghasilkan suara yang bergema panjang dan dalam."
  },
  { 
    name: "Kendang", 
    image: "/images/Gamelan/kendang.png",
    description: "Kendang adalah drum dua sisi yang berfungsi sebagai pemimpin ritme dalam gamelan. Instrumen ini mengatur tempo dan memberikan sinyal perubahan dalam komposisi musik gamelan.",
    caraBermain: "Dimainkan dengan kedua tangan menggunakan telapak tangan dan jari. Sisi yang berbeda menghasilkan nada yang berbeda - sisi kecil untuk nada tinggi dan sisi besar untuk nada rendah. Teknik bermain melibatkan kombinasi pukulan cepat dan lambat."
  },
  { 
    name: "Saron", 
    image: "/images/Gamelan/saron.png",
    description: "Saron adalah instrumen metallophone dengan bilah-bilah logam yang disusun di atas resonator kayu. Saron berperan dalam memainkan melodi utama dalam musik gamelan dengan nada yang jernih dan tegas.",
    caraBermain: "Dimainkan dengan satu pemukul (tabuh) yang terbuat dari kayu atau tanduk. Teknik bermain melibatkan pukulan yang tepat pada bilah logam sambil meredam bilah sebelumnya dengan tangan kiri untuk mengontrol resonansi."
  },
  { 
    name: "Kempul", 
    image: "/images/Gamelan/kempul.png",
    description: "Kempul adalah gong berukuran sedang yang digantung pada rangka kayu. Instrumen ini menghasilkan nada yang lebih tinggi dari gong besar dan berperan dalam memberikan aksen melodi dalam gamelan.",
    caraBermain: "Dimainkan dengan pemukul berlapis kain yang lembut. Pukulan dilakukan di bagian tengah dengan tekanan sedang untuk menghasilkan suara yang resonan namun tidak terlalu keras, menjaga keseimbangan dengan instrumen lain."
  },
  { 
    name: "Kenong", 
    image: "/images/Gamelan/kenong.jpg",
    description: "Kenong adalah serangkaian gong kecil yang diletakkan horizontal pada tali dalam bingkai kayu. Kenong berperan penting dalam menandai bagian-bagian struktur musik gamelan.",
    caraBermain: "Dimainkan dengan dua pemukul kecil yang dilapisi kain. Setiap kenong menghasilkan nada yang berbeda, dan dimainkan dengan teknik pukulan yang presisi untuk menandai frase-frase musik dengan jelas."
  },
  { 
    name: "Demung", 
    image: "/images/Gamelan/demung.jpg",
    description: "Demung adalah instrumen metallophone dengan bilah logam yang lebih besar dan tebal dari saron. Demung menghasilkan nada yang lebih rendah dan dalam, memberikan fondasi melodi untuk gamelan.",
    caraBermain: "Dimainkan dengan pemukul kayu yang lebih besar dari saron. Teknik bermain mirip dengan saron namun dengan gerakan yang lebih lambat dan tenang, sesuai dengan karakter suara yang dihasilkan."
  },
  { 
    name: "Gleng", 
    image: "/images/Gamelan/gleng.jpg",
    description: "Gleng adalah instrumen perkusi kecil yang terbuat dari logam kuningan. Meskipun berukuran kecil, gleng memiliki peran penting dalam memberikan aksen dan ornamen dalam musik gamelan.",
    caraBermain: "Dimainkan dengan cara dipukul menggunakan pemukul kecil atau bahkan dengan kuku jari. Teknik bermain memerlukan ketepatan timing yang tinggi karena suara yang dihasilkan singkat namun tajam."
  },
  { 
    name: "Gender", 
    image: "/images/Gamelan/gender.jpg",
    description: "Gender adalah instrumen metallophone dengan bilah logam tipis yang digantung di atas tabung resonator bambu. Gender menghasilkan suara yang lembut dan berperan dalam memainkan melodi ornamental.",
    caraBermain: "Dimainkan dengan dua pemukul yang dilapisi kain halus. Kedua tangan bekerja independen untuk memainkan melodi yang kompleks dengan teknik tremolo dan ornamentasi yang halus dan mengalir."
  },
  { 
    name: "Gambang", 
    image: "/images/Gamelan/gambang.jpg",
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
  {
    title: "Karawitan dan Filsafat",
    pdfUrl: "/dokumen/rizki/Filsafat Karawitan.pdf",
    image: "/images/dokum/latianls.png",
  },
  {
    title: "Karawitan Lebih dari Musik",
    pdfUrl: "/dokumen/rizki/Lebih dari sekedar musik.pdf",
    image: "/images/dokum/taliank3.png",
  },
  {
    title: "Makna dan Peran di Masyarakat",
    pdfUrl: "/dokumen/rizki/Makna dan Peran.pdf",
    image: "/images/dokum/latiansd.png",
  },
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
<div className="space-y-8 sm:space-y-12 lg:space-y-16 mt-12 sm:mt-16 lg:mt-20">
  <section className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-green-800 mb-6 sm:mb-8 lg:mb-12 pb-2 border-b-2 border-green-100 text-center max-w-4xl mx-auto">
      Tokoh Karawitan Mulyo Laras
    </h2>

    {/* Main Carousel Card with Side Navigation */}
    <div className="relative max-w-6xl xl:max-w-7xl mx-auto mb-6 sm:mb-8 lg:mb-12">
      
      {/* Mobile Layout - Stack vertically */}
      <div className="block sm:hidden">
        <div className="mb-4">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isSliding ? 'opacity-60 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            <div className="bg-[#dcfce7] rounded-xl shadow-lg overflow-hidden border border-green-100 relative mx-2">
              {/* Decorative Elements - Smaller for mobile */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-green-200/30 rounded-full -translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-200/30 rounded-full translate-x-8 translate-y-8"></div>
              
              <div className="relative p-4">
                {/* Profile Section - Mobile */}
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].author}
                      className="relative w-20 h-20 object-cover rounded-full border-3 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <Music className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      {testimonials[currentTestimonialIndex].author}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <p className="text-green-800 font-semibold text-xs uppercase tracking-wider">
                        {testimonials[currentTestimonialIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote Section - Mobile */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-green-300/50 font-serif leading-none select-none">
                    &ldquo;
                  </div>
                  <div className="absolute -bottom-4 -right-2 text-4xl text-green-300/50 font-serif leading-none select-none">
                    &rdquo;
                  </div>
                  
                  <blockquote className="relative text-center text-gray-800 text-sm leading-relaxed font-medium italic px-4 py-2">
                    {testimonials[currentTestimonialIndex].quote}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button 
            className="group bg-white hover:bg-green-100 p-3 rounded-full shadow-md hover:shadow-lg text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevTestimonial}
            disabled={isSliding}
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>
          
          <button 
            className="group bg-white hover:bg-green-100 p-3 rounded-full shadow-md hover:shadow-lg text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextTestimonial}
            disabled={isSliding}
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Tablet and Desktop Layout - Side by side */}
      <div className="hidden sm:flex items-center justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-8">
        {/* Previous Button - Left Side */}
        <button 
          className="group bg-white hover:bg-green-100 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          onClick={prevTestimonial}
          disabled={isSliding}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>

        {/* Main Card Container */}
        <div className="flex-1 min-w-0 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isSliding ? 'opacity-60 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            <div className="bg-[#dcfce7] rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border border-green-100 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 bg-green-200/30 rounded-full -translate-x-8 sm:-translate-x-10 md:-translate-x-12 lg:-translate-x-16 -translate-y-8 sm:-translate-y-10 md:-translate-y-12 lg:-translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 bg-emerald-200/30 rounded-full translate-x-10 sm:translate-x-12 md:translate-x-16 lg:translate-x-20 translate-y-10 sm:translate-y-12 md:translate-y-16 lg:translate-y-20"></div>
              
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].author}
                      className="relative w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-cover rounded-full border-3 sm:border-4 border-white shadow-lg md:shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <Music className="w-2.5 sm:w-3 md:w-3.5 lg:w-4 h-2.5 sm:h-3 md:h-3.5 lg:h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-900 mb-2 sm:mb-3 truncate">
                      {testimonials[currentTestimonialIndex].author}
                    </h3>
                    <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                      <p className="text-green-800 font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider truncate">
                        {testimonials[currentTestimonialIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="relative">
                  <div className="absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-green-300/50 font-serif leading-none select-none">
                    &ldquo;
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-2 sm:-right-3 md:-right-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-green-300/50 font-serif leading-none select-none">
                    &rdquo;
                  </div>
                  
                  <blockquote className="relative text-center text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium italic px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
                    {testimonials[currentTestimonialIndex].quote}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button - Right Side */}
        <button 
          className="group bg-white hover:bg-green-100 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 border border-green-100 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          onClick={nextTestimonial}
          disabled={isSliding}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>

    {/* Navigation Indicators */}
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex space-x-2 sm:space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentTestimonialIndex
                ? 'bg-gradient-to-r from-green-700 to-emerald-700 scale-125 shadow-lg'
                : 'bg-green-400 hover:bg-green-600 hover:scale-110'
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
        <h2 className="text-right text-3xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-200">
          Gamelan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument) => (
            <div 
              key={instrument.name} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105" 
              onClick={() => handleCardClick(instrument)}
            >
              {/* Gambar dengan ukuran seragam */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={instrument.image} 
                  alt={instrument.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
              </div>

              {/* Konten */}
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
              <div className="w-full overflow-hidden rounded-lg">
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
          Tahu Lebih Lanjut Tentang Karawitan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationItems.map((doc, idx) => (
            <a
              key={idx}
              href={doc.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 block"
            >
              {/* Preview pakai gambar lokal */}
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
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function KarawitanPage() {
  const [activeTab, setActiveTab] = useState(null);



  const tabs = [
    { id: 'profil', label: 'Profil', icon: <User className="w-5 h-5" /> },
    { id: 'tokoh', label: 'Tokoh Karawitan', icon: <Users className="w-5 h-5" /> },
    { id: 'instrumen', label: 'Alat Musik Gamelan', icon: <Music className="w-5 h-5" /> },
    { id: 'dokumentasi', label: 'Galeri Visual', icon: <Camera className="w-5 h-5" /> }
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
        return null;
    }
  };

return (
  <div className="min-h-screen bg-green-50">
    <Navbar />
    
    <HeroSection />

    <TentangKamiSection/>

    <PosterSection />

    <TestimonialsContent />
    
    <section>
      <div className="max-w-6xl mx-auto px-6 mt-40">
        <DocumentationContent />
      </div>
    </section>

    <GaleriKegiatanSection/>

    <section className="max-w-6xl mx-auto px-6 py-8 mb-30">
      <InstrumentsContent />
    </section>

    <Footer />
  </div>
);

}