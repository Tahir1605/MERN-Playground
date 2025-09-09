import { Search, ShoppingCart } from "lucide-react";
import { UseCartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const { cartItems , searchTerm , setSearchTerm} = UseCartContext()
    return (
        <div className="backdrop-blur-lg bg-white/70 shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-3xl font-extrabold cursor-pointer bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    MyShop
                </h1>

                {/* Nav Links */}
                <ul className="hidden md:flex gap-8 text-lg font-medium">
                    <Link to='/'>
                        <li className="relative group cursor-pointer">
                            <span className="hover:text-blue-600 transition">Collection</span>
                            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </Link>
                    <Link to='/cart'>
                        <li className="relative group cursor-pointer flex items-center gap-1">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="hover:text-blue-600 transition">Cart <sup><span className="text-white bg-red-500 rounded-full text-sm px-3 py-2">{cartItems.length}</span> </sup> </span>
                            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </Link>
                </ul>

                {/* Search Bar */}
                <div className="flex items-center bg-white/90 border border-gray-300 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm || ""}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="outline-none w-56 md:w-64 px-4 py-2 text-sm bg-transparent focus:w-72 transition-all duration-300"
                    />
                    <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition duration-300 flex items-center gap-2">
                        <Search className="w-4 h-4" /> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
