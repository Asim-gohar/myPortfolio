import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
  }


export default function MobileNav({ nav, closeNav }: Props) {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000000] bg-[#09101a]`}>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {/* Your mobile navigation links here */}
        <div className='nav-link-mobile'>Home</div>
        <div className='nav-link-mobile'>SERVICES</div>
        <div className='nav-link-mobile'>ABOUT</div>
        <div className='nav-link-mobile'>PROJECT</div>
        <div className='nav-link-mobile'>BLOG</div>
        <div className='nav-link-mobile'>CONTACT</div>
        
        <div
          onClick={closeNav}
          className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'
        >
          <XMarkIcon />
        </div>
      </div>
    </div>
  );
}
