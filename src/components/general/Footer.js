import Link from "next/link";

export default function Footer(){
    return(
        <footer className="container mx-auto border-t-2 border-t-slate-400 py-5 mt-10 flex font-light flex-col items-center justify-center text-center space-y-5 md:flex-row md:space-y-0">
            <ul className="flex gap-5 ">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Work</Link>
                </li>
                <li>
                    <Link href="/">Hobby</Link>
                </li>
            </ul>
            <div className="md:ml-auto text-center"><h1>Copyright © 2023</h1></div>
        </footer>
    )
}