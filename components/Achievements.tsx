"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import {expData} from '../constants'

type Props = {}

export default function Achievements({ }: Props) {
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
      className="px-5 h-screen mx-auto relative font-montserrat flex flex-col justify-center items-center space-y-28 phone:space-y-24">
      <h1 className="absolute top-16 phone:top-20 left-1/2 -translate-x-1/2 text-6xl font-sacramento font-bold text-center text-[#616161]">Achievements</h1>

      <div className="py-5 px-2 phone:py-3 w-full h-[80%] phone:h-[75%] flex gap-5 items-center overflow-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-[#262626] snap-x snap-mandatory">
        {/* experience cards */}
        {
          expData.map((details, index) => (
            <ExpCard key={`${details.org}+${index}`} logo={details.logo} eventName={details.eventName} org={details.org} duration={details.duration} work={details.work}/>
          ))
        }
      </div>
    </motion.div>
  )
}