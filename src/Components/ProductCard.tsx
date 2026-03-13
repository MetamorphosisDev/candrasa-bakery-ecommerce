
import { pexelsImageList } from "../Data/pexels_bread";
import { Ratinglist } from "../Data/pexels_bread";
import EnterAnimation from "../animations/EnterAnimation";
import GestureCard from "../animations/GestureAnimation";



function Product() {
    return (
        <div className="product flex flex-col bg-gray-light px-4 md:px-13 py-7 gap-6">
            <EnterAnimation>
                <p className="font-bold font-inter text-blue-dark text-[18px] max-[425px]:text-[12px]">Roti lembut dengan berbagai isian manis untuk menemeani hari Anda.</p>
            </EnterAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {pexelsImageList.map((product, i) =>
                    <EnterAnimation key={product.nama} delay={i * 0.08}>
                        <div className="bg-white-theme p-3 rounded-xl flex flex-col gap-2.5">
                            <div className="relative w-full h-40 overflow-hidden border-2 rounded-lg max-[580px]:h-35 max-[465px]:h-27 max-[420px]:h-24">
                                <img src={product.img} alt={product.alt} className="w-full h-full object-cover" />
                                <img src={product.populer} className={`w-5 absolute left-3 top-1.5 max-[580px]:w-4 max-[420px]:w-3 max-[420px]:left-2
                            ${product.populer === "" ? "hidden" : ""}`}
                                    alt={product.alt} />
                                <p className={`absolute font-inter rounded-2xl 
                            flex items-center justify-center right-2 bottom-2 text-white text-xs px-2 py-0.5 max-[580px]:text-[9px] max-[420px]:text-[8px] max-[420px]:bottom-1.5
                                ${product.stok === "Ready" ? "bg-green-600" : "bg-red-700"}`}>
                                    {product.stok}
                                </p>
                            </div>
                            <div className="description flex justify-between items-center gap-2">
                                <div className="left min-w-0">
                                    <p className="font-poppins font-semibold tracking-wider text-[15px] md:text-[18px] truncate max-[580px]:text-[13px] max-[420px]:text-[11px]">{product.nama}</p>
                                    <p className="font-inter text-xs font-bold bg-orange-light w-20 text-center rounded-4xl max-[580px]:text-[11px] max-[420px]:text-[10px] max-[420px]:w-18">{product.harga}</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-purple text-[18px] md:text-[20px] font-black max-[580px]:text-[13px] max-[420px]:text-[12px]">{product.rating}</p>
                                        <p className="font-inter text-[11px] md:text-[13px] mt-1 font-medium max-[420px]:text-[10px] max-[380px]:hidden">
                                            {
                                                product.rating === Ratinglist[1] ? "1.0/5.0" :
                                                    product.rating === Ratinglist[2] ? "2.0/5.0" :
                                                        product.rating === Ratinglist[3] ? "3.0/5.0" :
                                                            product.rating === Ratinglist[4] ? "4.0/5.0" :
                                                                product.rating === Ratinglist[5] ? "5.0/5.0" : ""
                                            }
                                        </p>
                                    </div>
                                    <p className="text-[11px] md:text-[12px] line-clamp-2 max-[580px]:text-[8px] max-[420px]:text-[7px] max-[380px]:text-[6px]">{product.deskripsi}</p>
                                </div>
                                <GestureCard>
                                    <div className="shrink-0 overflow-hidden bg-purple rounded-[10px] p-2.5 md:p-3.5 group transition-all ease-in-out duration-200 hover:bg-orange-light cursor-pointer">
                                        <img src="/Icon/IconBelanja.png" alt="Iconbelanja" className="w-7 md:w-10 max-[420px]:w-5" />
                                    </div>
                                </GestureCard>
                            </div>
                        </div>
                    </EnterAnimation>
                )}
            </div>

            <div className="flex justify-center">
                <EnterAnimation>
                    <div className="flex bg-blue-dark px-5 py-2 rounded-2xl w-44 justify-center items-center cursor-pointer
                group transition-all ease-in-out duration-300 hover:scale-103 shadow-[0_5px_10px_rgba(0,0,0,0.2)] max-[525px]:w-37
                ">
                        <p className="font-poppins font-semibold text-white-theme max-[525px]:text-[12px]">Lebih Banyak‎ ‎ 》</p>
                    </div>
                </EnterAnimation>
            </div>
        </div>
    )
}

export default Product;