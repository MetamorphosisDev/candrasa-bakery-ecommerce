import BannerScrolling from "../components/ImageScroll_Beranda";


function Beranda() {
    return (
        <div className="beranda-page">
            <div className="beranda-page-top flex beranda-page-top bg-gray-light px-4 py-3 sm:px-6 lg:px-8 items-center gap-6">
                <BannerScrolling/>
                <div className="bg-white p-5 w-400 h-90 rounded-[10px]">
                    <div className="bg-gray-light rounded-[14px] p-2.5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nisi iste porro recusandae eum tenetur dignissimos sint! Inventore sed dolores laborum fugiat aliquam dignissimos? Nostrum voluptatum fugiat soluta sapiente quod!</div>
                </div>
            </div>         
            <div className="beranda-page-category-product ">
            </div>
        </div>
    )
}

export default Beranda;