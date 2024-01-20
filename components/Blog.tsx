import React from 'react'
import Image from 'next/image'

function Blog() {
    return (
        <div className='pt-[4rem] bg-[#0a1620] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                MY <span className='text-yellow-400'>BLOG</span>
            </h1>
            <div className='w-[80%] mt-[4rem] mx-auto grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-[3rem]'>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
<Image src="/images/coding.jpg" alt='Blog' layout='fill' className='object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog