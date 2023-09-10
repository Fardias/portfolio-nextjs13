import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="container mx-auto flex flex-col space-x-1 py-5 items-center text-center md:flex-row md:text-start">

      <Head>
        <title>Home - Faralf Portfolio</title>
        <meta name="description" content="Home" />
      </Head>

      <div className="mb-3 mx-auto md:hidden">
        <Image src="/poto/freya.jpeg" alt="freya" width={100} height={100}/>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="md:text-4xl text-xl mt-3 font-bold">Fardias Alfathan</h1>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <span>Frontend Developer</span>
            <span>Portfolio</span>
          </div>
          <div className="pb-3 md:w-[80%]">
            <p className="text-sm font-light">
              Front end merupakan salah satu bagian dari website yang
              menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat
              dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup
              Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.
            </p>
          </div>
        </div>
        <Link className="border-2 w-fit p-2 md:p-4 mx-auto md:mx-0" href="/">
          Get In Touch
        </Link>
      </div>

      <div className="hidden md:block">
        <Image src="/poto/freya.jpeg" alt="freya" width={100} height={100}/>
      </div>
    </div>
  );
}
