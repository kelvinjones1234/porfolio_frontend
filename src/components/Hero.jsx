import React from "react";
import { motion } from "framer-motion";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import DecorativeCodeSnippet from "./DecorativeCodeSnippet";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-screen flex items-center z-[] px-4 sm:px-[2rem] md:px-[4rem] lg:px-[6rem] mx-auto text-white"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 border-2 border-[#98e8cd] opacity-20 rounded-full" />
      <div className="absolute top-40 right-40 w-32 h-32 bg-[#98e8cd] opacity-5 rounded-full" />

      {/* Grid pattern */}
      <div className="absolute right-0 top-0 h-screen w-1/3 opacity-10">
        <div className="grid grid-cols-4 gap-4 h-full w-full p-8">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#98e8cd] rounded-full transform transition-all duration-700 hover:scale-150"
              style={{
                animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="max-w-3xl z-10">
          <motion.h1
            variants={slideFromLeft}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight md:leading-tight lg:leading-tight font-light"
          >
            Hi, I'm{" "}
            <motion.span
              variants={slideFromLeft}
              className="block mt-2 text-[#98e8cd] font-bold"
            >
              Godwin Praise,
            </motion.span>
          </motion.h1>

          <motion.p
            variants={slideFromLeft}
            className="py-6 text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed text-gray-300"
          >
            a Full Stack Web Developer crafting exceptional digital experiences.
          </motion.p>

          <motion.div variants={slideFromLeft} className="mt-8 sm:mt-10">
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group hover:bg-[#98e8cd] hover:text-black transition-all duration-300 uppercase border-2 border-[#98e8cd] inline-flex text-sm sm:text-base rounded-full px-6 sm:px-8 py-3 items-center gap-x-4 hover:gap-x-6"
            >
              <span>Work with me</span>
              <LiaLongArrowAltRightSolid
                className="transition-transform group-hover:translate-x-2"
                size={24}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative code snippet */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.8,
          }}
        >
          <DecorativeCodeSnippet />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
