import React from 'react'
import Skillsitem from './Skillsitem'
import Skillslanguage from './Skillslanguage'


function Skills() {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#0a1620]'>
            <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] 
        items-center'>
                <div>
                    
                    <Skillsitem title='Fullstack Developer' year='2023-2024' />
                    <Skillslanguage
                        skill1='html5'
                        skill2='css'
                        skill3='javascript'
                        level1='w-[91%]'
                        level2='w-[85%]'
                        level3='w-[80%]' />
                </div>
                <div>
                    <Skillsitem title='Nextjs Developer' year='2023-2024' />
                    
                    <Skillslanguage
                        skill1='Next js'
                        skill2='TailwindCss'
                        skill3='typescript'
                        level1='w-[80%]'
                        level2='w-[68%]'
                        level3='w-[85%]' />
                </div>
            </div>
        </div>
    )
}

export default Skills