"use client"
import React, { useState } from 'react'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdFileDownload } from 'react-icons/md'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <header className="py-2 px-2 bg-[rgb(26,26,26)] sticky top-0 flex justify-between items-center font-montserrat max-w-7xl mx-auto z-40">

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

      <div><CgDetailsMore onClick={() => setShowLinks(true)} className={`ml-1 text-3xl hidden ${showLinks? 'phone:hidden': 'phone:block'}`}/></div>

      <div className="group p-2 text-sm flex gap-1 font-semibold rounded-full items-center bg-gray-800 cursor-pointer">
        <div className="relative w-7 h-7">
          <DocumentTextIcon className="absolute text-2xl text-red-500 group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-150"/>
          <MdFileDownload className="absolute text-3xl text-blue-500 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150"/>
        </div>
        <a href="/assets/Gautam_Sajwan_Resume.pdf" download="Gautam_Sajwan_Resume.pdf">Download CV</a>
      </div>
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