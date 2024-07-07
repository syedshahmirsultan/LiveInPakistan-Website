import Link from 'next/link';
import React from 'react';
import { HamBurger } from './HamBurgerenu';


// NavBar Component Function
const NavBar = () => {
    return (
        <nav className="flex lg:gap-x-40 sticky top-0 z-20 xl:gap-x-60 bg-green-950 w-full p-6">

            <div>
        {/*Logo */}
<Link href="/"><h1 className="text-white text-2xl md:text-3xl ml-4 font-semibold tracking-widest ">LiveInPakistan</h1>
</Link> </div>
            {/*NavBar Navigation Options */}
            <div className='hidden lg:flex lg:gap-x-6 xl:gap-x-10 text-white font-semibold text-xl relative p-1'>
        <Link href="/" className=' relative group overflow-hidden'>Home
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/About" className=' relative group overflow-hidden'>About
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/Visit" className=' relative group overflow-hidden'>Visit
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/Study" className=' relative group overflow-hidden'>Study
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/Life" className=' relative group overflow-hidden'>Life
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        <Link href="/Contact" className=' relative group overflow-hidden'>Contact
        <span className='w-full h-[4px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-focus:translate-x-0 group-hover:translate-x-0 transition-transform duration-200'></span>
        </Link>
        </div>
        {/* HamBurger Component*/}
        <HamBurger/>
        </nav>
    );
}
 
export default NavBar;
