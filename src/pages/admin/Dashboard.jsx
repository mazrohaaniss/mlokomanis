import SidebarAdmin from '../../components/SidebarAdmin';

function Dashboard({ handleLogout }) {
  return (
    <div className="flex">
    <SidebarAdmin handleLogout={handleLogout} />
      <div className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
        <p>Selamat datang di panel admin. Gunakan menu di samping untuk mengelola potensi dan program kerja.</p>
      </div>
    </div>
  );
}

export default Dashboard;