import Link from 'next/link';
import React from 'react';

const Study = () => {
    return (
        <section className=' w-full mt-24'>
            <div className='p-4 md:pt-4 space-y-12 md:space-y-8'>
                {/* Heading */}
             <Link href="/visit"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
     Study
        </h1></Link></div></section>
    );
}

export default Study;
