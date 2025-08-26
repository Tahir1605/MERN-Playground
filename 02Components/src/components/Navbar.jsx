const Navbar = () => {
    return(
        <div className="bg-gray-900 flex justify-between items-center py-3">
            <h1 className="text-2xl text-white font-semibold mx-5 cursor-pointer">Navbar</h1>
            <ul className="flex gap-5 mx-5 text-white text-xl cursor-pointer font-semibold">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar