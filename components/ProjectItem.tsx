import React from 'react'

type Props = {
    title: string,
    image: string,
    description: string,
    link: string
}

export default function ProjectItem({ title, image, description, link }: Props) {
    return (
        <div className="mt-5 w-full snap-center flex flex-shrink-0 flex-col justify-center items-center px-8 py-10 md:p-24">
            <div className="relative w-[350px] phone:w-[300px] outline outline-[5px] outline-[#dbfffd]/40 rounded-lg">
                <a href={link}><img src={image} alt="project image" className="w-full h-full object-cover rounded-lg" /></a>
                <div className="absolute top-14 w-[100%] h-[50%] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] -z-10 blur-[70px]"></div>
            </div>

            <h1 className="text-4xl mt-5 font-bold">{title}</h1>

            <div className="w-full mt-5 p-3 text-gray-900 font-semibold rounded-lg bg-[rgb(238,247,255)]/80">
                <p className="text-lg text-center h-[150px] phone:h-[200px] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-[#242424]">{description}</p>
            </div>
        </div>
    )
}