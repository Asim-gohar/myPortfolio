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
        <p className='text-[#aaa] font-normal text-[17px] w-[80%] opacity-80'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic atque aut sed voluptas iure, animi aliquid optio dicta repellendus cupiditate suscipit
             exercitationem dolorem voluptatem numquam dignissimos tempore a ducimus.
        </p>
    </div>
  )
}

export default Skillsitem