import Link from 'next/link'
import React from 'react';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaHome } from "react-icons/fa"


// Rest of your code...


const SMicons = () => {
    return (
        <main className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'> 

          <section>
            
            
               <div className="flex">
                    <Link href="https://www.facebook.com/profile.php?id=100036069652618&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i><FaFacebookF style={{ color: '#1877F2' }} /></Link>
                    <Link href="https://instagram.com/asimbutt3349?igshid=NGVhN2U2NjQ0Yg=="><i className="fab fa-instagram"></i><FaInstagram style={{ color: '#dd2a7b' }} /></Link>
                    <Link href="#"><i className="fab fa-twitter"></i><FaTwitter style={{ color: '#1DA1F2' }} /></Link>
                    <Link href="https://api.whatsapp.com/send?phone=923079664615"><i className="fab fa-whatsapp"></i><FaWhatsapp style={{ color: 'color: #075E54;' }} /></Link>
                     <Link href='https://www.linkedin.com/in/asim-butt-5b03182a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <i className="fab fa-linkedin"></i><FaLinkedin style={{ color: '#0077B5' }} /></Link>
                </div> 
               
            </section> 
        </main>
    )
}

export default SMicons