import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Components
import Socials from "@/components/Socials/Socials";
import PersonalImage from "@/components/PersonalImage/PersonalImage";
import Stats from "@/components/Stats/Stats";
import TypeWriterEffect from "@/components/TypeWriter/TypeWriterEffect";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center pt-16 justify-between xl:px-24 xl:pt-20 xl:pb-24">
          {/*  Title */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Ujjwal Dahal</span>
            </h1>
            <span className="text-xl font-medium text-accent">
              <TypeWriterEffect />
            </span>
            <p className="max-w-[500px] mb-9 text-white/80 mt-5">
              I have a strong foundation in full-stack development, graphics
              design, video editing, photography, and vlogging.
            </p>

            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2  hover:text-primary hover:bg-accent hover:transition-all duration-500 text-base"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PersonalImage />
          </div>
        </div>
      </div>

    <Stats />

    </section>
  );
}
