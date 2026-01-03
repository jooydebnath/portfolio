"use client"
import CountUp from 'react-countup'
import { BsFolderCheck } from 'react-icons/bs'
import { FaUserGroup } from 'react-icons/fa6'
import { HiCodeBracket } from 'react-icons/hi2'
import { PiBracketsCurlyBold } from 'react-icons/pi'

const Stats = () => {
    return (
        <div className='flex md:flex-row flex-col items-center gap-10'>
            <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 justify-center md:gap-7 gap-5'>
                <div className='border-2 border-common-border p-7 rounded-lg space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:shadow-purple-400'>
                    <HiCodeBracket size={50} className='text-purple-500' />
                    <div className='text-3xl flex items-center'>
                        <CountUp start={0} end={5} duration={5}></CountUp>
                        <p>+</p>
                    </div>
                    <h3 className='text-paragraph text-title'>Years Coding</h3>
                </div>
                <div className='border-2 border-common-border p-7 rounded-lg space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:shadow-purple-400'>
                    <BsFolderCheck size={50} className='text-purple-500' />
                    <div className='text-3xl flex items-center'>
                        <CountUp start={0} end={200} duration={2}></CountUp>
                        <p>+</p>
                    </div>
                    <h3 className='text-paragraph text-title'>Projects Completed</h3>
                </div>
                <div className='border-2 border-common-border p-7 rounded-lg space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:shadow-purple-400'>
                    <FaUserGroup size={50} className='text-purple-500' />
                    <div className='text-3xl flex items-center'>
                        <CountUp start={0} end={130} duration={4}></CountUp>
                        <p>+</p>
                    </div>
                    <h3 className='text-paragraph text-title'>Happy Clients</h3>
                </div>
                <div className='border-2 border-common-border p-7 rounded-lg space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:shadow-purple-400'>
                    <PiBracketsCurlyBold size={50} className='text-purple-500' />
                    <div className='text-3xl flex items-center'>
                        <CountUp start={0} end={100} duration={3}></CountUp>
                        <p>%</p>
                    </div>
                    <h3 className='text-paragraph text-title'>Code Quality</h3>
                </div>
            </div>

            <div className='w-full md:w-1/2'>
                <div className="w-full">
                    <div className="rounded-lg border-2 border-blue-400 bg-[#1a1d3a] p-8 font-mono text-sm md:text-base">
                        <div className="space-y-1">
                            <div>
                                <span className="text-purple-400">class</span> <span className="text-white">JoyDebnath</span>{" "}
                                <span className="text-white">{"{"}</span>
                            </div>

                            <div className="ml-4">
                                <span className="text-cyan-400">name:</span> <span className="text-green-400">{'"Joy Debnath"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-4">
                                <span className="text-cyan-400">role:</span>{" "}
                                <span className="text-green-400">{'"Backend Developer"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-4">
                                <span className="text-cyan-400">skills:</span> <span className="text-white">{"{"}</span>
                            </div>

                            <div className="ml-8">
                                <span className="text-cyan-400">frontend:</span> <span className="text-white">{"["}</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"React & Next.js"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"TypeScript & JavaScript"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"Tailwind CSS"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-8">
                                <span className="text-white">{"],"}</span>
                            </div>

                            <div className="ml-8">
                                <span className="text-cyan-400">backend:</span> <span className="text-white">{"["}</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"Node.js & Express"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"MongoDB & PostgreSQL"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-12">
                                <span className="text-green-400">{'"AWS & Docker"'}</span>
                                <span className="text-white">,</span>
                            </div>

                            <div className="ml-8">
                                <span className="text-white">{"]"}</span>
                            </div>

                            <div className="ml-4">
                                <span className="text-white">{"}"}</span>
                            </div>

                            <div>
                                <span className="text-white">{"}"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
