import React from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'motion/react';


const Third = () => {

    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, 'change', (val) => {
        console.log(val)
    })

    const scaleX = useTransform(scrollYProgress, [0.30, 0.50], [1, 3])
    const scaleY = useTransform(scrollYProgress, [0.30, 0.50], [1, 1.75])

    // const skewX = useTransform(scrollYProgress, [0.3, 0.6], [0, 25]); // 0° to 25° skew
    // const skewY = useTransform(scrollYProgress, [0.6, 1], [0, -20]); // 0° to -20° skew
    // const {scrollY} = useScroll()

    // useMotionValueEvent(scrollY , 'change',(val) => {
    //     console.log(val);

    // })

    // const scale = useTransform(scrollY , [900 , 1500] , [1 , 1.75])
    return (
        <motion.div
            style={{
                scaleX,
                scaleY,
                // skewX,
                // skewY,
                width: '300px',
                height: '200px',
                backgroundColor: 'blue',
                margin: '1500px auto',
                borderRadius: '10px'
            }}
        >
        </motion.div>
    )
}

export default Third