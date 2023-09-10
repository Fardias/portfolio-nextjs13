
export default function About() {
  return (
     <div className="container mx-auto flex flex-col space-x-1 py-5 items-center text-center md:flex-row md:text-start">

      <div className="mb-3 mx-auto md:hidden">
        <img src="/poto/freya2.jpeg" alt="freya" width={100} />
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="md:text-4xl text-xl mt-3 font-bold">Frontend Developer</h1>
        <div className="flex flex-col space-y-3">
          <div className="pb-3 md:w-[80%]">
            <p className="text-sm font-light">
              Front end merupakan salah satu bagian dari website yang
              menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat
              dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup
              Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <img src="/poto/freya2.jpeg" alt="freya" />
      </div>
    </div>
  );
}
