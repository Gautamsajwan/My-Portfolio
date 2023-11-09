"use client"
import React, { useState } from 'react'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <header className="py-2 px-3 bg-[rgb(26,26,26)] sticky top-0 flex justify-between items-center font-montserrat max-w-7xl mx-auto z-40">
      <motion.div
      initial= {{
        y: -300,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className="absolute -z-10 mr-2 -top-[39px] right-[2px] w-[180px] h-[100px] rounded-[35px] outline-dashed outline-red-400 outline-[3px]"></motion.div>

      {/* <div onClick={() => setShowLinks(false)} className={`${!showLinks && 'hidden -translate-x-100%'} fixed translate-x-0 left-0 top-0 w-screen h-screen transition-all ease-in-out`}> */}
        <div className={`${showLinks? 'translate-x-0' : 'phone:-translate-x-[100%]'} phone:nav-sm gap-5 flex justify-center items-center transition-all ease-in-out`}>
          <AiOutlineCloseCircle onClick={() => setShowLinks(false)} className={`${showLinks? 'block' : 'hidden'} text-4xl`}/>
          <a href="https://www.linkedin.com/in/gautam-sajwan-b44179217/"><FaLinkedinIn className="phone:text-4xl text-2xl text-blue-400"/></a>
          <a href="https://github.com/Gautamsajwan"><FaGithub className="phone:text-4xl text-2xl text-purple-500"/></a>
          <a href="https://twitter.com/GautamSajwan6"><FaXTwitter className="phone:text-4xl text-2xl text-gray-100"/></a>
          <a href="https://leetcode.com/gautamsajwan8126/"><SiLeetcode className="phone:text-[40px] text-2xl text-orange-400"/></a>
          <a href="https://auth.geeksforgeeks.org/user/gautamsajwan8126"><SiGeeksforgeeks className="phone:text-5xl text-4xl text-green-500"/></a>
        </div>
      {/* </div> */}

      <div><CgDetailsMore onClick={() => setShowLinks(true)} className={`ml-1 text-2xl hidden ${showLinks? 'phone:hidden': 'phone:block'}`}/></div>

      <motion.div 
      initial= {{
        x: 300,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className="mr-2 p-2 flex gap-1 text-[rgb(26,26,26)] font-semibold rounded-full items-center bg-white cursor-pointer hover:bg-red-300 hover:scale-125">
        <DocumentTextIcon className="w-7 bg-red-400 rounded-full p-[2px]"/>
        <a href="/assets/Gautam_Sajwan_Resume.pdf" download="Gautam_Sajwan_Resume.pdf">Download CV</a>
      </motion.div>
    </header>
  )
}

// animation for social links
// initial= {{
//   x: -300,
//   scale: 0.5,
//   opacity: 0
// }}
// animate={{
//   x: 0,
//   scale: 1,
//   opacity: 1
// }}
// transition={{
//   type: "spring",
//   duration: 1.5,
// }}