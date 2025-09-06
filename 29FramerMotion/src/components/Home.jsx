import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-gray-950 min-h-screen flex items-center flex-col'>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    // mass:3,
                    // velocity:10
                }}
                className='bg-red-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    translateX: "-100%",
                }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    // mass:3,
                    // velocity:10
                }}
                className='bg-amber-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    rotateX: "90deg",
                }}
                whileInView={{
                    opacity: 1,
                    rotateX: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    // mass:3,
                    // velocity:10
                }}
                className='bg-blue-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
            </motion.div>

            {/* <motion.div
                initial={{
                    opacity: 0,
                    translateX: "100%",
                }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{
                    duration: 0.8
                }}
                className='bg-cyan-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
            </motion.div> */}



            <div className='flex justify-center gap-5'>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: "-10%",
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        // mass:3,
                        // velocity:10

                    }}
                    className='bg-sky-300 cursor-pointer border-white border-4 w-[250px] h-[400px] my-10 rounded-md'></motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: "-10%",
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        // mass:3,
                        // velocity:10
                    }}
                    className='bg-emerald-500 border-white border-4 w-[250px] h-[400px] my-10 rounded-md'></motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: "-10%",
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        // mass:3,
                        // velocity:10
                    }}
                    className='bg-purple-600 border-white border-4 w-[250px] h-[400px] my-10 rounded-md'></motion.div>
            </div>


            <div className='flex justify-center gap-5'>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{
                        duration: 0.1,
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className='py-6 px-10 my-20 rounded-md bg-sky-600 cursor-pointer w-32'
                >
                </motion.div>
            </div>

            <div className="flex flex-col items-center gap-1 my-16">
              
            </div>



        </div>












        // <div className='bg-gray-950 min-h-screen flex items-center flex-col'>

        //     <motion.div
        //         initial={{ opacity: 0, scale: 0.5 }}
        //         whileInView={{ opacity: 1, scale: 1 }}
        //         transition={{ type: "spring", stiffness: 100, damping: 12 }}
        //         className='bg-red-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>


        //     <motion.div
        //         initial={{ opacity: 0, x: -200 }}
        //         whileInView={{ opacity: 1, x: 0 }}
        //         transition={{ duration: 1, ease: "easeOut" }}
        //         className='bg-amber-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>


        //     <motion.div
        //         initial={{ opacity: 0, rotateY: 90 }}
        //         whileInView={{ opacity: 1, rotateY: 0 }}
        //         transition={{ duration: 1, ease: "backOut" }}
        //         style={{ perspective: 1000 }}
        //         className='bg-blue-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>


        //     <motion.div
        //         initial={{ opacity: 0, x: 200 }}
        //         whileInView={{ opacity: 1, x: 0 }}
        //         transition={{ type: "spring", stiffness: 80, damping: 15 }}
        //         className='bg-cyan-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>


        //     <motion.div
        //         initial={{ opacity: 0, rotate: -180, scale: 0.3 }}
        //         whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        //         transition={{ duration: 1, ease: "easeInOut" }}
        //         className='bg-green-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>


        //     <motion.div
        //         initial={{ opacity: 0, skewX: -45 }}
        //         whileInView={{ opacity: 1, skewX: 0 }}
        //         transition={{ duration: 1, ease: "easeOut" }}
        //         className='bg-purple-500 w-[80%] border-white border-4 rounded-md h-[400px] my-20'>
        //     </motion.div>
        // </div>

    )
}

export default Home


