import Head from "next/head";
import Image from "next/image";

export default function Home() {

  return (
    <div className="container mx-auto flex flex-col space-x-1 py-5 items-center text-center md:flex-row md:text-start">
      <Head>
        <title>Faralf Portfolio</title>
        <meta name="description" content="Home" />
      </Head>

      {/* IMAGE DI MOBILE */}
   
        <div className="mb-3 mx-auto transition-all md:hidden animate__animated animate__zoomIn">
        <Image
          src="/poto/freya.jpeg"
          alt="freya"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
   

      <div className="flex flex-col space-y-4">
        <h1 className="text-colorText md:text-4xl text-2xl mt-3 font-bold xl:text-7xl animate__animated animate__lightSpeedInLeft">
          <span className="text-[#64CCC5]">Far</span>dias{" "}
          <span className="text-[#64CCC5]">Alf</span>athan
        </h1>

        <div className="flex flex-col space-y-3 animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="flex flex-col lg:text-2xl">
            <span className="italic">Frontend Web Developer</span>
          </div>
          <div className="pb-3 md:w-[80%] pt-2">
            <p className="text-sm font-light xl:text-lg md:indent-5">
              Halo semua perkenalkan nama saya Fardias Alfathan, saya seorang
              Frontend Web Developer yang memiliki keahlian dalam membangun
              tampilan website yang menarik dan responsif. Saya memiliki
              pengalaman dalam penggunaan teknologi seperti HTML, CSS, dan
              JavaScript untuk membuat website yang mudah digunakan dan
              bermanfaat bagi pengunjungnya.
            </p>
            <br />
            <p className="text-sm font-light xl:text-lg md:indent-5">
              Selain itu, saya juga terampil dalam menggunakan beberapa
              framework seperti tailwindcss dan ReactJS. Saya selalu berusaha
              untuk mengembangkan diri dan mempelajari teknologi terbaru untuk
              memberikan hasil terbaik bagi klien. Terima kasih atas
              kunjungannya di profil saya.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block animate__animated animate__bounce animate__zoomIn origin-center animate__delay-2s">
        <Image
          src="/poto/freya.jpeg"
          alt="freya"
          width={100}
          height={100}
          className="md:w-[500px] rounded-xl"
        />
      </div>
    </div>
  );
}
