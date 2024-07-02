import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="bg-green-950 text-white mt-60">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-wider cursor-pointer">LiveInPakistan</h1>
                    </Link>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/in/syedshahmirsultan/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={24} className="text-white hover:text-blue-500 cursor-pointer" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100093155077830" target="_blank" rel="noopener noreferrer">
                            <BsFacebook size={24} className="text-white hover:text-blue-500 cursor-pointer" />
                        </a>
                    </div>
                </div>
                {/* Navigation Links */}
                <nav className="flex flex-col md:flex-row items-center justify-center mt-8">
                    <Link href="/" className="mx-2 md:mx-4 hover:text-gray-200">Home</Link>
                    <Link href="/about" className="mx-2 md:mx-4 hover:text-gray-200">About</Link>
                    <Link href="/study" className="mx-2 md:mx-4 hover:text-gray-200">Study</Link>
                    <Link href="/visit" className="mx-2 md:mx-4 hover:text-gray-200">Visit</Link>
                    <Link href="/partnership" className="mx-2 md:mx-4 hover:text-gray-200">Partnership</Link>
                </nav>
                {/* Legal Text */}
                <div className="mt-8 text-center md:text-left">
                    <p className="text-gray-200 text-sm">© 2024 - 2030 LiveInPakistan.online. All Rights Reserved.</p>
                    <p className="text-gray-200 text-sm mt-2">
                        LiveInPakistan.online is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Country of Pakistan or any government agencies.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;