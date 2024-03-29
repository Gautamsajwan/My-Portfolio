import React from 'react'

type Props = {
  logo: string,
  eventName: string,
  org: string,
  duration: string,
  work: string[]
}

export default function ExpCard({ logo, eventName, org, duration, work }: Props) {
  return (
    <article className="phone:w-[300px] w-[350px] lg:w-[420px] xl:w-[460px] h-full px-5 py-4 snap-center cursor-pointer flex flex-col items-center flex-shrink-0 rounded-2xl bg-[#2a2c2b] overflow-hidden z-20">
      <img className="h-24 w-24 object-cover rounded-full bg-gray-500" src={logo} alt="brand logo" />

      <div className="h-[78%] mt-1 py-2 lg:px-3 flex flex-col items-center">
        <div className="h-[150px] w-full flex flex-col items-center">
          <h2 className="text-2xl text-center font-semibold">{eventName}</h2>
          <p className="mt-2 p-2 h-[65px] w-full text-base grid place-items-center font-bold text-center bg-black/40">{org}</p>

          <p className="text-black font-semibold mt-3 px-3 py-2 text-sm bg-gray-200 rounded-full">{duration}</p>
        </div>
        <ul className="px-5 mt-3 list-disc space-y-3 flex-grow overflow-y-scroll exceeding-dark">
          {work.map((details, index) => (
            <li key={index}>{details}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}