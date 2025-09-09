import React from "react";
import {motion , useScroll} from 'motion/react'
import ProductCard from "./components/ProductCard";

function App() {
  const { scrollYProgress } = useScroll();
  // const scrollYProgress = useScroll().scrollYProgress
  console.log(scrollYProgress);
  
  return (
   <>
   <motion.div 
   style={{
    scaleX:scrollYProgress
   }}
   className="bg-red-600 rounded-full origin-left w-full h-2 fixed top-0 left-0"></motion.div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
   </>
  );
}

export default App;
