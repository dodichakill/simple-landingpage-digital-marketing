import Link from "next/link";
import React from "react";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-center p-5 flex items-center justify-center gap-3 text-white bg-gradient-to-r from-emerald-800 to-sky-800">
      <FaCopyright /> 2024 by{" "}
      <Link
        href={"https://www.linkedin.com/in/dodi-dev"}
        className="font-semibold underline underline-offset-1"
      >
        Dodi
      </Link>
    </div>
  );
}

export default Footer;
