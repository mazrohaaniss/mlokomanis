import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Custom hook untuk mendeteksi klik di luar elemen
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  useOnClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = location.pathname === '/' && !isScrolled && !isMobileMenuOpen;

  // Komponen untuk satu link navigasi dengan animasi garis bawah
  const AnimatedNavLink = ({ to, children }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `relative group text-sm font-medium transition-colors duration-300 py-2 ${
          isActive ? 'text-white' : 'text-white hover:text-white'
        }`
      }
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
      <span className={`absolute bottom-0 left-0 block h-0.5 bg-yellow-400 w-full transform transition-transform duration-300 ease-out origin-center ${
          // Tampilkan garis jika aktif, atau saat di-hover
          useLocation().pathname === to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </NavLink>
  );
  
  const NavLinks = () => (
    <>
      <AnimatedNavLink to="/">Beranda</AnimatedNavLink>
      <AnimatedNavLink to="/potensi/pertanian">Pertanian</AnimatedNavLink>
      <AnimatedNavLink to="/potensi/pabrik-tahu">Pabrik Tahu</AnimatedNavLink>
      <AnimatedNavLink to="/potensi/karawitan">Karawitan</AnimatedNavLink>
    </>
  );

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent ? 'bg-transparent' : 'bg-green-900/90 backdrop-blur-lg shadow-lg'
      }`} 
      ref={mobileMenuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Seal_of_Wonogiri_Regency.svg/1200px-Seal_of_Wonogiri_Regency.svg.png" alt="Logo Desa" className="h-9 w-9" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <div className="w-9 h-9 bg-gray-300 rounded-full hidden"></div>
              <span className="text-white text-xl font-bold">Mlokomanis Wetan</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full bg-green-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}