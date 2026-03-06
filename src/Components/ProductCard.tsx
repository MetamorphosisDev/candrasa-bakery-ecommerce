import { pexelsImageList } from "../Data/pexels_bread";
import { Ratinglist } from "../Data/pexels_bread";

function Product() {
    return (
        <div className="product flex flex-col bg-gray-light px-4 md:px-13 py-7 gap-6">
            <p className="font-bold font-inter text-blue-dark text-[18px]">Roti lembut dengan berbagai isian manis untuk menemeani hari Anda.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {pexelsImageList.map((product) =>
                    <div className="bg-white-theme p-3 rounded-xl flex flex-col gap-2.5">
                        <div className="relative w-full h-40 overflow-hidden border-2 rounded-lg">
                            <img src={product.img} alt={product.alt} className="w-full h-full object-cover" />
                            <img src={product.populer} className={`w-5 absolute left-3 top-1.5 
                            ${product.populer === "" ? "hidden" : ""}`}
                                alt={product.alt} />
                            <p className={`absolute font-inter rounded-2xl 
                            flex items-center justify-center right-2 bottom-2 text-white text-xs px-2 py-0.5
                                ${product.stok === "Ready" ? "bg-green-600" : "bg-red-700"}`}>
                                {product.stok}
                            </p>
                        </div>
                        <div className="description flex justify-between items-center gap-2">
                            <div className="left min-w-0">
                                <p className="font-poppins font-semibold tracking-wider text-[15px] md:text-[18px] truncate">{product.nama}</p>
                                <p className="font-inter text-xs font-bold bg-orange-light w-20 text-center rounded-4xl">{product.harga}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-purple text-[18px] md:text-[20px] font-black">{product.rating}</p>
                                    <p className="font-inter text-[11px] md:text-[13px] mt-1 font-medium">
                                        {
                                            product.rating === Ratinglist[1] ? "1.0/5.0" :
                                                product.rating === Ratinglist[2] ? "2.0/5.0" :
                                                    product.rating === Ratinglist[3] ? "3.0/5.0" :
                                                        product.rating === Ratinglist[4] ? "4.0/5.0" :
                                                            product.rating === Ratinglist[5] ? "5.0/5.0" : ""
                                        }
                                    </p>
                                </div>
                                <p className="text-[11px] md:text-[12px] line-clamp-2">{product.deskripsi}</p>
                            </div>
                            <div className="shrink-0 overflow-hidden bg-purple rounded-[10px] p-2.5 md:p-3.5 group transition-all ease-in-out duration-200 hover:bg-orange-light hover:scale-102">
                                <img src="/Icon/IconBelanja.png" alt="Iconbelanja" className="w-7 md:w-10" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product;