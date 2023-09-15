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
        <div className="logo md:text-2xl lg:text-3xl md:font-bold text-[#64CCC5]">
          FARALF
        </div>
        <div className="space-x-5">
          <Link
            href="/contact"
            className="border-2 border-slate-400 px-3 py-1 md:hidden"
          >
            Contact
          </Link>
          <i onClick={handleNav} class="ri-menu-fill md:hidden"></i>
        </div>

        {/* link laptop screen */}
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="md:flex gap-5 font-light hidden xl:text-lg xl:">
            {menus.map((menu, index) => (
              <li
                className="transition-all duration-200 ease-in hover:text-[#64CCC5] hover:-translate-y-1"
                key={index}
              >
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          <div className="md:block hidden">
            <Link
              href="/contact"
              className="inline-block border-2 border-slate-400 px-3 py-1 transition-all duration-200 ease-in xl:text-lg hover:text-[#64CCC5] hover:scale-95"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* link laptop screen */}

        {/* mobile link */}
        {/* className="absolute flex flex-col gap-10 top-0 left-0 bg-slate-900 w-screen h-screen text-center justify-center items-center text-xl z-50" */}
        <ul
          className={
            !nav
              ? "absolute flex flex-col gap-10 top-0 left-0 translate-y-[-100%] opacity-0 transition-all ease-in duration-300 bg-colorBg w-screen h-screen text-center justify-center items-center text-xl z-50"
              : "absolute flex flex-col gap-10 top-0 left-0 bg-colorBg w-screen h-screen text-center justify-center items-center text-xl z-50 transition-all ease-in duration-300  swipeDown opacity-100"
          }
        >
          <i
            onClick={handleClose}
            class="ri-close-circle-fill absolute top-5 right-5"
          ></i>

          {menus.map((menu, index) => (
            <li
              onClick={handleLink}
              className="hover:text-[#64CCC5] transition-all duration-200 ease-in"
              key={index}
            >
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        {/* mobile link */}
      </header>
    </>
  );
}
