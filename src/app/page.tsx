import Image from "next/image";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className="w-full bg-hero-pattern bg-cover bg-no-repeat">
      <Container>
        <div className="w-full bg-white md:p-10 rounded-lg flex flex-col-reverse md:flex-row items-center md:my-10 md:gap-5 md:justify-between">
          <div className="w-full h-[20rem] bg-white p-5 rounded-lg">
            <p className="text-sm">Hi, Selamat Datang di</p>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:leading-[3rem] my-3">
              Digital Marketing Job Guarantee Bootcamp
            </h1>
            <p className="text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, molestiae et reprehenderit enim rem vel voluptate minima
              iure esse dignissimos voluptatem ullam officia
            </p>
            <button
              type="button"
              className="focus:outline-none mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            >
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
