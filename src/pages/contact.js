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
          <i class="ri-instagram-line">
            <a href="/" target="_blank" />
          </i>
          <i class="ri-youtube-line">
            <a href="/" target="_blank" />
          </i>
          <i class="ri-tiktok-line">
            <a href="/" target="_blank" />
          </i>
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
            <button
          
              className="border-2 border-slate-400 px-3 py-1 mt-2 text-center rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
