import BannerScroll from "../components/ImageScroll_Beranda";


function Beranda() {
    return (
        <div className="beranda-page">
            <div className="beranda-page-top beranda-page-top bg-gray-light px-4 py-3 sm:px-6 lg:px-8">
                <div>
                    <BannerScroll/>
                </div>
            </div>         
            <div className="beranda-page-category-product ">
            </div>
        </div>
    )
}

export default Beranda;