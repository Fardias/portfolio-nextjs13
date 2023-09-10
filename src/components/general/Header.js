import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Testimoni",
      link: "/testimoni",
    },
  ];

  const [nav, setNav] = useState(false);

  console.log("nav =", !nav);
  console.log("nav belum di klik statusnya =", nav);

  function handleNav() {
    setNav(!nav);
    if (!nav) document.body.style.overflow = "hidden"; // mencegah scrolling pada body

    console.log("nav sudah di klik statusnya =", nav);
  }

  function handleClose() {
    setNav(!nav);
    document.body.style.overflow = "auto";
  }

  function handleLink() {
    setNav(!nav);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <header className="container mx-auto flex justify-between py-5 mb-3 border-b-2 border-b-slate-400 items-center">
        <div className="logo">FARALF</div>
        <div className="space-x-5">
          <Link href="/contact" className="border-2 border-slate-400 px-3 py-1 md:hidden">
            Contact
          </Link>
          <i onClick={handleNav} class="ri-menu-fill md:hidden"></i>
        </div>

        <ul className="md:flex gap-5 font-light hidden">
          {menus.map((menu, index) => (
            <li className="hover:opacity-70" key={index}>
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>

        {/* mobile link */}
        {/* className="absolute flex flex-col gap-10 top-0 left-0 bg-slate-900 w-screen h-screen text-center justify-center items-center text-xl z-50" */}
        <ul
          className={
            !nav
              ? "absolute flex flex-col gap-10 top-0 left-0 translate-y-[-100%] opacity-0 transition-all ease-in duration-300 bg-slate-900 w-screen h-screen text-center justify-center items-center text-xl z-50"
              : "absolute flex flex-col gap-10 top-0 left-0 bg-slate-900 w-screen h-screen text-center justify-center items-center text-xl z-50 transition-all ease-in duration-300  swipeDown opacity-100"
          }
        >
          <i
            onClick={handleClose}
            class="ri-close-circle-fill absolute top-5 right-5"
          ></i>

          {menus.map((menu, index) => (
            <li onClick={handleLink} className="hover:opacity-70" key={index}>
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        {/* mobile link */}

        <div className="md:block hidden">
          <Link href="/contact" className="border-2 border-slate-400 px-3 py-1">
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}
