const Navbar = () => {
  return (
    <div className="navbar bg-darkblue text-white py-2.5">
      <div className="flex mx-auto px-4 items-center justify-between">
        <div className="logo">
          <img src="/Images/logoweb.png" alt="logocandrasa" />
        </div>
        <div className="searchlog"></div>
        <ul className="menu flex gap-7 text-xs font-Inter font-bold">
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#lokasi">Lokasi</a>
          </li>
          <li>
            <a href="#newsandpromo">News & Promo</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#aboutus">About</a>
          </li>
        </ul>
        <div className="Option">
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
