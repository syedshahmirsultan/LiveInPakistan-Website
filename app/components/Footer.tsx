import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className='mt-48 w-full h-84 bg-green-950'>
                 <div className="text-center">
        {/*Logo */}
<Link href="/"><h1 className="text-white text-2xl md:text-3xl ml-4 font-semibold  tracking-widest ">LiveInPakistan</h1>
</Link></div> 

            
        </section>
    );
}

export default Footer;
