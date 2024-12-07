"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../../public/assets/myImage/myImage.png";

const PersonalImage = () => {
  return (
    <div className="flex justify-center items-center w-full h-full relative mb-5">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
        }}
        className="relative flex justify-center items-center"
      >

      {/* Outer Glow Effect */}
      <div className="absolute w-[260px] h-[260px] xl:w-[410px] xl:h-[410px] rounded-full bg-gradient-to-r from-transparent via-[#00B0FF] to-transparent opacity-60 blur-xl" />

        {/* Rotating Animated Border */}
        <motion.svg
          className="absolute w-[260px] h-[260px] xl:w-[410px] xl:h-[410px]"
          viewBox="0 0 410 410"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <motion.circle
            cx="205"
            cy="205"
            r="200"
            stroke="#00B0FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{
              strokeDasharray: "20 10 5 5",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          className="relative overflow-hidden rounded-full w-[200px] h-[200px] xl:w-[350px] xl:h-[350px]"
        >
          <Image
            src={myImage}
            alt="Personal Image"
            priority
            quality={100}
            className="object-cover"
            width={350}
            height={350}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalImage;
