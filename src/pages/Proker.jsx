function Proker({ prokerList }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Program Kerja</h2>
      <div className="grid gap-4">
        {prokerList.length === 0 ? (
          <p>Tidak ada program kerja.</p>
        ) : (
          prokerList.map((proker) => (
            <div key={proker.id} className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{proker.nama}</h3>
              <p>Tanggal: {proker.tanggal}</p>
              <p>Deskripsi: {proker.deskripsi}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Proker;