import Head from "next/head";
import Image from "next/image";

export default function Testimoni() {
  return (
    <div className="py-5 relative">
      <Head>
        <title>Testimoni - Faralf Portfolio</title>
        <meta name="description" content="Testimoni" />
      </Head>

      <div className="border-2 h-[400px] md:w-fit object-cover mx-auto rounded-xl">
        <Image
          src="/poto/testimoni.jpeg"
          alt="freya"
          className="h-full object-cover opacity-50"
          width={600} height={100}
        />
      </div>

      <div className="absolute p-3 bg-slate-500 rounded-xl text-[14px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 xl:w-[500px]">
        <h1 className="">
          Dia sangat baik dalam membangun sebuah website dan juga dia sangat
          ramah, aku sangat senang bisa menggunakan jasa dari Fardias
        </h1>
        <span>- Jhonny</span>
      </div>
    </div>
  );
}
