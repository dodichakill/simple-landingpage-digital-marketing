import React from "react";
import Container from "./Container";
import Carousel from "./Carousel";
import { FaDiagramProject, FaListCheck } from "react-icons/fa6";
import CardFeatured from "./CardFeatured";
import { FaBriefcase, FaUserTie } from "react-icons/fa";

function MainSection() {
  return (
    <div className="bg-gradient-to-br py-3 md:py-10 from-sky-600 via-emerald-700 to-sky-700">
      <Container>
        <div className="py-5 p-3 lg:p-10 bg-white rounded-lg mb-14">
          <h2 className="text-center lg:leading-[2rem] text-lg md:text-2xl lg:text-3xl font-semibold ">
            Fitur Unggulan
          </h2>
          <p className="text-xs text-center md:text-base my-3">
            Beberapa Keunggulan dari Bootcamp Xoss-Camp
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-8 items-center">
            <CardFeatured
              title="Pelatihan Terlengkap"
              description="Dapatkan pemahaman mendalam tentang digital marketing"
              icon={<FaListCheck className="text-sky-600 text-4xl" />}
            />
            <CardFeatured
              title="Proyek Praktik"
              description="Projek praktis untuk mengembangkan keterampilan."
              icon={<FaDiagramProject className="text-sky-600 text-4xl" />}
            />
            <CardFeatured
              title="Dukungan Profesional
              "
              description="Dapatkan bimbingan dari instruktur dan asisten berpengalaman"
              icon={<FaUserTie className="text-sky-600 text-4xl" />}
            />
            <CardFeatured
              title="Kesempatan Karir"
              description="Dapatkan kesempatan karir di dunia digital marketing."
              icon={<FaBriefcase className="text-sky-600 text-4xl" />}
            />
          </div>
        </div>
        <div className="py-5 p-3 lg:p-10 flex flex-col-reverse md:flex-row gap-5 bg-white rounded-lg">
          <div className="flex w-full md:mt-10 items-center gap-5">
            <Carousel />
          </div>
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-center lg:leading-[2.5rem] md:text-left text-lg md:text-2xl lg:text-3xl font-semibold ">
              Ulasan Tentang Pengalaman Bootcamp di Xoss-Camp
            </h2>
            <p className="text-xs text-center md:text-left md:text-base my-3">
              Berikut beberapa kumpulan ulusan para alumni tentang program
              bootcamp dari Xoss-Camp
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainSection;
