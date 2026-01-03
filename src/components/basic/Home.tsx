"use client"
import profileImage from "@/assets/profile.jpg";
import Image from "next/image";

const Home = () => {
  const text = "DEVELOPMENT • CODE • SYSTEM • CREATIVE • DESIGN •"
  const chars = text.split("")
  return (
    <div id='home' className='flex flex-col md:flex-row items-center gap-20 md:gap-0 md:min-h-screen mt-24 md:mt-0'>

      {/* text content */}
      <div className='w-full md:w-1/2 space-y-4 md:space-y-5'>
        <h1 className='md:text-[100px] text-[60px] font-medium text-header'>Building <span className='bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>Digital Solutions</span></h1>
        <p className='text-small font-medium text-title'>Python Backend Developer with expertise in building robust and scalable systems. I specialize in crafting high-performance APIs and backend solutions using FastAPI, Django, PostgreSQL, Docker, and cloud services like AWS or Render – always focusing on clean architecture, security, and maintainable code.</p>
        <div className='text-small space-x-5 text-header'>
          <button className='py-2 px-4 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300 shadow-purple-400 cursor-pointer'>Download Resume</button>
          <a href='#contact' className='border border-title py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 shadow-blue-400 cursor-pointer hover:bg-blue-500'>Get In Touch</a>
        </div>
      </div>

      {/* animated image */}
      <div className="flex justify-end items-center w-full md:w-1/2">
        <div className="relative w-full max-w-125 aspect-square flex items-center justify-center">
        {/* Circuit board pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Outer circle - cyan */}
        <div className="absolute w-[65%] h-[65%] border-[3px] border-blue-400 rounded-full" />

        {/* Inner circle - purple */}
        <div className="absolute w-[70%] h-[70%] rounded-full border-[3px] border-purple-500" />

        {/* Rotating text */}
        <div className="absolute w-[65%] h-[65%] animate-[spin_20s_linear_infinite]">
          {chars.map((char, index) => {
            const angle = (index * 360) / chars.length
            return (
              <span
                key={index}
                className="absolute left-1/2 top-0 text-white font-bold text-sm sm:text-base md:text-lg"
                style={{
                  transform: `rotate(${angle}deg) translateY(-15%)`,
                  transformOrigin: "0 50%",
                  height: "100%",
                }}
              >
                {char}
              </span>
            )
          })}
        </div>
        <div className="relative z-10 w-[56%] h-[56%] rounded-full overflow-hidden bg-[#1a1f3a] flex items-center justify-center">
          <Image src={profileImage} alt="profile" width={500} height={500} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
