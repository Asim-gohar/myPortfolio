import React from 'react';
import Particle from './Particle';
import TextEffect from '@/components/TextEffect';
import Image from 'next/image'; // Import the Image component from next
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';


function Hero() {
    return (
        <div className='pt-[4rem]'>
            <div className='h-[88vh] bg-[url("/images/banner1.jpg")] bg-cover bg-center '>
                <Particle />
                <div className='w-[80%]  grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                    <div>
                        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                            HI, I'M <span className='text-yellow-400'>ASIM  BUTT</span>
                        </h1>
                        <TextEffect />
                        <p className='mt-[1.5rem] text-[18px] text-gray-400'>
                            I'm a versatile professional with skills in coding, web development, design, and programming.
                            I love turning ideas into functional websites and making them look great too.
                            I pay close attention to details in my code to ensure everything works smoothly.
                            Check out my portfolio to see how I bring technology and creativity together to create awesome digital experiences.
                        </p>
                        <div className='mt-2 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                            <Link href='https://drive.google.com/file/d/1_I_kn6TO0WHzVbCNTNZQs4XdeGov7sAD/view?usp=drive_link'><button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#51ebd4] text-black flex items-center space-x-2'>
                                <p>download cv</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                            </button></Link>
                            <button className='flex items-center space-x-2'>
                                <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all 
                            duration-200 text-[#51ebd4]'/>
                                <p className='text-[20px] text-white font-semibold'>Watch the videos</p>
                            </button>
                        </div>
                    </div> 
                    <div className='w-[450px] hidden bg-[#51ebd4] relative lg:flex items-center rounded-full h-[450px]'>
                        {/* Use the Image component */}
                        <Image src='/images/Profile 1.jpg' alt='User' layout='fill' className='object-cover rounded-full' />
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default Hero;
