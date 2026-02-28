import React, { useState, useRef } from "react";
import { data } from "../Data/imagedata";

const GAP = 20; // gap-5 = 20px

const BannerScrolling: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Ambil lebar card secara dinamis, fallback 0 kalau belum dirender
  const getCardWidth = () => {
    if (cardRef.current) {
      return cardRef.current.offsetWidth + GAP;
    }
    return 0;
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // balik ke awal
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1); // balik ke akhir
    }
  };

  return (
    <div className="hidden md:block relative overflow-hidden py-8">

      {/* Track slide */}
      <div
        className="flex gap-5 px-6 py-4 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * getCardWidth()}px)` }}
      >
        {data.map((banner, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null} // hanya ukur card pertama
            className="relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[680px] overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={banner.img}
              alt={`Banner ${banner.Id}`}
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
      </div>

      {/* Tombol Prev */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center"
      >
        ←
      </button>

      {/* Tombol Next */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center"
      >
        →
      </button>

    </div>
  );
};

export default BannerScrolling;