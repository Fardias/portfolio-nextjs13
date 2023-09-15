import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col space-x-1 py-5 items-center text-center md:flex-row md:text-start">
      <Head>
        <title>About - Faralf Portfolio</title>
        <meta name="description" content="About" />
      </Head>

      <div className="mb-3 mx-auto md:hidden animate__animated animate__zoomIn">
        <Image src="/poto/freya2.jpeg" alt="freya" width={100} height={100} className="rounded-xl"/>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="md:text-4xl text-2xl mt-3 font-bold xl:text-7xl animate__animated animate__lightSpeedInLeft text-[#64CCC5]">
          About me
        </h1>
        <div className="flex flex-col space-y-3">
          <div className="pb-3 md:w-[80%]  animate__animated animate__fadeInLeft animate__delay-1s">
          <p className="text-sm font-light xl:text-lg md:indent-5">
              Halo semua perkenalkan nama saya Fardias Alfathan, saya seorang Mahasiswa di <a href="/" target="_blank" className="text-[#4db5d7]">Universitas Budi Luhur</a> Fakultas Teknologi Informasi Jurusan Teknik Informatika.Alasan saya memutuskan untuk masuk ke TI adalah untuk memperdalami keterampilan saya dalam membangun website dan minat saya menjadi Frontend Web Developer.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block animate__animated animate__bounce animate__zoomIn origin-center animate__delay-2s">
        <Image src="/poto/freya2.jpeg" alt="freya" width={100} height={100} className="md:w-[500px] rounded-xl"/>
      </div>
    </div>
  );
}
