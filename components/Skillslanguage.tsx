import React from 'react'

interface props {
    skill1: string
    skill2: string
    skill3: string
    level1: string
    level2: string
    level3: string
}

function Skillslanguage({ skill1, skill2, skill3, level1, level2, level3 }: props) {
    return (
       <div>
         <div className='relative mb-[3rem] justify-end'>
            <h1 className='p-5 mt-[2rem] w-[100%] uppercase bg-gray-600 rounded-sm text-white
            text-[20px] font-bold'>{skill1}</h1>
            <span 
            className={`${level1} bottom-0 h-[6px] absolute bg-[#51ebd4]`}>
            </span>
        </div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 mt-[2rem] w-[100%] uppercase bg-gray-600 rounded-sm text-white
            text-[20px] font-bold'>{skill2}</h1>
            <span 
            className={`${level2} bottom-0 h-[6px] absolute bg-[#51ebd4]`}>
            </span>
        </div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 mt-[2rem] w-[100%] uppercase bg-gray-600 rounded-sm text-white
            text-[20px] font-bold'>{skill3}</h1>
            <span 
            className={`${level3} bottom-0 h-[6px] absolute bg-[#51ebd4]`}>
            </span>
        </div>
       </div>
    )
}

export default Skillslanguage