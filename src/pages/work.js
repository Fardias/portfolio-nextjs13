import Head from "next/head";

export default function Work() {
  return (
    <div className="md:flex md:space-x-5 py-5 xl:space-x-14">
      <Head>
        <title>Work - Faralf Portfolio</title>
        <meta name="description" content="work" />
      </Head>

      <figure className="flex gap-3">
        <div className="h-[300px] w-[200px]  rounded-xl overflow-hidden">
          <img
            className="h-[300px] object-cover items-center"
            src="/poto/1.jpeg"
            alt="freya"
          />
        </div>
        <div className=" h-[300px] w-full flex flex-col justify-around gap-3 ">
          <img
            className="h-[300px] object-cover items-center rounded-xl overflow-hidden"
            src="/poto/2.jpeg"
            alt="freya"
          />
          <img
            className="h-[120px] object-cover items-center rounded-xl overflow-hidden"
            src="/poto/3.jpeg"
            alt="freya"
          />
        </div>
      </figure>

      <div className="md:flex-shrink-0">
        <h1 className="md:text-4xl text-xl mt-3 font-bold">Featured Work</h1>
        <ul className="text-sm font-light mt-2 flex flex-col gap-2">
          <li>01 Membuat Website di perusahaan hoyoverse, 2027</li>
          <li>02 Membuat Desain di perusahaan hoyoverse, 2027</li>
          <li>03 Memotret Cosplayer di perusahaan hoyoverse, 2027</li>
        </ul>
      </div>
    </div>
  );
}
