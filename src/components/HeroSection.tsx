import React from "react";
import Container from "./Container";
import Image from "next/image";
import { IoIosRocket } from "react-icons/io";
import Button from "./Button";

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
              Sebuah Bootcamp Digital Marketing Terbaik
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Daftar ke pelatihan digital marketing Xoss-Camp yang memberikan
              jaminan pekerjaan. Dapatkan keterampilan yang diperlukan untuk
              memulai karir sukses di dunia digital marketing.
            </p>
            <Button
              icon={<IoIosRocket className="me-2" />}
              text="Daftar Sekarang"
            />
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
