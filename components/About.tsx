import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'

function About() {
    return (
        <div className='bg-[#0a1620] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div >
                    <h1 className='text-[20px] font-bold uppercase text-[#51ebd4] mb-[1rem]'>
                        About me
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] 
                    capatelize mb-[3rem] font-bold text-white'>
                        Transforming <span className='text-yellow-400'>vision</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in veniam nulla rerum provident eum reprehenderit
                            obcaecati maxime odio sed deleniti tenetur
                            similique quis perferendis sequi assumenda, totam aut deserunt?</p>
                    </div>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#51ebd4] text-black flex items-center space-x-2'>
                        <p>download cv</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </button>

                </div >
                <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                    {/* Use the Image component */}
                    <Image
                        src='/images/Profile 2.jpg'
                        alt='User'
                        layout='fill'
                        objectFit='contain'
                        className='relative z-[11] w-[100%] h-full object-contain'
                    />
                    <div className='absolute w-[73%]  h-full z-[10] bg-[#51ebd4] top-[-2rem] right-[2rem]'></div>
                </div>



            </div>
        </div> 
    ) 
}

export default About