import BannerScrolling from "../components/ImageScroll_Beranda";

function Status_Pesanan() {
    return (
        <div className="flex flex-row bg-gray-light rounded-[14px] px-4 py-5.5 justify-between items-center">
            <div className="left">
                <p className="font-poppins font-semibold text-[16px] max-[445px]:text-[11px]">Status Pesanan</p>
                <div className="description">
                    <p className="text-blue-dark font-bold text-xl max-[445px]:text-xl">Diperjalanan</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-2">
                            <p className="text-blue-dark font-semibold text-[10px]">
                                <span className="max-[445px]:hidden">Total: </span>
                                <span>Rp121.000</span>
                            </p>
                            <p className="text-blue-dark font-semibold text-[10px]">
                                <span className="max-[445px]:hidden">Time: </span>
                                <span>30Minute</span>
                            </p>
                        </div>
                        <button type="button" className="text-blue-dark font-poppins font-medium bg-white box-border border border-transparent hover:bg-brand-strong focus:ring-4 shadow-[0_2px_3px_rgba(0,0,0,0.15)] 
                                focus:ring-brand-medium leading-5 rounded-base text-sm px-7 py-0.5 focus:outline-none rounded-4xl
                                group transition-all duration-100 hover:scale-102 hover:bg-blue-dark hover:text-white cursor-pointer max-[445px]:px-5 max-[445px]:text-[11px]">See More</button>
                    </div>
                </div>
            </div>
            <div className="right w-42 max-[475px]:w-40 max-[445px]:hidden">
                <img src="/public/Images/Estimasi/dalam_perjalanan.png" alt="" className="rounded-[10px]" />
            </div>
        </div>
    )
}

function Riwayat_Pemesanan() {
    return (
        <div className="flex flex-row bg-gray-light rounded-[14px] px-5 py-5.5 justify-between items-center">
            <div className="left">
                <p className="font-poppins font-semibold text-[16px] max-[445px]:text-[11px]">Status Pesanan</p>
                <div className="description">
                    <p className="text-blue-dark font-bold text-xl max-[445px]:text-xl">Diperjalanan</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-2">
                            <p className="text-blue-dark font-semibold text-[10px]">
                                <span className="max-[445px]:hidden">Total: </span>
                                <span>Rp121.000</span>
                            </p>
                            <p className="text-blue-dark font-semibold text-[10px]">
                                <span className="max-[445px]:hidden">Time: </span>
                                <span>30Minute</span>
                            </p>
                        </div>
                        <button type="button" className="text-blue-dark font-poppins font-medium bg-white box-border border border-transparent hover:bg-brand-strong focus:ring-4 shadow-[0_2px_3px_rgba(0,0,0,0.15)] 
                                focus:ring-brand-medium leading-5 rounded-base text-sm px-7 py-0.5 focus:outline-none rounded-4xl
                                group transition-all duration-100 hover:scale-102 hover:bg-blue-dark hover:text-white cursor-pointer max-[445px]:px-5 max-[445px]:text-[11px]">See More</button>
                    </div>
                </div>
            </div>
            <div className="right w-42 max-[475px]:w-40 max-[445px]:hidden">
                <img src="/public/Images/Estimasi/dalam_perjalanan.png" alt="" className="rounded-[10px]" />
            </div>
        </div>
    )
}
function Beranda() {
    return (
        <div className="beranda-page-top bg-gray-light px-4 py-6 max-[445px]:py-2 max-[475px]:px-2.5">
            <div className="flex flex-col lg:flex-row items-center gap-6 max-[768px]:gap-0">
                <div className="w-full lg:w-2/3">
                    <BannerScrolling />
                </div>
                <div className="flex flex-col bg-white p-5 w-full lg:w-1/3 rounded-[10px] gap-3.5 max-[445px]:flex-row max-[475px]:p-2 justify-between">
                    <Status_Pesanan />
                    <Riwayat_Pemesanan />
                </div>
            </div>
        </div>

    )
}

export default Beranda;

