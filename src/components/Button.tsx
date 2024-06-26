import { ButtonType } from "@/utils/types";
import React from "react";

function Button({ text, icon }: ButtonType) {
  return (
    <button
      type="button"
      className="focus:outline-none mt-5 flex items-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
