import { useState } from 'react';
import SidebarAdmin from '../../components/SidebarAdmin';

function KelolaPotensi({ potensiList, addPotensi, deletePotensi, updatePotensi, handleLogout }) {
  const [formData, setFormData] = useState({ nama: '', deskripsi: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updatePotensi(editId, formData);
      setEditId(null);
    } else {
      addPotensi(formData);
    }
    setFormData({ nama: '', deskripsi: '' });
  };

  const handleEdit = (potensi) => {
    setFormData({ nama: potensi.nama, deskripsi: potensi.deskripsi });
    setEditId(potensi.id);
  };

  return (
    <div className="flex">
      <SidebarAdmin handleLogout={handleLogout} />
      <div className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Kelola Potensi</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mb-8">
          <div>
            <label className="block">Nama Potensi</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {editId ? 'Update' : 'Tambah'}
          </button>
        </form>
        <div className="grid gap-4">
          {potensiList.map((potensi) => (
            <div key={potensi.id} className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{potensi.nama}</h3>
              <p>{potensi.deskripsi}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(potensi)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePotensi(potensi.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KelolaPotensi;