import icons from "../utils/icons";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="font-poppins text-primary">
            <div className="grid grid-cols-3 justify-between items-center bg-background h-20 px-[5%] lg:px-[7%] 2xl:px-[15%] shadow-lg z-10 relative">
                <Link to="/" className="text-2xl font-bold">Holidaze</Link>

                <form action="search" className="relative w-3/4">
                    <input type="text" className="w-full border rounded-full border-secondary px-4 h-12 placeholder:text-secondary placeholder:text-sm" placeholder="Search through 124 venues..." />
                    <icons.searchIcon />
                </form>

                <nav className="flex gap-4 items-center justify-end">
                    <div className="flex mr-12">
                        <Link to="/" className="px-8">Home</Link>
                        <Link to="/contact" className="px-8">Contact</Link>
                        <Link to="/register" className="px-8">Venues</Link>
                    </div>

                    <icons.heartIcon />
                    <span>
                        <img src="germany.png" alt="" className="object-cover h-12 w-12 rounded-full" />
                    </span>
                </nav>
            </div>
        </header>
    )
}
