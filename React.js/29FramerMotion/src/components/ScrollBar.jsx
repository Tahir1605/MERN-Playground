import React from 'react'
import {motion , useScroll} from 'motion/react'

const ScrollBar = () => {
    const {scrollYProgress} = useScroll()
    console.log(scrollYProgress);
    
  return (
    <motion.div
     style={{
        scaleX:scrollYProgress
     }}
     className="bg-sky-400 rounded-full origin-left w-full h-2 fixed top-0 left-0">

    </motion.div>
  )
}

export default ScrollBar