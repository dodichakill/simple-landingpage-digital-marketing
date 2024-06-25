import React from "react";
import Container from "./Container";
import Image from "next/image";
import { IoIosRocket } from "react-icons/io";

function HeroSection() {
  return (
    <main className="w-full bg-hero-pattern bg-cover bg-no-repeat">
      <Container>
        <div className="w-full bg-white md:p-10 rounded-lg flex flex-col-reverse md:flex-row items-center md:my-10 md:gap-5 md:justify-between">
          <div className="w-full md:h-[20rem] bg-white p-5 rounded-lg">
            <p className="text-sm">
              Hi, Selamat Datang di{" "}
              <span className="font-semibold underline underline-offset-1">
                Xoss-camp
              </span>
            </p>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:leading-[3rem] my-3">
              A Digital Marketing Job Guarantee Bootcamp
            </h1>
            <p className="text-sm md:text-base">
              Daftar ke pelatihan digital marketing Xoss-Camp yang memberikan
              jaminan pekerjaan. Dapatkan keterampilan yang diperlukan untuk
              memulai karir sukses di dunia digital marketing.
            </p>
            <button
              type="button"
              className="focus:outline-none mt-5 flex items-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            >
              <IoIosRocket className="me-2" />
              Daftar Sekarang
            </button>
          </div>
          <div className="w-full flex md:h-[20rem] rounded-lg">
            <Image
              src={"/images/hero.png"}
              alt="hero-img"
              className="w-full rounded-lg h-full object-cover object-center md:p-5 overflow-hidden m-auto"
              width={300}
              height={150}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default HeroSection;
