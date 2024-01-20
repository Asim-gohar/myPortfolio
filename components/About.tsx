import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from 'next/link'

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
                        <p className='text-[19px] text-slate-300 w-[80%]'>I love turning big ideas into real things. I'm a hardworking professional who enjoys using technology and creativity to make ideas come to life. I specialize in coding, design,
                            and web development to create cool digital stuff. My goal is to make things that not only look good but also work well for people. I'm always learning and enjoy working with others to make projects that
                            are both meaningful and visually impressive, just like the original vision.</p>
                    </div>
                    <Link href='https://drive.google.com/file/d/1_I_kn6TO0WHzVbCNTNZQs4XdeGov7sAD/view?usp=drive_link'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#51ebd4] text-black flex items-center space-x-2'>
                            <p>download cv</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                    </Link>
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