import React from 'react'
import { anticipate, motion } from 'motion/react'

const First = () => {
  return (
    <div className='min-h-screen bg-gray-950 flex flex-col'>
      {/* <motion.img
        src={'https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'}
        initial={{
          opacity:0
        }}
        animate={{
          x:[0,850,850,0,0],
          y:[0,0,350,350,0],
          originY: 2,
          originX:2,
          x: 850,
          rotate:360,
          rotateX:180,
          rotateY:180,
          y:350,
          scale:1.1,
          scaleX:1.3
          scaleY:1.3
          skewX:10
          opacity:1,
          backgroundColor:'green',
          borderWidth:2,
          borderRadius:'100%'
        }}
        transition={{
          delay: 1,
          duration: 3,
          ease:"anticipate",
          ease:'backIn'
          ease:'backOut'
          ease: "backInOut",
          ease:"circInOut"
          repeat: Infinity,
          repeatType:'mirror',
          repeatType: 'reverse',
          repeatDelay:2
        }}
        className='h-[200px] w-[200px] border-4 rounded-md border-white m-10 '>
      </motion.img> */}

      {/* <motion.div
        initial={{
          y: -200,
        }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className='h-[200px] w-[200px] border-4 border-white bg-green-500 rounded-md m-10'
      >

      </motion.div> */}

      {/* <motion.div
        drag
        onDragStart={(event, info) => {
          console.log("Drag started:", info.point);
        }}
        onDragEnd={(event, info) => {
          console.log("Drag Ended:", info.point);
        }}
        onDirectionLock={(axis) => {
          console.log("Locked to axis:", axis);
        }}
        dragConstraints={{
           left: -100, right: 100, top: -50, bottom: 50
        }}
        dragDirectionLock

        className='w-[200px] h-[200px] border-4 border-white bg-red-500 rounded-md cursor-pointer m-10'
      >

      </motion.div> */}
      <motion.div 
      animate={{
        x:750,
        rotate:360,
        originY:2
      }}
      transition={{
        duration:2,
        delay:1,
        ease:"anticipate",
        type:"spring",
        damping:20,
        stiffness:100
        // mass:1,
        // velocity:2
      }}
      className='w-[200px] h-[200px] border-4 border-white bg-red-600 m-10 rounded-full'>

      </motion.div>
    </div>
  )
}

export default First