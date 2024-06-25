"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaDotCircle } from "react-icons/fa";
import CardTestimony from "./CardTestimony";
import { slides } from "@/utils/dataSlides";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="p-1 md:p-2 lg:p-3 mr-3 rounded-full font-semibold text-xl bg-sky-600 text-white cursor-pointer hover:bg-sky-700 transition active:bg-sky-800"
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-3">
          <CardTestimony
            key={currentIndex}
            currentIndex={currentIndex}
            slides={slides}
          />
        </div>
        <button
          onClick={nextSlide}
          className="p-1 md:p-2 lg:p-3 ml-3 rounded-full font-semibold text-xl bg-sky-600 text-white cursor-pointer hover:bg-sky-700 transition active:bg-sky-800"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex mt-5 justify-center py-2 gap-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className="text-2xl cursor-pointer bg-slate-200 rounded-full p-1"
          >
            <FaDotCircle
              key={slideIndex}
              className={`${
                currentIndex === slideIndex ? "text-sky-600" : "text-slate-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
