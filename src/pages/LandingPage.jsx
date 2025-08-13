import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  Eye,
  Target,
  MapPin,
  Phone,
  Leaf,
  Building2,
  Music
} from 'lucide-react';

const potensiDesa = [
  {
    title: 'Pertanian',
    desc: 'Sektor utama dengan hasil padi, jagung, dan sayuran yang melimpah.',
    icon: <Leaf size={32} />,
    to: '/potensi/pertanian',
  },
  {
    title: 'Industri Pabrik',
    desc: 'Industri rumahan yang menjadi tulang punggung ekonomi lokal.',
    icon: <Building2 size={32} />,
    to: '/potensi/pabrik-tahu',
  },
  {
    title: 'Karawitan',
    desc: 'Seni budaya gamelan yang terus hidup dan dilestarikan oleh masyarakat.',
    icon: <Music size={32} />,
    to: '/potensi/karawitan',
  },
];

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-white py-32 sm:py-40"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/d2/Paddy_fields_in_Wonogiri%2C_Central_Java%2C_Indonesia.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Selamat Datang di Desa Mlokomanis Wetan
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Desa yang maju beriman, berdaya saing, dan demokratis di timur Jawa Tengah.
          </p>
          <a
            href="#tentang"
            className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Jelajahi Desa <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-gradient-to-b from-white to-green-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-green-800 mb-4">
                Tentang Desa Mlokomanis Wetan
              </h2>
              <div className="w-24 h-1.5 bg-yellow-400 mb-8"></div>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Desa Mlokomanis Wetan terbentuk setelah kemerdekaan Indonesia melalui pemekaran wilayah Kalitungguno Mlokomanis menjadi dua bagian: Mlokomanis Kulon dan Mlokomanis Wetan.
                </p>
                <p>
                  Nama desa ini diambil berdasarkan adat istiadat, yaitu berada di bagian timur (wetan) dari desa induknya. Dengan topografi dataran rendah yang subur, desa ini memiliki potensi pertanian yang kaya.
                </p>
                <p>
                  Sejak awal berdirinya hingga kini di bawah kepemimpinan Suwanjo, desa ini terus berkembang, terutama dalam bidang infrastruktur dan tata kelola pemerintahan yang partisipatif.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src="https://pbs.twimg.com/profile_images/1623876913969389568/IFf1ugPr_400x400.jpg"
                alt="Pemandangan Desa Mlokomanis Wetan"
                className="rounded-2xl h-96 w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Visi & Misi</h2>
          <p className="text-gray-500 mb-12">Cita-cita dan langkah kami untuk masa depan desa.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
            {/* Visi */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-yellow-100">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-center font-semibold text-lg text-gray-700 mb-4 italic p-4 border-l-4 border-yellow-400 bg-white rounded-r-lg">
                "Membangun Mlokomanis Wetan Maju, Beriman, Berdaya Saing dan Demokratis"
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold">1.</span>
                  <span>Membangun tata kelola pemerintahan yang baik, bersih, dan transparan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold">2.</span>
                  <span>Mendorong partisipasi masyarakat dalam perencanaan pembangunan infrastruktur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold">3.</span>
                  <span>Memberdayakan seluruh elemen masyarakat: RT/RW, petani, perempuan, dan pemuda.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Potensi Desa */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Potensi Desa</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Kekayaan dan keunikan yang menjadi motor penggerak kemajuan Desa Mlokomanis Wetan.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {potensiDesa.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="bg-white rounded-2xl p-8 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform cursor-pointer block"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-green-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-green-200">Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 p-8 sm:p-12 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Kontak Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-3">
                    <MapPin size={20} className="text-yellow-400" /> Alamat Kantor Desa
                  </h3>
                  <p className="text-green-200 mt-1 pl-8">
                    Jl. Mlokomanis Wetan, Kec. Ngadirojo, Kabupaten Wonogiri, Jawa Tengah 57678
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-3">
                    <Phone size={20} className="text-yellow-400" /> Telepon & Email
                  </h3>
                  <p className="text-green-200 mt-1 pl-8">(0273) 123-456 / kontak@mlokomaniswetan.desa.id</p>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-green-200">Nama Lengkap</label>
                  <input type="text" id="name" className="mt-1 w-full p-3 rounded-lg bg-white/20 border-white/30 focus:border-yellow-400 focus:ring focus:ring-yellow-400/50 text-white placeholder-green-200" placeholder="Nama Anda" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-green-200">Email</label>
                  <input type="email" id="email" className="mt-1 w-full p-3 rounded-lg bg-white/20 border-white/30 focus:border-yellow-400 focus:ring focus:ring-yellow-400/50 text-white placeholder-green-200" placeholder="email@anda.com" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-green-200">Pesan</label>
                  <textarea id="message" rows="4" className="mt-1 w-full p-3 rounded-lg bg-white/20 border-white/30 focus:border-yellow-400 focus:ring focus:ring-yellow-400/50 text-white placeholder-green-200" placeholder="Tuliskan pesan Anda di sini..." />
                </div>
                <div className="text-right">
                  <button type="submit" className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition transform hover:scale-105">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
