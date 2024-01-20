// Import required modules
import Image from 'next/image';
import Nav from '@/components/Nav';
import { useState } from 'react';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

// Default function component
export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      </div>
      {/* Hero Section */}
      <Hero />
      {/* About */}
      <div className='relative z-[30]'>
        <About />
      </div>
      <div className='relative z-[30]'>
        <Services />
        <Skills />
        <Projects />
        {/* <Blog /> */}
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
} 
