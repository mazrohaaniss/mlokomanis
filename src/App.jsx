import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Pertanian from './pages/Pertanian';
import InovasiProduk from './pages/InovasiProduk';
import HasilProkerKami from './pages/HasilProkerKami';
import PabrikTahu from './pages/PabrikTahu';
import Karawitan from './pages/Karawitan';
import NuggetTahu from './pages/NuggetTahu';
import VideoPengenalan from './pages/VideoPengenalan';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Halaman Utama */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute Halaman Potensi */}
        <Route path="/potensi/pertanian" element={<Pertanian />} />
        <Route path="/potensi/InovasiProduk" element={<InovasiProduk />} />
        <Route path="/potensi/HasilProkerKami" element={<HasilProkerKami />} />
        <Route path="/potensi/pabrik-tahu" element={<PabrikTahu />} />
        <Route path="/potensi/karawitan" element={<Karawitan />} />
        <Route path="/potensi/NuggetTahu" element={<NuggetTahu />} />
        <Route path="/potensi/VideoPengenalan" element={< VideoPengenalan />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;