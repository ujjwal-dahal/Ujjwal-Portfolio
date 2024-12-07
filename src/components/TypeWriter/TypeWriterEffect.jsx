"use client";

import Typewriter from 'typewriter-effect';  


const TypeWriterEffect = () => {
  return (
    <Typewriter
    options={{
      strings: [
        "Full Stack Developer",
        "Graphics Designer",
        "Video Editor",
        "Photographer",
        "Vlogger",
      ],
      autoStart: true,
      loop: true,
      delay: 50,
      deleteSpeed: 30,
    }}
  />
  )
}

export default TypeWriterEffect