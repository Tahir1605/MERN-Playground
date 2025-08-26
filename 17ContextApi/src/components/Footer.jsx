const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <h2 className="text-xl font-bold">MyShop</h2>

        {/* Middle Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition">About</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Contact</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Privacy Policy</li>
        </ul>

        {/* Right Side */}
        <p className="text-sm text-gray-200">© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
