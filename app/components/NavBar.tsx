import Link from 'next/link';
import React from 'react';


// NavBar Component Function
const NavBar = () => {
    return (
        <nav className="flex lg:gap-x-40 xl:gap-x-60 bg-green-950 w-full p-6">
            <div className='flex gap-x-0.5'>
    
<h1 className="text-white text-2xl md:text-3xl ml-4 font-semibold hover:text-green-900  tracking-widest ">LiveInPakistan</h1>
            </div>
            <div className='hidden lg:flex lg:gap-x-6 xl:gap-x-10 text-white font-semibold text-xl relative p-1'>
        <Link href="/" className=' relative group overflow-hidden'>Home
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/" className=' relative group overflow-hidden'>About
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/" className=' relative group overflow-hidden'>Visit
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/" className=' relative group overflow-hidden'>Study
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/" className=' relative group overflow-hidden'>Life
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/" className=' relative group overflow-hidden'>Contact us
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        </div>
        </nav>
    );
}

export default NavBar;
