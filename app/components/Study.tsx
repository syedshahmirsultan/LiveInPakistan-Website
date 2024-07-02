import Link from 'next/link';
import React from 'react';

// Study Section Funtion
const Study = () => {
    return (
        <section className=' w-full mt-40'>
            <div className='p-4 md:pt-4 space-y-8 md:space-y-8'>
                {/* Heading */}
             <Link href="/Study"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
     Study
        </h1></Link>
        {/* Text */}
        <p className=" text-lg text-green-800 break-words md:pr-8 md:pl-8">Higher education in Pakistan expanded significantly following the country’s independence from Britain in 1947. Today the system is overseen by the Higher Education Commission of Pakistan (HEC), which oversees funding, research outputs, and teaching quality. The commission recognizes 174 universities in the country, including both private and public institutions, and some which are military or vocational in focus. You don’t need to worry about learning Urdu (the national language), as all teaching at universities in Pakistan is conducted in English.</p>
        {/* Button */}
        <Link href="/Study" className=' flex justify-center'><button className=" mt-6 md:mt-3 flex justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white hover:bg-green-900 bg-green-950 animate-bounce duration-500">Read More</button></Link>
        </div></section>
    );
}

export default Study;
