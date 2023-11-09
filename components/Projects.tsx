"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ProjectItem from './ProjectItem'
import projectData from './ProjectData'

type Props = {}

export default function Projects({ }: Props) {
  const [projectState, setProjectState] = useState(projectData)
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
     className="h-screen font-montserrat relative flex flex-col justify-end phone:justify-center items-center space-y-28">
      <h1 className="absolute top-16 phone:top-24 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">Projects</h1>
      <p className="text-center absolute text-gray-200 top-6 phone:top-14 left-1/2 -translate-x-1/2">Click on a project to view</p>

      <motion.div
      initial={{
        y: -200,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        type: 'spring',
        delay: 0.2,
        duration: 1.5
      }}
      className="w-full h-fit flex overflow-x-scroll snap-mandatory snap-x z-20 scrollbar scrollbar-thumb-blue-400 scrollbar-track-[#262626]">
        {projectState.map((details, index) => (
          <ProjectItem key={`${details.title}+${index}`} title={details.title} image={details.image} description={details.description} link={details.link}/>
        ))}
      </motion.div>
    </motion.div>
  )
}