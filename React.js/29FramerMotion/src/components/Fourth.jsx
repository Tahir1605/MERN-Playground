import React from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'motion/react'

const Fourth = () => {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (val) => {
        console.log(val);
    });

    // Animate navbar color on scroll
    const backgroundColor = useTransform(scrollY, [0, 150], ["#ffffff", "#291616"]);
    const color = useTransform(scrollY, [0, 150], [ "#291616" , "#ffffff"]);


    return (
        <div className="bg-gray-50 h-[5000px]">
            {/* Navbar */}
            <motion.nav
                style={{
                    backgroundColor,
                    backdropFilter: "blur(12px)",
                    color,
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
                className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md"
            >
                <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold ">MyLogo</h1>

                    {/* Links */}
                    <ul className="flex space-x-6">
                        <li><a href="#home" className=" hover:text-blue-600 transition font-bold">Home</a></li>
                        <li><a href="#about" className=" hover:text-blue-600 transition font-bold">About</a></li>
                        <li><a href="#services" className=" hover:text-blue-600 transition font-bold">Services</a></li>
                        <li><a href="#contact" className=" hover:text-blue-600 transition font-bold">Contact</a></li>
                    </ul>
                </div>
            </motion.nav>

            {/* Animated Box */}
            <div className='pt-24'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        type: 'spring',
                        stiffness: 80,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-red-500 w-[80%] border-white border-4 rounded-md h-[400px] mx-auto"
                />
            </div>
        </div>
    )
}

export default Fourth
