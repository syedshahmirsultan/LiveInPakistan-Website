import Link from 'next/link';
import React from 'react';

// Study Section Funtion
const Study = () => {
    return (
        <section className=' w-full mt-40'>
            <div className='p-4 md:pt-4 space-y-8 md:space-y-8'>
                {/* Heading */}
             <Link href="/Study"> <h1 className="text-green-900 mb-20 font-extrabold text-5xl md:text-7xl text-center">
     Study
        </h1></Link>
        {/* Text */}
        <p className=" text-lg text-green-800 break-words md:pr-8 md:pl-8">Pakistan has universities ranked among the world&apos;s top 1000, such as NUST (400), PIEAS (375), LUMS (651-700), and Aga Khan University (201-250). These institutions are known for quality education and research. The Higher Education Commission (HEC) is working to improve educational standards across the country. Education in Pakistan is progressing, with a focus on technology and innovation. These universities play a crucial role in the country&apos;s development and offer opportunities for students to excel globally. You don’t need to worry about learning Urdu (the national language), as all teaching at most of the universities in Pakistan is conducted in English.</p>
        {/* Button */}
        <Link href="/Study" className=' flex justify-center'><button className=" mt-6 md:mt-3 flex justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white hover:bg-green-900 bg-green-950 animate-bounce duration-500">Read More</button></Link>
        </div></section>
    );
}

export default Study;
