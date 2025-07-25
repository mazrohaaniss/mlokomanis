import { Link, useNavigate } from 'react-router-dom';

function SidebarAdmin({ handleLogout }) {
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-gray-100 p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/admin/dashboard" className="block p-2 hover:bg-blue-100 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/kelola-potensi" className="block p-2 hover:bg-blue-100 rounded">
            Kelola Potensi
          </Link>
        </li>
        <li>
          <Link to="/admin/kelola-proker" className="block p-2 hover:bg-blue-100 rounded">
            Kelola Proker
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="block p-2 hover:bg-red-100 rounded w-full text-left">
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarAdmin;