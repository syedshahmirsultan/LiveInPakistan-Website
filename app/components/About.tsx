import Link from 'next/link';
import React from 'react';

//About Section Function
const About = () => {
    return (
        <section className=' w-full mt-40'>
            <div className='p-4 md:p-8 gap-y-12 md:gap-y-8'>
                {/* Heading */}
       <Link href="/About"> <h1 className="text-green-900 font-extrabold text-5xl md:text-7xl text-center">
     About
        </h1></Link>
        {/* Text */}
        <p className=" text-lg text-green-800 break-words mt-12"><span className='font-bold'>Pakistan</span>, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area and the ninth-largest in Asia. Bounded by the Arabian Sea on the south, the Gulf of Oman on the southwest, and the Sir Creek on the southeast, it shares land borders with India to the east; Afghanistan to the west; Iran to the southwest; and China to the northeast. It shares a maritime border with Oman in the Gulf of Oman, and is separated from Tajikistan in the northwest by Afghanistan's narrow Wakhan Corridor.</p>
        {/* Button */}
        <Link href="/About" className=' flex justify-center'><button className=" mt-6 md:mt-3 flex justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white hover:bg-green-900 bg-green-950 animate-bounce duration-500">Read More</button></Link>
        </div>
        </section>
    );
}

export default About;
