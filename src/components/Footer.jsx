function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Hubungi Kami</h4>
            <p>Mlokomanis Wetan, Kecamatan Ngadirojo, Kab. Wonogiri</p>
            <p>Jawa Tengah</p>
            <p className="mt-2">📞 0812-3456-7890</p>
            <p>✉️ info@mlokomaniswetan.com</p>
          </div>
          <div className="text-right">
            <p>© 2025 Desa Mlokomanis Wetan. Semua hak cipta dilindungi undang-undang.</p>
            <div className="mt-2 flex justify-end gap-4">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;