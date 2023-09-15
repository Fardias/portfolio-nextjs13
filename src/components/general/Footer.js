import Link from "next/link";

export default function Footer(){
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
    return(
        <footer className="container mx-auto border-t-2 border-t-slate-400 py-5 mt-10 flex font-light flex-col items-center justify-center text-center space-y-5 md:flex-row md:space-y-0">
            {/* <ul className="flex gap-5 ">
            {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        ))}
            </ul> */}
            <div className="text-center"><h1>Made with ❤️ Copyright © 2023</h1></div>
        </footer>
    )
}