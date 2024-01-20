import { CommandLineIcon } from '@heroicons/react/16/solid'
import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Services() {
    return (
        <div className='bg-[#050b0f] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                My <span className='text-yellow-400'> Services</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] 
            mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div>
                    <div className='bg-red-700 hover:scale-110 transform transition-all
                    duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Frontend
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            I'm a Frontend Developer skilled in turning designs into interactive websites using HTML, CSS, and TypeScript. I focus on creating user-friendly interfaces with a keen eye for detail. Check out my portfolio to see how I blend creativity and technical expertise in frontend development.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='bg-orange-700 hover:scale-110 transform transition-all
                    duration-300  uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            backend
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            I'm a Backend Developer skilled in building functional web applications using Node.js and Python. I focus on creating efficient and secure server-side logic to enhance overall application performance, showcasing the seamless integration of technical expertise and creative problem-solving in backend development.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='bg-blue-700 hover:scale-110 transform transition-all
                    duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            FullStacke
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        I'm a Full Stack Developer proficient in crafting dynamic web applications using TypeScript, React, and Next.js. My expertise spans both frontend and backend development, highlighting the seamless integration of creativity, technical proficiency, and innovative problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services 