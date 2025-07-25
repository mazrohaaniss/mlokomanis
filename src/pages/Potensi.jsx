import { Link } from 'react-router-dom';

function Potensi({ potensiList }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Potensi Desa</h2>
      <div className="grid gap-4">
        {potensiList.map((potensi) => (
          <div key={potensi.id} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{potensi.nama}</h3>
            <p>{potensi.deskripsi}</p>
            <Link
              to={`/potensi/${potensi.nama.toLowerCase().replace(' ', '-')}`}
              className="text-blue-500 hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potensi;