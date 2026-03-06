import BannerScrolling from "../components/ImageScroll_Beranda";
import { pexelsImageList } from "../Data/pexels_bread";
import { Ratinglist } from "../Data/pexels_bread";


function Status_Pesanan() {
    return (
        <div className="flex flex-row bg-gray-light rounded-[14px] px-4 py-5.5 justify-between items-center max-[445px]:rounded-[7px]">
            <div className="left">
                <p className="font-poppins font-semibold text-[12px] max-[445px]:text-[11px]">Status Pesanan</p>
                <div className="description flex flex-col gap-2">
                    <p className="text-blue-dark font-bold text-xl max-[445px]:text-xl">Diperjalanan</p>
                    <div className="flex flex-col gap-3">
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
        <div className="flex flex-row bg-gray-light rounded-[14px] px-5 py-5.5 justify-between items-center max-[445px]:rounded-[7px]">
            <div className="left flex flex-col gap-3">
                <p className="font-semibold text-[14px]">Riwayat Pemesanan</p>
                <div className="flex gap-4">
                    <img src="/public/Images/productriwayat.png" alt="riwayat" />
                    <div className="">
                        <p className="text-blue-dark font-bold">---</p>
                        <p className="text-xs">Total:   ---</p>
                    </div>
                </div>
            </div>
            <div className="right flex flex-col gap-1.5 pt-7 max-[445px]:hidden">
                <p className="text-xs">DD/MM/YYYY</p>
                <p className="text-center font-bold bg-orange-light rounded-4xl text-[11px]">---</p>
            </div>
        </div>
    )
}

function Pilihkategori() {
    const categories = [
        { src: "/Icon/Pilih-kategory/RotimANIS.png", alt: "rotimanis", label: "Roti Manis", imgClass: "w-13 pt-2.5 max-[720px]:w-10 max-[440px]:w-8.5 max-[400px]:w-7.5" },
        { src: "/Icon/Pilih-kategory/RotiGurih.png", alt: "rotigurih", label: "Roti Gurih", imgClass: "w-12 max-[720px]:w-10 max-[440px]:w-8.5 max-[400px]:w-7.5" },
        { src: "/Icon/Pilih-kategory/Bikuit.png", alt: "biskuit&snack", label: "Biskuit & Snack", imgClass: "w-12 max-[720px]:w-10 max-[440px]:w-8.5 max-[400px]:w-7.5" },
        { src: "/Icon/Pilih-kategory/Desert.png", alt: "Dessert", label: "Dessert", imgClass: "w-12 max-[720px]:w-10 max-[440px]:w-8.5 max-[400px]:w-7.5" },
        { src: "/Icon/Pilih-kategory/Paket.png", alt: "Paket", label: "Paket", imgClass: "w-12 max-[720px]:w-10 max-[440px]:w-8.5 max-[400px]:w-7.5" },
    ];

    return (
        <div className="bg-white w-full flex justify-between px-15 rounded-2xl shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)] max-[720px]:px-10 max-[540px]:rounded-xl max-[540px]:px-5">
            {categories.map((cat) => (
                <div key={cat.alt} className="group cursor-pointer">
                    <div className="items-center flex flex-col pt-2 pb-4">
                        <img src={cat.src} alt={cat.alt} className={cat.imgClass} />
                        <p className="relative text-sm max-[540px]:text-[11px] 
                            after:absolute after:bottom-0 after:left-1/2 after:h-0.75 rounded-4xl after:w-0 after:bg-blue-dark
                            after:transition-all after:duration-300 after:ease-in-out 
                            group-hover:after:w-full group-hover:after:left-0
                            group-hover:text-blue-dark transition-colors duration-200">
                            {cat.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Product() {
    return (
        <div className="product flex flex-col bg-gray-light px-13 py-7 gap-6">
            <p className="font-bold font-inter text-blue-dark text-[18px]">Roti lembut dengan berbagai isian manis untuk menemeani hari Anda.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {pexelsImageList.map((product) =>
                    <div className="bg-white-theme p-3 rounded-xl flex flex-col gap-2.5">
                        <div className="relative w-76 h-43 overflow-hidden border-2 rounded-lg">
                            <img src={product.img} alt={product.alt} className="w-full h-full object-cover" />
                            <img src={product.populer} className={`w-4.5 absolute inset-0 left-3 top-1.5 
                            ${product.populer === "" ? "hidden" : ""}`}
                                alt={product.alt} />
                            <p className={`absolute inset-0 font-inter w-15 h-4 rounded-2xl 
                            items-center justify-center left-57 top-35 text-white text-xs pl-3
                                ${product.stok === "Ready" ? "bg-green-600" : "bg-red-700"}`}>
                                {product.stok}
                                {/* {/* ${product.stok === "Ready" ? "bg-green-600" : product.stok === "Habis" ? "bg-red-700" : "bg-gray-400"}`}>
                                    {product.stok} */}
                            </p>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="font-poppins font-semibold tracking-wider text-[18px]">{product.nama}</p>
                                <p className="font-inter text-xs font-bold bg-orange-light w-20 text-center rounded-4xl">{product.harga}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-purple text-[20px] font-black"> {product.rating}</p>
                                    <p className="font-inter text-[13px] mt-1 font-medium">
                                        {
                                            product.rating === Ratinglist[1] ? "1.0/5.0" :
                                                product.rating === Ratinglist[2] ? "2.0/5.0" :
                                                    product.rating === Ratinglist[3] ? "3.0/5.0" :
                                                        product.rating === Ratinglist[4] ? "4.0/5.0" :
                                                            product.rating === Ratinglist[5] ? "5.0/5.0" : ""

                                        }
                                    </p>
                                </div>
                                <p className="text-[12px]">{product.deskripsi}</p>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function Beranda() {
    return (
        <div className="beranda">
            <div className="beranda-page-top bg-gray-light px-4 max-[445px]:py-2 max-[475px]:px-2.5">
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
            <div className="pilihkategori max-[1025px]:pt-5">
                <Pilihkategori />
            </div>
            <div className="p-7">
                <p className="font-poppins font-semibold">Menu Kami</p>
                <p>Pilih roti Favorit Anda dan nikmati berbagai promo menarik setiap hari.</p>
            </div>
            <div className="product">
                <Product />
            </div>
        </div>


    )
}

export default Beranda;

