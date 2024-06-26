import { Testimony } from "@/utils/types";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

function CardTestimony({ slides, currentIndex }: Testimony) {
  return (
    <div className="p-5 bg-slate-100 lg:w-[18.5rem] rounded-lg shadow-sm">
      <div className="flex items-center gap-3 border-b pb-3 border-slate-300">
        <FaUserCircle className="text-5xl text-slate-600" />
        <div className="flex flex-col">
          <p className="">{slides[currentIndex].name} </p>
          <p className="text-xs text-slate-600">
            {slides[currentIndex].jobTitle}
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs lg:text-sm text-slate-700">
        {slides[currentIndex].description}
      </p>
    </div>
  );
}

export default CardTestimony;
