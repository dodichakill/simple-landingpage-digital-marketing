import { Input } from "@/utils/types";
import React from "react";

function TextInput({ text, type }: Input) {
  return (
    <input
      type={type}
      placeholder={text}
      className="block  mt-3 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 "
    />
  );
}

export default TextInput;
