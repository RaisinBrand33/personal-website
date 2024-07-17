  "use client"
  import {motion} from "framer-motion"

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "white" },
    visible: {
        pathLength: 1,
        opacity: 1,
        stroke: "#01a9a9",
        transition: {
          pathLength: { type: "spring", duration: 2.4, bounce: 0 },
          opacity: { duration: 0.01 },
          duration: 0.4,
          delay: 0.4
        }
    }
  }
  import Image from "next/image";
  import { FaLinkedin } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import LinkBox from "@/components/link-box";
  import NameChip from "@/components/name-chip";
  import PulseBeams from "@/components/pulse-beams";
  import { cn } from "@/lib/utils";
  import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
  import Navvy from "@/components/nav-bar";
  import Projects from "@/components/projects";
  import { TracingBeam } from "@/components/ui/tracing-beam";

  export default function Home() {
    return (
      <main className="my-auto relative flex flex-col flex-grow w-full items-center justify-center overflow-hidden text-nasa-cream">
        <TracingBeam className="px-6">
          <div>
            <Navvy />
            <div className="z-10 max-w-5xl mx-auto flex-grow grid place-items-center">
              <div>
                <div className="w-">
                  <PulseBeams />
                </div>
                <div className="grid grid-cols-3">
                  <div className="max-w-2xl col-span-2 grid place-items-center text-center space-y-2 bg-zinc-800 p-2 rounded-2xl">
                    <p className="text-3xl font-bold">About Me</p>
                    <p className="text-lg">I am a sophomore at Purdue University studying Electrical Engineering, with a focus in semiconductors. I enjoy learning new skills and am always open to learn!</p>
                    <div className="flex space-x-4">
                      <LinkBox href="https://www.linkedin.com/in/brandonfarber2027/">
                        <FaLinkedin className="w-7 h-7" />
                      </LinkBox>
                      <LinkBox href="mailto:brandonafarber33@gmail.com">
                        <MdEmail className="w-7 h-7" />
                      </LinkBox>
                    </div>
                  </div>

                    <div className="bg-zinc-800 p-4 rounded-2xl w-fit ml-auto">
                    <motion.div 
                      className='w-52 z-0 aspect-square relative grid place-items-center rounded-full mx-auto shadow-lg shadow-nasa-cyan/50'
                      initial={{opacity: 0, y: 10}} 
                      animate={{opacity: 1, y: 0}} 
                      transition={{duration: 0.4, delay: 0.4}}
                    >
                      <motion.svg
                        className="z-10 rotate-[270deg]"
                        viewBox="-0.5 -0.5 65 65" // Adjust the viewbox values to fit your div size
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle 
                          cx="32"
                          cy="32"
                          r="32"
                          variants={circleVariants}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </motion.svg>
                      <div
                        className='absolute bg-zinc-900 rounded-full w-full aspect-square z-0'
                      >
                        <motion.img 
                          src="/mee.jpg"
                          className='rounded-full w-full h-full'
                          initial={{opacity: 0}} 
                          animate={{opacity: 1}}
                          transition={{duration: 0.4, delay: 0.4}}
                          alt="profile-pic"
                        />
                      </div>
                    </motion.div>
                      {/*<div className="w-48 h-48 rounded-full bg-white">
                        <Image src="/mee.jpg" 
                        alt="profile"
                        width={192}
                        height={192}
                        className="rounded-full"
                        />
                      
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>      
            <AnimatedGridPattern
              numSquares={200}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(1100px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0",
              )}
            />
           
          </div>
          <Projects /> 
        </TracingBeam>
      </main>
    );
  }