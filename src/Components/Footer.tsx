function Footerr() {
    return (
        <footer className="bg-[#4040E8] text-white px-8 sm:px-12 lg:px-20 pt-12 pb-6">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mb-10">

                {/* Left - Logo + Kontak */}
                <div className="flex flex-col gap-6 max-w-xs">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Ganti src berikut dengan path logo Candrasa kamu */}
                        <img src="/Images/Logo/logo-web-full.png" alt="Candrasa Logo" className="w-50 object-contain" />
                    </div>

                    {/* Kontak Utama */}
                    <div className="flex flex-col gap-3">
                        <p className="font-poppins font-bold text-white text-base">Kontak Utama</p>
                        <div className="flex items-center gap-3">
                            {/* Mail Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="font-inter text-sm text-white/90">wecandrasa@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="font-inter text-sm text-white/90">(+62) 871-6602-0000</p>
                        </div>
                    </div>
                </div>

                {/* Right - 3 Kolom Link */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">

                    {/* Informasi */}
                    <div className="flex flex-col gap-3">
                        <p className="font-poppins font-bold text-white text-base">Informasi</p>
                        <ul className="flex flex-col gap-2">
                            {["Cara Pemesanan", "Metode Pemesanan", "Kontak / Customer Service", "Lokasi Toko", "Kebijakan"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Utama */}
                    <div className="flex flex-col gap-3">
                        <p className="font-poppins font-bold text-white text-base">Menu Utama</p>
                        <ul className="flex flex-col gap-2">
                            {["Beranda", "Katalog", "News & Promo", "FAQ", "About Us"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Jam Operasional */}
                    <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                        <p className="font-poppins font-bold text-white text-base">Jam Operasional</p>
                        <ul className="flex flex-col gap-2">
                            <li className="font-inter text-sm text-white/80">Senin-Jum'at: 08:00 – 21:00</li>
                            <li className="font-inter text-sm text-white/80">Sabtu – Minggu: 07:00 - 22:00</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 pt-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/70 text-xs font-inter">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                    <p>© 2026 Candrasa Bakery</p>
                </div>
            </div>
        </footer>
    )
}

export default Footerr