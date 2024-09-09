'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdFileDownload } from 'react-icons/md'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function Header({}: Props) {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <header className="py-2 px-3 bg-[rgb(26,26,26)] sticky top-0 flex justify-between items-center font-montserrat max-w-7xl mx-auto z-40">
      <div className={`${showLinks ? 'translate-x-0' : 'phone:-translate-x-[100%]'} phone:nav-sm gap-6 flex justify-center items-center transition-all ease-in-out`}>
        <AiOutlineCloseCircle onClick={() => setShowLinks(false)} className={`${showLinks ? 'block' : 'hidden'} text-4xl`} />
        <a href="https://www.linkedin.com/in/gautam-sajwan-b44179217/"><FaLinkedinIn className="phone:text-4xl text-2xl text-blue-400" /></a>
        <a href="https://github.com/Gautamsajwan"><FaGithub className="phone:text-4xl text-2xl text-purple-500" /></a>
        <a href="https://twitter.com/GautamSajwan6"><FaXTwitter className="phone:text-4xl text-2xl text-gray-100" /></a>
        <a href="https://leetcode.com/gautamsajwan8126/"><SiLeetcode className="phone:text-[40px] text-2xl text-orange-400" /></a>
        <a href="https://auth.geeksforgeeks.org/user/gautamsajwan8126"><SiGeeksforgeeks className="phone:text-5xl text-4xl text-green-500" /></a>
      </div>

      <div><CgDetailsMore onClick={() => setShowLinks(true)} className={`ml-1 text-3xl hidden ${showLinks ? 'phone:hidden' : 'phone:block'}`} /></div>

      <Link href="https://drive.google.com/drive/folders/1m_0510rPLMeEPPWKa_aFUi2UYm3iaANK?usp=sharing" target='_blank' className="group p-2 px-4 text-sm flex gap-1 font-semibold rounded-xl items-center bg-gray-800 border-[3px] border-gray-400 cursor-pointer">
        <div className="relative w-6 h-6">
          <DocumentTextIcon className="absolute text-xl text-red-500 group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-150" />
          <MdFileDownload className="absolute text-2xl text-blue-500 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150" />
        </div>
        Download CV
      </Link>
    </header>
  )
}
