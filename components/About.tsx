"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        type: 'fade',
        duration: 1.5,
      }}
      className="relative z-20 mx-auto max-w-7xl px-7 h-screen font-montserrat flex flex-col lg:flex-row gap-x-[70px] justify-evenly items-center lg:space-y-16">
      <h1 className="absolute top-16 phone:top-20 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">About</h1>

      <div className="relative -mb-28 phone:-mb-32 lg:mb-0 w-64 h-64 phone:w-52 phone:h-52 flex-shrink-0 lg:w-[400px] lg:h-[400px]">
        <motion.img
          initial={{
            opacity: 0,
            x: -200
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: 'spring',
            duration: 1.5,
          }}
          className="w-full h-full rounded-full outline outline-[6px] xl:outline-[8px] object-contain" src="/assets/ProfileLG.png" alt="profile image" />
          <div className="absolute top-2 rounded-full w-full h-full bg-gradient-to-r from-[#77f3b5]/80 from-[30%] to-[#41d1ff]/80 -z-10 blur-[40px]"></div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
        }}
        transition={{
          type: 'spring',
          duration: 1.5,
        }}
        className="-mb-24 lg:mb-0 space-y-3">
        <h2 className="text-center text-3xl font-bold lg:text-left">Here is a little about <span className="bg-white px-2 text-[#1f1f1f]">Me</span></h2>
        <div className="px-3 py-2 bg-[#eff2f5] rounded-lg">
          <p className="text-lg tracking-normal text-gray-800 font-bold max-h-[150px] phone:max-h-[200px] lg:max-h-[350px] overflow-y-auto exceeding-light">
          Hello, I&apos;m Gautam Sajwan, currently a third-year B.Tech student at Graphic Era Hill University. My passion lies in leveraging technology and coding to innovate and solve real-world problems.<br/>

          Proficient in languages such as C++, JavaScript, C, and Java, I also have a solid foundation in Python and SQL. With a keen interest in Full Stack Web Development, I have gained extensive experience in frontend and backend technologies/frameworks including React.js, Tailwind CSS, Next.js, Express.js, MongoDB, Typescript and WebSockets.<br/>

          Additionally, I possess strong skills in Data Structures and Algorithms, enabling me to efficiently tackle complex problems. I am deeply committed to continuous learning and growth, always seeking new opportunities to expand my knowledge and expertise. <br/>

          Eager to embark on exciting projects and overcome challenges, I am enthusiastic about collaborating with others to create impactful solutions. Let's connect and build something great together!
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}