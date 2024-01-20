import React from 'react';
import Particle from './Particle';
import TextEffect from '@/components/TextEffect';
import Image from 'next/image'; // Import the Image component from next
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';


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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit necessitatibus veritatis dolores quos animi ratione quas odit, at laboriosam autem repellendus! Corrupti at asperiores omnis quam quas totam laudantium.
                        </p>
                        <div className='mt-2 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#51ebd4] text-black flex items-center space-x-2'>
                                <p>download cv</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                            </button>
                            <button className='flex items-center space-x-2'>
                                <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all 
                            duration-200 text-[#51ebd4]'/>
                                <p className='text-[20px] text-white font-semibold'>Watch the videos</p>
                            </button>
                        </div>
                    </div>
                    <div className='w-[500px] hidden bg-[#51ebd4] relative lg:flex items-center rounded-full h-[500px]'>
                        {/* Use the Image component */}
                        <Image src='/images/profile.jpg' alt='User' layout='fill' className='object-cover rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
