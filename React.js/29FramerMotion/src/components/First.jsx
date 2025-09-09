import React from 'react'
import { anticipate, motion } from 'motion/react'

const First = () => {
  return (
    <div className='min-h-screen bg-gray-950 flex flex-col'>
      {/* <motion.div 
      animate={{
        x:[0,750,750,0,0],
        y:[0,0,300,300,0],
      }}
      transition={{
        duration:2.5,
        delay:0.5,
        ease:'anticipate',
        repeat:Infinity
      }}
      className='w-[180px] h-[180px] bg-red-700 rounded-md'>

      </motion.div> */}
      <div className='flex justify-center my-10'>
        <motion.div
          initial={{
            opacity: 0,
            //  y:-50,
            scale: 0,
          }}
          whileInView={{
            //  y:0,
            scale: 1,
            opacity: 1
          }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: 'anticipate',
            type:'spring',
            stiffness: 200,
            damping: 10,
          }}
          className='w-[700px] h-[300px] bg-red-700 rounded-md my-10'
        >

        </motion.div>

      </div>

      <div className='flex my-10 justify-around'>
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: 'anticipate',
            type:'spring',
            stiffness: 200,
            damping: 10,
           
          }}
          className='w-[250px] h-[400px] bg-green-700 rounded-md'
        >

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: 'anticipate',
            type:'spring',
            stiffness: 200,
            damping: 10,
          }}
          className='w-[250px] h-[400px] bg-sky-700 rounded-md'
        >

        </motion.div>
      </div>

    </div>
  )
}

export default First