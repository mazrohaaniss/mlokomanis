import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Karawitan bukan sekadar musik, tetapi jiwa dari peradaban Jawa. Setiap nada membawa cerita leluhur, setiap irama mengajarkan kesabaran dan keharmonisan hidup.",
    author: "Mbah Karimo",
    role: "PEMBINA & MAESTRO",
    image:"/images/Mbah Karimo.png"
  },
  {
    quote: "Musik gamelan adalah jembatan antara tradisi dan modernitas, menghubungkan generasi dengan keindahan budaya.",
    author: "Sri",
    role: "PENYANYI",
    image:"/images/buSri.png"
  },
  {
    quote: "Setiap pertunjukan gamelan adalah sebuah perjalanan spiritual yang membawa kita lebih dekat kepada akar budaya kita.",
    author: "Kak Arsyad",
    role: "DPL",
    image:"/images/MbahArsyad.jpg"
  },
];

const instruments = [
  { 
    name: "Bonang", 
    image: "/images/Alat Gamelan/bonang.png",
    description: "Bonang adalah salah satu instrumen gamelan yang terdiri dari sejumlah gong kecil yang disusun dalam dua baris. Instrumen ini memiliki peran penting dalam menentukan melodi dan ritme dalam pertunjukan gamelan.",
    caraBermain: "Dimainkan dengan menggunakan dua pemukul (tabuh) yang terbuat dari kayu dengan ujung yang dilapisi kain atau kulit. Teknik pemukulan dilakukan dengan gerakan pergelangan tangan yang lembut dan tepat pada pusat gong untuk menghasilkan nada yang jernih."
  },
  { 
    name: "Gong", 
    image: "/images/Alat Gamelan/gong.png",
    description: "Gong adalah instrumen perkusi logam besar yang menjadi inti dari orkestra gamelan. Gong menghasilkan suara bass yang dalam dan resonan, memberikan fondasi ritmis untuk seluruh ensemble.",
    caraBermain: "Dimainkan dengan pemukul khusus yang memiliki kepala bulat dan empuk. Pukulan dilakukan di bagian tengah gong dengan tekanan yang tepat untuk menghasilkan suara yang bergema panjang dan dalam."
  },
  { 
    name: "Kendang", 
    image: "/images/Alat Gamelan/kendang.png",
    description: "Kendang adalah drum dua sisi yang berfungsi sebagai pemimpin ritme dalam gamelan. Instrumen ini mengatur tempo dan memberikan sinyal perubahan dalam komposisi musik gamelan.",
    caraBermain: "Dimainkan dengan kedua tangan menggunakan telapak tangan dan jari. Sisi yang berbeda menghasilkan nada yang berbeda - sisi kecil untuk nada tinggi dan sisi besar untuk nada rendah. Teknik bermain melibatkan kombinasi pukulan cepat dan lambat."
  },
  { 
    name: "Saron", 
    image: "/images/Alat Gamelan/saron.png",
    description: "Saron adalah instrumen metallophone dengan bilah-bilah logam yang disusun di atas resonator kayu. Saron berperan dalam memainkan melodi utama dalam musik gamelan dengan nada yang jernih dan tegas.",
    caraBermain: "Dimainkan dengan satu pemukul (tabuh) yang terbuat dari kayu atau tanduk. Teknik bermain melibatkan pukulan yang tepat pada bilah logam sambil meredam bilah sebelumnya dengan tangan kiri untuk mengontrol resonansi."
  },
  { 
    name: "Kempul", 
    image: "/images/Alat Gamelan/kempul.png",
    description: "Kempul adalah gong berukuran sedang yang digantung pada rangka kayu. Instrumen ini menghasilkan nada yang lebih tinggi dari gong besar dan berperan dalam memberikan aksen melodi dalam gamelan.",
    caraBermain: "Dimainkan dengan pemukul berlapis kain yang lembut. Pukulan dilakukan di bagian tengah dengan tekanan sedang untuk menghasilkan suara yang resonan namun tidak terlalu keras, menjaga keseimbangan dengan instrumen lain."
  },
  { 
    name: "Kenong", 
    image: "/images/Alat Gamelan/kenong.png",
    description: "Kenong adalah serangkaian gong kecil yang diletakkan horizontal pada tali dalam bingkai kayu. Kenong berperan penting dalam menandai bagian-bagian struktur musik gamelan.",
    caraBermain: "Dimainkan dengan dua pemukul kecil yang dilapisi kain. Setiap kenong menghasilkan nada yang berbeda, dan dimainkan dengan teknik pukulan yang presisi untuk menandai frase-frase musik dengan jelas."
  },
  { 
    name: "Demung", 
    image: "/images/Alat Gamelan/demung.png",
    description: "Demung adalah instrumen metallophone dengan bilah logam yang lebih besar dan tebal dari saron. Demung menghasilkan nada yang lebih rendah dan dalam, memberikan fondasi melodi untuk gamelan.",
    caraBermain: "Dimainkan dengan pemukul kayu yang lebih besar dari saron. Teknik bermain mirip dengan saron namun dengan gerakan yang lebih lambat dan tenang, sesuai dengan karakter suara yang dihasilkan."
  },
  { 
    name: "Gleng", 
    image: "/images/Alat Gamelan/gleng.png",
    description: "Gleng adalah instrumen perkusi kecil yang terbuat dari logam kuningan. Meskipun berukuran kecil, gleng memiliki peran penting dalam memberikan aksen dan ornamen dalam musik gamelan.",
    caraBermain: "Dimainkan dengan cara dipukul menggunakan pemukul kecil atau bahkan dengan kuku jari. Teknik bermain memerlukan ketepatan timing yang tinggi karena suara yang dihasilkan singkat namun tajam."
  },
  { 
    name: "Gender", 
    image: "/images/Alat Gamelan/gender.png",
    description: "Gender adalah instrumen metallophone dengan bilah logam tipis yang digantung di atas tabung resonator bambu. Gender menghasilkan suara yang lembut dan berperan dalam memainkan melodi ornamental.",
    caraBermain: "Dimainkan dengan dua pemukul yang dilapisi kain halus. Kedua tangan bekerja independen untuk memainkan melodi yang kompleks dengan teknik tremolo dan ornamentasi yang halus dan mengalir."
  },
  { 
    name: "Gambang", 
    image: "/images/Alat Gamelan/gambang.png",
    description: "Gambang adalah xylophone kayu dengan bilah-bilah kayu yang disusun dalam satu atau dua oktaf. Gambang memberikan warna musik yang khas dengan timbre kayu yang hangat dalam gamelan.",
    caraBermain: "Dimainkan dengan dua pemukul kayu kecil. Teknik bermain melibatkan gerakan cepat kedua tangan untuk memainkan melodi yang rumit, sering kali dengan pola-pola ritmis yang kompleks."
  },
  { 
    name: "Rebab", 
    image: "/images/Alat Gamelan/rebab.png",
    description: "Rebab adalah instrumen gesek berdawai dua yang terbuat dari kayu dengan resonator dari tempurung kelapa. Rebab berperan sebagai pemimpin melodi dan memberikan nuansa ekspresif dalam gamelan.",
    caraBermain: "Dimainkan dengan menggunakan busur (penggesek) yang terbuat dari bambu dan rambut kuda. Teknik bermain melibatkan gerakan gesek yang halus dengan kontrol dinamika yang ekspresif untuk menghasilkan melodi yang mengalir."
  },
  { 
    name: "Siter", 
    image: "/images/Alat Gamelan/siter.png",
    description: "Siter adalah instrumen petik dengan dawai-dawai logam yang direntangkan di atas kotak resonator kayu. Siter menghasilkan suara yang jernih dan kristal, memberikan ornamentasi melodi dalam gamelan.",
    caraBermain: "Dimainkan dengan cara dipetik menggunakan kuku jari atau pick kecil. Kedua tangan bekerja bersama - satu tangan memetik dawai sementara tangan lain dapat meredam atau mengatur nada untuk menghasilkan efek yang diinginkan."
  },
];

export default function KarawitanPage() {
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const openModal = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const closeModal = () => {
    setSelectedInstrument(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-900 scroll-smooth min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="/images/hero-karawitan.png"
          alt="karawitan fade"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-amber-900 text-center px-6">
          <h1 className="text-6xl font-bold mb-4">Karawitan</h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Tokoh Section */}
      <motion.section
        className="py-28 px-4 relative bg-gradient-to-b from-white to-amber-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 tracking-tight">
                Tokoh Karawitan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Apa kata mereka tentang Karawitan.
              </p>
            </motion.div>
          </div>

          {/* Card Testimoni */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                className="bg-white/90 backdrop-blur-md rounded-3xl px-8 py-12 shadow-xl border border-amber-100"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration:  0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              >

                <div className="flex justify-center mb-3">
                  <img
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].author}
                    className="w-24 h-24 object-cover rounded-full border-4 border-amber-200 shadow-md"
                  />
                </div>

                <div className="text-7xl text-amber-400 font-serif mb-1 text-left leading-none pl-10">
                  &ldquo;
                </div>

                <blockquote className="text-center text-gray-800 text-lg md:text-xl leading-relaxed font-normal italic">
                  {testimonials[currentTestimonialIndex].quote}
                </blockquote>

                <div className="text-7xl text-amber-400 font-serif -mt-3 text-right leading-none pr-1">
                  &rdquo;
                </div>

                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-amber-900">
                    {testimonials[currentTestimonialIndex].author}
                  </h3>
                  <p className="text-amber-700 font-medium tracking-wide text-sm md:text-base">
                    {testimonials[currentTestimonialIndex].role}
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2">
                  <motion.button 
                    className="bg-white p-3 md:p-4 rounded-full shadow-md hover:shadow-xl border border-amber-200 text-amber-700 hover:text-amber-800 transition-all"
                    whileHover={{ scale: 1.1, x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevTestimonial}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                </div>
                <div className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2">
                  <motion.button 
                    className="bg-white p-3 md:p-4 rounded-full shadow-md hover:shadow-xl border border-amber-200 text-amber-700 hover:text-amber-800 transition-all"
                    whileHover={{ scale: 1.1, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextTestimonial}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Instruments Section */}
      <motion.section
        className="py-32 bg-gradient-to-b from-white/50 to-amber-50/50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-4 tracking-tight">
                Gamelan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Koleksi instrumen tradisional yang membentuk orkestra gamelan Jawa, 
                masing-masing dengan karakteristik dan teknik bermain yang unik
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {instruments.map((item, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-2xl transition-all duration-500 group-hover:border-amber-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-amber-900 mb-3 tracking-wide">
                      {item.name}
                    </h4>
                    <motion.button
                      className="text-sm text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-6 py-3 rounded-full transition-all duration-300 font-semibold tracking-wide shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(item)}
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedInstrument && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >


              {/* Modal Content */}
              <div className="relative">
                {/* Close Button - positioned on the card */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.button
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg text-amber-700 hover:text-amber-800 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedInstrument.image}
                    alt={selectedInstrument.name}
                    className="w-full h-full object-contain bg-gradient-to-br from-amber-50 to-orange-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {selectedInstrument.name}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Deskripsi
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedInstrument.description}
                    </p>
                  </div>

                  {/* Cara Bermain */}
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      Cara Bermain
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedInstrument.caraBermain}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dokumentasi Section */}
      <motion.section
        className="py-32 bg-gradient-to-b from-white to-amber-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-4 tracking-tight">
                Dokumentasi
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Momen-momen berharga dalam perjalanan melestarikan 
                warisan budaya gamelan Jawa
              </p>
            </motion.div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Latihan Sanggar Larasswara", image: "/images/larasswara.png" },
              { title: "Latihan Karawitan Kelompok 3 KKNT 6", image: "/images/latiank3.png" },
              { title: "Workshop Pengenalan Karawitan Kepada Murid SD Negeri 2 Mlokowetan", image: "/images/workshopsd.png" },
              { title: "Diskusi Persiapan Malam Puncak", image: "/images/PembahasanMalpun.png" },
              { title: "Latihan Karawitan Murid SD", image: "/images/latiansd.png" },
              { title: "Workshop Kesehatan Psikis dalam Karawitan", image: "/images/Kesehatan.png" },
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                className="relative group overflow-hidden rounded-2xl shadow-lg border border-amber-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-md shadow backdrop-blur-sm">
                    {doc.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Semua Dokumentasi
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}