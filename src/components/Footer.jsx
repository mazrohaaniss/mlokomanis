import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Kolom 1: Tentang Desa */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logoDesa.png" alt="Logo Desa" className="h-9 w-9" />
              <span className="text-xl font-bold">Mlokomanis Wetan</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Desa yang terus berinovasi dalam pertanian dan budaya untuk mencapai kemajuan yang beriman, berdaya saing, dan demokratis.
            </p>
          </div>

          {/* Kolom 2: Jelajahi */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Jelajahi</h4>
            <ul className="space-y-3 text-green-200">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/potensi/pertanian" className="hover:text-white transition-colors">Potensi Pertanian</Link></li>
              <li><Link to="/potensi/pabrik-tahu" className="hover:text-white transition-colors">UMKM Pabrik Tahu</Link></li>
              <li><Link to="/potensi/karawitan" className="hover:text-white transition-colors">Seni Karawitan</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Hubungi Kami */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h4>
            <div className="space-y-4 text-green-200 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-white" />
                <p>Jl. Mlokomanis Wetan, Kec. Ngadirojo, Kab. Wonogiri, Jawa Tengah</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-white" />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-white" />
                <p>kontak@mlokomaniswetan.desa.id</p>
              </div>
            </div>
          </div>

          {/* Kolom 4: Media Sosial */}
          <div>
             <h4 className="text-lg font-semibold mb-4 text-white">Ikuti Kami</h4>
             <div className="flex space-x-4">
                <a href="https://www.instagram.com/mlokomaniswetan/" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-green-800 transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@DesaMlokomanisWetan" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-green-800 transition-colors">
                    <Youtube size={20} />
                </a>
             </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-300 text-sm">
          <p>
            © {new Date().getFullYear()} Pemerintah Desa Mlokomanis Wetan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;