import React, { useState, useRef, useEffect, useCallback } from "react";
import { data } from "../Data/imagedata";
import LeftAnimation from "../animations/LeftAnimation";

const GAP = 20;
const AUTO_SCROLL_INTERVAL = 2000; // ms

const BannerScrolling: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getCardWidth = () => {
    if (cardRef.current) {
      return cardRef.current.offsetWidth + GAP;
    }
    return 0;
  };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  }, []);

  // Mulai auto-scroll
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goNext();
    }, AUTO_SCROLL_INTERVAL);
  }, [goNext]);

  // Auto-scroll aktif saat mount, bersih saat unmount
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoScroll]);

  // Reset timer saat user klik manual
  const handleNext = () => {
    goNext();
    startAutoScroll(); // reset interval
  };

  const handlePrev = () => {
    goPrev();
    startAutoScroll(); // reset interval
  };

  return (
    <div className="hidden md:block relative overflow-hidden py-8">
      <LeftAnimation>
        {/* Track slide */}
        <div
          className="flex gap-5 px-6 py-4 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * getCardWidth()}px)` }}
        >
          {data.map((banner, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-240 h-120 overflow-hidden rounded-2xl cursor-pointer"
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
      </LeftAnimation>
    </div>
  );
};

export default BannerScrolling;