import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Potensi from './pages/Potensi';
import Proker from './pages/Proker';
import Login from './pages/Login';
import Pertanian from './pages/Pertanian';
import PabrikTahu from './pages/PabrikTahu';
import Karawitan from './pages/Karawitan';
import Dashboard from './pages/admin/Dashboard';
import KelolaPotensi from './pages/admin/KelolaPotensi';
import KelolaProker from './pages/admin/KelolaProker';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [potensiList, setPotensiList] = useState([
    { id: 1, nama: 'Pertanian', deskripsi: 'Pertanian organik dengan hasil padi dan sayuran.' },
    { id: 2, nama: 'Pabrik Tahu', deskripsi: 'Produksi tahu tradisional skala rumah tangga.' },
    { id: 3, nama: 'Karawitan', deskripsi: 'Seni musik tradisional Jawa.' },
  ]);
  const [prokerList, setProkerList] = useState([
    { id: 1, nama: 'Pembersihan Desa', tanggal: '2025-08-01', deskripsi: 'Kegiatan gotong royong.' },
    { id: 2, nama: 'Pelatihan UMKM', tanggal: '2025-09-15', deskripsi: 'Pelatihan untuk pengusaha lokal.' },
  ]);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const addPotensi = (potensi) => {
    setPotensiList([...potensiList, { id: potensiList.length + 1, ...potensi }]);
  };

  const deletePotensi = (id) => {
    setPotensiList(potensiList.filter((item) => item.id !== id));
  };

  const updatePotensi = (id, updatedPotensi) => {
    setPotensiList(
      potensiList.map((item) => (item.id === id ? { id, ...updatedPotensi } : item))
    );
  };

  const addProker = (proker) => {
    setProkerList([...prokerList, { id: prokerList.length + 1, ...proker }]);
  };

  const deleteProker = (id) => {
    setProkerList(prokerList.filter((item) => item.id !== id));
  };

  const updateProker = (id, updatedProker) => {
    setProkerList(
      prokerList.map((item) => (item.id === id ? { id, ...updatedProker } : item))
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/potensi" element={<Potensi potensiList={potensiList} />} />
        <Route path="/potensi/pertanian" element={<Pertanian />} />
        <Route path="/potensi/pabrik-tahu" element={<PabrikTahu />} />
        <Route path="/potensi/karawitan" element={<Karawitan />} />
        <Route path="/proker" element={<Proker prokerList={prokerList} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/admin/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login handleLogin={handleLogin} />}
        />
        <Route
          path="/admin/kelola-potensi"
          element={
            isAuthenticated ? (
              <KelolaPotensi
                potensiList={potensiList}
                addPotensi={addPotensi}
                deletePotensi={deletePotensi}
                updatePotensi={updatePotensi}
              />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin/kelola-proker"
          element={
            isAuthenticated ? (
              <KelolaProker
                prokerList={prokerList}
                addProker={addProker}
                deleteProker={deleteProker}
                updateProker={updateProker}
              />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
