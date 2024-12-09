"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiScikitlearn as SiScss,
  SiDjango,
  SiCanva,
  SiNextdotjs,
  SiAdobephotoshop,
} from "react-icons/si";

import { BsYoutube } from "react-icons/bs";

//About Data
const aboutMyself = {
  title: "About Me",
  description:
    `Hi! My name is Ujjwal Dahal, and I am a dedicated and passionate individual from Nepal. I specialize in Full-Stack Development, Graphics Designing, and Video Editing. I also enjoy vlogging, combining my technical skills with creativity to share stories and ideas.I am always eager to learn and improve, exploring new tools and technologies to enhance my expertise. With a strong foundation in coding and design, I aim to create impactful projects that blend technology and creativity. I'm excited to keep growing and see where my skills and passions will lead me in the future.`,

  info: [
    {
      fieldName: "Name",
      fieldValue: "Ujjwal Dahal",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+977) 984*******",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepali",
    },
    {
      fieldName: "Email",
      fieldValue: "ujjwaldahal20@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Nepali , Hindi , English",
    },
  ],
};

// Experience Data

const myExperience = {
  icon: "🎯",
  title: "My Experience",
  description:
    "An overview of my professional journey, showcasing roles in technology, design, and video editing.",
  items: [
    {
      company:
        "ECAST, Thapathali Campus",
      position: "Technical Team & Graphics Designer",
      duration: "Jun 2024 - Present",
    },
    {
      company:
        "ECAST, Thapathali Campus",
      position: "Graphics Designer",
      duration: "May 2023 - Jun 2024",
    },
    {
      company: "YATHARTHA Techfest 2080 - Thapathali Campus",
      position: "Graphics Designer",
      duration: "Dec 2023 - Feb 2024",
    },
    {
      company: "YouTube",
      position: "Video Editor & Thumbnail Designer",
      duration: "Jan 2022 - Present",
    },
  ],
};

//Education Data
const myEducation = {
  icon: "🎓",
  title: "My Education",
  description:
    "A summary of my academic journey, showcasing achievements and learning experiences.",
  items: [
    {
      institution: "IOE, Thapathali Campus",
      degree:
        "Bachelor in Electronics Engineering",
      duration: "2023 - 2027",
    },
    {
      institution: "Sushma Godawari College",
      degree: "+2, Computer Science (Grade: 3.74 GPA)",
      duration: "2020 - 2022",
    },
    {
      institution: "Ramdhuni English Boarding School",
      degree: "Grade 10, (Grade: 3.95 GPA)",
      duration: "2010 - 2020",
    },
  ],
};

//Skills Data

const mySkills = {
  title: "My Skills",
  description:
    "A list of my technical skills in web development, design, and related technologies.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <BsYoutube />, name: "Capcut" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:px-20 xl:my-10 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="  min-h-[70vh] w-full ">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{myExperience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {myExperience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {myExperience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <span className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.position}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{myEducation.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {myEducation.description}{" "}
                </p>

                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {myEducation.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <span className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-5 ">
                            {item.degree}
                          </span>
                          <div className="flex items-center gap-3">
                            {/* Data */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold ">{mySkills.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {mySkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {mySkills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{aboutMyself.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {aboutMyself.description}
                </p>
                <ul className="  grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {aboutMyself.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60"> {item.fieldName}</span>
                        <span className="text-lg text-accent "> {item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
