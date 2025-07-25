import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Navbar({ isAuthenticated }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#7A5C24] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 relative flex items-center justify-between">
        {/* Logo + Judul */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <Link to="/" className="text-white text-lg font-semibold">Mlokomanis Wetan</Link>
        </div>

        {/* Menu Tengah */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 items-center text-white font-medium text-sm">
          <Link to="/" className="hover:text-gray-200 transition">Beranda</Link>
          <Link to="/tentang" className="hover:text-gray-200 transition">Tentang</Link>
          <Link to="/visi-misi" className="hover:text-gray-200 transition">Visi & Misi</Link>
          

          {/* Dropdown Potensi */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-200 flex items-center gap-1 focus:outline-none"
            >
              Potensi <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white text-gray-800 mt-2 rounded shadow-lg w-44 z-10">
                <Link to="/potensi/pertanian" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Pertanian</Link>
                <Link to="/potensi/pabrik-tahu" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Pabrik Tahu</Link>
                <Link to="/potensi/karawitan" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Karawitan</Link>
              </div>
            )}
          </div>

          <Link to="/proker-kami" className="hover:text-gray-200 transition">Proker Kami</Link>
          <Link to="/kontak" className="hover:text-gray-200 transition">Kontak</Link>
        </div>

        {/* Login di Kanan */}
        <div className="text-white font-medium text-sm">
          <Link to="/login" className="hover:text-gray-200 transition">
            {isAuthenticated ? 'Admin Dashboard' : 'Login Admin'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
