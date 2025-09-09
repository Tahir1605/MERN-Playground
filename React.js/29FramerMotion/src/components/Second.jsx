import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer"
];

const Second = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    // typing speed
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); // wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="flex text-center flex-col">
        <motion.h2
          className="text-4xl font-bold font-serif text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {`${roles[index].substring(0, subIndex)}|`}
        </motion.h2>
      </div>
    </div>
  );
};

export default Second;
