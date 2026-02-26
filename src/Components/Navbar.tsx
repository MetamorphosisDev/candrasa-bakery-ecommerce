import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// NOTE AJA:
    // Responsive:
    // sm	  >640px	  Small         → tablet / landscape hp kecil
    // md	  >768px	  Medium        → tablet besar / laptop mini
    // lg	  >1024px	  Large         → laptop / desktop
    // xl	  >1280px	  Extra large   → desktop besar
    // 2xl	>1536px	  Very large    → layar ultra-wide

/* NOTE:: Kode Search bar - To Navbar */
function Searchbar() {
  return (
    <div className="searchbar">
      <form className="relative w-full md:w-64 lg:w-80">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 pl-10 text-sm 
              text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all duration-300"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </form>
    </div>
  );
}

/* NOTE:: Kode Komponen Menu - To Navbar */
function Menu({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li>
      <Link
        to={href}
        onClick={onClick}
        className={`group relative inline-block text-[11px] font-medium tracking-widest uppercase transition-all duration-200 ease-in-out hover:scale-105 ${
          isActive ? 'text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        {label}
        <span
          className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-px bg-white transition-all duration-300 ease-out ${
            isActive ? 'w-3' : 'w-0 group-hover:w-3'
          }`}
        />
      </Link>
    </li>
  );
}

/* NOTE:: Kode Icon Navbar */
function IconNavbar({
  href,
  imgsrc,
  alt,
}: {
  href: string;
  imgsrc: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      className="inline-block opacity-50 hover:opacity-100 transition-opacity duration-200"
    >
      <img src={imgsrc} alt={alt} className="w-4" />
    </a>
  );
}

/* NOTE:: Hamburger Button */
function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="opacity-50 hover:opacity-100 transition-opacity duration-200 focus:outline-none"
      aria-label="Toggle menu"
    >
      <img src="/Icon/HamburgerIcon.png" alt="Menu" className="w-5 hover:w-6 transition-all duration-200 ease-in-out" />
    </button>
  );
}

/* NOTE:: Mobile Drawer Menu */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-blue-dark z-50 flex flex-col transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <img
            src="/Images/Logo/logo-web-full.png"
            alt="logocandrasa"
            className="w-28"
          />
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Search in Drawer */}
        <div className="px-6 py-4 border-b border-white/10">
          <Searchbar />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-5">
            <Menu label="Beranda" href="/" onClick={onClose} />
            <Menu label="Lokasi" href="/lokasi" onClick={onClose} />
            <Menu label="News & Promo" href="/newsandpromo" onClick={onClose} />
            <div className="h-px bg-white/10 my-1" />
            <Menu label="FAQ" href="/faq" onClick={onClose} />
            <Menu label="About" href="/about" onClick={onClose} />
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="px-6 py-5 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <IconNavbar
                href="https/"
                imgsrc="/Icon/IconBelanja.png"
                alt="Belanja"
              />
              <IconNavbar
                href="https/"
                imgsrc="/Icon/IconSettings.png"
                alt="Settings"
              />
            </div>
            <Link
              to="/login_user"
              onClick={onClose}
              className="flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
            >
              Login
              <img
                src="/Icon/IconLogin.png"
                alt="Login"
                className="w-5 opacity-60"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* NOTE:: Kode Navbar */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="bg-blue-dark text-white font-poppins sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">

          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/Images/Logo/logo-web-full.png"
              alt="logocandrasa"
              className="w-24 sm:w-28 lg:w-32"
            />
          </div>

          {/* Searchbar - Hide */}
          <div className="hidden lg:block">
            <Searchbar />
          </div>

          <ul className="hidden lg:flex items-center gap-7">
            <Menu label="Beranda" href="/" />
            <Menu label="Lokasi" href="/lokasi" />
            <Menu label="News & Promo" href="/newsandpromo" />
            <span className="bg-white/20 w-px h-3" />
            <Menu label="FAQ" href="/faq" />
            <Menu label="About" href="/about" />
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Icons - desktop only */}
            <div className="hidden lg:flex items-center gap-5">
              <IconNavbar
                href="https/"
                imgsrc="/Icon/IconBelanja.png"
                alt="Belanja"
              />
              <IconNavbar
                href="https/"
                imgsrc="/Icon/IconSettings.png"
                alt="Settings"
              />
            </div>

            {/* Login - desktop only (full text version) */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="w-px h-3 bg-white/20" />
              <Link
                to="/login_user"
                className="flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
              >
                Login
                <img
                  src="/Icon/IconLogin.png"
                  alt="Login"
                  className="w-6 opacity-60"
                />
              </Link>
            </div>

            {/* Mobile/Tablet: Login icon + Hamburger */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link
                to="/login_user"
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
                aria-label="Login"
              >
                <img src="/Icon/IconLogin.png" alt="Login" className="w-7" />
              </Link>
              <HamburgerButton onClick={() => setMobileOpen(true)} />
            </div>
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="h-px bg-white/10" />
      </div>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Navbar;