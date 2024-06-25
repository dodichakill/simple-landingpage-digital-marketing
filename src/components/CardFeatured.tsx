import { Featured } from "@/utils/types";
import React from "react";

function CardFeatured({ title, description, icon }: Featured) {
  return (
    <div className="p-5 w-full md:w-48 hover:bg-emerald-100 duration-150 rounded-lg bg-sky-100 flex flex-col items-center text-center">
      <div>{icon}</div>
      <p className="text-sm font-semibold mt-3 mb-2 text-slate-800">{title}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default CardFeatured;
