"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const myProjects = [
  {
    num: "01",
    category: "frontend",
    title: "BrightNext Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci!",
    stack: [{ name: "React.js" }, { name: "CSS" }],
    image: "/assets/workImage/brightnextWebsite.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "Quick Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci!",
    stack: [{ name: "Django" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/workImage/brightnextWebsite.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "CodeNest Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci!",
    stack: [{ name: "React.js" }, { name: "CSS" }, { name: "Redux Toolkit" }],
    image: "/assets/workImage/codeNest.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Mystery Feedback",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci!",
    stack: [{ name: "Next.js" }, { name: "ShadCN" }, { name: "Tailwind CSS" }],
    image: "/assets/workImage/mysteryFeedback.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "BrightNext Authentication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci!",
    stack: [{ name: "Next.js" }, { name: "CSS" }],
    image: "/assets/workImage/nextAuth.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(myProjects[0]);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0  "
    >
      <div className="container mx-auto"></div>
    </motion.section>
  );
};

export default Work;
