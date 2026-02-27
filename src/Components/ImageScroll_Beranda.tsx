import React, { useState } from "react";
import { data } from "../Data/imagedata";

const BannerScrolling: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const doubled = [...data, ...data];

  return (
    <div className="relative overflow-hidden py-8">

      {/* Track scroll */}
      <div
        className={`flex w-max gap-5 px-6 py-4 ${
          hoveredIndex !== null ? "[animation-play-state:paused]" : ""
        } [animation:scroll-x_35s_linear_infinite]`}
      >
        {doubled.map((banner, index) => (
          <div
            key={index}
            className={`
              relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl

              w-[360px] h-[210px]
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                hoveredIndex === index
                  ? "scale-110 -translate-y-1.5 shadow-2xl z-20"
                  : "scale-100 translate-y-0 shadow-none z-0"
              }
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gambar */}
            <img
              src={banner.img}
              alt={`Banner ${banner.Id}`}
              className={`
                w-full h-full object-cover block
                transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${hoveredIndex === index ? "scale-[1.07]" : "scale-100"}
              `}
            />

            {/* Overlay teks */}
            <div
              className={`
                absolute inset-0 flex items-end px-5 pb-4
                bg-gradient-to-t from-black/60 to-transparent
                transition-opacity duration-300
                ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <span
                className={`
                  font-bold text-white text-base tracking-wide
                  transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${hoveredIndex === index ? "translate-y-0" : "translate-y-3"}
                `}
              >
                Banner {banner.Id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe scroll-x — tambahkan ke tailwind.config.js */}
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default BannerScrolling;