import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";   // ✅ use framer-motion
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyApp
          </span>
        </a>

        {/* Hamburger Icon */}
        <div>
          <FaBars
            className="text-2xl cursor-pointer text-white"
            onClick={handleSidebar}
          />
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}   // start off-screen (left side)
        animate={{ x: isOpen ? "0%" : "-100%" }} // toggle slide
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 min-h-screen bg-gray-900 shadow-lg z-50"
      >
        <ul className="flex flex-col p-6 space-y-4 text-white">
          <Link to="/" onClick={handleSidebar}>
            <motion.li
              whileHover={{
                //  scale:1.1,
                translateX:10,
                translateY:2
              }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="w-52 rounded-sm py-2 px-4 cursor-pointer text-xl font-semibold bg-sky-800">Home</motion.li>
          </Link>
          <Link to="/first" onClick={handleSidebar} >
            <motion.li 
              whileHover={{
                //  scale:1.1,
                translateX:10,
                translateY:2
              }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
            className="w-52 rounded-sm py-2 px-4 cursor-pointer text-xl font-semibold bg-sky-800">First</motion.li>
          </Link>

          <Link to="/second" onClick={handleSidebar} >
            <motion.li
             whileHover={{
                //  scale:1.1,
                translateX:10,
                translateY:2
              }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }} 
            className="w-52 rounded-sm py-2 px-4 cursor-pointer text-xl font-semibold bg-sky-800"> Second </motion.li>
          </Link>
        </ul>

      </motion.div>
    </nav>
  );
};

export default Navbar;
