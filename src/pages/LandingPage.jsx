import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div className="min-h-screen">
        <Navbar /> 
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#8B6914] to-[#D4C4A0] text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Selamat Datang di Desa
          </h1>
          <h2 className="text-6xl font-bold text-white mb-8">
            Mlokomanis Wetan
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Desa yang maju beriman, berdaya saing, dan demokratis di timur Jawa Tengah
          </p>
          <button className="bg-[#8B6914] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7A5C24] transition-colors duration-300">
            Jelajahi Desa Kami
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#4A5D23] mb-6">
                Tentang Desa Mlokomanis
              </h2>
              <div className="w-20 h-1 bg-[#8B6914] mb-6"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Desa Mlokomanis Wetan terletak setelah kemerdekaan Indonesia 
                  melalui pemekaran wilayah Kalitungguno Mlokomanis menjadi dua 
                  bagian yaitu Mlokomanis Kulon dan Mlokomanis Wetan.
                </p>
                <p>
                  Nama desa ini diambil berdasarkan adat istiadat atau bagian timur (wetan) 
                  dari desa induknya. Dengan topografi dataran rendah yang subur, 
                  manis Pemerintahan desa dimulai saat penyatuan Dongo 
                  Werakyoto, seiring juga gabeling dari Mengukuhkan sebagai 
                  kepala desa pertama.
                </p>
                <p>
                  Sejak itu, desa ini terus berkembang, terutama dalam bidang 
                  infrastruktur dan tata kelola pemerintahan desa kepemerintahan 
                  para kepala desa hingga kini dengan kepemimpinan Suwanjo.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500">Gambar Desa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#8B6914] mb-12">
            Visi & Misi
          </h2>
          <div className="w-20 h-1 bg-[#8B6914] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Visi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-center font-semibold text-lg text-gray-700 mb-4">
                  "Membangun Mlokomanis Wetan Maju, 
                  Beriman, Berdaya Saing dan Demokratis"
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visi ini menggambarkan cita-cita desa dalam 5 
                  tahun ke depan untuk menjadi desa yang maju 
                  di berbagai bidang, dengan prioritas pada 
                  kemajuan pertanian, tata kelola pemerintahan, 
                  dan pembangunan yang berkelanjutan.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8B6914] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Bidang Pemerintahan Membangun tata kelola pemerintahan yang baik, bersih, dan transparan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8B6914] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Bidang Pembangunan Mendorong partisipasi masyarakat dalam perencanaan pembangunan infrastruktur</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8B6914] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Bidang Sosial Kemasyarakatan Pemberdayaan RT/ RW, petani, perempuan, dan pemuda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Potensi Desa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#8B6914] mb-12">
            Potensi Desa
          </h2>
          <div className="w-20 h-1 bg-[#8B6914] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Pertanian */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pertanian</h3>
              <p className="text-gray-600">
                Sektor utama dengan hasil padi, jagung, dan sayuran yang melimpah
              </p>
            </div>

            {/* Pabrik Tahu */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pabrik Tahu</h3>
              <p className="text-gray-600">
                Industri rumahan yang menghasilkan tahu berkualitas tinggi
              </p>
            </div>

            {/* Karawitan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Karawitan</h3>
              <p className="text-gray-600">
                Seni budaya tradisional gamelan yang dilestarikan oleh masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-[#D4C4A0] to-[#8B6914]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#5D4A1A] mb-12">
            Hubungi Kami
          </h2>
          <div className="w-20 h-1 bg-[#5D4A1A] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#5D4A1A] mb-2">Alamat</h3>
                  <p className="text-[#5D4A1A]">Jl. Desa Mlokomanis Wetan, Kecamatan...</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#5D4A1A] mb-2">Telepon</h3>
                  <p className="text-[#5D4A1A]">(0274) 123-4567</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap"
                    className="w-full p-3 rounded-lg bg-white/50 border border-white/30 text-[#5D4A1A] placeholder-[#5D4A1A]/70"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-white/50 border border-white/30 text-[#5D4A1A] placeholder-[#5D4A1A]/70"
                  />
                  <textarea 
                    rows="4" 
                    placeholder="Pesan Anda"
                    className="w-full p-3 rounded-lg bg-white/50 border border-white/30 text-[#5D4A1A] placeholder-[#5D4A1A]/70 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-[#8B6914] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7A5C24] transition-colors duration-300">
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
       
      </section>
      <Footer />
    </div>
    
  );
}

export default LandingPage;