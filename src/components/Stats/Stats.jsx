"use client";

import CountUp from "react-countup";

const stats = [
  {
    num : 1,
    text : "Years Of Experience"
  },
  {
    num : 10,
    text : "Projects Completed"
  },
  {
    num : 8,
    text : "Technologies Mastered"
  },
  {
    num : 300,
    text : "Code Commits"
  },
]


const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 xl:px-20">

      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none ">
          {
            stats.map((item , index)=>{
               return <div className="
               flex-1 flex gap-4 items-center justify-center xl:justify-start
               " 
               key={index}
               >
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl text-accent xl:text-6xl font-extrabold" />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
               </div> 
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stats