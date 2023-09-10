import Link from "next/link";

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
      name: "Hobby",
      link: "/hobby",
    },
  ];


  return (
    <header className="container mx-auto flex justify-between py-5 mb-3 border-b-2 border-b-slate-400 items-center">
      <div className="logo">FARALF</div>
      <i class="ri-menu-fill md:hidden"></i>
      <ul className="md:flex gap-5 font-light hidden">
        {menus.map((menu, index) => (
          <li className={menu.style} key={index}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        ))}

    

      </ul>
      <div className="md:block hidden">
        <Link href="/" className="border-2 border-slate-400 px-3 py-1">
          Contact
        </Link>
      </div>
    </header>
  );
}
