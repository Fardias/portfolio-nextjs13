import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container py-5">
      <Head>
        <title>Contact - Faralf Portfolio</title>
        <meta name="description" content="Contact" />
      </Head>

      <div>
        <h1 className="md:text-4xl text-xl font-bold">
          See Me On Social Media
        </h1>
        <div className="md:text-4xl text-2xl mt-3 space-x-5">
          
            <Link href="https://www.instagram.com/fardias1/" target="_blank">
            <i class="ri-instagram-line hover:opacity-50"></i>
            </Link>

            <Link href="https://www.youtube.com/channel/UCNMDs8I8XXu69Sie2zL1Qvg"
              target="_blank">
            <i class="ri-youtube-line hover:opacity-50"></i>
            </Link>

            <Link href="https://www.tiktok.com/@diasfathan" target="_blank">
            <i class="ri-tiktok-line hover:opacity-50"></i>
            </Link>
          
        </div>

        <div className="mt-7">
          <h1 className="md:text-4xl text-xl font-bold mb-3">Any Question ?</h1>

          <form className="flex flex-col" onSubmit={(e) => alert("Thanks")}>
            <label htmlFor="name">Name</label>

            <input
              className="p-1 text-black outline-none rounded-lg mt-1"
              name="name"
              id="name"
              type="text"
              required={true}
            />

            <br />

            <label className="" htmlFor="email">
              Email
            </label>

            <input
              className="p-1 text-black outline-none rounded-lg mt-1"
              name="email"
              id="email"
              type="email"
              required={true}
            />

            <br />
            <label htmlFor="message">Massage</label>
            <textarea
              className="p-1 text-black outline-none rounded-lg mt-1"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required={true}
            />

            <br />
            <button className="border-2 border-slate-400 px-3 py-1 mt-2 text-center rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
