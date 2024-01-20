import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
    return (
        <div className='bg-[#050b0f] pt-[4rem] md:pt-[8rem] pb-[3rem]'>
            <h1 className='heading'>
                PROj<span className='text-yellow-400'>ECTS</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div>
                    <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] 
                    h-[200px] md:h-[300px]'>
                        <Image src='/images/PortfolioGIF.gif' alt='Portfoilo' layout='fill' className='object-contain' />
                    </div>
                </div>
                <div>
                    <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] 
                    h-[200px] md:h-[300px]'>
                        <Link href='https://expense-7qasnwrhk-asim-butts-projects.vercel.app/expense'>
                        <Image src='/images/Expense.jpeg' alt='Portfoilo' layout='fill' className='object-contain' />
                        </Link>
                    </div>
                </div>
                <div> 
                    <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] 
                    h-[200px] md:h-[300px]'>
                        <Image src='/images/Store.jpg' alt='Portfoilo' layout='fill' className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects