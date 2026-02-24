import { Link } from "react-router-dom";

function Menu({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        to={href}
        className="group relative inline-block transition-transform duration-200 ease-in-out hover:scale-105"
      >
        {label}
        <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-center bg-white transition-transform duration-200 ease-out group-hover:scale-x-100" />
      </Link>
    </li>
  );
}

function IconNavbar({ href, imgsrc, alt }: { href: string; imgsrc: string; alt: string }) {
  return (
    <a href={href} className="inline-block transition-transform duration-300 ease-in-out hover:scale-110">
      <img src={imgsrc} alt={alt} className="w-5" />
    </a>
  );
}

function Navbar() {
  return (
    <div className="bg-blue-dark text-white py-4 font-poppins">
      <div className="flex items-center justify-between px-4 md:px-8">
        <div className="logo shrink-0">
          <img src="/Images/Logo/logo-web-full.png" alt="logocandrasa" className="w-36 md:w-40" />
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
          <ul className="menu flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold">
            <Menu label="Beranda" href="/" />
            <Menu label="Lokasi" href="/lokasi" />
            <Menu label="News & Promo" href="/newsandpromo" />
            <span className="bg-white w-px h-4 hidden md:block" />
            <Menu label="FAQ" href="/faq" />
            <Menu label="About" href="/about" />
          </ul>
          <div className="Option flex items-center gap-4 md:gap-6 pb-1">
            <IconNavbar href="https/" imgsrc="/Icon/IconBelanja.png" alt="Belanja" />
            <IconNavbar href="https/" imgsrc="/Icon/IconSettings.png" alt="Settings" />
          </div>
          <div className="login flex items-center gap-2.5 pb-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-xs font-medium">Login</p>
            <img src="/Icon/IconLogin.png" alt="Login" className="w-6 md:w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;