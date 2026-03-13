import { pexelsImageList } from "../Data/pexels_bread";
import { Ratinglist } from "../Data/pexels_bread";
import EnterAnimation from "../animations/EnterAnimation";
import GestureCard from "../animations/GestureAnimation";

const animationduration: number = 0.1

function MenuProduct() {
    const displayedProducts = pexelsImageList.slice(0, 5);

    return (
        <div className="menu-product flex flex-col bg-gray-light px-4 md:px-13 py-7 gap-6">
            <EnterAnimation>
                <p className="font-bold font-inter text-blue-dark text-[20px] max-[425px]:text-[14px]">
                    Menu Lainnya
                </p>
            </EnterAnimation>
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide">
                {displayedProducts.map((product, i) =>
                    <EnterAnimation key={product.nama} delay={i * animationduration}>
                        <div className="bg-white-theme p-3 rounded-xl flex flex-col gap-2.5 min-w-[160px] max-w-[160px] md:min-w-0 md:max-w-none">
                            <div className="relative w-full h-32 md:h-36 overflow-hidden border-2 rounded-lg">
                                <img src={product.img} alt={product.alt} className="w-full h-full object-cover" />
                                <img
                                    src={product.populer}
                                    className={`w-4 absolute left-2 top-1.5 ${product.populer === "" ? "hidden" : ""}`}
                                    alt={product.alt}
                                />
                                <p className={`absolute font-inter rounded-2xl flex items-center justify-center 
                                right-2 bottom-2 text-white text-[9px] px-1.5 py-0.5
                                ${product.stok === "Ready" ? "bg-green-600" : "bg-red-700"}`}>
                                    {product.stok}
                                </p>
                            </div>

                            <div className="description flex justify-between items-center gap-1.5">
                                <div className="left min-w-0">
                                    <p className="font-poppins font-semibold tracking-wider text-[12px] md:text-[14px] truncate">
                                        {product.nama}
                                    </p>
                                    <p className="font-inter text-[10px] md:text-xs font-bold bg-orange-light w-16 md:w-18 text-center rounded-4xl">
                                        {product.harga}
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p className="text-purple text-[12px] md:text-[14px] font-black">
                                            {product.rating}
                                        </p>
                                        <p className="font-inter text-[9px] md:text-[11px] mt-0.5 font-medium hidden sm:block">
                                            {
                                                product.rating === Ratinglist[1] ? "1.0/5.0" :
                                                    product.rating === Ratinglist[2] ? "2.0/5.0" :
                                                        product.rating === Ratinglist[3] ? "3.0/5.0" :
                                                            product.rating === Ratinglist[4] ? "4.0/5.0" :
                                                                product.rating === Ratinglist[5] ? "5.0/5.0" : ""
                                            }
                                        </p>
                                    </div>
                                    <p className="text-[8px] md:text-[10px] line-clamp-2">{product.deskripsi}</p>
                                </div>
                                <GestureCard>
                                    <div className="shrink-0 bg-purple rounded-lg p-2 md:p-2.5 transition-all ease-in-out duration-200 hover:bg-orange-light cursor-pointer">
                                        <img src="/Icon/IconBelanja.png" alt="Iconbelanja" className="w-5 md:w-7" />
                                    </div>
                                </GestureCard>
                            </div>
                        </div>
                    </EnterAnimation>
                )}
            </div>
        </div>
    );
}

export default MenuProduct;