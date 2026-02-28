import BannerScrolling from "../components/ImageScroll_Beranda";


function Beranda() {
    return (
        <div className="beranda-page-top bg-gray-light px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:w-2/3">
                <BannerScrolling />
                </div>
                <div className="flex flex-col bg-white p-5 w-full lg:w-1/3 rounded-[10px] gap-3.5">
                    <div className="flex flex-row bg-gray-light rounded-[14px] px-5 py-5.5 justify-between">
                        <div className="left">
                            <p className="font-poppins font-semibold text-[16px]">Status Pesanan</p>
                            <div className="description">
                                <p className="text-blue-dark font-bold text-2xl">---</p>
                                <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-blue-dark font-semibold text-xs">Total: ---</p> 
                                    <p className="text-blue-dark font-semibold text-xs">WIB: ---</p> 
                                </div>
                                <button type="button" className="text-blue-dark font-poppins font-medium bg-white box-border border border-transparent hover:bg-brand-strong focus:ring-4 
                                focus:ring-brand-medium shadow-xs leading-5 rounded-base text-sm px-10 py-0.5 focus:outline-none rounded-4xl
                                group transition-all duration-100 hover:scale-102 hover:bg-blue-dark hover:text-white cursor-pointer">See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="right w-50">
                            <img src="/public/Images/hq720.jpg" alt="" className="rounded-[10px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda;

