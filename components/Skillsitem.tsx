import React from 'react'

interface props {
    title : string
    year : string
}

function Skillsitem({title , year}:props) {
  return (
    <div className='mb-4rem md:mb-[8rem]'>
        <span className='px-[2rem] text-[#51ebd4] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#51ebd4]'>
            {year}
        </span>
        <h1 className='mt-[2rem] font-semibold uppercase mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        {title === 'Nextjs Developer' ?
            <p className='text-[#aaa] font-normal text-[17px] w-[80%] opacity-80'>I excel in Next.js, a robust React framework. My skills include server-side rendering, static site generation, and client-side rendering, ensuring efficient and dynamic web applications. Proficient in features like automatic code splitting, I prioritize optimized performance for a seamless user experience. I stay updated on the latest Next.js advancements to deliver cutting-edge solutions in web development.</p>
        
        :
            <p className='text-[#aaa] font-normal text-[17px] w-[80%] opacity-80'>I'M A FULL STACK DEVELOPER PROFICIENT IN CRAFTING DYNAMIC WEB APPLICATIONS USING TYPESCRIPT, REACT, AND NEXT.JS. MY EXPERTISE SPANS BOTH FRONTEND AND BACKEND DEVELOPMENT, HIGHLIGHTING THE SEAMLESS INTEGRATION OF CREATIVITY, TECHNICAL PROFICIENCY, AND INNOVATIVE PROBLEM-SOLVING.
            </p>
        }
    </div>
  )
}

export default Skillsitem